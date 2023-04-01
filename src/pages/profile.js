import { StateContext } from "@/context/state";
import { Image } from "cloudinary-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function Profile() {
  const { name, bio, imageData, links, image } = useContext(StateContext);

  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>iRecreate Linktree | {name}</title>
      </Head>

      <section
        style={{
          background: `url(${image}) no-repeat center/cover`,
        }}
        className="h-screen overflow-auto"
      >
        <div className="fixed bottom-4 lg:top-8 lg:bottom-auto right-4 lg:right-8 scale-75 lg:scale-100">
          <button
            onClick={handleEditProfile}
            className="bg-purple-600 text-purple-100 font-bold py-2 px-6 rounded hover:ring-4 hover:ring-purple-300 transition-all duration-150 text-sm"
          >
            Edit
          </button>
        </div>

        <div className="max-w-lg mx-auto py-20 px-8">
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

          <article className="text-center">
            <h1 className="text-slate-800 font-bold text-xl mb-4">{name}</h1>
            <p className="text-slate-600 mb-8">{bio}</p>

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
          </article>
        </div>
      </section>
    </>
  );
}
