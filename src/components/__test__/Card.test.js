import { render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Card } from "components";

describe("Smoke Tests", () => {
  it("renders card component", async () => {
    await waitFor(() => {
      render(<Card name="test" type={[{ type: { name: "poison" } }]} />);
    });
    const nameElement = screen.getByTestId("card-name");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent(/^test$/);
  });
  it("matches snapshot", () => {
    const tree = renderer
      .create(<Card type={[{ type: { name: "poison" } }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
