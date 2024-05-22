import { useState } from "react";
import { TabItem } from "../../layouts/tab-item/tab-item";
import { TabProp } from "../../types/tab";
import { Chart } from "../chart/chart";
import { OrderBook } from "../order-book/order-book";
import { Recents } from "../recents/recents";
import {TabList} from "../tab-list/tab-list";

import "./data.css"

export const Data = () => {
    const [value, setValue] = useState<string>("chart")
    "recent"
    "book"
    
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
        <TabList tabs={tabList} />
        <TabItem value={value} setValue={setValue} children={<Chart />} />
        <TabItem value={value} setValue={setValue} children={<OrderBook/>} />
        <TabItem value={value} setValue={setValue} children={<Recents/>} />
    </div>);
};
