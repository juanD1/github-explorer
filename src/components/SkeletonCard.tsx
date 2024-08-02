import React from "react";

const SkeletonCard: React.FC = () => (
  <li className="animate-pulse w-full p-2 border border-slate-400 rounded-md cursor-pointer transform transition duration-100">
    <div className="flex items-center">
      <div className="inline-block rounded-full ring-2 ring-slate-400 bg-slate-400 w-12 h-12 mr-4"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-2 bg-slate-400 rounded"></div>
        <div className="h-2 bg-slate-400 rounded"></div>
      </div>
    </div>
  </li>
);

export default SkeletonCard;
