import './spinner.css';

export type SpinnerProps = {
  size?: number;
};

export default function Spinner({ size = 50 }: SpinnerProps): JSX.Element {
  return (
    <div style={{width: size, height: size}} className="spinner" data-testid={'spinner'} />
  );
}
