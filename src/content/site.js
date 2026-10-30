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
    { name: "Sobre", to: "/sobre" },
    { name: "Contato", to: "/contato" },
];

export const PLANS = [
    {
        name: "Consulta Inicial",
        label: "Primeiro passo",
        meta: "Consulta de 2h",
        tone: "neutral",
        description: "Uma consulta extensa para analisar seus objetivos e hábitos, criar um plano de tratamento personalizado e propor cardápios e trocas inteligentes na sua rotina.",
        price: "2x de R$ 225,00",
        note: "ou R$ 420,00 à vista",
        cta: "Agendar consulta",
        message: "Olá, Thaís! Quero agendar a Consulta Inicial.",
    },
    {
        name: "Acompanhamento",
        label: "Mais escolhido",
        meta: "5 consultas",
        tone: "violet",
        featured: true,
        includes: [
            "5 consultas completas",
            "Análise de composição corporal (bipedância)",
            "Acompanhamento e requisição de exames laboratoriais",
            "Plano de tratamento personalizado, cardápios e receitas",
        ],
        price: "6x de R$ 322,00",
        note: "ou R$ 1.932,00 à vista",
        cta: "Quero este programa",
        message: "Olá, Thaís! Quero saber mais sobre o Acompanhamento de 5 encontros.",
    },
    {
        name: "Tratamento Completo",
        label: "Completo",
        meta: "10 consultas",
        tone: "green",
        featured: true,
        includes: [
            "10 consultas nutricionais completas",
            "Planilha com metas trimestrais",
            "Acesso à plataforma Seja Real, Não Perfeito por 12 meses",
            "Fase extra de MANUTENÇÃO, com consulta extra de 30 min",
        ],
        price: "12x de R$ 296,00",
        note: "ou R$ 3.552,00 à vista",
        cta: "Quero este programa",
        message: "Olá, Thaís! Quero saber mais sobre o Acompanhamento Completo de 10 encontros.",
    },
];

export const MODALITIES = [
    {
        key: "presencial",
        icon: "fa-map-marker-alt",
        title: "Presencial",
        meta: "Consultório em Carlos Barbosa/RS",
        text: "Um encontro de perto, no consultório, com avaliação física completa e escuta atenta.",
        items: ["Análise de composição corporal", "Acompanhamento com exames", "Planos personalizados"],
    },
    {
        key: "online",
        icon: "fa-video",
        title: "Online",
        meta: "Por videochamada",
        tag: "Onde você estiver",
        text: "O mesmo método e a mesma profundidade de avaliação, sem sair de casa.",
        items: ["Atende todo o Brasil e o exterior", "Avaliação por fotos e medidas", "Plano e cardápios individualizados"],
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
