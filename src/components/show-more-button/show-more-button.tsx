type ShowMoreButtonProps = {
  hide: boolean;
  onClick: () => void;
}

export default function ShowMoreButton({ hide, onClick: handleClick }: ShowMoreButtonProps): JSX.Element | null {
  if (hide) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        onClick={handleClick}
        className="catalog__button"
        type="button"
        data-testid={'show-more-button'}
      >
        Show more
      </button>
    </div>
  );
}
