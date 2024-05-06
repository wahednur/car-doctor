import { Link } from "react-router-dom";
import Sliders from "../components/Slider/Sliders";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Sliders></Sliders>
      <div className="w-full mt">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-[122px] lg:mb-40">
          <div className="about-img relative w-full md:w-1/2 ">
            <img
              className="drop-shadow-xl"
              src="/assets/images/about/about-person.jpg"
              alt=""
            />
            <img
              className="lg:absolute -right-16 -bottom-[84px] w-full drop-shadow-xl"
              src="/assets/images/about/galon.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 space-y-5">
            <div className="title">
              <h4 className="text-xl font-bold text-dr-orange">About Us</h4>
              <h1 className="text-2xl md:text-5xl font-bold leading-[60px]">
                We are qualified & of experience in this field
              </h1>
            </div>
            <div className="desc space-y-8">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
              <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable.
              </p>
            </div>
            <Link className="cbtn cbtn-orange float-left">Get More Info</Link>
          </div>
        </div>
      </div>
      <div className="mt">
        <SectionTitle
          sub="Service"
          title="Our Service Area"
          desc="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        ></SectionTitle>
        <div className="mt-[50px]">
          <Services></Services>
        </div>
      </div>
      <div className="container mx-auto p-5 md:p-[73px] bg-[#151515] rounded-xl mt">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:justify-between">
          <div className="flex gap-3 text-white items-center">
            <div className="icon">
              <img src="/assets/images/calender.svg" alt="" />
            </div>
            <div className="text">
              <h4>We are open monday-friday</h4>
              <h2 className="text-xl md:text-[25px] font-bold mt-3">
                7:00 am - 9:00 pm
              </h2>
            </div>
          </div>
          <div className="flex gap-3 text-white items-center">
            <div className="icon">
              <img src="/assets/images/call.svg" alt="" />
            </div>
            <div className="text">
              <h4>Have a question?</h4>
              <h2 className="text-xl md:text-[25px] font-bold mt-3">
                +2546 251 2658
              </h2>
            </div>
          </div>
          <div className="flex gap-3 text-white items-center">
            <div className="icon">
              <img src="/assets/images/map.svg" alt="" />
            </div>
            <div className="text">
              <h4>Need a repair? our address</h4>
              <h2 className="text-xl md:text-[25px] font-bold mt-3">
                Liza Street, New York
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt">
        <SectionTitle
          sub="Popular Products"
          title="Browse Our Products"
          desc="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        ></SectionTitle>
      </div>
    </div>
  );
};

export default Home;
