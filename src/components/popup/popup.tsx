import { useState } from "react"
import { TabList } from "../tab-list/tab-list"
import "./popup.css"
import { TabItem } from "../../layouts/tab-item/tab-item"
import { Buy } from "../buy/buy"
import { Sell } from "../sell/sell"
import { TabProp } from "../../types/tab"


export const PopUp = () => {
    const [value, setValue] = useState<string>("buy")
    const tabList: TabProp[] = [
        {
            title: "Buy",
            url: "/",
            currentTab: true,
            value: "buy"
        }, {
            title: "Sell",
            url: "/",
            value: "sell"
        }
    ];
    return (
        <div className="popup">
            <TabList tabs={tabList} setValue={setValue} />
            {value === "buy" && <TabItem value={"buy"}><Buy /></TabItem>}
            {value === "sell" && <TabItem value={"sell"}><Sell /></TabItem>}

        </div>
    )
}

