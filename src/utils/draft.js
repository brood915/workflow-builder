  export const loadDraft = () => {
    try {
      const raw = localStorage.getItem("workflow-draft");
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (
        typeof parsed.currentStep === "number" &&
        parsed.workflowData &&
        typeof parsed.workflowData === "object"
      ) {
        return parsed;
      }
    } catch (_) {}
    return null;
  };