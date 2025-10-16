const InstructionList = ({ instructions }) => {
  const steps = instructions.split('\n').filter(step => step.trim());

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
              {index + 1}
            </span>
            <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructionList;