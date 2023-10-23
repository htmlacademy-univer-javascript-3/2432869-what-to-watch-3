import './tabs.css';
import { useState } from 'react';
import { TabData } from '../tab-data-type';
import classNames from 'classnames';

export type TabsProps<TabContentProps> = {
  tabsData: ReadonlyArray<TabData>;
  tabsContentProps: TabContentProps;
};

export default function Tabs<TabContentProps>({ tabsData, tabsContentProps }: TabsProps<TabContentProps>): JSX.Element {
  const { title: initialTab } = tabsData.find((tabData) => tabData.isActive) || tabsData[0];

  const [selectedTab, setSelectedTab] = useState(initialTab);

  const tabsButtons = tabsData.map((tabData) => (
    <li key={tabData.title}
      className={classNames('film-nav__item', { 'film-nav__item--active': tabData.title === selectedTab})}
    >
      <button onClick={() => setSelectedTab(tabData.title)} className="film-nav__link">{ tabData.title }</button>
    </li>
  ));

  const { content: TabContent } = tabsData.find((tabData) => tabData.title === selectedTab) as TabData;

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          { tabsButtons }
        </ul>
      </nav>

      <TabContent {...tabsContentProps} />
    </>
  );
}
