import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { ErrorCodesDesc, STANDART_ERROR_MESSAGE } from '../../consts';
import ErrorScreen from './error-screen';

describe('Component: ErrorScreen', () => {
  it('renders correctly with state`s error code', () => {
    const errorCode = 404;
    const withHistoryComponent = withHistory(<ErrorScreen />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      Error: { errorCode: errorCode }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText(/main page/i)).toBeInTheDocument();
    expect(screen.getByText(errorCode)).toBeInTheDocument();
    expect(screen.getByText(ErrorCodesDesc[errorCode])).toBeInTheDocument();
  });

  it('renders only message when state don`t have error code', () => {
    const withHistoryComponent = withHistory(<ErrorScreen />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore({
      Error: { errorCode: undefined }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText(/main page/i)).toBeInTheDocument();
    expect(screen.getByText(STANDART_ERROR_MESSAGE)).toBeInTheDocument();
  });
});
