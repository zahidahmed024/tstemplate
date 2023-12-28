import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button';
import ic_discord from "../../assets/icons/discord.png";

describe('Button', () => {
  it('renders the button with the provided text', () => {
    const { getByText } = render(<Button text="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick prop when disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={handleClick} disabled />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders the right icon when provided', () => {
    const { getByAltText } = render(<Button text="Click me" rightIcon={ic_discord}/>);
    expect(getByAltText('rightIcon')).toBeInTheDocument();
  });
});