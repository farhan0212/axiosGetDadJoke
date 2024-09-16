const button = document.querySelector("#button");
const jokes = document.querySelector("#joke-list");

const jokeList = async () => {
  const listJoke = await getJokes();
  const newList = document.createElement("li");
  newList.append(listJoke);
  jokes.append(newList);
};

const getJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
  } catch (error) {
    return "Error: " + error.message;
  }
};

button.addEventListener("click", jokeList);
