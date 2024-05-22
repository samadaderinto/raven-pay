import { ReactNode } from "react";

export type TabProp = {
  title: string;
  url: string;
  value: string;
  currentTab?: boolean;
};

export type TabProps = {
  tabs: TabProp[];
};

export type TabItemProps = {
    value: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    children: ReactNode
}
