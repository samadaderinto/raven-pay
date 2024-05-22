import { FC } from "react"
import { TabItemProps } from "../../types/tab"

import "./tab-item.css"


export const TabItem: FC<TabItemProps> = ({ value, setValue, children }) => {
    return (
        <div id={value}>
            {children}
        </div>
    )
}

