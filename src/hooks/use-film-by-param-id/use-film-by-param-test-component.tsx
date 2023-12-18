import useFilmByParamId from './use-film-by-param-id';

export default function UseFilmByParamIdTestComponent(): JSX.Element {
  const filmData = useFilmByParamId();

  return (
    <>
      <div data-testid={'film-id'}>{ filmData?.id }</div>
      <div data-testid={'film-name'}>{ filmData?.name }</div>
      <div data-testid={'film-genre'}>{ filmData?.genre }</div>
      <div data-testid={'film-rating'}>{ filmData?.rating }</div>
    </>
  );
}
