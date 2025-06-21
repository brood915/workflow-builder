const TriggerCard = ({ trigger, isSelected, onSelect }) => {
  const Icon = isSelected ? trigger.iconActive : trigger.icon;

  return (
    <div
      onClick={onSelect}
      className={`border border-solid flex items-center rounded-lg cursor-pointer transition-all
        ${
          isSelected
            ? "ring-2 ring-[#1849A9]"
            : "border-[#D1D1D1] bg-white hover:bg-gray-50"
        }`}
    >     <div className="p-2 rounded-md mr-1">
        <Icon
          size={16}
        />
      </div>

        <span
          className="flex-1 text-[#242424] text-[14px] font-medium"

        >
          {trigger.name}
        </span>

    </div>
  );
};

export default TriggerCard;
