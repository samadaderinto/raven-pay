import { FC } from "react";
import { Link } from "react-router-dom";
import "./tab-list.css"
import { TabProps } from "../../types/tab";


export const TabList: FC<TabProps> = (props) => {
    const handleTabClick = (value) => {
        props.setValue(value)
    }

    return (
        <div className="tab">
            <div className="tab-list">
                {props.tabs.map((tab) => (<Link key={tab.title} onClick={() => handleTabClick(tab.value)} className={`tab-list__tab ${tab.currentTab == true ? "tab-list__tab--current" : ""} text-white`} to={tab.url}>{tab.title}</Link>))}
            </div>
        </div>

    )
}
