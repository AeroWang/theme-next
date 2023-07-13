export const hyphenToCamelCase = (str: string) => str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
