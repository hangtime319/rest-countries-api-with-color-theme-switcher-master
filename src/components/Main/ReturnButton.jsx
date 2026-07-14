import { Link } from "react-router-dom";

const ReturnButton = () => {
  return (
    <article className="mt-8 md:px-12 px-8 py-4">
      <Link to="/" className="inline-flex items-center gap-3 px-6 py-2 rounded-md bg-(--elements) shadow-sm border border-(--light-bg) hover:scale-105 transition-all cursor-pointer text-(--light-text)" aria-label="Back to home">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-4 h-4 fill-current transition-colors duration-300">
          <path d="M41.4 297.4C28.9 309.9 28.9 330.2 41.4 342.7L169.4 470.7C181.9 483.2 202.2 483.2 214.7 470.7C227.2 458.2 227.2 437.9 214.7 425.4L141.3 352L576 352C593.7 352 608 337.7 608 320C608 302.3 593.7 288 576 288L141.3 288L214.7 214.6C227.2 202.1 227.2 181.8 214.7 169.3C202.2 156.8 181.9 156.8 169.4 169.3L41.4 297.3z" />
        </svg>
        <span className="text-sm">Back</span>
      </Link>
    </article>
  );
};

export default ReturnButton;
