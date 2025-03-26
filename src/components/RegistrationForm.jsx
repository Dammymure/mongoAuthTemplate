"use client";
import React from "react";
import SocialLogin from "@/components/SocialLogin";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const response =  await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(formData, response.status);
       response.status === 201 && router.push('/')

    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 my-2 text-white p-1 rounded flex justify-center w-36"
        >
          Register
        </button>
      </form>
      <SocialLogin />
    </>
  );
};

export default RegistrationForm;
