const axios = require("axios");

module.exports.getUser = async (req, res) => {
  let dataArr = [];
  await axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => dataArr.push(res.data));
  res.send(res.data);
};
module.exports.getInfo = async (req, res) => {
  let { id } = req.params;
  let userInfoArr = [];
  await axios
    .get(`https://jsonplaceholder.typicode.com/users/` + id)
    .then((res) => userInfoArr.push(res.data))
    .catch((error) => {
      console.log("Error", error);
      res.status.code = 404;
      return res.status(404).send("User id not present");
    });
  //console.log(userInfoArr);
  res.send(userInfoArr);
};
