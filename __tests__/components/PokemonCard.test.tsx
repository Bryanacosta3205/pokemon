import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonCard from "@/app/components/PokemonCard";
import { Pokemon } from "@/app/interfaces/pokemon";

jest.mock("@/app/components/PokemonTypeList", () => {
  return function MockPokemonTypeList({ types }: any) {
    return (
      <div data-testid="pokemon-type-list">
        {types.map((type: string) => (
          <span key={type} data-testid={`type-${type}`}>
            {type}
          </span>
        ))}
      </div>
    );
  };
});

describe("PokemonCard", () => {
  const mockPokemon: Pokemon = {
    name: "bulbasaur",
    image: "https://example.com/bulbasaur.png",
    types: ["grass", "poison"],
  };

  describe("Rendering", () => {
    it("renders the pokemon card", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      const card = screen.getByRole("img").closest(".MuiCard-root");
      expect(card).toBeInTheDocument();
    });

    it("displays the pokemon name", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    });

    it("capitalizes the pokemon name with CSS", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      const nameElement = screen.getByText("bulbasaur");
      expect(nameElement).toHaveStyle({ textTransform: "capitalize" });
    });

    it("displays the pokemon image", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      const image = screen.getByRole("img", { name: /bulbasaur/i });
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", mockPokemon.image);
      expect(image).toHaveAttribute("alt", mockPokemon.name);
    });

    it("renders PokemonTypeList with correct types", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      expect(screen.getByTestId("pokemon-type-list")).toBeInTheDocument();
      expect(screen.getByTestId("type-grass")).toBeInTheDocument();
      expect(screen.getByTestId("type-poison")).toBeInTheDocument();
    });
  });

  describe("Different Pokemon Data", () => {
    it("renders pokemon with single type", () => {
      const singleTypePokemon: Pokemon = {
        name: "charmander",
        image: "https://example.com/charmander.png",
        types: ["fire"],
      };

      render(<PokemonCard pokemon={singleTypePokemon} />);

      expect(screen.getByText("charmander")).toBeInTheDocument();
      expect(screen.getByTestId("type-fire")).toBeInTheDocument();
    });

    it("renders pokemon with long name", () => {
      const longNamePokemon: Pokemon = {
        name: "fletchinder",
        image: "https://example.com/fletchinder.png",
        types: ["fire", "flying"],
      };

      render(<PokemonCard pokemon={longNamePokemon} />);

      expect(screen.getByText("fletchinder")).toBeInTheDocument();
    });

    it("renders pokemon with multiple types", () => {
      const multiTypePokemon: Pokemon = {
        name: "charizard",
        image: "https://example.com/charizard.png",
        types: ["fire", "flying"],
      };

      render(<PokemonCard pokemon={multiTypePokemon} />);

      expect(screen.getByTestId("type-fire")).toBeInTheDocument();
      expect(screen.getByTestId("type-flying")).toBeInTheDocument();
    });

    it("handles pokemon with hyphenated name", () => {
      const hyphenatedPokemon: Pokemon = {
        name: "farfetch-d",
        image: "https://example.com/farfetchd.png",
        types: ["normal", "flying"],
      };

      render(<PokemonCard pokemon={hyphenatedPokemon} />);

      expect(screen.getByText("farfetch-d")).toBeInTheDocument();
    });
  });

  describe("Props Validation", () => {
    it("passes correct types to PokemonTypeList", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      expect(screen.getByTestId("type-grass")).toBeInTheDocument();
      expect(screen.getByTestId("type-poison")).toBeInTheDocument();
    });

    it("uses pokemon name for image alt text", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      const image = screen.getByAltText("bulbasaur");
      expect(image).toBeInTheDocument();
    });

    it("uses pokemon image URL correctly", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", "https://example.com/bulbasaur.png");
    });
  });

  describe("Accessibility", () => {
    it("provides accessible image alt text", () => {
      render(<PokemonCard pokemon={mockPokemon} />);

      const image = screen.getByRole("img", { name: /bulbasaur/i });
      expect(image).toBeInTheDocument();
    });
  });

  describe("Snapshot Tests", () => {
    it("matches snapshot for basic pokemon", () => {
      const { container } = render(<PokemonCard pokemon={mockPokemon} />);
      expect(container).toMatchSnapshot();
    });

    it("matches snapshot for single-type pokemon", () => {
      const singleTypePokemon: Pokemon = {
        name: "pikachu",
        image: "https://example.com/pikachu.png",
        types: ["electric"],
      };

      const { container } = render(<PokemonCard pokemon={singleTypePokemon} />);
      expect(container).toMatchSnapshot();
    });

    it("matches snapshot for multi-type pokemon", () => {
      const multiTypePokemon: Pokemon = {
        name: "charizard",
        image: "https://example.com/charizard.png",
        types: ["fire", "flying"],
      };

      const { container } = render(<PokemonCard pokemon={multiTypePokemon} />);
      expect(container).toMatchSnapshot();
    });
  });
});
