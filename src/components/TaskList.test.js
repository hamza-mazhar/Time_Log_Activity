import { render, screen } from '@testing-library/react';

import TaskList from './TaskList';
import '../matchMedia'

test('Render Task List', () => {
    const logs = [];
    render(<TaskList logs={logs} removeUserLog={() => { }} editUserLog={() => { }} />);
    const element = screen.getByTestId('tasks-list');
    expect(element).toBeInTheDocument();
});
