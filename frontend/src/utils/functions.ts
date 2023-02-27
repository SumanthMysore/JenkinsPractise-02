export const inputValidator = (input: string, regex: RegExp) => {
  return String(input).match(regex)
}
