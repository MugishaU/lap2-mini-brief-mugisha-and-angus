import App from "../App";

describe("App", () => {
  let component, h1;

  beforeEach(() => {
    component = shallow(<App />);
    h1 = component.find("#hi");
  });

  test("has 'News' in the title", () => {
    expect(h1.text()).toContain("hello");
  });
});
