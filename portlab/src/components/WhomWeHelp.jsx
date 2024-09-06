import React, { useState } from "react";
import helpStyles from "../styles/Help.module.scss";

const WhomWeHelp = () => {
    const [activeTab, setActiveTab] = useState('fundations');

    const renderContent = () => {
        switch (activeTab) {
            case 'fundations':
                return (
                    <div className={helpStyles.content}>
                        <p className={helpStyles.description}>
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                        <div className={helpStyles.entry}>
                            <h3>Fundacja “Dbam o Zdrowie”</h3>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                        </div>
                        <div className={helpStyles.entry}>
                            <h3>Fundacja “Dla dzieci”</h3>
                            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            <span>ubrania, meble, zabawki</span>
                        </div>
                        <div className={helpStyles.entry}>
                            <h3>Fundacja “Bez domu”</h3>
                            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                            <span>ubrania, jedzenie, ciepłe koce</span>
                        </div>
                    </div>
                );
            case 'organizations':
                return (
                    <div className={helpStyles.content}>
                        <p className={helpStyles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <div className={helpStyles.entry}>
                            <h3>Organizacja “Lorem Ipsum 1”</h3>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                            <span>Egestas, sed, tempus</span>
                        </div>
                        <div className={helpStyles.entry}>
                            <h3>Organizacja “Lorem Ipsum 2”</h3>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                            <span>Ut, aliquam, purus, sit, amet</span>
                        </div>
                        <div className={helpStyles.entry}>
                            <h3>Organizacja “Lorem Ipsum 3”</h3>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p>
                            <span>Mi, quis, hendrerit, dolor</span>
                        </div>
                    </div>
                );
            case 'local':
                return (
                    <div className={helpStyles.content}>
                        <p className={helpStyles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <div className={helpStyles.entry}>
                            <h3>Zbiórka “Lorem Ipsum 1”</h3>
                            <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                            <span>Egestas, sed, tempus</span>
                        </div>
                        <div className={helpStyles.entry}>
                            <h3>Zbiórka “Lorem Ipsum 2”</h3>
                            <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                            <span>Ut, aliquam, purus, sit, amet</span>
                        </div>
                        <div className={helpStyles.entry}>
                            <h3>Zbiórka “Lorem Ipsum 3”</h3>
                            <p>Scelerisque in dictum non consectetur a erat nam.</p>
                            <span>Mi, quis, hendrerit, dolor</span>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={helpStyles.container}>
            <h2>Komu pomagamy?</h2>
            <div className={helpStyles.tabs}>
                <button
                    className={`${helpStyles.tab} ${activeTab === 'fundations' ? helpStyles.active : ''}`}
                    onClick={() => setActiveTab('fundations')}
                >
                    Fundacjom
                </button>
                <button
                    className={`${helpStyles.tab} ${activeTab === 'organizations' ? helpStyles.active : ''}`}
                    onClick={() => setActiveTab('organizations')}
                >
                    Organizacjom pozarządowym
                </button>
                <button
                    className={`${helpStyles.tab} ${activeTab === 'local' ? helpStyles.active : ''}`}
                    onClick={() => setActiveTab('local')}>
                    Lokalnym zbiórkom
                </button>
            </div>
            {renderContent()}
            <div className={helpStyles.pagination}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    );
};

export default WhomWeHelp;