import { actions } from '../../constants/workflowData';
import CheckboxCard from '../shared/CheckboxCard';

const ActionStep = ({ workflowData, updateWorkflowData }) => {
    const toggleAction = (id) => {
      const next = workflowData.action.includes(id)
        ? workflowData.action.filter((x) => x !== id)
        : [...workflowData.action, id];
      updateWorkflowData({ action: next });
    };

  return (
    <div>
      <h3 className="text-[16px] mb-2">What should happen once the workflow begins?</h3>
      <p className="text-[12px] text-[#424242] mb-3">Select at least 1 action to continue. You can add additional actions later.</p>
     <div className="space-y-3 mb-2">
        {actions.map((type) => (
          <CheckboxCard
            key={type.id}
            type={type}
            isSelected={workflowData.action.includes(type.id)}
            onToggle={() => toggleAction(type.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ActionStep;