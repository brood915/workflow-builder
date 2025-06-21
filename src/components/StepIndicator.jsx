// src/components/StepIndicator.jsx
import React from "react";
import { Check } from "lucide-react";
import { steps } from "../constants/workflowData";

/* Figma colours */
const GREY   = "#D1D1D1"; 
const GREEN  = "#14833B";
const LABEL  = "#242424"; 

const StepIndicator = ({ currentStep, isStepCompleted, onStepClick }) => (
  <div className="flex items-center justify-between mb-3">
    {steps.map((step, idx) => {
      const completed = isStepCompleted(step.id) && step.id < currentStep;
      const active    = step.id === currentStep;

      let circleCls =
        "flex items-center justify-center w-6 h-6 rounded-full cursor-pointer transition-colors z-10";
      if (completed) {
        circleCls += ` bg-[${GREEN}] text-white`;
      } else if (active) {
        circleCls += ` bg-white border border-[${GREY}]`;
      } else {
        circleCls += ` bg-[#F0F0F0] border border-[${GREY}]`;
      }

      return (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center">
            <div className={circleCls} onClick={() => onStepClick(step.id)}>
              {completed && <Check size={14} className="text-white" />}
            </div>
            <span className={`text-[0.75rem] text-[${LABEL}] `}>
              {step.name}
            </span>
          </div>

          {idx < steps.length - 1 && (
            <div
              className={`flex-1 h-px -ml-[12px] -mr-[12px] border border-solid border-[${GREY}] -mt-[15px] `}
            />
          )}
        </React.Fragment>
      );
    })}
  </div>
);

export default StepIndicator;
