"use strict";

const Bracket = require("../Brackets.js");

describe("Testing Bracket functions)", () => {
  it("Can successfully match curly brackets", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("{}")).toEqual(true);
  });

  it("Can successfully match brackets", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("[]")).toEqual(true);
  });

  it("Can successfully match parenthesis", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("()")).toEqual(true);
  });

  it("Can successfully match mixture of brackets", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("({})")).toEqual(true);
  });

  it("Can successfully match mixture of brackets with extra characters", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("({asdfasdfadf})")).toEqual(true);
  });

  it("Can successfully match mixture of brackets with extra characters between brackets", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("asdf(sdf{asdfasdfadf}567m)e7870jdg")).toEqual(true);
  });
  it("Will return false if brackets don't match", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("{]")).toEqual(false);
  });
  it("Will return false if there is an unpaired bracket don't match", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("{[}")).toEqual(false);
  });

  it("Will return false if there are no brackets", () => {
    const newBracket = new Bracket();
    expect(newBracket.validateBrackets("anthony")).toEqual(false);
  });

});
