'use client'

import { useState } from "react";

function CreditCalculator() {
  const [uiDesigns, setUiDesigns] = useState(50);
  const [revisions, setRevisions] = useState(20);

  const costPerUiDesign = 30;
  const costPerRevision = 10;

  const totalCredits = (uiDesigns * costPerUiDesign) + (revisions * costPerRevision);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold tracking-tighter text-center text-white sm:text-3xl">Credit Calculator</h3>
      <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:max-w-3xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-300">UI Designs</label>
          <input
            className="mt-1 block w-full py-2 px-3 border text-black rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm dark:border-zinc-800"
            min="0"
            type="number"
            value={uiDesigns}
            onChange={(e) => setUiDesigns(parseInt(e.target.value))}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-300">Revisions</label>
          <input
            className="mt-1 block w-full py-2 px-3 border text-black rounded-md shadow-sm focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm dark:border-zinc-800"
            min="0"
            type="number"
            value={revisions}
            onChange={(e) => setRevisions(parseInt(e.target.value))}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-gray-300">Total Credits</label>
          <p className="mt-1 block w-full py-2 px-3 text-lg font-bold text-white">{totalCredits}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCalculator;
