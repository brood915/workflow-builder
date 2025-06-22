import { X, ChevronLeft } from "lucide-react";
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

  const handleClose = () => {
    localStorage.removeItem("workflow-draft");
    window.location.reload(); //just added for the demo
    alert("Workflow builder closed"); //would replace with an actual notification flag component instead if I had more time
  };
  const handleSubmit = () => {
    localStorage.removeItem("workflow-draft");
    window.location.reload(); //just added for the demo
    alert("Workflow created successfully!"); //would replace with an actual notification flag component instead if I had more time
  };

  const handleSaveDraft = () => {
    localStorage.setItem(
      "workflow-draft",
      JSON.stringify({ workflowData, currentStep })
    );
    alert("Draft saved! You can resume it later."); //would replace with an actual notification flag component instead if I had more time
  };

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

        {/* ───── Header ───── */}
        <div className="p-6 flex items-center justify-between">
          <h2 className="font-semibold text-[14px]">New Workflow</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <X size={16} className="hover:opacity-50" />
          </button>
        </div>

        {/* ───── Step bar ───── */}
        <div className="px-8">
          <StepIndicator
            currentStep={currentStep}
            isStepCompleted={isStepCompleted}
            onStepClick={handleStepClick}
          />
        </div>

        {/* ───── Body ───── */}
        <div className="flex-1 px-6 pb-6 overflow-y-auto">{renderStep()}</div>

        {/* ───── Footer ───── */}
  {/* Footer */}
<div className="flex items-center p-6 border-t">

  {/* Back – left edge */}
  {workflowData.criteriaStage !== "base" && (
    <button
      onClick={handleBack}
      disabled={currentStep === 1 && workflowData.criteriaStage === "base"}
      className={`flex items-center py-2 text-sm transition-colors underline ${
        currentStep === 1 && workflowData.criteriaStage === "base"
          ? "text-gray-400 cursor-not-allowed"
          : "text-[#2F6DE9] hover:text-blue-700"
      }`}
    >
      <ChevronLeft size={16} className="mr-1" />
      Back
    </button>
  )}

  {/* flexible spacer pushes everything that follows to far-right */}
  <div className="flex-1" />

  {/* Save & Finish Later – 5 px left of Next */}
  {currentStep !== 1 && (
    <button
      onClick={handleSaveDraft}
      className="px-8 py-2 rounded-lg text-sm font-medium text-[#1849A9] hover:text-blue-700"
    >
      Save & Finish Later
    </button>
  )}

  {/* Next / final-step button – always rightmost */}
  {currentStep < 4 ? (
    <button
      onClick={handleNext}
      disabled={!isStepValid(currentStep)}
      className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
        isStepValid(currentStep)
          ? "bg-[#1849A9] text-white hover:bg-blue-700"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      Next
    </button>
  ) : (
    <button
      onClick={handleSubmit}
      className="px-6 py-2 bg-[#1849A9] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
    >
      Save Draft
    </button>
  )}
</div>

      </div>
    </div>
  );
};

export default WorkflowBuilder;
