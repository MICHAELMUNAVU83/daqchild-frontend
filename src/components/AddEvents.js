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
    <div className="mt-10">
      <label htmlFor="file">Upload your event poster</label>
      <input type="file" onChange={(e) => uploadPoster(e.target.files)} />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        className="bg-black p-2 text-white text-2xl"
        onClick={(e) => {
          addEventFunctionality(e);
        }}
      >
        Add Event
      </button>
    </div>
  );
};

export default AddEvents;
