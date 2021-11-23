"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajouterSeparateurDeMillier = exports.thousandSeparator = void 0;
const clean_space_1 = require("./clean-space");
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
function thousandSeparator(nombre, args = { decimal: true, pres: 2, arround: false }) {
    if (typeof nombre !== 'string' && typeof nombre !== 'number') {
        return '';
    }
    // verifier la definition des arguments
    if (!args.pres) {
        args.pres = 2;
    }
    let nombreStr = '';
    // rendre la chaine utilisable
    if (typeof nombre === 'string') {
        nombreStr = clean_space_1.cleanSpace(nombre);
    }
    if (typeof nombre === 'number') {
        nombreStr = `${nombre}`;
    }
    // separer la partie entiere de la partie decimale
    let partieEntiere = nombreStr.split('.')[0];
    let partieDecimale = nombreStr.split('.')[1];
    // ajouter separateur de millier à la partie entiere
    partieEntiere = ajouterSeparateurDeMillier(partieEntiere);
    // arrondir partie decimale
    partieDecimale = `0.${partieDecimale}`;
    if (args.arround) {
        if (args.pres && args.pres > 0) {
            const num = Number(+partieDecimale);
            partieDecimale = `${Number(num.toFixed(args.pres))}`;
        }
    }
    partieDecimale = partieDecimale.split('.')[1];
    // construire le resultat
    let resultat = partieEntiere;
    if (args.decimal) {
        if (nombre.toString().indexOf('.') !== -1) {
            if (partieDecimale && partieDecimale !== 'undefined') {
                resultat += `.`;
                resultat += `${partieDecimale}`;
            }
            else if (nombre && nombre !== '') {
                resultat += `.`;
            }
        }
    }
    return resultat;
}
exports.thousandSeparator = thousandSeparator;
/**
 * Ajoute des séparateurs de milliers à une chaine de caractères
 *
 * @param str
 */
function ajouterSeparateurDeMillier(str) {
    let result = '';
    for (let i = 0; i < Math.ceil(str.length / 3); i++) {
        const ofs = str.length - (i + 1) * 3;
        if (ofs > 0) {
            result = `${str.substr(ofs, 3)} ${result}`;
        }
        else {
            result = `${str.substr(0, 3 + ofs)} ${result}`;
        }
        if (i === 0) {
            result = result.substr(0, result.length - 1);
        }
    }
    return result;
}
exports.ajouterSeparateurDeMillier = ajouterSeparateurDeMillier;
