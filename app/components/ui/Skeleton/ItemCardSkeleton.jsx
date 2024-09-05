import React from 'react'

const ItemCardSkeleton = () => {
    return (  
      <div className="animate-pulse flex flex-col items-center">
        <article className="max-w-xs bg-white border border-gray-200 rounded-2xl shadow dark:bg-background-dark dark:border-gray-900">
          <div className="p-5">
            <picture className="mb-8 flex justify-center">
              <div className="min-h-8 md:h-36 min-w-8 md:w-36 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
            </picture>
            <div>
              <h5 className="h-fit mb-2 text-2xl font-bold tracking-tight text-transparent bg-slate-300 dark:bg-slate-600 rounded-lg">
                Lorem Ipsum Dolor sit amet
              </h5>
            </div>
            <p className="mb-3 font-normal text-transparent bg-slate-200 dark:bg-slate-700 rounded-lg">
              Esto es una descripción totalmente de relleno para realizar el
              skeleton
            </p>
            <p className="w-fit mb-3 text-lg md:text-xl font-normal text-transparent bg-slate-300 dark:bg-slate-600 rounded-lg">
              2 disponibles
            </p>
            <p className="w-fit mb-3 text-2xl md:text-3xl font-semibold text-transparent bg-slate-200 dark:bg-slate-700 rounded-lg">
              22222
            </p>
            <div className="w-fit h-fit transition px-4 py-1 md:px-6 md:py-2 text-md md:text-lg font-semibold text-center text-transparent rounded-lg bg-slate-300 dark:bg-slate-600">
              Texto de ejemplo
            </div>
          </div>
        </article>
      </div>
    );
  };

export default ItemCardSkeleton