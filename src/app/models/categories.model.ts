export enum Categories {
  LINUX = 'Linux',
  DEVOPS = 'DevOps',
}

export function ranCat(): Categories {
  const categories = Object.values(Categories);
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}
