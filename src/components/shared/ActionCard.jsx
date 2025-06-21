import React from 'react';
import { Check } from 'lucide-react';

const ActionCard = ({ action, isSelected, onSelect }) => {
  const IconComponent = action.icon;

  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-blue-300 ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:bg-gray-50'
      }`}
      onClick={onSelect}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`p-3 rounded-lg mb-3 ${
          isSelected ? 'bg-blue-100' : 'bg-gray-100'
        }`}>
          <IconComponent size={20} className={
            isSelected ? 'text-blue-600' : 'text-gray-600'
          } />
        </div>
        <h4 className="font-medium text-gray-900 mb-1">{action.name}</h4>
        <p className="text-xs text-gray-600">{action.description}</p>
        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mt-3 ${
          isSelected
            ? 'border-blue-600 bg-blue-600'
            : 'border-gray-300'
        }`}>
          {isSelected && <Check size={10} className="text-white" />}
        </div>
      </div>
    </div>
  );
};

export default ActionCard;