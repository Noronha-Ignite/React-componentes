import { GenreResponseProps } from "../App";
import { Button } from "./Button";

import '../styles/sidebar.scss';
import { useCallback } from "react";
interface SideBarProps {
  genres: GenreResponseProps[];
  handleSelectGenre: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar({ genres, handleSelectGenre, selectedGenreId }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            genre={genre}
            handleSelectGenre={handleSelectGenre}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}