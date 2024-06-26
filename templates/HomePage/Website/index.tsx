import { useState } from "react";
import cn from "classnames";
import styles from "./Website.module.sass";
import Form from "@/components/Form";
import Image from "@/components/Image";

type WebsiteProps = {
    scrollToRef: any;
};

const Website = ({ scrollToRef }: WebsiteProps) => {
    const [email, setEmail] = useState<string>("");

    return (
			<div className={cn('section-border', styles.website)}>
				<div className={styles.anchor} ref={scrollToRef}></div>
				<div className={cn('container', styles.container)}>
					<div className={styles.wrap}>
						<h2 className={cn('h2', styles.title)}>
							Web3&nbsp;Stack for Games
						</h2>
						<div className={cn('h5M', styles.info)}>
							Integrate verifiable ownership of virtual assets for your game
							experience
						</div>
						<Form
							className={styles.form}
							placeholder='Sign-up for Early Access'
							type='email'
							icon='mail'
							value={email}
							setValue={setEmail}
							onSubmit={() => console.log('Submit')}
						/>
					</div>
					<div className={styles.previewMobile}>
						<Image
							src='/images/mintnft-vert.png'
							width={400}
							height={1101}
							alt='Hero'
						/>
					</div>
					<div className={styles.previewDesktop}>
						<Image
							src='/images/frame1z.png'
							width={864}
							height={500}
							alt='Hero'
						/>
					</div>
					<div className={styles.preview}>
						<Image
							src='/images/mintnft.png'
							width={720}
							height={500}
							alt='Hero'
						/>
					</div>
				</div>
			</div>
		)
};

export default Website;
