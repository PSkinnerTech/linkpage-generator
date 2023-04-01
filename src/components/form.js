import React, { useContext, useState } from "react";
import { StateContext } from "@/context/state";
import Links from "./links";
import Imageupload from "./imageupload";
import Templates from "./templates";

export default function Form() {
  const { name, setName, bio, setBio } = useContext(StateContext);

  return (
    <>
      <div>
        <Imageupload />

        <form className="flex flex-col gap-8">
          <article>
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </article>

          <article>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="5"
              placeholder="Tell us something about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </article>
        </form>

        <article className="mt-8">
          <Links />
        </article>

        <Templates />
      </div>
    </>
  );
}
