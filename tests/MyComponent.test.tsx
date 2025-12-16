import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { MyComponent } from '../src';

describe('MyComponent', () => {
  it('renders label', () => {
    render(<MyComponent label="Hola" />);
    expect(screen.getByText('Hola')).toBeDefined();
  });
});
