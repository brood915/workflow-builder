import { Check } from "lucide-react";

const SelectAllButton = ({ selectedCount, totalCount, onSelectAll }) => {
  const isAllSelected = selectedCount === totalCount;

  return (
    <div className="flex items-center p-1 cursor-pointer" onClick={onSelectAll}>
      <div
        className={`relative  w-4 h-4 border rounded flex items-center justify-center mr-2
          ${isAllSelected ? "bg-[#1849A9] border-blue-600"
                          : "border-gray-300"}`}
      >
        {isAllSelected && <Check size={12} className="text-white" />}
      </div>
      <span
        className='text-sm'
      >
        Select all
      </span>
    </div>
  );
};

export default SelectAllButton;
