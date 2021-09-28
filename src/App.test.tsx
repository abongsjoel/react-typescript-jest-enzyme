import App from "./App";

import { configure, shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Counter Testing", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("renders the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is the counter app");
  });

  test("render a button with a text of 'increment'", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });
});
