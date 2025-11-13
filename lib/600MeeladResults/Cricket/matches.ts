import { ALL_TEAMS, Team } from "./teams";

export enum MatchType {
  QUALIFIER = "QUALIFIER",
  QUARTER_FINAL = "QUARTER_FINAL Final",
  SEMI_FINAL = "SEMI_FINAL Final",
  SUPER_OVER = "SUPER_OVER Over",
  FINAL = "FINAL",
}

export type Match = {
  id: number;
  teamA: Team;
  teamB: Team;
  tossWonBy: Team;
  electedTo: "bat" | "bowl";
  matchType: MatchType;
  matchWinner: Team;
  matchTied: boolean;
};

export const matches: Match[] = [
  {
    id: 1,
    teamA: ALL_TEAMS.GMCC,
    teamB: ALL_TEAMS.SPARTANS_CRICKET,
    tossWonBy: ALL_TEAMS.SPARTANS_CRICKET,
    electedTo: "bowl",
    matchType: MatchType.QUALIFIER,
    matchWinner: ALL_TEAMS.SPARTANS_CRICKET,
    matchTied: false,
  },
];
