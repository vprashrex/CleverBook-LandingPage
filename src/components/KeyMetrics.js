import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const KeyMetrics = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    return (
        <section className="key-metrics-section" id="key-metrics">
            
            <div className="timeline-wrapper-new">
                <div className="timeline-left">
                    <div className="ss-grey-line-new">
                        <div className="ss-gradient-line bg-primary">

                        </div>
                    </div>
                    <div className="ss-timeline-icon-wrap" style={{willChange: "transform",transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                        <div className="circle-w-icon-new _1" style={{willChange: "opacity", opacity: "1"}}>
                            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d8009ea3ec5_Avoid%20stockouts-icon.svg" loading="lazy" alt="" class="ss-timeline-icon-new"/>
                            <div className="ss-circle-inner-new bg-primary-new"></div>
                        </div>
                        <div className="circle-w-icon-new _2" style={{willChange: "opacity", opacity: "0"}}>
                            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d16ecea3ef7_reduced-icon.svg" loading="lazy" alt="" class="ss-timeline-icon-new"/>
                            <div className="ss-circle-inner-new bg-primary-new"></div>
                        </div>
                        <div class="circle-w-icon-new _3" style={{willChange: "opacity", opacity: "0"}}>
                            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg" loading="lazy" alt="" class="ss-timeline-icon-new"/>
                            <div class="ss-circle-inner-new bg-primary-new"></div>
                        </div>
                    </div>
                </div>
                <div className="timeline-right">
                    <a href="#scroll-to-stockouts" className="ss-timeline-steps-new _1 w-inline-block">
                        <div className="ss-timeline-steps-bg-color _1" style={{willChange: "opacity",opacity: "1"}}>
                            <div className="ss-timeline-steps-border"></div>
                        </div>
                        <div className="text-medium-bold">STOCKOUTS</div>
                    </a>
                    <a href="#scroll-to-recovery" className="ss-timeline-steps-new _2 w-inline-block">
                        <div className="ss-timeline-steps-bg-color _2" style={{willChange: "opacity", opacity: "0"}}>
                            <div className="ss-timeline-steps-border"></div>
                        </div>
                        <div className="text-medium-bold">CASH RECOVERY CYCLE</div>
                    </a>
                    <a href="#scroll-to-revenue" className="ss-timeline-steps-new _3 w-inline-block">
                        <div className="ss-timeline-steps-bg-color _3" style={{willChange: "opacity", opacity: "0"}}>
                            <div className="ss-timeline-steps-border"></div>
                        </div>
                        <div className="text-medium-bold">REVENUE</div>
                    </a>
                </div>
            </div>
            
        </section>
    )
}