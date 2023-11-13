type ShowMoreButtonProps = {
  hide: boolean;
  increaseCount: () => void;
}

export default function ShowMoreButton({ hide, increaseCount }: ShowMoreButtonProps): JSX.Element | null {
  if (hide) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        onClick={increaseCount}
        className="catalog__button"
        type="button"
      >Show more
      </button>
    </div>
  );
}
