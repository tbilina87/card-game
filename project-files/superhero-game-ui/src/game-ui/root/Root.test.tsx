import { render } from '@testing-library/react';
import * as React from 'react';
import { Root } from "./Root";

describe('Root', () => {
	it('should contain header with links', () => {
		const { getByTestId } = render(<Root />);
		expect(getByTestId('header').children[0]).toContainHTML('li')
		expect(getByTestId('header').children[0]).toContainHTML('a')
	})
})