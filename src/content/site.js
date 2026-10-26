// Conteúdo central do site.
// Altere aqui textos, links e valores para atualizar todas as páginas.

export const WHATSAPP_NUMBER = "5554997119446";
export const PHONE_DISPLAY = "(54) 99711-9446";
export const EMAIL = "nutricionistathaisb@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/nutrithaisbasso";
export const ADDRESS = {
    street: "Rua Humberto Accorsi, n° 230 - Sala 02",
    building: "Edifício Rádio Estação, bairro Aurora",
    city: "CEP 95185-000 - Carlos Barbosa/RS",
    maps: "https://www.google.com/maps/place/Tha%C3%ADs+Basso+Nutricionista+Funcional+e+comportamental/@-29.2939876,-51.4989672,17z/data=!4m8!3m7!1s0x951c195e1b1bb64f:0x5e8468a758137428!8m2!3d-29.2939923!4d-51.4963869!9m1!1b1!16s%2Fg%2F11p0_77cs2?hl=pt-BR&entry=ttu",
};

export const whatsappLink = (message = "Olá, Thaís! Quero saber mais sobre o seu trabalho.") =>
    `https://api.whatsapp.com/send?1=pt_BR&phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

// Place ID do Google Business de Thaís. As avaliações são buscadas no servidor
// uma vez ao dia pelo GitHub Actions (scripts/fetch-google-reviews.mjs), que
// salva em src/content/google-reviews.json. A chave GOOGLE_PLACES_API_KEY fica
// nos secrets do repositório (Places API New).
export const GOOGLE_PLACE_ID = "ChIJT7YbG14ZHJURKHQTWKdohF4";

export const SOCIAL_LINKS = [
    { icon: "fa-instagram", href: INSTAGRAM, label: "Instagram" },
    { icon: "fa-facebook", href: "https://www.facebook.com/nutricionistathaisb", label: "Facebook" },
    { icon: "fa-whatsapp", href: whatsappLink(), label: "WhatsApp" },
    { icon: "fa-youtube", href: "https://www.youtube.com/channel/UCACMTraiEAeIf0pZ552PNZg", label: "YouTube" },
];

export const NAV_LINKS = [
    { name: "Início", to: "/" },
    { name: "Método", to: "/metodo-seja-real-nao-perfeito" },
    { name: "Consultoria", to: "/consultoria-nutricional-online" },
    { name: "Sobre", to: "/sobre" },
    { name: "Contato", to: "/contato" },
];

export const PRICES = {
    consultoria: "R$ 197,00",
};

export const PRODUCTS = {
    consultoria: {
        name: "Consultoria Online – 30 dias",
        label: "Consultoria online",
        description:
            "Um primeiro direcionamento online para organizar a alimentação, tirar dúvidas e dar o primeiro passo com segurança.",
        price: PRICES.consultoria,
        href: "/consultoria-nutricional-online",
        cta: "Conhecer a consultoria",
        message: "Olá, Thaís! Quero saber mais sobre a Consultoria Online de 30 dias.",
    },
};

export const PLANS = [
    {
        name: "Consulta Inicial",
        label: "Primeiro passo",
        meta: "60 minutos + retorno",
        description: "Uma consulta completa com retorno incluído para dar o primeiro passo com direcionamento.",
        price: "R$ 420,00",
        note: "à vista ou 2x de R$ 225,00 no cartão",
        cta: "Agendar consulta",
        message: "Olá, Thaís! Quero agendar a Consulta Inicial (60 minutos + retorno).",
    },
    {
        name: "Programa 4 consultas",
        label: "Programa",
        meta: "5 consultas",
        forWho: [
            "Quer começar com direcionamento",
            "Precisa de apoio para manter constância",
            "Busca organizar a alimentação e sustentar resultados",
        ],
        allows: [
            "Organização alimentar",
            "Ajustes progressivos da rotina",
            "Identificação de gatilhos",
        ],
        price: "R$ 1.932,00",
        note: "ou em até 6x de R$ 322,00",
        discount: "10% off no pagamento à vista",
        cta: "Quero este programa",
        message: "Olá, Thaís! Quero saber mais sobre o Programa de 4 consultas.",
    },
    {
        name: "Programa 10 consultas",
        label: "Completo",
        meta: "10 consultas",
        forWho: [
            "Já tentou outras abordagens e não conseguiu manter resultados",
            "Quer um acompanhamento mais profundo e contínuo com TODAS as fases do método",
        ],
        allows: [
            "Consolidação de hábitos",
            "Construção de autonomia",
            "Prevenção de recaídas",
        ],
        price: "R$ 3.552,00",
        note: "ou em até 12x de R$ 296,00",
        discount: "10% off no pagamento à vista",
        cta: "Quero este programa",
        message: "Olá, Thaís! Quero saber mais sobre o Programa de 10 consultas.",
    },
];

export const METHOD_PHASES = [
    {
        number: "01",
        title: "Pré-consulta",
        text: "O primeiro passo é responder um questionário completo pré-consulta, para eu te conhecer e para aproveitarmos melhor nosso tempo juntas.",
        icon: "fa-hand-holding-heart",
    },
    {
        number: "02",
        title: "Consulta inicial",
        text: "Com a avaliação completa, análise da usa rotina, hábitos, histórico de saúde, exames (se necessário) e definição dos seus objetivos.",
        icon: "fa-brain",
    },
    {
        number: "03",
        title: "Plano de tratamento personalizado",
        text: "Criamos juntas um plano alimentar sustentável, com estratégias práticas para a sua rotina, sem dietas malucas.",
        icon: "fa-seedling",
    },
    {
        number: "04",
        title: "Consulta de retorno",
        text: "Agendamos uma consulta de retorno de 30 minutos para acompanharmos sua evolução, tirar dúvidas e realizar os primeiros ajustes do plano.",
        icon: "fa-compass",
    },
];

export const HOME_FAQ = [
    {
        question: "Preciso seguir uma dieta restritiva?",
        answer:
            "Não. O trabalho é construído com comida de verdade, respeitando a sua rotina, as suas preferências e a sua cultura alimentar. O plano é flexível e ensina trocas para que você tenha autonomia.",
    },
    {
        question: "O atendimento pode ser online?",
        answer:
            "Sim. O atendimento presencial acontece em Carlos Barbosa/RS e o online atende pessoas de qualquer lugar, com a mesma profundidade de avaliação e orientação.",
    },
    {
        question: "Quanto tempo dura o processo?",
        answer:
            "Cada pessoa tem um tempo. A primeira consulta e o retorno inicial já organizam o caminho. A partir daí, a frequência dos retornos é definida em conjunto, de acordo com o seu objetivo e a sua rotina.",
    },
    {
        question: "Como funcionam os valores e o pagamento?",
        answer:
            "Os valores são sempre visíveis aqui no site. O pagamento pode ser feito via PIX, débito, crédito ou link de pagamento. Entre em contato para verificar as condições de parcelamento.",
    },
];

export const FAQ = {
    consultoria: [
        {
            question: "Como funciona a consultoria online?",
            answer:
                "Você preenche um questionário antes do encontro, conversamos por videochamada e recebe um plano alimentar personalizado, com orientações e cardápios ilustrados para os 30 dias.",
        },
        {
            question: "Preciso ter exames recentes?",
            answer:
                "Não é obrigatório, mas se você tiver exames recentes, eles ajudam a individualizar as orientações. Também posso solicitar exames quando fizer sentido para o seu caso.",
        },
    ],
};
