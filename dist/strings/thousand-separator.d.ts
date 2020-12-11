/**
 * Ajoute des séparateurs de milliers à un nombre.
 *
 * propriété args:
 * * decimal: boolean => indique le nombre possède une partie décimale
 * * pres: number => indique le nombre de chiffres après la virgule
 * * arround: boolean => indique que la partie décimale est arrondie
 *
 * @param nombre
 * @param args
 */
export declare function thousandSeparator(nombre: string | number, args?: ThousandSeparatorArg): string;
/**
 * Ajoute des séparateurs de milliers à une chaine de caractères
 *
 * @param str
 */
export declare function ajouterSeparateurDeMillier(str: string): string;
/**
 * Arguments du separateur de milliers
 */
export interface ThousandSeparatorArg {
    /**
     * indique le nombre possède une partie décimale
     */
    decimal: boolean;
    /**
     * indique le nombre de chiffres après la virgule
     */
    pres: number;
    /**
     * indique que la partie décimale est arrondie
     */
    arround: boolean;
}
