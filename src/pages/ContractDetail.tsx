import React, { useState } from "react";
import { type Contract } from "../types";
import { advanceContract } from "../utils/lifecycle";

const ContractDetail = ({ contract }: { contract: Contract }) => {
  const [currentContract, setCurrentContract] = useState(contract);

  const handleNext = () => {
    setCurrentContract(advanceContract(currentContract));
  };

  return (
    <div>
      <h2>Contract ID: {currentContract.id}</h2>
      <p>Status: {currentContract.status}</p>
      <button onClick={handleNext}>Advance Status</button>
    </div>
  );
};

export default ContractDetail;
