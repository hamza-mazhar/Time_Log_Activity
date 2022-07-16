import { render, screen } from '@testing-library/react';

import UserInput from './UserInput';
import '../matchMedia'

test('Render user-input-component', () => {
    render(<UserInput getUserlogData={() => { }} editData={() => { }} editFlag={false} />);
    const element = screen.getByTestId('user-input-component');
    expect(element).toBeInTheDocument();
});
