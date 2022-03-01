import { render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Button } from "components";

describe("Smoke Tests", () => {
  it("renders card component", async () => {
    await waitFor(() => {
      render(<Button name="test" />);
    });
    const nameElement = screen.getByTestId("button-name");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent(/^test$/);
  });
  it("matches snapshot", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
