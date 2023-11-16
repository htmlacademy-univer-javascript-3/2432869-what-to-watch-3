export type StarringListProps = {
  starring: string[];
};

export default function StarringList({ starring }: StarringListProps) {
  return (
    <>
      {starring.map((starName, index) => (
        <span key={starName}>
          {starName} {index !== starring.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}
