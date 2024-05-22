import { ReactNode } from "react";

export type TabProp = {
  title: string;
  url: string;
  value: string;
  currentTab?: boolean;
};

export type TabProps = {
  tabs: TabProp[];
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

export type TabItemProps = {
    value: string;
    children: ReactNode
}
