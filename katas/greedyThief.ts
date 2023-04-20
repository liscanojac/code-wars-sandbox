// https://www.codewars.com/kata/58296c407da141e2c7000271

interface StoreItem {
  weight: number;
  price: number;
}

export function greedyThief(items: Array<StoreItem>, maxWeight: number): Array<StoreItem> {
  
  const sortedItemsByPrice = [...items].sort((a, b) => b.price - a.price);

  return sortedItemsByPrice;
}