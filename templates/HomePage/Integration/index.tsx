import styles from "./Integration.module.sass";
import cn from "classnames";
import Image from "@/components/Image";
import Animation from "@/components/Animation";

import { integrations } from "@/constants/integrations";

type IntegrationProps = {};

const Integration = ({}: IntegrationProps) => (
    <div className={cn("section", styles.integration)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.preview}>
                <Image
                    src="/images/ikigai.png"
                    width={800}
                    height={800}
                    alt="Iphone"
                />
                <div className={styles.circles}>
                    {Array.from(Array(3).keys()).map((x) => (
                        <Animation
                            className={styles.circle}
                            animateIn="fadeIn"
                            speed={-4}
                            key={x}
                        >
                            <span></span>
                        </Animation>
                    ))}
                </div>
            </div>
            <div className={styles.wrap}>
                <h2 className={cn("h2", styles.title)}>
                    Integrate
                </h2>
                <div className={cn("h5M", styles.info)}>
                    With your preferred development environment
                </div>
                <div className={styles.list}>
                    {integrations.map((integration, index) => (
                        <div className={styles.item} key={index}>
                            <div
                                className={styles.icon}
                                style={{ backgroundColor: integration.color }}
                            >
                                <Image
                                    src={integration.image}
                                    layout="fill"
                                    alt={integration.title}
                                />
                            </div>
                            {integration.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Integration;
