export interface TutoringOffer {
  id: number;
  userId: number;
  name: string;
  email: string;
  maxGrade: number;
  phoneNumber: string | null;
  subjectId: string;
  subjectName: string;
  misc: string | null;
  grade: number;
}

export enum AuthLevel {
  Unverified = 0,
  Verified = 1,
  Admin = 2,
}

export enum RequestState {
  NotAsked,
  Loading,
  Failure,
  Success,
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone_number?: string;
  misc?: string;
  grade: number;
  authLevel: AuthLevel;
  offers: TutoringOffer[];
  createdAt: Date;
}

export const topSubjects: string[] = [
  "Mathematik",
  "Englisch",
  "Deutsch",
  "Latein",
  "Französisch",
  "Spanisch",
];

export interface Subject {
  id: number;
  name: string;
}
export interface ApiRequest {
  id: number;
  method: string;
  authLevel: AuthLevel;
  path: string;
  ip: string;
  time: Date;
}
