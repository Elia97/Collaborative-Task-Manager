import PropTypes from "prop-types";

const TitleInput = ({ register, errors }) => {
  return (
    <div className="relative flex flex-col sm:flex-row gap-4">
      <label
        htmlFor="title"
        className="px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-sm"
      >
        {"Title"}
      </label>
      <input
        type="text"
        id="title"
        className="inline-flex px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-sm focus:ring-1 ring-foreground"
        placeholder="Write something ..."
        {...register("title", { required: "Insert a title" })}
      />
      {errors.title && (
        <p className="absolute -bottom-6 text-sm text-red-500">
          {errors.title.message}
        </p>
      )}
    </div>
  );
};

TitleInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default TitleInput;
