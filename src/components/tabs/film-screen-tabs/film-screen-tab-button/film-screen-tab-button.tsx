import cs from 'classnames';
import { FilmTabTitle as FilmTabsTitle } from '../tabs/film-screen-tabs';

export type FilmScreenTabButtonProps = {
  tabTitle: string;
  selectedTab: string;
  onClick: (tabTitle: FilmTabsTitle) => void;
};

export default function FilmScreenTabButton({ tabTitle, selectedTab, onClick: handleClick }: FilmScreenTabButtonProps): JSX.Element {
  return (
    <li
      key={tabTitle}
      className={cs('film-nav__item', { 'film-nav__item--active': tabTitle === selectedTab})}
      data-testid={'film-tab-button'}
    >
      <button onClick={() => handleClick(tabTitle)} className="film-nav__link">{ tabTitle }</button>
    </li>
  );
}
