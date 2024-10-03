export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export function ranDiff(): Difficulty {
  const difficulties = Object.values(Difficulty);
  const randomIndex = Math.floor(Math.random() * difficulties.length);
  return difficulties[randomIndex];
}
