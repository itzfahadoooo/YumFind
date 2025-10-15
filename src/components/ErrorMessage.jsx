const ErrorMessage = ({ message, onRetry, onLoadSample }) => {
  return (
    <div className="max-w-md mx-auto text-center py-12">
      <div className="bg-white rounded-xl shadow-md p-8">
        <p className="text-gray-600 mb-4">{message}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onRetry}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={onLoadSample}
            className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            Load Sample Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;