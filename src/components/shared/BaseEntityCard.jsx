const BaseEntityCard = ({ option, isSelected, onSelect }) => {
  const Icon = isSelected ? option.iconActive : option.icon;

  return (
    <div
      className={`border-2 border-solid flex items-center border rounded-lg cursor-pointer transition-all
        ${isSelected
          ? "border-[#1849A9]"
          : "border-[#D1D1D1] bg-white hover:bg-gray-50"}`}
      onClick={onSelect}
    >
      <div
        className="p-2 rounded-md mr-1"
      >
        <Icon size={16}/>
      </div>

      <span className="flex-1 text-[#242424] text-[14px] font-medium">{option.name}</span>
    </div>
  );
};

export default BaseEntityCard;
