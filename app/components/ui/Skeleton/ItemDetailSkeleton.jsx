import React from "react";

const ItemDetailSkeleton = () => {
  return (
    <article className="animate-pulse max-w-xs md:max-w-6xl bg-white border border-gray-200 rounded-2xl shadow dark:bg-background-dark dark:border-gray-900">
      <div className="flex flex-col md:flex-row">
        <div className="pt-8 md:pl-16 flex justify-center items-center">
          <picture className="mb-8 flex justify-center">
            <div className="min-h-8 md:min-h-72 md:max-h-[644px] min-w-8 md:min-w-72 md:max-w-[644px] bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          </picture>
        </div>
        <div className="p-8 md:p-16">
          <div>
            <h1 className="rounded-lg bg-slate-200 dark:bg-slate-700 mb-2 text-2xl md:text-6xl font-bold tracking-tight text-transparent">
              Texto de Ejemplo
            </h1>
          </div>
          <p className="rounded-lg bg-slate-200 dark:bg-slate-700 mb-3 text-transparent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum
            cumque illum nam autem? Doloribus, quam. Maxime porro recusandae
            unde, ipsum veritatis, nobis totam, asperiores labore ut ducimus
            deleniti iusto.
          </p>
          <p className="rounded-lg bg-slate-200 dark:bg-slate-700 mb-3 text-3xl md:text-5xl font-semibold text-transparent">
            777777
          </p>
          <div className="rounded-lg flex flex-col">
            <div className="rounded-lg flex flex-col gap-4">
                <h2 className="rounded-lg text-xl md:text-3xl text-transparent bg-slate-300 dark:bg-slate-600">Cantidad de productos: </h2>
                <div className="rounded-lg flex flex-row items-center justify-center">
                    <div
                        className="transition px-4 py-1 md:px-6  md:py-2 text-2xl md:text-lg font-semibold text-center text-transparent rounded-lg bg-slate-300 dark:bg-slate-600"
                    >
                        -
                    </div>
                    <div className="bg-slate-200 dark:bg-slate-700 w-full h-full py-1 mx-4 rounded-lg text-center">
                        <h2 className="text-2xl md:text-3xl text-transparent">2</h2>
                    </div>
                    <div
                        className="transition px-4 py-1 md:px-6  md:py-2 text-2xl md:text-lg font-semibold text-center text-transparent rounded-lg bg-slate-300 dark:bg-slate-600"
                    >
                        +
                    </div>
                </div>
                <div
                className="w-full transition px-4 py-1 md:px-6  md:py-2 text-md md:text-lg font-semibold text-center text-transparent rounded-lg bg-slate-200 dark:bg-slate-700"
                >
                Agregar al carrito
                </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemDetailSkeleton;
