import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { title, price, img } = service;
  return (
    <div className="p-4 md:p-6 service-card">
      <div className="rounded-xl overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="card space-y-5 mt-5">
        <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
        <div className="flex justify-between text-xl font-bold text-dr-orange">
          <h2>Price: {price}</h2>
          <Link to={`services/service-detail/${service._id}`}>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object,
};

export default ServicesCard;
