import TarkaChat from "../src/main.js";

TarkaChat.init({
  title: "Stocks Advisor",
  botName: "Stad",
  greeting: "Hello. How can I assist you today?",
  themeColorHue: 160,
  selectorId: "tarkachatbot",
  submitHandler: async function (message) {
    //Do API calls

    // after getting response
    return Promise.resolve("Recieved: " + message);
  },
});