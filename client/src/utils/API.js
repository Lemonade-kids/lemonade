import axios from 'axios'

export default {
    // Gets username from the API
    // getUsername: function(params) {
    //   return axios.get("/api/nyt", { params: filterParams(params) });
    // },
    // // Gets all saved articles
    // getSavedUser: function() {
    //   return axios.get("/api/articles");
    // },
    // // Deletes the saved article with the given id
    // deleteArticle: function(id) {
    //   return axios.delete("/api/articles/" + id);
    // },
    // // Saves an article to the database
    // saveArticle: function(articleData) {
    //   return axios.post("/api/articles", articleData);
    // },
    //saves user info to database
    newUser: function(UserData) {
      return axios.post("/api/user", UserData);
    }
  };
  