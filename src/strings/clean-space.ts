/**
 * Supprimes les espaces d'une chaine de caractères
 * @param str
 */
export function cleanSpace(str: string): string {
    return str.replace(/\s/g, '');
  }
  