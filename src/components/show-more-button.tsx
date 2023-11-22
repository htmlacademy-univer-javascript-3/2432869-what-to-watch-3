type ShowMoreButtonProps = {
  hide: boolean;
  handleClick: () => void;
}

export default function ShowMoreButton({ hide, handleClick }: ShowMoreButtonProps): JSX.Element | null {
  if (hide) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        onClick={handleClick}
        className="catalog__button"
        type="button"
      >Show more
      </button>
    </div>
  );
}
