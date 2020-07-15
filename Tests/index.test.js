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
    // mountWrapper = mount(<App />);

    console.log(shallowWrapper.debug());
    // console.log(mountWrapper.debug());
  });
  test("Should not return an error", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});
