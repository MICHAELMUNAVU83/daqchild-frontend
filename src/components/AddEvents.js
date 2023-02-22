import React, { useState, useRef } from "react";

const AddEvents = () => {
  const reference = useRef();
  console.log(reference);
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
    <div className="mt-20">
      <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={addEventFunctionality}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div>
                  <label
                    for="about"
                    className="block text-sm font-medium te/xt-gray-700"
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
                      <div className="text-sm text-gray-600" ref={reference}>
                        <label
                          for="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Add event poster</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            accept="image/*"
                            type="file"
                            className="sr-only"
                            onChange={(e) => uploadPoster(e.target.files)}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {poster && location && date ? (
                <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className=" text-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add Event
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                  <button
                    type="button"
                    className=" text-center rounded-md border border-transparent bg-pink-600 py-2 px-4  font-bold text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add Your Event Details
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
