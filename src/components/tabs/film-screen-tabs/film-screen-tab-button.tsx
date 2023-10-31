import cs from 'classnames';

export type FilmScreenTabButtonProps = {
  tabTitle: string;
  selectedTab: string;
  handleClick: () => void;
};

export default function FilmScreenTabButton({ tabTitle, selectedTab, handleClick }: FilmScreenTabButtonProps): JSX.Element {
  return (
    <li
      key={tabTitle}
      className={cs('film-nav__item', { 'film-nav__item--active': tabTitle === selectedTab})}
    >
      <button onClick={handleClick} className="film-nav__link">{ tabTitle }</button>
    </li>
  );
}
