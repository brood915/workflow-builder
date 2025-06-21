const RecordTypeCard = ({ type, isSelected, onToggle }) => {
    const Icon = isSelected ? type.iconActive : type.icon;

  return (
    <div
      className={`border border-solid flex items-center rounded-lg cursor-pointer transition-all box-border
        ${
          isSelected
            ? "ring-2 ring-[#1849A9]"
            : "border-[#D1D1D1] bg-white hover:bg-gray-50"
        }`}
      onClick={onToggle}
    >
      <div className="p-2 rounded-md mr-1">
        <Icon
          size={16}
        />
      </div>

      <span className="flex-1 text-[#242424] text-[14px] font-medium">
        {type.name}
      </span>
      {/* I think it is better for the UX to add a checkmark to let users know it can be unselected, but to match the figma mockup, i will comment it out here */}
      {/* <div className={`w-4 h-4 mr-5 border rounded flex items-center justify-center ${
        isSelected
          ? 'bg-blue-600 border-blue-600'
          : 'border-gray-300'
      }`}>
        {isSelected && (
          <Check size={12} className="text-white" />
        )}
      </div> */}
    </div>
  );
};

export default RecordTypeCard;
