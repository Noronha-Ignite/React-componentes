import { ButtonHTMLAttributes, memo } from 'react';

import { Icon } from './Icon';

import '../styles/button.scss';
import { GenreResponseProps } from '../App';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genre: GenreResponseProps;
  selected: boolean;
  handleSelectGenre: (id: number) => void;
}

function ButtonComponent({ genre, selected, handleSelectGenre, ...rest }: ButtonProps) {
  return (
    <button onClick={() => handleSelectGenre(genre.id)} type='button' {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={genre.name} color={selected ? '#FAE800' : '#FBFBFB'} />
      {genre.title}
    </button>
  );
}

export const Button = memo(ButtonComponent);
