import App from "../App";

describe("App", () => {
  let component, button;
  let history = { goBack: jest.fn() };

  beforeEach(() => {
    component = shallow(<App.WrappedComponent history={history} />);
    button = component.find("button");
  });

  test("check back button exists", () => {
    expect(button.length).toBe(1);
  });

  test('check back button has "back" written on it', () => {
    expect(button.text().toLowerCase()).toBe("back");
  });

  test("clicking back button triggers back functionality", () => {
    button.simulate("click");
    expect(history.goBack.mock.calls.length).toBe(1);
  });
});
