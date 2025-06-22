import { useState } from "react";
import { loadDraft } from "../utils/draft";

export const useWorkflowState = () => {
  const draft = loadDraft();
  const [currentStep, setCurrentStep] = useState(draft?.currentStep ?? 1);

  const initialWorkflowData =  draft?.workflowData ??
      {
        criteriaStage: "base",
        baseEntity: "",
        recordTypes: [],
        trigger: "",
        action: [],
      };

  const [workflowData, setWorkflowData] = useState(initialWorkflowData);

  const isStepValid = (step) => {
    if (step !== 1) {
      if (step === 2) return workflowData.trigger !== "";
      if (step === 3) return workflowData.action.length !== 0;
      return true;
    }

    if (workflowData.criteriaStage === "base") {
      return workflowData.baseEntity !== "";
    }
    return workflowData.recordTypes.length > 0;
  };

  const isStepCompleted = (id) =>
    id < currentStep || (id === currentStep && isStepValid(id));

  const handleNext = () => {
    if (currentStep === 1) {
      if (!isStepValid(1)) return;

      if (workflowData.criteriaStage === "base") {
        setWorkflowData((d) => ({ ...d, criteriaStage: "recordTypes" }));
      } else {
        setCurrentStep(2);
      }
      return;
    }

    if (currentStep < 4 && isStepValid(currentStep)) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      if (workflowData.criteriaStage === "recordTypes") {
        setWorkflowData((d) => ({ ...d, criteriaStage: "base" }));
      }
      return;
    }
    setCurrentStep((s) => (s > 1 ? s - 1 : s));
  };

  const handleStepClick = (stepId) => {
    if (stepId === 1) {
      setCurrentStep(1);
      return;
    }
    if (isStepCompleted(stepId)) setCurrentStep(stepId);
  };

  const updateWorkflowData = (updates) =>
    setWorkflowData((prev) => ({ ...prev, ...updates }));

  return {
    currentStep,
    workflowData,
    isStepValid,
    isStepCompleted,
    handleNext,
    handleBack,
    handleStepClick,
    updateWorkflowData,
  };
};
