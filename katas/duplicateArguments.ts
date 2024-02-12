
export function argumentsDuplicated(): boolean {

  const args: Array<string | number> = [...arguments];
  
  return args.length !== [...new Set(args)].length;
}