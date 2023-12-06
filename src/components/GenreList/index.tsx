import Genre from '../../types/genre';
import GenrePill from './GenrePill';

interface GenreListProps {
  genres: Genre[];
}

const GenreList = ({ genres }: GenreListProps) => {
  return (
    <div className="u-text-xs u-flex u-gap-2 u-flex-wrap">
      {genres.map((genre) => (
        <GenrePill key={genre} genre={genre} />
      ))}
    </div>
  );
};

export default GenreList;
