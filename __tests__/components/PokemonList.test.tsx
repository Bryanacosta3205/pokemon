import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useEffect, useState } from "react";

jest.mock("@/app/lib/api/pokemon", () => ({
  getPokemons: jest.fn(),
}));
import { getPokemons } from "@/app/lib/api/pokemon";

const mockGetPokemons = getPokemons as jest.MockedFunction<typeof getPokemons>;

interface Pokemon {
  id: number;
  name: string;
}

const PokemonListPage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPokemons()
      .then((data) => {
        setPokemons(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

describe("Pokemon List Page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", () => {
    mockGetPokemons.mockImplementation(() => new Promise(() => {}));

    render(<PokemonListPage />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders pokemon list after successful fetch", async () => {
    const mockPokemons = {
      data: [
        { id: 1, name: "Bulbasaur" },
        { id: 2, name: "Ivysaur" },
        { id: 3, name: "Venusaur" },
      ],
      total: 3,
    };

    mockGetPokemons.mockResolvedValue(mockPokemons);

    render(<PokemonListPage />);

    await waitFor(() => {
      expect(screen.getByText("Pokemon List")).toBeInTheDocument();
    });

    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
    expect(screen.getByText("Ivysaur")).toBeInTheDocument();
    expect(screen.getByText("Venusaur")).toBeInTheDocument();
  });

  it("renders error message on fetch failure", async () => {
    mockGetPokemons.mockRejectedValue(new Error("Failed to fetch"));

    render(<PokemonListPage />);

    await waitFor(() => {
      expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument();
    });
  });

  it("renders empty list when no pokemons", async () => {
    const mockPokemons = {
      data: [],
      total: 0,
    };

    mockGetPokemons.mockResolvedValue(mockPokemons);

    render(<PokemonListPage />);

    await waitFor(() => {
      expect(screen.getByText("Pokemon List")).toBeInTheDocument();
    });

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });
});
