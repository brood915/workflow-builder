import React from 'react';
import { triggers } from '../../constants/workflowData';
import TriggerCard from '../shared/TriggerCard';

const TriggerStep = ({ workflowData, updateWorkflowData }) => {
  const handleTriggerSelect = (triggerId) => {
    updateWorkflowData({ trigger: triggerId });
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Define trigger</h3>
      <p className="text-gray-600 mb-6">Select the event that will activate this workflow</p>
      
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