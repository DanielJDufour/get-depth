const test = require("flug");
const getDepth = require("./index");

test("depth of one dimensional array of numbers", ({ eq }) => {
  const arr = [0, 1, 2, 3, 4, 5, 78];
  const depth = getDepth(arr);
  eq(depth, 1);
});

test("depth of one dimensional typed array of numbers", ({ eq }) => {
  const arr = Uint8Array.from([0, 1, 2, 3, 4, 5, 78]);
  const depth = getDepth(arr);
  eq(depth, 1);
});

test("depth of one dimensional clamped array of numbers", ({ eq }) => {
  const arr = Uint8ClampedArray.from([0, 1, 2, 3, 4, 5, 78]);
  const depth = getDepth(arr);
  eq(depth, 1);
});

test("depth of two dimensional array of numbers", ({ eq }) => {
  const arr = [
    [0, 1],
    [2, 3],
    [4, 5],
    [7, 8],
  ];
  const depth = getDepth(arr);
  eq(depth, 2);
});

test("depth of three dimensional array of numbers", ({ eq }) => {
  const arr = [
    [
      [0, 1],
      [2, 3],
      [4, 5],
      [7, 8],
    ],
    [
      [0, 1],
      [2, 3],
      [4, 5],
      [7, 8],
    ],
  ];
  const depth = getDepth(arr);
  eq(depth, 3);
});
