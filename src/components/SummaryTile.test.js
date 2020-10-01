// https://testing-library.com/docs/react-testing-library/intro

import * as React from "react";
import { screen, render } from "@testing-library/react";

import SummaryTile from "./SummaryTile";

test("SummaryTile displays count when a value is provided", () => {
  render(<SummaryTile count={5} label="Test" />);

  const countElem = screen.getByTestId("count-elem");
  expect(countElem.innerHTML).toBe("5");
});

test("SummaryTile displays default count when no value is provided", () => {
  render(<SummaryTile label="Test" />);

  const countElem = screen.getByTestId("count-elem");
  expect(countElem.innerHTML).toBe("0");
});

test("SummaryTile displays label when a value is provided", () => {
  render(<SummaryTile count={5} label="Test" />);

  const labelElem = screen.getByTestId("label-elem");
  expect(labelElem.innerHTML).toBe("Test");
});

test("SummaryTile displays empty label when no value is provided", () => {
  render(<SummaryTile count={5} />);

  const labelElem = screen.getByTestId("label-elem");
  expect(labelElem.innerHTML).toBe("");
});
