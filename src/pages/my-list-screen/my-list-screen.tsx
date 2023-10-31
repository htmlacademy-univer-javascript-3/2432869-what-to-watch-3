import Header from '../../components/header';
import Footer from '../../components/footer';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';
import { FilmData } from '../../mocks/films-data';

export type MyListScreenProps = {
  userFilmsCount: number;
  filmsData: ReadonlyArray<FilmData>;
}

export default function MyListScreen({ userFilmsCount, filmsData }: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <Header className='user-page__head'>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{ userFilmsCount }</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <SmallFilmCards cardsCount={userFilmsCount} filmsData={filmsData}/>
      </section>

      <Footer></Footer>
    </div>
  );
}
