const JobCardLoader = () => {
    return (
        <div className="flex py-6 px-6 max-w-xl mb-6 mx-auto rounded-xl border bg-white border-gray-200 shadow-sm  dark:shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full">
                <div className="flex animate-pulse space-x-2">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-5 bg-slate-300 dark:bg-slate-700 rounded col-span-2"></div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="grid grid-cols-6 gap-4">
                                <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded col-span-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCardLoader