import React from 'react';
function Sceleton() {
  return (
    <div className="card bg-[#eeeeee] shadow-md w-[300px] h-[350px] m-[20px] rounded-[10px] cursor-pointer">
      <div className="border  shadow rounded-md p-4 max-w-sm h-[350px] w-[300px] mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sceleton;
