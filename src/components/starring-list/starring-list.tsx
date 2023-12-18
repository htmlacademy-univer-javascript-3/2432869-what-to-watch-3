export type StarringListProps = {
  starring: string[];
};

export default function StarringList({ starring }: StarringListProps): JSX.Element {
  return (
    <>
      {starring.map((starName, index) => (
        <span key={starName} data-testid={'starring-item'}>
          {starName} {index !== starring.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}
