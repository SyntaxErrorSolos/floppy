"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const loader = document.getElementById("loader");
    const main_element = document.getElementById("main_element");

    function clearGame() {
      window.localStorage.removeItem("game-started", true)
      console.log("Cleared existing game.")
    }
    window.onload = clearGame;

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

        //spawn "guards"
        const guards = [];
        for (let i = 0; i < 3; i++) {
          const guard = document.createElement("div");
          guard.style.backgroundColor = "red";
          guard.style.borderRadius = "0.5rem";
          guard.style.width = "70px";
          guard.style.textAlign = "center";
          guard.style.position = "absolute";
          guard.innerText = "Guard";
          guard.style.color = "white";
          guard.style.top = `${Math.floor(Math.random() * 100)}px`;
          guard.style.right = `${Math.floor(Math.random() * 100)}px`;
          guard.id = `${guard}-${i}`;
          guards.push(guard);
          guards.forEach(() => {
            let intTop = parseInt(guard.style.top);
            let intRight = parseInt(guard.style.right);

            intTop += Math.floor(Math.random() * 50);
            intRight += Math.floor(Math.random() * 50);
            guard.style.top = intTop + "px";
            guard.style.right = intRight + "px";
          });
        }

        for (const guard of guards) {
          document.body.appendChild(guard);
        }
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
