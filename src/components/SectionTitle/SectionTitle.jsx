import PropTypes from "prop-types";

const SectionTitle = ({ sub, title, desc }) => {
  return (
    <div className="container text-center sec-title space-y-5">
      <h2>{sub} </h2>
      <h1>{title} </h1>
      <p className="w-full md:w-[717px] mx-auto">{desc}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  sub: PropTypes.node,
  title: PropTypes.node,
  desc: PropTypes.node,
};

export default SectionTitle;
