import cn from "classnames";
import styles from "./Discover.module.sass";
import Item from "./Item";
import List from "./List";
import Models from "./Models";

import { list } from "@/constants/discover";

type DiscoverProps = {};

const Discover = ({}: DiscoverProps) => {
    return (
        <div className={cn("section", styles.discover)}>
            <div className={cn("container", styles.container)}>
                <h2 className={cn("h2", styles.title)}>How does it work?</h2>
                <div className={styles.list}>
                    <Item
                        className={styles.item}
                        title="Application Stack for Web3 Games"
                        info="Amet minim mollit non deserunt ullamco est."
                        video="BHACKCNDMW8"
                    >
                        <List list={list} />
                    </Item>
                    <Item
                        className={styles.item}
                        title="ZK Rollup Ethereum Architecture"
                        info="Amet minim mollit non deserunt ullamco est."
                        video="BHACKCNDMW8"
                    >
                        <Models />
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Discover;
