const JobCardLoader = () => {
  return (
    <div className="mx-auto mb-6 flex max-w-xl rounded-xl border border-gray-200 bg-white py-6 px-6 shadow-sm  dark:border-neutral3 dark:bg-neutral2 dark:shadow-md">
      <div className="w-full">
        <div className="flex animate-pulse space-x-2">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 h-4 rounded bg-slate-300 dark:bg-neutral4"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-5 rounded bg-slate-300 dark:bg-neutral4"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 h-3 rounded bg-slate-300 dark:bg-neutral4"></div>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-1 h-3 rounded bg-slate-300 dark:bg-neutral4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardLoader;
