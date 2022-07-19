export type Bet = {
  id: number;
  teams: [
    {
      name: string;
      win: number;
    },
    {
      name: string;
      win: number;
    }
  ];
  draw: number;
};
