import { StaticImageData } from "next/image";

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
  caption: string;
  participants?: string[];
};

export interface ParticipantsData {
  group: string;
  name: string;
  participants: string[];
}
export interface ParticipantsDetails {
  [key: string]: ParticipantsData;
}

export type Round1Scores = {
  team: string;
  q1: string | number;
  q2: string | number;
  q3: string | number;
  tie: string | number;
  total: string | number;
  remarks: string;
};

export type Round2Scores = {
  team: string;
  q1: string | number;
  q2: string | number;
  q3: string | number;
  q4: string | number;
  q5: string | number;
  q6: string | number;
  q7: string | number;
  q8: string | number;
  q9: string | number;
  q10: string | number;
  q11: string | number;
  q12: string | number;
  q13: string | number;
  q14: string | number;
  q15: string | number;
  tie: string | number;
  total: string | number;
  remarks: string;
};
export type FinalRoundScores = Round2Scores & {
  participants?: string[];
  win_rank?: number;
};

export enum MatchType {
  QUALIFIER = "QUALIFIER",
  QUARTER_FINAL = "QUARTER_FINAL",
  SEMI_FINAL = "SEMI_FINAL",
  SUPER_OVER = "SUPER_OVER",
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
  youtubeLink?: string;
};

export type Team = {
  slug: string;
  name: string;
  location: string;
  captain: string;
  jerseyImage?: StaticImageData; // Image path can be updated later
  teamMembers: string[];
};

export interface BATTING_STATS {
  Name: string;
  Runs: number;
  Team: Team;
  Best: string;
}

export interface BOWLING_STATS {
  Name: string;
  Wickets: number;
  Overs: number;
  RunsGiven: number;
  Team: Team;
  Best: string;
}

export interface MAXIMUM_STATS {
  Name: string;
  Six: number;
  Four: number;
  Team: Team;
}

export interface POINTS_STATS {
  team: Team;
  played: number;
  win: number;
  lost: number;
  points: number;
  nrr: number;
}
