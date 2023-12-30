function fetchRandomJoke() {
  return new Promise((resolve, reject) => {
    fetch("https://v2.jokeapi.dev/joke/Programming")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

function displayJoke(joke) {
  document.getElementById("joke-setup").innerText = joke.setup;
  document.getElementById("joke-delivery").innerText = joke.delivery || ""; // Display delivery only if available
}

document.getElementById("fetch-btn").addEventListener("click", () => {
  fetchRandomJoke()
    .then((joke) => {
      displayJoke(joke);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Fetch and display a joke on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchRandomJoke()
    .then((joke) => {
      displayJoke(joke);
    })
    .catch((error) => {
      console.error(error);
    });
});
