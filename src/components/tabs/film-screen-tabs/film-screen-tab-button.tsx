import cs from 'classnames';
import { FilmTabsTitles as FilmTabsTitle } from './tabs/film-screen-tabs';

export type FilmScreenTabButtonProps = {
  tabTitle: string;
  selectedTab: string;
  handleClick: (tabTitle: FilmTabsTitle) => void;
};

export default function FilmScreenTabButton({ tabTitle, selectedTab, handleClick }: FilmScreenTabButtonProps): JSX.Element {
  return (
    <li
      key={tabTitle}
      className={cs('film-nav__item', { 'film-nav__item--active': tabTitle === selectedTab})}
    >
      <button onClick={() => handleClick(tabTitle as FilmTabsTitle)} className="film-nav__link">{ tabTitle }</button>
    </li>
  );
}
