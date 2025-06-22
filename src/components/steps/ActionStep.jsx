import { actions } from '../../constants/workflowData';
import RadioCard from '../shared/RadioCard';

const ActionStep = ({ workflowData, updateWorkflowData }) => {
    const handleActionSelect = (id) => {
    updateWorkflowData({ action: id });
  };

  return (
    <div>
      <h3 className="text-[16px] mb-2">What should happen once the workflow begins?</h3>
      <p className="text-[12px] text-[#424242] mb-3">Select at least 1 action to continue. You can add additional actions later.</p>
     <div className="space-y-3 mb-2">
        {actions.map((action) => (
          <RadioCard
            key={action.id}
            option={action}
            isSelected={workflowData.action === action.id}
            onSelect={() => handleActionSelect(action.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ActionStep;