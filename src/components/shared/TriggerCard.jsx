import React from 'react';
import { Check } from 'lucide-react';

const TriggerCard = ({ trigger, isSelected, onSelect }) => {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-blue-300 ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200 bg-white hover:bg-gray-50'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-gray-900">{trigger.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{trigger.description}</p>
        </div>
        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
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

export default TriggerCard;