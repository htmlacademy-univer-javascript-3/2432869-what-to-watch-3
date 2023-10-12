const screen404Wrapper = {
  height: '100vh',
  display: 'flex',
  'flex-direction': 'row',
  'justify-content': 'center',
  'align-items': 'center',
  gap: '30px',
  'background-color': '#160202',
};

export default function Screen404(): JSX.Element {
  return (
    <div style={screen404Wrapper}>
      <div className="logo">
        <a href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <div style={{color: '#d9cd8d'}}>
        <h1>404 <small>Not Found</small></h1>
        <a href="/" style={{color: '#ffdc22'}}>Go back to the main page</a>
      </div>
    </div>
  );
}
