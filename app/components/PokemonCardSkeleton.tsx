import { Card, Skeleton } from "@mui/material";

const PokemonCardSkeleton = () => {
  return (
    <Card
      style={{ backgroundColor: "#F2F2F2" }}
      className="h-80 flex flex-col px-3 py-2 border-6 border-neutral-200"
    >
      <div className="flex justify-between items-center flex-row px-0 mb-2">
        <Skeleton variant="text" width={80} height={32} />

        <div className="flex flex-row  gap-1">
          <Skeleton variant="circular" width={24} height={24} />
          <Skeleton variant="circular" width={24} height={24} />
        </div>
      </div>

      <div className="flex justify-center flex-1">
        <Skeleton
          variant="rectangular"
          width={140}
          height={120}
          sx={{ borderRadius: 1 }}
        />
      </div>
    </Card>
  );
};

export default PokemonCardSkeleton;
