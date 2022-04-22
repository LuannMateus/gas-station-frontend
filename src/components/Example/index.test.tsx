import { render, screen } from '@testing-library/react';
import { Example } from '.';

describe('<ArticleHeader />', () => {
  it('Should render heading, excerpt, cover img and meta', () => {
    render(<Example />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
