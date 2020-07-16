import React from "react";
import App from "../components/App";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

import { shallow, mount } from "enzyme";

describe("Test App component", () => {
  let shallowWrapper, mountWrapper;
  beforeAll(() => {
    shallowWrapper = shallow(<App />);
    mountWrapper = mount(<App />);

    console.log(shallowWrapper.debug());
    console.log(mountWrapper.debug());
  });

  test("Should not return an error", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  test("Should have an 'App' component at index 0", () => {
    // console.log("position 1:", shallowWrapper.at(0).debug());
    expect(shallowWrapper.at(0).type()).toBe("div");
  });

  test("Should have a child component of 'Header' at index 0", () => {
    expect(mountWrapper.childAt(0).type()).toBe("div");
    expect(shallowWrapper.childAt(0).type()).toBe(Header);
  });
});
