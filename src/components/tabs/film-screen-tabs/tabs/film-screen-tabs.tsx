import './film-screen-tabs.css';
import { useState } from 'react';
import { FilmData } from '../../../../mocks/films-data';
import FilmScreenTabButton from '../film-screen-tab-button';
import FilmReviews, { FilmReviewsProps } from '../film-reviews/film-reviews';
import FilmDetails from '../film-details';
import FilmOverview from '../film-overview';

const TabsTitles = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
};

type TabsTitles = keyof typeof TabsTitles;

export type FilmScreenTabsProps = FilmReviewsProps & {
  filmData: FilmData;
};

export default function FilmScreenTabs({ filmData, filmReviewsData }: FilmScreenTabsProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(TabsTitles.Overview as TabsTitles);

  const tabsButtons = Object.keys(TabsTitles).map((tabTitle) => (
    <FilmScreenTabButton
      key={tabTitle}
      tabTitle={tabTitle}
      selectedTab={selectedTab}
      handleClick={() => setSelectedTab(tabTitle as TabsTitles)}
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
          Overview: <FilmOverview {...filmData} />,
          Details: <FilmDetails {...filmData} />,
          Reviews: <FilmReviews filmReviewsData={filmReviewsData} />,
        }[selectedTab]
      }
    </>
  );
}
