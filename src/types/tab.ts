export type TabProp = {
  title: string;
  url: string;
  currentTab?: boolean;
};

export type TabProps = {
  tabs: TabProp[];
};
