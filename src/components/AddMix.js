import React, { useState } from "react";
import { AiTwotoneAudio } from "react-icons/ai";
import ExtraNavbar from "./ExtraNavbar";
import ExtrAdminNavBar from "./ExtraAdminNavbar";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
function AddMix({ setStoredToken, storedToken }) {
  const navigate = useNavigate();
  const [audio, setAudio] = useState("");
  const [poster, setPoster] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  const uploadAudio = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/video/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setAudio(data.secure_url);
      });
  };
  const uploadImage = (files) => {
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

  const addMixFunctionality = (e) => {
    e.preventDefault();
    fetch("https://gibbz-tha-daqchild-api.herokuapp.com/mixes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        audio_mp3: audio,
        poster: poster,
        genre: genre,
      }),
    }).then((response) => response.json());

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      {storedToken ? (
        <ExtrAdminNavBar setStoredToken={setStoredToken} />
      ) : (
        <ExtraNavbar />
      )}

      <div className="mt-16">
        <div className="md:max-w-[50%] w-[80%] mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={addMixFunctionality}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div>
                    <label
                      for="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type={"text"}
                        className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Afrobeat Mix"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Give your mix a title.
                    </p>
                  </div>

                  <div>
                    <label
                      for="about"
                      className="block text-sm mt-2 font-medium text-gray-700"
                    >
                      Genre
                    </label>
                    <div>
                      <label
                        for="default"
                        class="block  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Default select
                      </label>
                      <select
                        id="default"
                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                      >
                        <option selected>Choose a genre</option>
                        <option value="All Genres">All Genres</option>
                        <option value="Afrobeat">Afrobeat</option>
                        <option value="Gengetone">Gengetone</option>
                        <option value="Kenyan">Kenyan</option>
                        <option value="Bongo">Bongo</option>
                        <option value="Hip Hop">Hip Hop</option>
                        <option value="Amapiano">Amapiano</option>
                        <option value="R&B">R&B</option>
                        <option value="Reggae">Reggae</option>
                        <option value="Rap">Rap</option>
                      </select>
                      <p className="mt-2 text-sm text-gray-500">
                        Give your mix a title.
                      </p>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Mix Audio File
                      </label>
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <AiTwotoneAudio
                            className="mx-auto h-12 w-12 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="text-center text-sm text-gray-600">
                            <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                              <span className="text-center">
                                Add Audio File
                              </span>
                              <input
                                type="file"
                                className="sr-only"
                                accept="audio/*"
                                onChange={(e) => uploadAudio(e.target.files)}
                              />
                            </label>
                          </div>
                          <p className="text-xs text-gray-500">
                            MP3, WAV, FLAC, or AIFF.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Mix Poster
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
                          <div className="text-center text-sm text-gray-600">
                            <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                              <span className="text-center">
                                Add Mix Poster Image
                              </span>
                              <input
                                type="file"
                                className="sr-only"
                                accept="image/*"
                                onChange={(e) => uploadImage(e.target.files)}
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
                </div>
                {audio && poster && genre && name ? (
                  <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className=" text-center rounded-md border border-transparent bg-[#9d6ef4] py-2 px-4  font-bold text-white shadow-sm  focus:ring-offset-2"
                    >
                      Add Mix
                    </button>
                  </div>
                ) : (
                  <div className="bg-gray-50 flex justify-center px-4 py-3 text-right sm:px-6">
                    <button
                      type="button"
                      className="cursor-pointer text-center rounded-md border border-transparent bg-black py-2 px-4  font-bold text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        toast.error("Input all the details to add the mix", {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                      }}
                    >
                      Add Your Mix Details
                    </button>
                  </div>
                )}
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMix;
