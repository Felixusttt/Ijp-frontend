// ProgressBar.tsx
import { CandidateStatus } from "@/types/index";
import { STEPS,statusIndexMap  } from "@/utils/progressConfig";

interface Props {
  status: CandidateStatus;
}

const ProgressBar: React.FC<Props> = ({ status }) => {
  const activeIndex = statusIndexMap[status];

  return (
    <div className="w-full bg-white rounded-lg p-4">
      <div className="flex items-center">
        {STEPS.map((step, index) => {
          const isCompleted = index < activeIndex;
          const isActive = index === activeIndex;
          const isRejected = status === "REJECTED" && index === 1;

          return (
            <div key={step.key} className="flex items-center w-full">
              {/* Circle */}
              <div
                className={`h-3 w-3 rounded-full transition-all
                  ${isRejected && "bg-red-500"}
                  ${isActive && status !== "REJECTED" && "bg-purple-600"}
                  ${isCompleted && "bg-teal-600"}
                  ${!isCompleted && !isActive && "bg-gray-300"}
                `}
              />

              {/* Line */}
              {index !== STEPS.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-2 transition-all
                    ${index < activeIndex ? "bg-teal-600" : "bg-gray-300"}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Status Label */}
      <p
        className={`mt-3 text-sm font-medium
          ${status === "REJECTED" && "text-red-500"}
          ${status === "SELECTED" && "text-purple-600"}
          ${status === "ALLOCATED" && "text-purple-600"}
          ${status === "PENDING_WFM" && "text-purple-600"}
        `}
      >
        {STEPS[activeIndex].label}
      </p>
    </div>
  );
};

export default ProgressBar;
