
import { useState } from "react"
function Hero9() {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [res, setRes] = useState(false)
    const [get, setGet] = useState(false)
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const resT = () => {
        setOpen(!open);
    };
    const getRes = () => {
        setRes(!res);
    };
    const getFinal = () => {
        setGet(!get);
    };
    return (
        <div className="faq-container">
            <div className="faq-left">
                <p>Everything You Need To Know</p>
                <h1>Frequently Asked Questions</h1>
            </div>

            <div className="faq-right">
                <div
                    className={`accordion ${isOpen ? "active" : ""}`}
                    tabIndex={0}
                    onClick={toggleAccordion}
                >
                    <span className="question">
                        01. How often should I visit the dentist?
                    </span>
                    <span className="symbol">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                    <div className="accordion-content">
                        <p>
                            It’s recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise.
                        </p>
                    </div>
                )}
                <div className="faq-right">
                    <div
                        className={`accordion ${open ? "active" : ""}`}
                        tabIndex={0}
                        onClick={resT}
                    >
                        <span className="question">
                            02. What should I do in a dental emergency?
                        </span>
                        <span className="symbol">{open ? "−" : "+"}</span>
                    </div>
                    {open && (
                        <div className="accordion-content">
                            <p>
                                Call our office immediately. We offer same-day emergency care for issues like severe pain, broken teeth, or swelling.
                            </p>
                        </div>
                    )}
                </div>
                <div className="faq-right">
                    <div
                        className={`accordion ${res ? "active" : ""}`}
                        tabIndex={0}
                        onClick={getRes}
                    >
                        <span className="question">
                            03. Do you offer services for kids?
                        </span>
                        <span className="symbol">{res ? "−" : "+"}</span>
                    </div>
                    {res && (
                        <div className="accordion-content">
                            <p>
                                Absolutely! We provide gentle, friendly pediatric dental care for children of all ages.
                            </p>
                        </div>
                    )}
                </div>
                <div className="faq-right">
                    <div
                        className={`accordion ${get ? "active" : ""}`}
                        tabIndex={0}
                        onClick={getFinal}
                    >
                        <span className="question">
                            04. What are my options for replacing missing teeth?
                        </span>
                        <span className="symbol">{get ? "−" : "+"}</span>
                    </div>
                    {get && (
                        <div className="accordion-content">
                            <p>
                                We offer dental implants, bridges, and dentures depending on your needs and preferences..
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Hero9
