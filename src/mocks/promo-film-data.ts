export type PromoFilmData = {
  id: number;
  bgImageSource: string;
  name: string;
  imageSource: string;
  genres: string;
  releaseDate: number;
};

export const promoFilmData: PromoFilmData = {
  id: 0,
  name: 'The Greatest Showman',
  releaseDate: 2017,
  genres: 'Biography, Drama, Musical, Romance',
  bgImageSource: 'img/bg-the-grand-budapest-hotel.jpg',
  imageSource: 'https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_SX300.jpg',
};
