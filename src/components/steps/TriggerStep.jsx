import { triggers } from '../../constants/workflowData';
import RadioCard from '../shared/RadioCard';

const TriggerStep = ({ workflowData, updateWorkflowData }) => {
  const handleTriggerSelect = (triggerId) => {
    updateWorkflowData({ trigger: triggerId });
  };

  return (
    <div>
      <h3 className="text-[16px] mb-3">What should trigger this workflow?</h3>
      <div className="space-y-3">
        {triggers.map((trigger) => (
          <RadioCard
            key={trigger.id}
            option={trigger}
            isSelected={workflowData.trigger === trigger.id}
            onSelect={() => handleTriggerSelect(trigger.id)}
          />
        ))}
      </div>
      {workflowData.trigger !== "" && <div className="text-right text-[#1849A9] cursor-pointer font-medium text-sm mt-4 hover:opacity-80">
        <span className='text-[15px] mr-2 '>+</span>
        Add Condition
      </div>}
    </div>
  );
};

export default TriggerStep;