import FilmDetails from './film-details';
import FilmOverview from './film-overview';
import FilmReviews from './film-reviews/film-reviews';
import { TabData } from './tab-data-type';
import { FilmDetailsProps } from './film-details';
import { FilmOverviewProps } from './film-overview';
import { FilmReviewsProps } from './film-reviews/film-reviews';

export type FilmScreenTabsType = FilmOverviewProps & FilmDetailsProps & FilmReviewsProps;

export const FilmScreenTabsData: ReadonlyArray<TabData> = [
  {
    title: 'Overview',
    isActive: true,
    content: FilmOverview,
  },
  {
    title: 'Details',
    isActive: false,
    content: FilmDetails,
  },
  {
    title: 'Reviews',
    isActive: false,
    content: FilmReviews,
  },
];
