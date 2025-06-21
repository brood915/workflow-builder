import React from 'react';
import { triggers } from '../../constants/workflowData';
import TriggerCard from '../shared/TriggerCard';

const TriggerStep = ({ workflowData, updateWorkflowData }) => {
  const handleTriggerSelect = (triggerId) => {
    updateWorkflowData({ trigger: triggerId });
  };

  return (
    <div className="text-[#242424]">
      <h3 className="text-[16px] mb-2">What should trigger this workflow?</h3>
      <div className="space-y-3">
        {triggers.map((trigger) => (
          <TriggerCard
            key={trigger.id}
            trigger={trigger}
            isSelected={workflowData.trigger === trigger.id}
            onSelect={() => handleTriggerSelect(trigger.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TriggerStep;