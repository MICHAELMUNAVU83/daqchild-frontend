import React, { useState, useEffect } from "react";

const Mixes = () => {
  const [mixes, setMixes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/mixes")
      .then((response) => response.json())
      .then((data) => {
        setMixes(data);
      });
  }, [mixes]);
  return <div>Mixes</div>;
};

export default Mixes;
