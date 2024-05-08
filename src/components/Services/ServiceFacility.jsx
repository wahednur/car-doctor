import PropTypes from "prop-types";

const ServiceFacility = ({ facy }) => {
  return (
    <div className="ser-facility">
      <h4 className="text-xl font-bold">{facy.name}</h4>
      <p>{facy.details}</p>
    </div>
  );
};

ServiceFacility.propTypes = {
  facility: PropTypes.object,
};

export default ServiceFacility;
