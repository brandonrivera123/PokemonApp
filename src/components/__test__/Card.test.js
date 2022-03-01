import { render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Card } from "components";

describe("Smoke Tests", () => {
  it("renders card component", async () => {
    await waitFor(() => {
      render(
        <BrowserRouter>
          <Card name="test" type={[{ type: { name: "poison" } }]} />
        </BrowserRouter>
      );
    });
    const nameElement = screen.getByTestId("card-name");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent(/^test$/);
  });
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Card type={[{ type: { name: "poison" } }]} />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
