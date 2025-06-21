// src/components/WorkflowBuilder.jsx
import React from "react";
import { X, ChevronLeft } from "lucide-react";

/* use ONE dot for same-folder files, TWO dots for items in /src */
import { useWorkflowState } from "../hooks/useWorkflowState";

import StepIndicator from "./StepIndicator";
import CriteriaStep  from "./steps/CriteriaStep";
import TriggerStep   from "./steps/TriggerStep";
import ActionStep    from "./steps/ActionStep";
import ReviewStep    from "./steps/ReviewStep";

const WorkflowBuilder = () => {
  const {
    currentStep,
    workflowData,
    isStepValid,
    isStepCompleted,
    handleNext,
    handleBack,
    handleStepClick,
    updateWorkflowData,
  } = useWorkflowState();

  const handleClose = () => alert("Workflow builder closed");
  const handleSubmit = () => {
    localStorage.removeItem("workflow-draft");
    alert("Workflow created successfully!");
  };

  const handleSaveDraft = () => {
    localStorage.setItem(
      "workflow-draft",
      JSON.stringify({ workflowData, currentStep })
    );
    alert("Draft saved! You can resume it later.");
  };

  /* helper */
  const renderStep = () => {
    const common = { workflowData, updateWorkflowData };
    switch (currentStep) {
      case 1: return <CriteriaStep {...common} />;
      case 2: return <TriggerStep  {...common} />;
      case 3: return <ActionStep   {...common} />;
      case 4: return <ReviewStep   workflowData={workflowData} />;
      default:return <CriteriaStep {...common} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <h2 className="font-semibold text-[14px] text-[#242424] ">New Workflow</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <X size={16} className="text-[#242424] hover:opacity-50" />
          </button>
        </div>

        {/* Steps bar */}
        <div className="px-8">
          <StepIndicator
            currentStep={currentStep}
            isStepCompleted={isStepCompleted}
            onStepClick={handleStepClick}
          />
        </div>

        {/* Body */}
        <div className="flex-1 px-6 pb-6 overflow-y-auto">
          {renderStep()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <button
            onClick={handleBack}
            disabled={currentStep === 1 && workflowData.criteriaStage === "base"}
            className={`flex items-center px-4 py-2 text-sm transition-colors ${
              currentStep === 1 && workflowData.criteriaStage === "base"
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </button>

          {currentStep !== 1 && <button
            onClick={handleSaveDraft}
            className={`px-4 py-2 text-sm rounded-lg transition-colors mr-auto
              ${currentStep === 1 && !isStepValid(1)
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600 hover:text-blue-700"}`}
          >
            Save & Finish Later
          </button>}

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid(currentStep)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                isStepValid(currentStep)
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Create Workflow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
