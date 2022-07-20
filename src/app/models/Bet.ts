export type Bet = {
  id: number;
  teams: [Team, Team];
  draw: number;
  drawDisplayedColor: DisplayedColor; //additional property for displaying
};

export type Team = {
  name: string;
  win: number;
  winDisplayedColor: DisplayedColor; //additional property for displaying
};

export enum DisplayedColor {
  Default = 'black',
  Increase = '#4CAF50',
  Decrease = '#FF5252',
}
