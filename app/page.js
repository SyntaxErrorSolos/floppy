"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    window.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        console.log("Game started...");
        loader.innerText = "Loading game...";
        this.window.localStorage.setItem("game-started", true);
      }
    });
  }, []);
  return (
    <div>
      <div className="flex h-screen">
        <div className="m-auto font-sans text-5xl">
          <h1 id="loader">
            Press <code className="bg-gray-500 rounded-lg">enter</code> to
            begin!
          </h1>
        </div>
      </div>
    </div>
  );
}
