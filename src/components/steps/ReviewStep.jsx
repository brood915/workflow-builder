import React from 'react';
import { recordTypes, triggers, actions } from '../../constants/workflowData';

const ReviewStep = ({ workflowData }) => {
  const selectedRecordTypes = recordTypes.filter(t => workflowData.recordTypes.includes(t.id));
  const selectedTrigger = triggers.find(t => t.id === workflowData.trigger);
  const selectedAction = actions.find(a => a.id === workflowData.action);

  return (
    <div className="text-[#242424]">
      <h3 className="text-[16px] mb-2">Review summary</h3>
      <p className="text-gray-600 mb-6">Review your workflow configuration before creating</p>
      
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            Record Types
          </h4>
          <div className="space-y-1">
            {selectedRecordTypes.map(type => (
              <p key={type.id} className="text-gray-900">{type.name}</p>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            Trigger
          </h4>
          <p className="text-gray-900">{selectedTrigger?.name}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            Action
          </h4>
          <p className="text-gray-900">{selectedAction?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;