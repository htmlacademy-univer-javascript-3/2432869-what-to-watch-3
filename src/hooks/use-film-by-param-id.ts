import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '.';
import { fetchFilmDataAction } from '../store/api-actions';
import { useFilmSelector } from './selectors';

export default function useFilmByParamId() {
  const urlParams = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmDataAction(urlParams.id ?? ''));
  }, [urlParams.id]);

  return useFilmSelector();
}
