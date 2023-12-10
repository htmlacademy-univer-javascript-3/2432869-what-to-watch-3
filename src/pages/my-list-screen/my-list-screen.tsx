import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { SmallFilmCards } from '../../components/small-film-cards/small-film-cards';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilmsDataAction } from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import { getFavoriteFilmData, getFavoriteFilmsCount } from '../../store/favorite-films-data/selectors';

export default function MyListScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilmsData = useAppSelector(getFavoriteFilmData);
  const favoriteFilmsCount = useAppSelector(getFavoriteFilmsCount);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsDataAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Header className='user-page__head'>
        <h1 className="page-title user-page__title">My list
          <span className="user-page__film-count">{ favoriteFilmsCount }</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {favoriteFilmsData
          ? <SmallFilmCards filmsData={favoriteFilmsData} maxCardsCount={favoriteFilmsData.length}/>
          : <Spinner />}
      </section>

      <Footer></Footer>
    </div>
  );
}
