import React from 'react';
import { Check } from 'lucide-react';
import { steps } from '../constants/workflowData';

const StepIndicator = ({ currentStep, isStepCompleted, onStepClick }) => {
  return (
    <div className="flex items-center justify-between mb-8 px-2">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium cursor-pointer transition-all ${
                isStepCompleted(step.id)
                  ? 'bg-blue-600 text-white'
                  : step.id === currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
              onClick={() => onStepClick(step.id)}
            >
              {isStepCompleted(step.id) && step.id < currentStep ? (
                <Check size={14} />
              ) : (
                step.id
              )}
            </div>
            <span className={`text-xs mt-1 text-center ${
              step.id === currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'
            }`}>
              {step.name}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-4 mt-[-10px] ${
              isStepCompleted(step.id) ? 'bg-blue-600' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;