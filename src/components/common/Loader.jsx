const Loader = ({
  text = "Loading...",
}) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">

      <div className="h-14 w-14 animate-spin rounded-full border-4 border-green-200 border-t-green-700"></div>

      <p className="mt-5 text-lg font-medium text-gray-600">
        {text}
      </p>

    </div>
  );
};

export default Loader;