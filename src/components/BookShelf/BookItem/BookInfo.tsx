interface BookInfoProps {
  title: string;
  author: string;
  price: number;
  description: string;
}

const BookInfo = ({ title, author, price, description }: BookInfoProps) => {
  return (
    <>
      <h2 className=" u-font-bold">{title}</h2>

      <div className="u-text-sm u-flex u-justify-between u-gap-2 u-flex-wrap">
        <p>
          <span>By </span>
          <span className="u-font-bold">{author}</span>
        </p>

        <span className="u-font-bold">$&nbsp;{price}</span>
      </div>

      <div className="u-flex-grow">
        <p className="u-text-xs u-italic u-line-clamp-4">{description}</p>
      </div>
    </>
  );
};

export default BookInfo;
