const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it('responds with text "Hello World!"', async () => {
    const cai = await import("chai");
    const expect = cai.expect;

    await request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        expect(response.text).to.equal("Hello World from server api response!");
      });
  });
});
