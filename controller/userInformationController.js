const axios = require("axios");

module.exports.postInformation = async (req, res) => {
  //   let dataArr = req.body.userId;
  let addPost = {
    userId: req.body.userId,
    id: req.body.id,
    title: req.body.title,
    body: req.body.body,
  };
  let result = await axios
    .post(`https://jsonplaceholder.typicode.com/posts`, addPost)
    .then((res) => res.statusText)
    .catch((error) => {
      console.log("Error", error);
      res.status.code = 404;
      return res.status(404).send("User data not entered");
    });
  res.send("Response : " + result);
};
