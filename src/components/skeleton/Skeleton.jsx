import React from 'react';

const Skeleton = ({ count }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array(count)
        .fill("")
        .map((_, index) => (
          <div key={index} className="bg-gray-200 dark:bg-gray-100 rounded-xl shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-300 mb-4" />
            <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-300 mb-2 rounded" />
            <div className="w-1/2 h-3 bg-gray-300 dark:bg-gray-300 mb-4 rounded" />
            <div className="w-full space-y-2 mt-2">
              <div className="h-3 w-full bg-gray-300 dark:bg-gray-300 rounded" />
              <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-300 rounded" />
              <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-300 rounded" />
            </div>
            <div className="mt-6 flex gap-3 w-full justify-center">
              <div className="h-8 w-20 bg-gray-300 dark:bg-gray-300 rounded" />
              <div className="h-8 w-20 bg-gray-300 dark:bg-gray-300 rounded" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Skeleton;
