import Image from "next/image";

import NormalIcon from "@/public/types/normal.svg";
import FireIcon from "@/public/types/fire.svg";
import WaterIcon from "@/public/types/water.svg";
import ElectricIcon from "@/public/types/electric.svg";
import GrassIcon from "@/public/types/grass.svg";
import IceIcon from "@/public/types/ice.svg";
import FightingIcon from "@/public/types/fighting.svg";
import PoisonIcon from "@/public/types/poison.svg";
import GroundIcon from "@/public/types/ground.svg";
import FlyingIcon from "@/public/types/flying.svg";
import PsychicIcon from "@/public/types/psychic.svg";
import BugIcon from "@/public/types/bug.svg";
import RockIcon from "@/public/types/rock.svg";
import GhostIcon from "@/public/types/ghost.svg";
import DragonIcon from "@/public/types/dragon.svg";
import DarkIcon from "@/public/types/dark.svg";
import SteelIcon from "@/public/types/steel.svg";
import FairyIcon from "@/public/types/fairy.svg";

type Props = {
  types: string[];
};

const PokemonTypeList = ({ types }: Props) => {
  const typeIcons: Record<string, string> = {
    normal: NormalIcon,
    fire: FireIcon,
    water: WaterIcon,
    electric: ElectricIcon,
    grass: GrassIcon,
    ice: IceIcon,
    fighting: FightingIcon,
    poison: PoisonIcon,
    ground: GroundIcon,
    flying: FlyingIcon,
    psychic: PsychicIcon,
    bug: BugIcon,
    rock: RockIcon,
    ghost: GhostIcon,
    dragon: DragonIcon,
    dark: DarkIcon,
    steel: SteelIcon,
    fairy: FairyIcon,
  };

  return (
    <div className="flex flex-row gap-2">
      {types.map((type, i) => {
        const iconSrc = typeIcons[type.toLowerCase()] || NormalIcon;

        return (
          <div
            key={`${type}-${i}`}
            className="flex items-center gap-0  rounded-full"
          >
            <Image src={iconSrc} alt={type} width={24} height={24} />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonTypeList;
