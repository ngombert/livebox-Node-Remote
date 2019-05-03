import { Livebox } from "./livebox";
import { expect } from "chai";
import "mocha";

describe("livebox class", () => {

  it("should return host", () => {
    const result = new Livebox("host", "port");
    expect(result.host).to.equal("host");
  });

  it("should return port", () => {
    const result = new Livebox("host", "port");
    expect(result.port).to.equal("port");
  });

});