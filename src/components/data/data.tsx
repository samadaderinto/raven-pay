import {TabProp} from "../../types/tab";
import TabList from "../tab-list/tab-list";

import "./data.css"

export const Data = () => {
  const tabList: TabProp[] = [
    {
      title: "Charts",
      url: "/",
      currentTab: true
    }, {
      title: "Charts",
      url: "/"
    }, {
      title: "Charts",
      url: "/"
    }
  ];

  return (<div className="data">
    <TabList tabs={tabList}/>
  </div>);
};
