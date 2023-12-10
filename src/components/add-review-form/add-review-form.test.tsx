import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import userEvent from '@testing-library/user-event';
import AddReviewForm from './add-review-form';
import { extractActionsTypes } from '../../utils/mocks';
import { postReviewAction } from '../../store/api-actions';

describe('Component: AddReviewForm', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(<AddReviewForm filmId={''} ratingWidth={0} />, {});

    render(withStoreComponent);

    expect(screen.getByTestId('rating-inputs')).toBeInTheDocument();
    expect(screen.getByTestId('review-comment-input')).toBeInTheDocument();
    expect(screen.getByTestId('comment-error')).toHaveTextContent('');
  });

  it('validate user uncorrect comment by length, block submit and show error message', async () => {
    const uncorrectComment = 'short comment';
    const { withStoreComponent, mockStore } = withStore(<AddReviewForm filmId={''} ratingWidth={0} />, {});

    render(withStoreComponent);
    await userEvent.type(screen.getByTestId('review-comment-input'), uncorrectComment);
    await userEvent.click(screen.getByTestId('review-form-submit-button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(screen.getByDisplayValue(uncorrectComment)).toBeInTheDocument();
    expect(screen.getByTestId('comment-error').textContent?.length).toBeGreaterThan(0);
    expect(actions).toEqual([]);
  });

  it('dispatch "postReviewAction" when user fill out form with correct data and click submit button', async () => {
    const filmId = 'ab09vds0i0v';
    const correctComment = 'long comment, long comment, long comment, long comment, long comment';
    const { withStoreComponent, mockStore } = withStore(<AddReviewForm filmId={filmId} ratingWidth={0} />, {});

    render(withStoreComponent);

    await userEvent.type(screen.getByTestId('review-comment-input'), correctComment);

    await userEvent.click(screen.getByTestId('review-form-submit-button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(screen.getByDisplayValue(correctComment)).toBeInTheDocument();
    expect(screen.getByTestId('comment-error')).toHaveTextContent('');
    expect(actions[0]).toEqual(postReviewAction.pending.type);
  });
});
