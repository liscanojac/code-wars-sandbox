

export function alphanumeric(string: string): boolean {

  const regex = /^[a-zA-Z0-9]+$/;

  return regex.test(string);
}

