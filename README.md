# ABC News / Walt Disney Coding Challenge

This project is a small coding challenge displaying the news for the day! I decided to use plain React with this application rather than redux or react-redux because of the simplicity of the state management. Because the endpoints on the NewsAPI give us similar information, I decided to instead take advantage of the top headlines endpoint and futher query that with different sources!

---

## Get Up and Running
In order to use this app locally, there are just a few steps you'll need to follow!

1. git clone and add the repository on your local machine
2. `cd` into the main project file and `npm i` to make sure all dependencies are running
3. in server/api/index.js, be sure to replace the apiKey variable with your own NewsAPI key
  - if you're feeling fancy, you can create a secrets.js file and store your key there as a process.env variable :)
4. run `npm run start-dev` and head to localhost:8080 to play!

---

## Built Using:

- [NewsApi](https://newsapi.org/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) & [Materialize](https://materializecss.com/)

