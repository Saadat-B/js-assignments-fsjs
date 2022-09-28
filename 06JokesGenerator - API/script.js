const showJoke = document.querySelector("#joke");
const getJoke = document.querySelector("#jokeBtn");

async function fetchJoke() {
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const joke = await jokeRes.json();

  showJoke.innerHTML = joke.joke;
}

getJoke.addEventListener("click", fetchJoke);
