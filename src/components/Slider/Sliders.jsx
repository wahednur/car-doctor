import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        <div>
          <div className="bg-[url('/assets/images/slide-1.jpg')] slider-bg bg-no-repeat bg-cover relative -z-10">
            <div className="overlay relative">
              <div className="text-white p-8 lg:p-[100px] space-y-3 md:space-y-5 flex flex-col justify-center h-full">
                <h1 className="text-[16px] md:text-4xl lg:text-[60px] lg:leading-[80px] font-bold w-full lg:w-1/2">
                  Affordable Price For Car Servicing
                </h1>
                <p className="w-full lg:w-2/4 text-[14px] md:text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="cbtn cbtn-orange">Discover More</Link>
                  <Link className="cbtn cbtn-outline-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[url('/assets/images/2.jpg')] slider-bg bg-no-repeat bg-cover relative -z-10">
            <div className="overlay relative">
              <div className="text-white p-8 lg:p-[100px] space-y-3 md:space-y-5 flex flex-col justify-center h-full">
                <h1 className="text-[16px] md:text-4xl lg:text-[60px] lg:leading-[80px] font-bold w-full lg:w-1/2">
                  Affordable Price For Car Servicing
                </h1>
                <p className="w-full lg:w-2/4 text-[14px] md:text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="cbtn cbtn-orange">Discover More</Link>
                  <Link className="cbtn cbtn-outline-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[url('/assets/images/3.jpg')] slider-bg bg-no-repeat bg-cover relative -z-10">
            <div className="overlay relative">
              <div className="text-white p-8 lg:p-[100px] space-y-3 md:space-y-5 flex flex-col justify-center h-full">
                <h1 className="text-[16px] md:text-4xl lg:text-[60px] lg:leading-[80px] font-bold w-full lg:w-1/2">
                  Affordable Price For Car Servicing
                </h1>
                <p className="w-full lg:w-2/4 text-[14px] md:text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="cbtn cbtn-orange">Discover More</Link>
                  <Link className="cbtn cbtn-outline-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[url('/assets/images/4.jpg')] slider-bg bg-no-repeat bg-cover relative -z-10">
            <div className="overlay relative">
              <div className="text-white p-8 lg:p-[100px] space-y-3 md:space-y-5 flex flex-col justify-center h-full">
                <h1 className="text-[16px] md:text-4xl lg:text-[60px] lg:leading-[80px] font-bold w-full lg:w-1/2">
                  Affordable Price For Car Servicing
                </h1>
                <p className="w-full lg:w-2/4 text-[14px] md:text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="cbtn cbtn-orange">Discover More</Link>
                  <Link className="cbtn cbtn-outline-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[url('/assets/images/5.jpg')] slider-bg bg-no-repeat bg-cover relative -z-10">
            <div className="overlay relative">
              <div className="text-white p-8 lg:p-[100px] space-y-3 md:space-y-5 flex flex-col justify-center h-full">
                <h1 className="text-[16px] md:text-4xl lg:text-[60px] lg:leading-[80px] font-bold w-full lg:w-1/2">
                  Affordable Price For Car Servicing
                </h1>
                <p className="w-full lg:w-2/4 text-[14px] md:text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="cbtn cbtn-orange">Discover More</Link>
                  <Link className="cbtn cbtn-outline-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[url('/assets/images/6.jpg')] slider-bg bg-no-repeat bg-cover relative -z-10">
            <div className="overlay relative">
              <div className="text-white p-8 lg:p-[100px] space-y-3 md:space-y-5 flex flex-col justify-center h-full">
                <h1 className="text-[16px] md:text-4xl lg:text-[60px] lg:leading-[80px] font-bold w-full lg:w-1/2">
                  Affordable Price For Car Servicing
                </h1>
                <p className="w-full lg:w-2/4 text-[14px] md:text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <Link className="cbtn cbtn-orange">Discover More</Link>
                  <Link className="cbtn cbtn-outline-white">
                    Latest Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

SamplePrevArrow.propTypes = {
  props: PropTypes.object,
};
export default Sliders;
