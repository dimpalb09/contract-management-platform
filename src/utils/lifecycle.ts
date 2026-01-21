// src/utils/lifecycle.ts
import { type Contract } from "../types";

const nextStatusMap: Record<Contract["status"], Contract["status"] | null> = {
  Created: "Approved",
  Approved: "Sent",
  Sent: "Signed",
  Signed: "Locked",
  Locked: null,
};

export const getNextStatus = (contract: Contract): Contract["status"] | null => {
  return nextStatusMap[contract.status];
};

export const advanceContract = (contract: Contract): Contract => {
  const nextStatus = getNextStatus(contract);
  if (!nextStatus) return contract;
  return { ...contract, status: nextStatus };
};
