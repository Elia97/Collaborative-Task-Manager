import PropTypes from "prop-types";

const Submit = ({ children }) => {
  return (
    <button
      type="submit"
      className="px-5 py-2.5 w-full bg-zinc-200 rounded-lg shadow-lg text-center hover:bg-zinc-300 focus:ring-1 ring-foreground"
    >
      {children}
    </button>
  );
};

Submit.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Submit;
