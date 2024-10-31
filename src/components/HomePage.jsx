import PropTypes from "prop-types";

const HomePage = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col gap-8">
      <h1 className="mb-4 px-4 font-extrabold text-center text-2xl leading-none tracking-tight md:text-3xl lg:text-4xl">
        Collaborative Task Manager
      </h1>
      {children}
    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePage;
