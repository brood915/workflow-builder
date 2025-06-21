// src/components/shared/BaseEntityCard.jsx
import React from "react";
import { Check } from "lucide-react";

const BaseEntityCard = ({ option, isSelected, onSelect }) => {
  const Icon = option.icon;

  return (
    <div
      className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all
        ${isSelected
          ? "border-2 border-solid border-[#1849A9]"
          : "border-gray-200 bg-white hover:bg-gray-50"}`}
      onClick={onSelect}
    >
      <div
        className={`p-2 rounded-md mr-3 ${
          isSelected ? "bg-blue-100" : "bg-gray-100"
        }`}
      >
        <Icon size={16} />
      </div>

      <span className="flex-1 text-gray-900">{option.name}</span>
    </div>
  );
};

export default BaseEntityCard;
