import { Main } from "../src/app.js";

describe("A suite of test for the fonction of main class", function () {
  let main = new Main();
  it("fizzBuzz fonction should return 1 when given 1", function () {
    let result = main.fizzByzz(1);

    expect(result).toBe(1);
  });
  it("fizzBuzz fonction should return 2 when given 2", function () {
    let result = main.fizzByzz(2);

    expect(result).toBe(2);
  });
  it("fizzbuzz function should return fizz wehn given 3", function () {
    let result = main.fizzByzz(3);

    expect(result).toBe("fizz");
  });
  it("fizzbuzz function should return 4 wehn given 4", function () {
    let result = main.fizzByzz(4);

    expect(result).toBe(4);
  });
  it("fizzbuzz function should return buzz wehn given 5", function () {
    let result = main.fizzByzz(5);

    expect(result).toBe("buzz");
  });
});
