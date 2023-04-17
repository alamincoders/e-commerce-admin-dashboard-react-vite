import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Input from "./Input";

const Form = () => {
  //   default state showSuccessMessage  = false
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    gender: "male",
    acceptedTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For demonstration purposes, just show success message
    setShowSuccessMessage(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({ ...prevState, [name]: inputValue }));
  };

  return (
    <div className="">
      <div className="w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <Input type="text" id="name" name="name" place=" Type your name" value={formData.name} onChange={handleChange} className="input_styles" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              place="Type your email"
              value={formData.email}
              onChange={handleChange}
              className="input_styles"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone
            </label>
            <Input
              type="number"
              id="phone"
              name="phone"
              place="Type your phone"
              value={formData.phone}
              onChange={handleChange}
              className="input_styles"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              className="input_styles"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block font-medium mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-secondary-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="acceptedTerms"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="mr-2 focus:outline-none focus:ring focus:ring-secondary-500"
              />
              <label htmlFor="acceptedTerms" className="font-medium">
                I accept the terms and conditions
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary-500 text-white font-medium py-2 rounded-md transition duration-300 ease-in-out hover:bg-secondary-600"
          >
            Submit
          </button>
        </form>
        <Transition
          show={showSuccessMessage}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-4 bg-primary-100 text-primary-700 p-4 rounded-md">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

              <p>Form submitted successfully!</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Form;
