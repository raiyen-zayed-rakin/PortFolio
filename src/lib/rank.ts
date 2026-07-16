export type Rank = "S" | "A" | "B" | "C" | "D" | "E";

export const rankLabel: Record<Rank, string> = {
  S: "S-RANK",
  A: "A-RANK",
  B: "B-RANK",
  C: "C-RANK",
  D: "D-RANK",
  E: "E-RANK",
};

export const rankClass: Record<Rank, string> = {
  S: "rank-S",
  A: "rank-A",
  B: "rank-B",
  C: "rank-C",
  D: "rank-D",
  E: "rank-E",
};
