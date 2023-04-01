import { StateContext } from "@/context/state";
import React, { useContext } from "react";

export default function Links() {
  const { link, links, setLink, setLinks, handleSubmit, handleDelete } =
    useContext(StateContext);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="links">Links</label>
        <input
          type="text"
          name="link"
          id="link"
          placeholder="Add links to your socials"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </form>

      <ul className="mt-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="mb-2 py-3 px-2 bg-white rounded shadow text-purple-600 font-bold flex items-center justify-between"
          >
            {link.title}{" "}
            <span
              onClick={() => handleDelete(link.id)}
              className="text-3xl cursor-pointer hover:bg-purple-300 px-3 pb-1 rounded-full transition-all duration-150"
            >
              -
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
