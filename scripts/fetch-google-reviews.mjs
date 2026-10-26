// Busca as avaliações do Google (Places API New) e grava em
// src/content/google-reviews.json, que o site lê em tempo de build.
// Roda via GitHub Actions (cron diário) e também localmente:
//   GOOGLE_PLACES_API_KEY=... GOOGLE_PLACE_ID=... node scripts/fetch-google-reviews.mjs

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const OUTPUT_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/content/google-reviews.json");
const PLACE_DETAILS_URL = (placeId) => `https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`;

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

if (!apiKey || !placeId) {
    console.error("Configure GOOGLE_PLACES_API_KEY e GOOGLE_PLACE_ID antes de rodar este script.");
    process.exit(1);
}

const response = await fetch(PLACE_DETAILS_URL(placeId), {
    headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
    },
});

if (!response.ok) {
    console.error(`Places API respondeu HTTP ${response.status}: ${await response.text()}`);
    process.exit(1);
}

const place = await response.json();

const reviews = (place.reviews || [])
    .filter((review) => review.text?.text || review.originalText?.text)
    .map((review) => ({
        name: review.authorAttribution?.displayName || "Cliente",
        text: (review.originalText?.text || review.text?.text || "").trim(),
        rating: review.rating ?? 5,
        relativeTime: review.relativePublishTimeDescription || "Avaliação no Google",
        photo: review.authorAttribution?.photoURI || null,
    }));

const data = {
    rating: place.rating ?? null,
    userRatingCount: place.userRatingCount ?? null,
    fetchedAt: new Date().toISOString(),
    reviews,
};

await writeFile(OUTPUT_FILE, `${JSON.stringify(data, null, 4)}\n`, "utf8");
console.log(`${reviews.length} avaliações salvas em ${path.relative(process.cwd(), OUTPUT_FILE)} (nota ${place.rating ?? "?"}, ${place.userRatingCount ?? "?"} no total).`);