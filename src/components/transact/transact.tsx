import { useState } from "react";
import { TabItem } from "../../layouts/tab-item/tab-item";
import { TabProp } from "../../types/tab";
import { OpenOrders } from "../open-orders/open-orders";
import { OrderHistory } from "../order-history/order-history";
import { Positions } from "../positions/positions";
import { TabList } from "../tab-list/tab-list"
import "./transact.css"

export const Transact = () => {
  const [value, setValue] = useState<string>("order")
  // "history"
  // "position"

  const tabList: TabProp[] = [
    {
      title: "Open Orders",
      url: "/",
      value: "order",
      currentTab: true
    }, {
      title: "Positions",
      value: "position",
      url: "/",
    }, {
      title: "Order History",
      value: "history",
      url: "/",
    }
  ];
  return (
    <div className="transact">
      <TabList tabs={tabList} setValue={setValue}/>
      {value === "order" && <TabItem value={value} children={<OpenOrders />} />}
      {value === "history" && <TabItem value={value} children={<Positions />} />}
      {value === "position" && <TabItem value={value} children={<OrderHistory />} />}
    </div>
  )
}

