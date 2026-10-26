import React from "react";
import { PLANS, whatsappLink } from "../../content/site";
import Reveal from "../common/Reveal";
import "./Plans.css";

const ICONS = ["fa-calendar-check", "fa-seedling", "fa-gem"];

export default function Plans() {
    return (
        <section className="tb-plans tb-section tb-section--lavender" id="planos">
            <div className="container-custom">
                <Reveal className="tb-section-heading tb-section-heading--center">
                    <span className="tb-eyebrow">Planos</span>
                    <h2>Escolha o seu plano</h2>
                    <p>Da consulta inicial ao acompanhamento completo do método Seja Real, Não Perfeito: existe um formato para cada momento da sua jornada.</p>
                </Reveal>

                <div className="tb-plans-grid">
                    {PLANS.map((plan, index) => (
                        <Reveal className="tb-plan-card" key={plan.name} delay={index * 100}>
                            <div className="tb-plan-head">
                                <span className="tb-icon-bubble tb-plan-icon">
                                    <i className={`fas ${ICONS[index]}`} aria-hidden="true" />
                                </span>
                                <span className="tb-tag tb-tag--violet">{plan.label}</span>
                            </div>

                            <h3>{plan.name}</h3>
                            <span className="tb-plan-meta">{plan.meta}</span>

                            {plan.description && <p className="tb-plan-description">{plan.description}</p>}

                            {plan.forWho && (
                                <div className="tb-plan-block">
                                    <span className="tb-plan-block-title">Indicado para quem:</span>
                                    <ul>
                                        {plan.forWho.map(item => (
                                            <li key={item}>
                                                <i className="fas fa-check" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {plan.allows && (
                                <div className="tb-plan-block">
                                    <span className="tb-plan-block-title">Permite:</span>
                                    <ul>
                                        {plan.allows.map(item => (
                                            <li key={item}>
                                                <i className="fas fa-check" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="tb-plan-foot">
                                <div className="tb-plan-price">
                                    <span>Investimento</span>
                                    <strong>{plan.price}</strong>
                                    <em>{plan.note}</em>
                                    {plan.discount && <span className="tb-plan-discount">{plan.discount}</span>}
                                </div>
                                <a className="tb-plan-cta" href={whatsappLink(plan.message)} target="_blank" rel="noreferrer">
                                    {plan.cta}
                                    <i className="fas fa-arrow-right" aria-hidden="true" />
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}