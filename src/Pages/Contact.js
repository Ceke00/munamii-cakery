import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import munamii_baking from "../Images/munamii_baking.jpeg";
import { Helmet } from "react-helmet";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/confirmation?firstName=${formData.firstName}`);
  };

  return (
    <>
      <Helmet>
        <title>Munamii Cakery - Contact us</title>
      </Helmet>
      <div
        className="relative isolate overflow-hidden bg-fixed bg-center bg-cover h-80"
        style={{ backgroundImage: `url(${munamii_baking})` }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>´
      </div>
      <div className="p-10">
        <h1>Contact us</h1>
        <p className="mt-1 text-sm leading-6 text-darkbrown max-w-prose">
          We'd love to hear from you! Whether you have questions about our
          delicious cupcakes and cakes, or you want to place an order, please
          fill out the form below.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="pb-12">
              <div className="">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-darkbrown"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-darkbrown shadow-sm ring-1 ring-inset ring-darkbrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkbrown sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-darkbrown"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-darkbrown shadow-sm ring-1 ring-inset ring-darkbrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkbrown sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-darkbrown"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-darkbrown shadow-sm ring-1 ring-inset ring-darkbrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkbrown sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-darkbrown"
                    >
                      Phone number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-darkbrown shadow-sm ring-1 ring-inset ring-darkbrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkbrown sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-darkbrown"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        id="street-address"
                        name="streetAddress"
                        type="text"
                        autoComplete="street-address"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-darkbrown shadow-sm ring-1 ring-inset ring-darkbrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkbrown sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-darkbrown"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        value={formData.city}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-darkbrown shadow-sm ring-1 ring-inset ring-darkbrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkbrown sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-darkbrown"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        id="postal-code"
                        name="postalCode"
                        type="text"
                        autoComplete="postal-code"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-darkbrown shadow-sm ring-1 ring-inset ring-darkbrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkbrown sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium leading-6 text-darkbrown"
                  >
                    Question
                  </label>
                  <p className="mt-3 text-sm leading-6 text-darkbrown">
                    Tell us a bit about your event or special occasion.
                  </p>
                  <div className="mt-2">
                    <textarea
                      id="question"
                      name="question"
                      rows={3}
                      value={formData.about}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-darkbrown shadow-sm ring-1 ring-inset ring-darkbrown placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkbrown sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-darkgreen px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkgreen"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
