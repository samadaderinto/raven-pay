import { useState } from "react"
import { TabItem } from "../../layouts/tab-item/tab-item"
import { Limit } from "../limit/limit"
import { Market } from "../market/market"
import { StopLimit } from "../stop-limit/stop-limit"
import { TabList } from "../tab-list/tab-list"
import { TabProp } from "../../types/tab"

export const Buy = () => {
const [value, setValue] = useState<string>("limit")
const tabList: TabProp[] = [
    {
        title: "Limit",
        url: "/",
        currentTab: true,
        value: "limit"
    }, {
        title: "Market",
        url: "/",
        value: "market"
    }, {
        title: "Stop Limit",
        url: "/",
        value: "stopLimit"
    }
];
  return (
    <div>
        <TabList tabs={tabList} setValue={setValue}/>
        {value === "limit" && <TabItem value={"limit"}><Limit /></TabItem>}
        {value === "market" && <TabItem value={"market"}><Market /></TabItem>}
        {value === "stopLimit" && <TabItem value={"stopLimit"}><StopLimit /></TabItem>}
    </div>
  )
}