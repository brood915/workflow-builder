import { recordTypes, triggers, actions } from '../../constants/workflowData';

const ReviewStep = ({ workflowData }) => {
  const selectedRecordTypes = recordTypes.filter(t => workflowData.recordTypes.includes(t.id));
  const selectedTrigger = triggers.find(t => t.id === workflowData.trigger);
  const selectedAction = actions.find(a => a.id === workflowData.action);

  return (
    <div className="text-[14px]">
      <h3 className="text-[16px] mb-2">Review your workflow below. Click a step to make edits if needed.</h3>
      <div className="bg-[#FAFAFA] border border-solid border-[#D1D1D1] rounded-lg p-2 space-y-4">
          <div className="space-y-1">
            When any of the following record types is {selectedTrigger?.reviewName}, {selectedAction?.reviewName}.
            <ul className="list-disc pl-5 space-y-1 marker:text-xs">
              {selectedRecordTypes.map((t) => (
                <li key={t.id} className="text-gray-900">
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
};

export default ReviewStep;