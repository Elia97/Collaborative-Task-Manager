import PropTypes from "prop-types";

const ListPage = ({ children }) => {
  return (
    <div className="container mx-auto px-8 py-4 min-h-screen grid md:grid-cols-2 gap-4">
      {children}
    </div>
  );
};

ListPage.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ListPage;
