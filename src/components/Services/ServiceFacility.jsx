import PropTypes from "prop-types";

const ServiceFacility = ({ facility }) => {
  return (
    <div className="ser-facility">
      <h4 className="text-xl font-bold">Instant Car Services</h4>
      <p>
        It uses a dictionary of over 200 Latin words, combined with a model
        sentence structures.
      </p>
    </div>
  );
};

ServiceFacility.propTypes = {
  facility: PropTypes.object,
};

export default ServiceFacility;
