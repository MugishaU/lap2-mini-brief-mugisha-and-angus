import App from "../App";

describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App.WrappedComponent />);
  });

  test("check", () => {
    expect(component.find("h1").text()).toBe("hi");
  });
});
