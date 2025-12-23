
import { CandidateStatus } from "@/types/index";

export const STEPS = [
  { label: "Pending WFM Approval", key: "PENDING_WFM" },
  { label: "Rejected", key: "REJECTED" },
  { label: "Select for Interview", key: "SELECTED" },
  { label: "Allocation", key: "ALLOCATED" },
] as const;

export const statusIndexMap: Record<CandidateStatus, number> = {
  PENDING_WFM: 1,
  REJECTED: 1,
  SELECTED: 2,
  ALLOCATED: 3,
};
