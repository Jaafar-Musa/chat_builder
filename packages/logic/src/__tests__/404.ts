import request from "supertest";

import app from "../app";

describe("404", () => {
  it("responds with 404", (done) => {
    request(app).get("/api/v1/pings").expect(404,done);
  });
});


  