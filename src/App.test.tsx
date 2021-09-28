import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  test("renders the title of counter", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toContain("This is the counter app");
  });
});
