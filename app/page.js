"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    const main_element = document.getElementById("main_element");
    window.addEventListener("keydown", function (event) {
      //starting
      if (event.key === "Enter") {
        console.log("Game started...");
        loader.innerText = "Loading game...";
        this.window.localStorage.setItem("game-started", true);
        main_element.remove();
        const blob_div = this.document.createElement("div");
        this.document.body.appendChild(blob_div);
        blob_div.style.backgroundColor = "white";
        blob_div.style.borderRadius = "0.5rem";
        blob_div.style.width = "70px";
        blob_div.style.textAlign = "center";
        blob_div.style.position = "absolute";
        blob_div.style.top = `${Math.floor(Math.random() * 100)}px`;
        blob_div.style.left = `${Math.floor(Math.random() * 100)}px`;
        blob_div.id = "blob_div";
        const blob = this.document.createElement("h1");
        blob.style.color = "black";
        blob.innerText = "Player";
        blob_div.appendChild(blob);
      }

      //movement
      else if (event.key === "d") {
        const blob_div = this.document.getElementById("blob_div");
        if (!blob_div) return console.log("Game not started");
        let currentPosition = parseInt(blob_div.style.left, 10);
        currentPosition += 10;
        blob_div.style.left = currentPosition + "px";
      } else if (event.key === "a") {
        const blob_div = this.document.getElementById("blob_div");
        if (!blob_div) return console.log("Game not started");
        let currentPosition = parseInt(blob_div.style.left);
        currentPosition -= 10;
        blob_div.style.left = currentPosition + "px";
      } else if (event.key === "w") {
        const blob_div = this.document.getElementById("blob_div");
        if (!blob_div) return console.log("Game not started");
        let currentPosition = parseInt(blob_div.style.top);
        let screenPosition = parseInt(this.window.screenX);
        if (screenPosition >= currentPosition)
          return (
            this.window.location.reload() &&
            this.window.localStorage.removeItem("game-started", true)
          );
        currentPosition -= 10;
        blob_div.style.top = currentPosition + "px";
      } else if (event.key === "s") {
        const blob_div = this.document.getElementById("blob_div");
        if (!blob_div) return console.log("Game not started");
        let currentPosition = parseInt(blob_div.style.top);
        let screenPosition = parseInt(this.window.screenX);
        if (screenPosition >= currentPosition)
          return (
            this.window.location.reload() &&
            this.window.localStorage.removeItem("game-started", true)
          );
        currentPosition += 10;
        blob_div.style.top = currentPosition + "px";
      }
    });
  }, []);
  return (
    <div id="main">
      <div className="flex h-screen" id="main_element">
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
