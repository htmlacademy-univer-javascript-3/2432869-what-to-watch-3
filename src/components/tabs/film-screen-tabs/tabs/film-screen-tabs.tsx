import './film-screen-tabs.css';
import { useCallback, useState } from 'react';
import { FilmData } from '../../../../types/film-data';
import FilmScreenTabButton from '../film-screen-tab-button';
import FilmReviews from '../film-reviews/film-reviews';
import FilmDetails from '../film-details';
import FilmOverview from '../film-overview';
import { ReviewData } from '../../../../types/review-data';

const TabsTitles = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
};

export type FilmTabsTitles = keyof typeof TabsTitles;

export type FilmScreenTabsProps = {
  filmData: FilmData;
  reviewsData: ReviewData[];
};

export default function FilmScreenTabs({ filmData, reviewsData }: FilmScreenTabsProps): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(TabsTitles.Overview as FilmTabsTitles);
  const handleButtonClick = useCallback((tabTitle: FilmTabsTitles) => setSelectedTab(tabTitle), []);

  const tabsButtons = Object.keys(TabsTitles).map((tabTitle) => (
    <FilmScreenTabButton
      key={tabTitle}
      tabTitle={tabTitle}
      selectedTab={selectedTab}
      handleClick={handleButtonClick}
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
          Reviews: <FilmReviews reviewsData={reviewsData} />,
        }[selectedTab]
      }
    </>
  );
}
