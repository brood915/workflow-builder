import React from "react";
import { Check } from "lucide-react";
import { steps } from "../constants/workflowData";

const StepIndicator = ({ currentStep, isStepCompleted, onStepClick }) => (
  <div className="flex items-center justify-between mb-3">
    {steps.map((step, idx) => {
      const completed = isStepCompleted(step.id) && step.id < currentStep;
      const active = step.id === currentStep;

      let circleCls =
        "flex items-center justify-center w-6 h-6 rounded-full cursor-pointer transition-colors z-10";
      if (completed) {
        circleCls += ' bg-[#14833B] text-white';
      } else if (active) {
        circleCls += ' bg-white border border-[#D1D1D1]';
      } else {
        circleCls += ' bg-[#F0F0F0] border border-[#D1D1D1]';
      }

      return (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <div className={circleCls} onClick={() => onStepClick(step.id)}>
              {completed && <Check size={18} className="text-white font-black" />}
            </div>
            <span className='text-[12px]'>
              {step.name}
            </span>
          </div>

          {idx < steps.length - 1 && (
            <div
              className={`flex-1 h-px -ml-[12px] -mr-[12px] border border-solid border-[#D1D1D1] -mt-[15px] `}
            />
          )}
        </React.Fragment>
      );
    })}
  </div>
);

export default StepIndicator;
