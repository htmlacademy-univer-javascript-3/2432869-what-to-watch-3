import Header from '../../components/header';
import Footer from '../../components/footer';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';

export type MyListScreenProps = {
  userFilmsCount: number;
}

export default function MyListScreen({ userFilmsCount }: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <Header className='user-page__head'>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{ userFilmsCount }</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <SmallFilmCards cardsCount={userFilmsCount}/>
      </section>

      <Footer></Footer>
    </div>
  );
}
