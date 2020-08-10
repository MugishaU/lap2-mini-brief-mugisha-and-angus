import App from "../App";

describe("App", () => {
  let component;
  let history = { goBack: jest.fn() };

  beforeEach(() => {
    component = shallow(<App.WrappedComponent history={history} />);
  });

  test("check", () => {
    expect(component.find("h1").text()).toBe("hi");
  });
});
