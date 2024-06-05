import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const KeyMetrics = () => {
    const [visible, setVisible] = useState(false);

    const metrics = [
        { id: 1, text: 85, description: 'Reduction in out-of-stock' },
    ];

    return (
        <section className="key-metrics-section" id="key-metrics" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <div className="timeline-container" style={{overflow:"hidden"}}>
                {metrics.map((metric, index) => (
                    <ScrollTrigger
                        key={metric.id}
                        onEnter={() => setVisible(true)}
                        onExit={() => setVisible(false)}
                    >
                        <div
                            className={`timeline-item ${visible ? 'visible' : ''}`}
                            style={{ display: visible ? 'block' : 'none' }}
                        >
                            {visible && (
                                <CountUp start={0} end={metric.text} duration={2} delay={0} redraw={true}>
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} className="metric" style={{fontSize:"150px"}} />
                                        
                                    )}
                                </CountUp>
                            )}
                            <span style={{marginLeft:"10px",fontSize:"40px"}}>%</span>
                            <div className="description" style={{ fontSize: '34px', fontWeight:"bold",color: 'white',whiteSpace:"nowrap" }}>Growth in Revenu</div>
                        </div>
                    </ScrollTrigger>
                ))}
            </div>
        </section>
    );
};
