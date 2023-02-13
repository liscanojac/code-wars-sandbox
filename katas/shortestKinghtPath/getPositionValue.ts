
export function getPositionValue(position: string): number {

  return ((8 - Number(position[1])) * 8) + (position.charCodeAt(0) - 97);
};