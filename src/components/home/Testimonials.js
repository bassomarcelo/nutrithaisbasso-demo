import React, { useRef } from "react";
import googleReviews from "../../content/google-reviews.json";
import Reveal from "../common/Reveal";
import "./Testimonials.css";

const GOOGLE_REVIEWS = "https://www.google.com/maps/place/Tha%C3%ADs+Basso+Nutricionista+Funcional+e+comportamental/@-29.2939876,-51.4989672,17z/data=!4m8!3m7!1s0x951c195e1b1bb64f:0x5e8468a758137428!8m2!3d-29.2939923!4d-51.4963869!9m1!1b1!16s%2Fg%2F11p0_77cs2?hl=pt-BR&entry=ttu";

const GoogleIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="#4285F4"
            d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
        />
        <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
        />
        <path
            fill="#FBBC05"
            d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
        />
        <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
        />
    </svg>
);

const renderStars = (rating) =>
    [1, 2, 3, 4, 5].map((step) => (
        <i key={step} className={`fas fa-star ${step <= Math.round(rating) ? "is-filled" : "is-empty"}`} aria-hidden="true" />
    ));

export default function Testimonials() {
    const trackRef = useRef(null);

    if (!googleReviews.reviews.length) return null;

    const testimonials = googleReviews.reviews.map((review) => ({
        key: review.name,
        name: review.name,
        text: review.text,
        rating: review.rating ?? 5,
        photo: review.photo || null,
        label: review.relativeTime || "Avaliação no Google",
    }));

    const badgeRating = googleReviews.rating != null ? googleReviews.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : "5,0";
    const badgeCount = googleReviews.userRatingCount != null ? googleReviews.userRatingCount : null;

    const scroll = (direction) => {
        const track = trackRef.current;
        if (!track) return;
        const amount = Math.min(track.clientWidth * 0.86, 420);
        track.scrollBy({ left: direction * amount, behavior: "smooth" });
    };

    return (
        <section className="tb-testimonials tb-section" id="depoimentos">
            <div className="container-custom">
                <div className="tb-testimonials-head">
                    <Reveal className="tb-section-heading">
                        <span className="tb-eyebrow">Prova social</span>
                        <h2>O que meus pacientes estão dizendo</h2>
                        <p>Histórias reais de quem trocou a dieta do “nunca mais” por uma relação mais leve e possível com a comida.</p>
                    </Reveal>

                    <Reveal className="tb-google-badge" delay={100}>
                        <span className="tb-google-badge-mark" aria-hidden="true">
                            <GoogleIcon />
                        </span>
                        <span>
                            <strong>{badgeRating}</strong>
                            <span className="tb-google-stars" aria-label="Avaliação no Google">
                                {renderStars(googleReviews.rating ?? 5)}
                            </span>
                            <small>{badgeCount ? `${badgeCount} avaliações no Google` : "Avaliações no Google"}</small>
                        </span>
                    </Reveal>
                </div>

                <div className="tb-testimonials-viewport">
                    <div className="tb-testimonials-track" ref={trackRef} aria-label="Depoimentos de pacientes">
                        {testimonials.map((testimonial) => {
                            const initials = testimonial.name
                                .split(" ")
                                .slice(0, 2)
                                .map((part) => part.charAt(0))
                                .join("");

                            return (
                                <article className="tb-testimonial-card" key={testimonial.key}>
                                    <i className="fas fa-quote-left tb-testimonial-quote" aria-hidden="true" />
                                    <p className="tb-testimonial-text">{testimonial.text}</p>
                                    <div className="tb-testimonial-footer">
                                        <div className="tb-testimonial-author">
                                            {testimonial.photo ? (
                                                <img src={testimonial.photo} alt={`Foto de ${testimonial.name}`} className="tb-testimonial-avatar" />
                                            ) : (
                                                <span className="tb-testimonial-avatar tb-testimonial-avatar--initials" aria-hidden="true">
                                                    {initials}
                                                </span>
                                            )}
                                            <span>
                                                <strong>{testimonial.name}</strong>
                                                <small>{testimonial.label}</small>
                                                <span className="tb-testimonial-stars" aria-label={`Nota do paciente: ${testimonial.rating} de 5`}>
                                                    {renderStars(testimonial.rating)}
                                                </span>
                                            </span>
                                        </div>
                                        <a href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer" className="tb-testimonial-link">
                                            Avaliação completa
                                            <GoogleIcon className="tb-google-icon" />
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                <div className="tb-testimonials-foot">
                    <div className="tb-testimonials-controls">
                        <button type="button" className="tb-testimonials-arrow" onClick={() => scroll(-1)} aria-label="Depoimento anterior">
                            <i className="fas fa-arrow-left" aria-hidden="true" />
                        </button>
                        <button type="button" className="tb-testimonials-arrow" onClick={() => scroll(1)} aria-label="Próximo depoimento">
                            <i className="fas fa-arrow-right" aria-hidden="true" />
                        </button>
                        <span className="tb-testimonials-hint">Arraste para o lado para ver mais</span>
                    </div>
                    <a className="tb-testimonials-all" href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer">
                        Ver mais avaliações no Google
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}