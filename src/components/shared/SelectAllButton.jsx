// src/components/shared/SelectAllButton.jsx
import React from "react";
import { Check } from "lucide-react";

const SelectAllButton = ({ selectedCount, totalCount, onSelectAll }) => {
  const isAllSelected = selectedCount === totalCount;
  const hasSelection  = selectedCount > 0;            // ← still useful for text colour

  return (
    <div className="flex items-center p-3 cursor-pointer" onClick={onSelectAll}>
      <div
        className={`w-4 h-4 border rounded flex items-center justify-center mr-3
          ${isAllSelected ? "bg-blue-600 border-blue-600"
                          : "border-gray-300"}`}
      >
        {isAllSelected && <Check size={12} className="text-white" />}
      </div>
      <span
        className={`font-medium ${
          hasSelection ? "text-blue-600" : "text-gray-600"
        }`}
      >
        Select all
      </span>
    </div>
  );
};

export default SelectAllButton;
