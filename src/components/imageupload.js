import { StateContext } from "@/context/state";
import React, { useContext } from "react";

export default function Imageupload() {
  const { uploadProfileImage, setSelectedImages } = useContext(StateContext);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row justify-between">
        <article>
          <label htmlFor="upload" className="lg:hidden">
            Upload profile image
          </label>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={(e) => setSelectedImages(e.target.files[0])}
          />
        </article>
        <button
          type="submit"
          onClick={uploadProfileImage}
          className="bg-purple-600 text-purple-100 font-bold py-2 px-6 rounded hover:ring-4 hover:ring-purple-300 transition-all duration-150 text-sm"
        >
          Upload Profile Image
        </button>
      </div>
    </>
  );
}
