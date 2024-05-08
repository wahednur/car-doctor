import { Link, useLoaderData } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { LuArrowRight } from "react-icons/lu";
import ServiceFacility from "./ServiceFacility";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const LoadService = useLoaderData();
  const { title, img, price, description, facility, _id } = LoadService;
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Breadcrumb bread={title} pTitle={title}></Breadcrumb>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="detail w-full md:w-8/12">
          <img className="w-full rounded-lg" src={img} alt="" />
          <div className="text-content mt-8 md:mt-12">
            <h2 className="title">{title}</h2>
            <p className="my-8">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facility.map((facy, indx) => (
                <ServiceFacility key={indx} facy={facy}></ServiceFacility>
              ))}
            </div>
            <p className="mt-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text.
            </p>
            <div className="space-y-8 mt-12">
              <h2 className="title">3 Simple Steps to Process</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text
              </p>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="p-9 flex flex-col items-center text-center border border-[#E8E8E8] rounded-lg">
                  <h1 className="circle">01</h1>
                  <h1 className="sub-title">Step One</h1>
                  <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className="p-9 flex flex-col items-center text-center border border-[#E8E8E8] rounded-lg">
                  <h1 className="circle">02</h1>
                  <h1 className="sub-title">Step tow</h1>
                  <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className="p-9 flex flex-col items-center text-center border border-[#E8E8E8] rounded-lg">
                  <h1 className="circle">03</h1>
                  <h1 className="sub-title">Step three</h1>
                  <p>It uses a dictionary of over 200 .</p>
                </div>
              </div>
              <div>
                <img
                  className="sr-vdo"
                  src="/public/assets/images/banner/2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar w-full md:w-4/12">
          <div className="bg-[#F3F3F3] p-4 lg:p-10 space-y-5 rounded-lg">
            <h2 className="text-[#151515] text-2xl font-bold ">Services</h2>
            <Link className="btn-service active">
              <span>Full Car Repair</span> <LuArrowRight />
            </Link>
            <Link className="btn-service">
              <span>Engine Repair</span> <LuArrowRight />
            </Link>
            <Link className="btn-service">
              <span>Automatic Services</span> <LuArrowRight />
            </Link>
            <Link className="btn-service">
              <span>Engine Oil Change</span> <LuArrowRight />
            </Link>
            <Link className="btn-service">
              <span>Battery Charge</span> <LuArrowRight />
            </Link>
          </div>
          <div className="download p-5 lg:p-[40px] bg-[#151515] rounded-lg mt-[30px] space-y-6">
            <h2 className="text-[25px] text-white font-bold">Download</h2>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="icon text-white text-4xl">
                  <IoDocumentTextOutline />
                </div>
                <div className="text text-white">
                  <h2 className="text-xl font-bold">Our Brochure</h2>
                  <p>Download</p>
                </div>
              </div>
              <Link className="down-btn">
                <IoMdArrowDown />
              </Link>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <div className="icon text-white text-4xl">
                  <IoDocumentTextOutline />
                </div>
                <div className="text text-white">
                  <h2 className="text-xl font-bold">Our Brochure</h2>
                  <p>Download</p>
                </div>
              </div>
              <Link className="down-btn">
                <IoMdArrowDown />
              </Link>
            </div>
          </div>
          <div className="de-info p-5 lg:pb-16 lg:p-[40px] bg-[#151515] rounded-lg mt-[30px] text-center">
            <img
              className="mx-auto w-[130px] mb-6"
              src="/public/assets/images/f-logo.svg"
              alt=""
            />
            <h4>Need Help? We Are Here To Help You</h4>
            <div className="bg-white rounded-lg p-4 pb-12 relative">
              <h4 className="text-dr-orange">
                Car Doctor <span className="text-[#151515]">Special</span>
              </h4>
              <p className="text-[#737373] font-normal">
                Save up to{" "}
                <span className="text-dr-orange font-bold">60% off</span>
              </p>
              <Link className="cbtn cbtn-orange absolute w-[170px] left-10 -bottom-8">
                Get A Quote
              </Link>
            </div>
          </div>
          <h1 className="price">Price ${price}</h1>
          <Link
            to={`/booking/${_id}`}
            className="cbtn cbtn-orange w-full float-left text-center"
          >
            Proceed Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
