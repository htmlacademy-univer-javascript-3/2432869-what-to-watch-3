import './film-screen-tabs.css';
import { useCallback, useState } from 'react';
import FilmScreenTabButton from '../film-screen-tab-button/film-screen-tab-button';
import FilmReviews from '../film-reviews/film-reviews';
import FilmDetails from '../film-details/film-details';
import FilmOverview from '../film-overview/film-overview';
import { ValueOf } from '../../../../types/value-of';

export const FilmTabsTitles = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
};

export type FilmTabTitle = ValueOf<typeof FilmTabsTitles>;


export default function FilmScreenTabs(): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(FilmTabsTitles.Overview);
  const handleButtonClick = useCallback((tabTitle: FilmTabTitle) => setSelectedTab(tabTitle), []);

  const tabsButtons = Object.values(FilmTabsTitles).map((tabTitle) => (
    <FilmScreenTabButton
      key={tabTitle}
      tabTitle={tabTitle}
      selectedTab={selectedTab}
      onClick={handleButtonClick}
    />
  ));

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          { tabsButtons }
        </ul>
      </nav>

      {
        {
          Overview: <FilmOverview />,
          Details: <FilmDetails />,
          Reviews: <FilmReviews />,
        }[selectedTab]
      }
    </>
  );
}
