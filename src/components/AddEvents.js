import React, { useState } from "react";

const AddEvents = () => {
  const [poster, setPoster] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const uploadPoster = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setPoster(data.secure_url);
      });
  };

  const addEventFunctionality = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        poster: poster,
        location: location,
        date: date,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    // <div className="mt-10">
    //   <div className="w-full max-w-xs">
    //     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           for="username"
    //         >
    //           Username
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="username"
    //           type="text"
    //           placeholder="Username"
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           for="password"
    //         >
    //           Password
    //         </label>
    //         <input
    //           className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //           id="password"
    //           type="password"
    //           placeholder="******************"
    //         />
    //         <p className="text-red-500 text-xs italic">Please choose a password.</p>
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <button
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="button"
    //         >
    //           Sign In
    //         </button>
    //         <a
    //           className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
    //           href="#"
    //         >
    //           Forgot Password?
    //         </a>
    //       </div>
    //     </form>
    //     <p className="text-center text-gray-500 text-xs">
    //       &copy;2020 Acme Corp. All rights reserved.
    //     </p>
    //   </div>

    //   <label htmlFor="file">Upload your event poster</label>
    //   <input type="file" onChange={(e) => uploadPoster(e.target.files)} />
    //   <input
    //     type="text"
    //     placeholder="Location"
    //     value={location}
    //     onChange={(e) => setLocation(e.target.value)}
    //   />
    //   <input
    //     type="date"
    //     placeholder="Date"
    //     value={date}
    //     onChange={(e) => setDate(e.target.value)}
    //   />

    //   <button
    //     className="bg-black p-2 text-white text-2xl"
    //     onClick={(e) => {
    //       addEventFunctionality(e);
    //     }}
    //   >
    //     Add Event
    //   </button>
    // </div>
    <div className="mt-20">
      <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={addEventFunctionality}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <div className="mt-1">
                    <input
                      type={"text"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="eg Clique Bar"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Add the location of the event.
                  </p>
                </div>

                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <div className="mt-1">
                    <input
                      type={"date"}
                      className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Add the date of the event.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Event Poster
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Add an image</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => uploadPoster(e.target.files)}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className=" text-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add Event
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
