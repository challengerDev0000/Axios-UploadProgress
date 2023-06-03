import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import ReactProgressLineBar from 'react-progress-line-bar'
import ProgressBar from "react-customizable-progressbar";

export default function App() {
  useEffect(() => {
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let precentage = Math.floor((loaded * 100) / total);
        console.log("options");
        console.log(precentage);
        if (precentage < 100) {
          console.log(precentage);
        }
      }
    };
    const config = {
      onUploadProgress: (progressEvent) => console.log(progressEvent.loaded)
    };
    const data = {
      title: "one",
      body: "body"
    };
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", data, {onUploadProgress: (progressEvent) => console.log("dsfds")})
      .then((res) => {
        console.log("got it");
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ProgressBar progress={60} radius={100} />
    </div>
  );
}
