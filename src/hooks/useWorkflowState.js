// src/hooks/useWorkflowState.js
import { useState } from "react";

export const useWorkflowState = () => {
  /* ──────────────────────────────────────────────────────────
     We stay on step 1 while criteriaStage flips between
     "base" and "recordTypes"
     ────────────────────────────────────────────────────────── */
  const [currentStep, setCurrentStep] = useState(1);
  const [workflowData, setWorkflowData] = useState({
    /* criteria */
    criteriaStage: "base", // "base" | "recordTypes"
    baseEntity:     "",    // one of baseOptions[].id

    /* second half of criteria */
    recordTypes: [],       // array of recordType ids

    /* later steps */
    trigger: "",
    action:  "",
  });

  /* ───── validation per (sub-)step ───── */
  const isStepValid = (step) => {
    if (step !== 1) {
      if (step === 2) return workflowData.trigger !== "";
      if (step === 3) return workflowData.action  !== "";
      return true;
    }
    /* step 1 */
    if (workflowData.criteriaStage === "base") {
      return workflowData.baseEntity !== "";
    }
    return workflowData.recordTypes.length > 0;
  };

  /* ───── completed? (for progress bar) ───── */
  const isStepCompleted = (id) =>
    id < currentStep || (id === currentStep && isStepValid(id));

  /* ───── navigation ───── */
  const handleNext = () => {
    /* still inside Criteria? */
    if (currentStep === 1) {
      if (!isStepValid(1)) return;

      if (workflowData.criteriaStage === "base") {
        setWorkflowData((d) => ({ ...d, criteriaStage: "recordTypes" }));
      } else {
        setCurrentStep(2); // finally proceed
      }
      return;
    }

    /* steps 2–3 */
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
    /* prevent jumping out of incomplete criteria */
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
