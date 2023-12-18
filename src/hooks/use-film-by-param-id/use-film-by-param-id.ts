import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '..';
import { fetchFilmDataAction } from '../../store/api-actions';
import { getFilmData } from '../../store/films-data/selectors';

export default function useFilmByParamId() {
  const urlParams = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmDataAction(urlParams.id ?? ''));
  }, [dispatch, urlParams.id]);

  return useAppSelector(getFilmData);
}
