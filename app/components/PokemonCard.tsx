import { Card, Typography } from "@mui/material";
import { Pokemon } from "../interfaces/pokemon";
import PokemonTypeList from "./PokemonTypeList";
import Image from "next/image";

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
          noWrap
          component="div"
          fontWeight={"bold"}
          align="center"
          sx={{
            textTransform: "capitalize",
            maxWidth: 120,
          }}
        >
          {pokemon.name}
        </Typography>
        <PokemonTypeList types={pokemon.types} />
      </div>
      <div
        className="flex justify-center"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.8) 0%,
            rgba(173, 216, 230, 0.8) 40%,
            rgba(255, 182, 193, 0.8) 100%
          )`,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src={pokemon.image || "/placeholder.png"}
          alt={pokemon.name}
          height={120}
          width={140}
          preload={true}
        />
      </div>
    </Card>
  );
};

export default PokemonCard;
