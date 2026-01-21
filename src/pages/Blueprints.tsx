// src/pages/Blueprints.tsx
import type { Blueprint } from "../types"; // ✅ type-only import

const Blueprints = () => {
  const dummyBlueprints: Blueprint[] = [
    { id: "1", name: "Sample", fields: [] },
  ];

  return (
    <div>
      <h1>Blueprints</h1>
      {dummyBlueprints.map((bp) => (
        <div key={bp.id}>{bp.name}</div>
      ))}
    </div>
  );
};

export default Blueprints;
