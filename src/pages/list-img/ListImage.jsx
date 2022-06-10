import React, { useEffect } from "react";
import axios from "axios";
function ListImage() {
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://cors-demo.glitch.me/allow-cors")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return <div></div>;
}

export default ListImage;
