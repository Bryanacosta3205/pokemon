import { Card, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../interfaces/pokemon";
import PokemonTypeList from "./PokemonTypeList";

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card
      sx={{
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
      style={{ backgroundColor: "#F2F2F2" }}
      className="h-80 flex flex-col px-3 py-2 border-6 border-neutral-200 "
    >
      <div className="flex justify-between flex-row px-0 mb-2">
        <Typography
          variant="h6"
          component="div"
          fontWeight={"bold"}
          align="center"
          sx={{ textTransform: "capitalize" }}
        >
          {pokemon.name}
        </Typography>
        <PokemonTypeList types={pokemon.types} />
      </div>
      <CardMedia
        component="img"
        image={pokemon.image}
        alt={pokemon.name}
        sx={{
          height: 140,
          objectFit: "contain",
          bgcolor: "#f5f5f5",
        }}
        style={{
          background: `linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.8) 0%,
            rgba(173, 216, 230, 0.8) 40%,
            rgba(255, 182, 193, 0.8) 100%
          )`,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      />
    </Card>
  );
};

export default PokemonCard;
