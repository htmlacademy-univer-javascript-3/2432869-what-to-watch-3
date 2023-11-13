import cs from 'classnames';

export type FilmCardPosterProps = {
  posterImage: string;
  name: string;
  big?: boolean;
};

export default function FilmCardPoster({ posterImage, name, big = false }: FilmCardPosterProps) {
  return (
    <div className={cs('film-card__poster', { 'film-card__poster--big': big })}>
      <img src={posterImage} alt={name} width="218" height="327" />
    </div>
  );
}
