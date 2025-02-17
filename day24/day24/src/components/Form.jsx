// import React from "react";

// const Form = () => {
//   return (
//     <form action="https://fabform.io/f/xxxxx" method="post">
//       <section className="py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 grid-cols-1">
//             <div className="lg:mb-0 mb-10">
//               <div className="group w-full h-full">
//                 <div className="relative h-full">
//                   <img
//                     src="https://pagedone.io/asset/uploads/1696488602.png"
//                     alt="ContactUs Tailwind Section"
//                     className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
//                   />
//                   <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
//                     Contact us
//                   </h1>
//                   <div className="absolute bottom-0 w-full lg:p-11 p-5">
//                     <div className="bg-white rounded-lg p-6">
//                       <a href="javascript:;" className="flex items-center mb-6">
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
//                           alt="Phone"
//                           className="w-8 h-8"
//                         />
//                         <h5 className="text-black text-base font-normal leading-6 ml-5">
//                           +91 6350247952
//                         </h5>
//                       </a>
//                       <a
//                         href="mailto:sonipushpendra256@gmail.com"
//                         className="flex items-center mb-6"
//                       >
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png"
//                           alt="Email"
//                           className="w-8 h-8"
//                         />
//                         <h5 className="text-black text-base font-normal leading-6 ml-5">
//                           sonipushpendra256@gmail.com
//                         </h5>
//                       </a>
//                       <a href="javascript:;" className="flex items-center">
//                         <img
//                           src="https://cdn-icons-png.flaticon.com/128/9790/9790358.png"
//                           alt="Location"
//                           className="w-8 h-8"
//                         />
//                         <h5 className="text-black text-base font-normal leading-6 ml-5">
//                           Plot-88, Near Jagatpura, Jaipur, Rajasthan
//                         </h5>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
//               <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
//                 Send Us A Message
//               </h2>
//               <input
//                 type="text"
//                 autoFocus
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                 placeholder="Name"
//               />
//               <input
//                 type="text"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                 placeholder="Email"
//               />
//               <input
//                 type="text"
//                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                 placeholder="Phone"
//               />
//               <div className="mb-10">
//                 <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
//                   Preferred method of communication
//                 </h4>
//                 <div className="flex">
//                   <div className="flex items-center mr-11">
//                     <input
//                       id="radio-group-1"
//                       type="radio"
//                       name="radio-group"
//                       className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
//                     />
//                     <label
//                       htmlFor="radio-group-1"
//                       className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
//                     >
//                       <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>
//                       Email
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       id="radio-group-2"
//                       type="radio"
//                       name="radio-group"
//                       className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
//                     />
//                     <label
//                       htmlFor="radio-group-2"
//                       className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
//                     >
//                       <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2"></span>
//                       Phone
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <textarea
//                 rows="4"
//                 className="w-full text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10"
//                 placeholder="Message"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full py-4 text-lg text-white font-normal rounded-lg bg-indigo-700 hover:bg-indigo-500 focus:outline-none"
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </form>
//   );
// };
// export default Form;

// old code withaout form submission
// ====================================================================================
// new code with form submission

import React, { useState } from "react";

const Form = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    communicationMethod: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formdata);
    setFormdata({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form
      action="https://fabform.io/f/xxxxx"
      method="post"
      onSubmit={handleSubmit}
    >
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* Left Section - Contact Info */}
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Contact Us"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl"
                  />
                  <h1 className="text-white text-4xl font-bold absolute top-11 left-11">
                    Contact Us
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6">
                      <a
                        href="tel:+916350247952"
                        className="flex items-center mb-6"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
                          alt="Phone"
                          className="w-8 h-8"
                        />
                        <h5 className="text-black text-base ml-5">
                          +91 6350247952
                        </h5>
                      </a>
                      <a
                        href="mailto:sonipushpendra256@gmail.com"
                        className="flex items-center mb-6"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png"
                          alt="Email"
                          className="w-8 h-8"
                        />
                        <h5 className="text-black text-base ml-5">
                          sonipushpendra256@gmail.com
                        </h5>
                      </a>
                      <a href="#" className="flex items-center">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/9790/9790358.png"
                          alt="Location"
                          className="w-8 h-8"
                        />
                        <h5 className="text-black text-base ml-5">
                          Plot-88, Near Jagatpura, Jaipur, Rajasthan
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-indigo-600 text-4xl font-semibold mb-11">
                Send Us A Message
              </h2>

              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 pl-4 mb-6"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 pl-4 mb-6"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="phone"
                value={formdata.phone}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 pl-4 mb-6"
                placeholder="Phone"
                required
              />

              {/* Communication Method */}
              <div className="mb-6">
                <h4 className="text-gray-500 text-lg font-normal mb-4">
                  Preferred Method of Communication
                </h4>
                <div className="flex">
                  <label className="flex items-center mr-6 cursor-pointer">
                    <input
                      type="radio"
                      name="communicationMethod"
                      value="email"
                      checked={formdata.communicationMethod === "email"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 flex items-center justify-center">
                      {formdata.communicationMethod === "email" && (
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      )}
                    </span>
                    Email
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="communicationMethod"
                      value="phone"
                      checked={formdata.communicationMethod === "phone"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 flex items-center justify-center">
                      {formdata.communicationMethod === "phone" && (
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      )}
                    </span>
                    Phone
                  </label>
                </div>
              </div>

              {/* Message Input */}
              <textarea
                name="message"
                value={formdata.message}
                onChange={handleChange}
                rows="4"
                className="w-full text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-200 pl-4 pt-2 mb-6"
                placeholder="Message"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 text-lg text-white font-normal rounded-lg bg-indigo-700 hover:bg-indigo-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};
export default Form;