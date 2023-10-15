import Copyright from '../../components/copyright';
import Logo from '../../components/logo';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';
import UserBlock from '../../components/user-block';
import { FilmData } from '../../mocks/films-data';

export type MyListScreenProps = {
  userFilmsCount: number;
  filmsData: FilmData[];
}

export default function MyListScreen({ userFilmsCount, filmsData }: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{ userFilmsCount }</span></h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <SmallFilmCards cardsCount={userFilmsCount} filmsData={filmsData}/>
      </section>

      <footer className="page-footer">
        <Logo light />

        <Copyright />
      </footer>
    </div>
  );
}
