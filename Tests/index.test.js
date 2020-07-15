import React from "react";
import App from "../components/App";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

import { shallow, mount } from "enzyme";

describe("Test App component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
  });
  it("Should not return an error", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
