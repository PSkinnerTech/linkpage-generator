import React, { useContext } from "react";
import { StateContext } from "@/context/state";
import { Image } from "cloudinary-react";

export default function Phone() {
  const { name, bio, links, imageData, image } = useContext(StateContext);

  return (
    <>
      <div
        style={{
          height: 700,
          borderRadius: 40,
          background: `url(${image}) no-repeat center/cover`,
        }}
        className="border-8 border-black w-full sm:w-96 sm:mx-auto md:scale-90 md:fixed md:right-8 lg:right-20 xl:right-32 2xl:right-52 overflow-auto"
      >
        <div className="p-8">
          <article>
            {imageData && (
              <Image
                cloudName="sankara"
                publicId={`https://res.cloudinary.com/sankara/image/upload/v1680385276/${imageData.public_id}`}
                className="w-40 h-40 rounded-full shadow block mx-auto mb-8 object-cover"
                alt="Profile Image"
              />
            )}
          </article>

          <article>
            <h1 className="text-center text-xl font-bold text-slate-800">
              {name}
            </h1>
            <p className="mt-4 text-center">{bio}</p>
          </article>

          <ul className="mt-8 text-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer mb-4 py-3 px-2 bg-white rounded shadow text-slate-600 font-bold pop"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
