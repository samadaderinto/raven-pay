import { TabProp } from "../../types/tab";
import TabList from "../tab-list/tab-list"
import "./transact.css"

export const Transact = () => {
  const tabList: TabProp[] = [
    {
      title: "Open Orders",
      url: "/",
      currentTab: true
    }, {
      title: "Positions",
      url: "/",
    }, {
      title: "Order History",
      url: "/",
    }
  ];
  return (
    <div className="transact">
      <TabList tabs={tabList} />
    </div>
  )
}

