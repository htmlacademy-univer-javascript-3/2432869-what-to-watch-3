import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../mocks/genres';

export const setGenre = createAction<{ genre: Genre }>('setGenre');

export const changeFilmsByGenre = createAction('changeFilmsByGenre');

export const increaseMaxCardsCount = createAction('increaseMaxCardsCount');

export const resetMaxCardsCount = createAction('resetMaxCardsCount');
