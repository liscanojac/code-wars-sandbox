// https://www.codewars.com/kata/54d81488b981293527000c8f

type Memory = {
  arr: [number, number] | undefined;
  index: number;
  targetIndex: number;
};

type SumPairsFunction = (input: Array<number>, requiredSum: number, memory: Memory) => SumPairsFunction | Array<number> | undefined

let sum_pairs: SumPairsFunction;

sum_pairs = (input, sum, memory) => {
  
  if (!memory) {
    memory = {
      arr: undefined,
      index: input.length,
      targetIndex: 0
    };
  }

  if (input.length < 2) {
    return memory.arr;
  }

  if (memory.arr && memory.targetIndex - 1 >= memory.index) {
    return memory.arr;
  }

  const target = input.shift()!;

  for (let i = 0; i < input.length; i++) {

    if(target + input[i] === sum && i < memory.index) {

      memory = {
        arr: [target, input[i]],
        index: i + memory.targetIndex,
        targetIndex: memory.targetIndex + 1
      }
      return sum_pairs(input, sum, memory);
    }
  }
  memory.targetIndex++;
  return sum_pairs(input, sum, memory);
}

export {
  sum_pairs
}
