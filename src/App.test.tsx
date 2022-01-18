import { render, screen } from '@testing-library/react';
import App from './App';

test('A test of App', async () => {
	render(<App />);

	const helloWorldText = screen.getByText('Hello, world!');
	const helloWorld2Text = screen.queryByText('Hello, world2!');
	expect(helloWorldText).toBeInTheDocument();
	expect(helloWorld2Text).not.toBeInTheDocument();
});
