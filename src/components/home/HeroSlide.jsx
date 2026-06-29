import { Link } from "react-router-dom";

const HeroSlide = ({ slide }) => {
  return (
    <Link
      to={`/product/${slide.productId}`}
      className="block w-full overflow-hidden"
    >
      <picture>
        {/* Desktop Image */}
        <source media="(min-width: 768px)" srcSet={slide.desktop} />

        {/* Mobile Image */}
        <img
          src={slide.mobile}
          alt=""
          className="w-full object-cover aspect-[4/5] md:aspect-[16/6]"
          loading="eager"
        />
      </picture>
    </Link>
  );
};

export default HeroSlide;
