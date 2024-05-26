import { useState } from "react";
import { TabItem } from "../../layouts/tab-item/tab-item";
import { TabProp } from "../../types/tab";
import { Chart } from "../chart/chart";
import { OrderBook } from "../order-book/order-book";
import { Recents } from "../recents/recents";
import { TabList } from "../tab-list/tab-list";

import "./data.css"

export const Data = () => {
    
    const [value, setValue] = useState<string>("chart")
    

    const tabList: TabProp[] = [
        {
            title: "Charts",
            url: "/",
            currentTab: true,
            value: "chart"
        }, {
            title: "Orderbook",
            url: "/",
            value: "book"
        }, {
            title: "Recent trades",
            url: "/",
            value: "recent"
        }
    ];

    return (<div className="data">
        <TabList tabs={tabList} setValue={setValue} />
        {value === "chart" && <TabItem value={"chart"}><Chart data={[]} /></TabItem>}
        {value === "book" && <TabItem value={"book"}><OrderBook /></TabItem>}
        {value === "recent" && <TabItem value={"recent"}><Recents /></TabItem>}
    </div>);
};
