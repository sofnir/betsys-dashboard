import { Bet } from '../models/Bet';

export type BetsGenerateResponse = {
  ok: number;
  bets: Bet[];
};
