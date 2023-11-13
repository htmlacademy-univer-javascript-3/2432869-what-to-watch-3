import Header from '../../components/header';
import Footer from '../../components/footer';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';
import { useFavoriteFilmsSelector } from '../../hooks/selectors';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchFavoriteFilmsDataAction } from '../../store/api-actions';

export default function MyListScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilmsData = useFavoriteFilmsSelector();

  useEffect(() => {
    dispatch(fetchFavoriteFilmsDataAction());
  }, []);

  return (
    <div className="user-page">
      <Header className='user-page__head'>
        <h1 className="page-title user-page__title">My list
          <span className="user-page__film-count">{ favoriteFilmsData.length }</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <SmallFilmCards filmsData={favoriteFilmsData} maxCardsCount={favoriteFilmsData.length}/>
      </section>

      <Footer></Footer>
    </div>
  );
}
