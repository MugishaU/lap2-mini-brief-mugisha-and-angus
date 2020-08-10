import Counter from "../Components/Counter";

describe("Counter", () => {
  let component, add1, minus1;

  beforeEach(() => {
    component = shallow(<Counter />);
    add1 = component.find("#add");
    minus1 = component.find("#minus");
  });

  test("check for both buttons", () => {
    expect(add1.length + minus1.length).toBe(2);
  });
});
