let chai = require("chai");
let chaiHttp = require("chai-http");
const e = require("express");
let server = require("../index");
const expect = chai.expect;

chai.should();
chai.use(chaiHttp);

describe("Tasks", () => {
  // GET api test

  describe("GET /user/getuser", () => {
    //GET success api
    it("It should GET a user details", (done) => {
      chai
        .request(server)
        .get("/user/getuser")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a(`object`);
          done();
        });
    });
    //GET failure api
    it("It should NOT GET a user details", (done) => {
      chai
        .request(server)
        .get("/user/getusers")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
    //GET api with ID
    it("It should GET a user specific details with id 2 ", (done) => {
      const userId = 2;
      chai
        .request(server)
        .get(`/user/getInfo/${userId}`)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          expect(response.body[0]).to.have.any.keys("id");
          expect(response.body[0].address).to.have.any.keys("street");
          expect(response.body[0]).to.include({ username: "Antonette" });
          expect(response.body[0]).to.have.property(
            "email",
            "Shanna@melissa.tv"
          );
          done();
        });
    });
  });
  //POST api's
  describe("POST /user/getInfo", () => {
    it("It should GET a user specific details ", (done) => {
      const userId = {
        userId: 111,
        id: 99,
        title: "Testing title with id 99",
        body: "Body with userId 111",
      };
      chai
        .request(server)
        .post(`/user/userPost`, userId)
        .end((err, response) => {
          response.should.have.status(200);
          response.text.should.be.eq("Response : Created");
          done();
        });
    });
  });
});

module.exports = server;
