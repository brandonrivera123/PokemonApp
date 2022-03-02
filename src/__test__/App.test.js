import { render, waitFor } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import { getPokemon } from "services/pokemon.service";
import { BrowserRouter } from "react-router-dom";
import App from "App";
jest.mock("services/pokemon.service");

test("renders learn react link", async () => {
  await waitFor(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  // const NextButton = screen.getByRole("button", {
  //   name: "Next",
  // });
  // const PreviousButton = screen.getByRole("button", {
  //   name: "Next",
  // });
  // expect(NextButton).toBeInTheDocument();
  // expect(PreviousButton).toBeInTheDocument();
});

describe("Check APIs", () => {
  it("Checks if promise resolves", async () => {
    const pokemon = await getPokemon("https://pokeapi.co/api/v2/pokemon");
    expect(pokemon).toBeTruthy();
  });
  it("Checks if it has results", async () => {
    const pokemon = await getPokemon("https://pokeapi.co/api/v2/pokemon");
    expect(pokemon).toHaveProperty("results");
  });
});
