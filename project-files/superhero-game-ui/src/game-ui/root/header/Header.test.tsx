import { render } from '@testing-library/react';
import * as React from 'react';
import { Header } from "./";

describe('Header', () => {
    it('should be rendered', () => {
        const { getByTestId } = render(<Header data-testid='header' />);
        expect(getByTestId('header')).toBeInTheDocument()
    })
})
