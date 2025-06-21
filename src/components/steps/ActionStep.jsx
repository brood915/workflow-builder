import React from 'react';
import { actions } from '../../constants/workflowData';
import ActionCard from '../shared/ActionCard';

const ActionStep = ({ workflowData, updateWorkflowData }) => {
  const handleActionSelect = (actionId) => {
    updateWorkflowData({ action: actionId });
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Choose action</h3>
      <p className="text-gray-600 mb-6">Select what should happen when the trigger is activated</p>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
            isSelected={workflowData.action === action.id}
            onSelect={() => handleActionSelect(action.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ActionStep;