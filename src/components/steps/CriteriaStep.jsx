// src/components/steps/CriteriaStep.jsx
import React from "react";
import { baseOptions, recordTypes } from "../../constants/workflowData";
import BaseEntityCard   from "../shared/BaseEntityCard";
import RecordTypeCard   from "../shared/RecordTypeCard";
import SelectAllButton  from "../shared/SelectAllButton";

const CriteriaStep = ({ workflowData, updateWorkflowData }) => {
  /* ───────── stage-specific handlers ───────── */
  const pickBase = (id) => updateWorkflowData({ baseEntity: id });

  const toggleRecordType = (id) => {
    const next = workflowData.recordTypes.includes(id)
      ? workflowData.recordTypes.filter((x) => x !== id)
      : [...workflowData.recordTypes, id];
    updateWorkflowData({ recordTypes: next });
  };

  const toggleSelectAll = () =>
    updateWorkflowData({
      recordTypes:
        workflowData.recordTypes.length === recordTypes.length
          ? []
          : recordTypes.map((t) => t.id),
    });

  if (workflowData.criteriaStage === "base") {
    return (
      <>
        <h3 className="text-[16px] text-[#242424] mb-6">
          What will this workflow be based on?
        </h3>

        <div className="space-y-3">
          {baseOptions.map((opt) => (
            <BaseEntityCard
              key={opt.id}
              option={opt}
              isSelected={workflowData.baseEntity === opt.id}
              onSelect={() => pickBase(opt.id)}
            />
          ))}
        </div>
      </>
    );
  }

  /* second sub-screen */
  return (
    <>
      <h3 className="text-[16px] text-[#242424] mb-6">
        Which record types should be included?
      </h3>

      <div className="space-y-3 mb-2">
        {recordTypes.map((type) => (
          <RecordTypeCard
            key={type.id}
            type={type}
            isSelected={workflowData.recordTypes.includes(type.id)}
            onToggle={() => toggleRecordType(type.id)}
          />
        ))}
      </div>
      <SelectAllButton
        selectedCount={workflowData.recordTypes.length}
        totalCount={recordTypes.length}
        onSelectAll={toggleSelectAll}
      />
    </>
  );
};

export default CriteriaStep;
