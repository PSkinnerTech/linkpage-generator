import { StateContext } from "@/context/state";
import Image from "next/image";
import React, { useContext } from "react";

export default function Templates() {
  const { templates, setValue, value } = useContext(StateContext);

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-purple-600">
          Choose a template
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {templates.map((item, index) => (
            <article key={index} className="cursor-pointer">
              <Image
                src={item.image}
                width={150}
                height={250}
                alt={`Template number ${index + 1}`}
                onClick={() => setValue(index)}
                className={`border border-purple-600 p-2 rounded-lg shadow hover:ring-4 hover:ring-purple-300 transition-all duration-150 h-72 w-full object-cover ${
                  value === index && "ring-purple-300 ring-4"
                } `}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
