import { recordTypes, triggers, actions } from '../../constants/workflowData';

const ReviewStep = ({ workflowData }) => {
  const selectedRecordTypes = recordTypes.filter(t => workflowData.recordTypes.includes(t.id));
  const selectedTrigger = triggers.find(t => t.id === workflowData.trigger);
  const selectedActions = actions.filter(a => workflowData.action.includes(a.id));

  return (
    <div className="text-[14px]">
      <h3 className="text-[16px] mb-2">Review your workflow below. Click a step to make edits if needed.</h3>
      <div className="bg-[#FAFAFA] border border-solid border-[#D1D1D1] rounded-lg p-2 space-y-4">
        <div>
          <div className="space-y-1">
            When any of the following record types is {selectedTrigger?.reviewName}, {' '}
            {
              selectedActions.map((action, idx) => {
                const lastIndex = selectedActions.length - 1;
                const text = action.reviewName;
                let sep = "";
                if (idx < lastIndex - 1) sep = ", ";
                else if (idx === lastIndex - 1) sep = " and ";

                return (
                  <span key={action.id} className="text-gray-900">
                    {text}
                    {sep}
                  </span>
                );
              })
            }
            .
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
    </div>
  );
};

export default ReviewStep;