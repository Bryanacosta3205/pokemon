"use client";
interface Props {
  page: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function PaginationControls({ page, onPrev, onNext }: Props) {
  return (
    <div
      style={{
        marginTop: 12,
        display: "flex",
        justifyContent: "center",
        gap: 12,
      }}
    >
      <button disabled={page === 1} onClick={onPrev}>
        ◀ Prev
      </button>
      <span>Page {page}</span>
      <button onClick={onNext}>Next ▶</button>
    </div>
  );
}
