import Genre from '~/types/genre';

interface GenrePillProps {
  genre: Genre;
}

const GenrePill = ({ genre }: GenrePillProps) => {
  return (
    <span className="u-py-1 u-px-3 u-bg-indigo-600 u-rounded-full">
      {genre}
    </span>
  );
};

export default GenrePill;
