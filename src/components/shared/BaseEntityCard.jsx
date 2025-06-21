// src/components/shared/BaseEntityCard.jsx
import React from "react";
import { Check } from "lucide-react";

const BaseEntityCard = ({ option, isSelected, onSelect }) => {
  const Icon = option.icon;

  return (
    <div
      className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all
        ${isSelected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 bg-white hover:bg-gray-50"}`}
      onClick={onSelect}
    >
      <div
        className={`p-2 rounded-md mr-3 ${
          isSelected ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        <Icon size={16} className={isSelected ? "text-blue-600" : "text-gray-600"} />
      </div>

      <span className="flex-1 text-gray-900">{option.name}</span>

      <div
        className={`w-4 h-4 border rounded flex items-center justify-center ${
          isSelected ? "bg-blue-600 border-blue-600" : "border-gray-300"
        }`}
      >
        {isSelected && <Check size={12} className="text-white" />}
      </div>
    </div>
  );
};

export default BaseEntityCard;
