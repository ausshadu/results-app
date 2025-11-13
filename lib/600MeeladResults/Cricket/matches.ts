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
  matchResult: string;
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
    matchResult: "SPARTANS CRICKET WON BY 5 WICKETS",
    matchTied: false,
  },
  {
    id: 2,
    teamA: ALL_TEAMS.ARMANIA_CC,
    teamB: ALL_TEAMS.ELAHI_CC,
    tossWonBy: ALL_TEAMS.ELAHI_CC,
    electedTo: "bowl",
    matchType: MatchType.QUALIFIER,
    matchWinner: ALL_TEAMS.ARMANIA_CC,
    matchResult: "ARMANIA CC WON BY 16 RUNS",
    matchTied: false,
  },
  {
    id: 3,
    teamA: ALL_TEAMS.NEW_STAR_CC,
    teamB: ALL_TEAMS.SHIBBAN_E_MAHDAVIA,
    tossWonBy: ALL_TEAMS.SHIBBAN_E_MAHDAVIA,
    electedTo: "bowl",
    matchType: MatchType.QUALIFIER,
    matchWinner: ALL_TEAMS.NEW_STAR_CC,
    matchResult: "NEW STAR CC WON BY 46 RUNS",
    matchTied: false,
  },
  {
    id: 4,
    teamA: ALL_TEAMS.MEHDAVIA_CRICKET_CLUB,
    teamB: ALL_TEAMS.YOUNG_GEMS_CC,
    tossWonBy: ALL_TEAMS.YOUNG_GEMS_CC,
    electedTo: "bowl",
    matchType: MatchType.QUALIFIER,
    matchWinner: ALL_TEAMS.YOUNG_GEMS_CC,
    matchResult: "YOUNG GEMS CC WON BY 5 WICKETS",
    matchTied: false,
  },
];
