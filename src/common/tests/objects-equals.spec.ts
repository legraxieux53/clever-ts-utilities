import { allObjectsEquals, arrayObjectContain, objectsEquals, setObjects } from "..";

describe('objects-equals testing', () => {

    it('objectsEquals:: doit retrouner true', () => {
        const o1 = {
            a: "a",
            b: {
                ba: 'ba'
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        };
        const o2 = {
            a: "a",
            b: {
                ba: 'ba'
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        };
        expect(objectsEquals(o1, o2)).toBeTrue();
    });

    it('objectsEquals:: doit retrouner false', () => {
        const o1 = {
            a: "a",
            b: {
                ba: 'ba'
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        };
        const o2 = {
            a: "a",
            b: {
                ba: 'ba'
            },
            c: [
                {
                    ca: "ca1",
                    cb: "cb",
                }
            ]
        };
        expect(objectsEquals(o1, o2)).toBeFalse();
    });

    it('allObjectsEquals:: doit retrouner true', () => {
        const objs = Array.from({ length: 50 }, (v, k) => ({
            a: "a",
            b: {
                ba: 'ba'
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        }));
        expect(allObjectsEquals(objs)).toBeTrue();
    });

    it('allObjectsEquals:: doit retrouner false', () => {
        const objs = Array.from({ length: 50 }, (v, k) => ({
            a: "a",
            b: {
                ba: 'ba' + k
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        }));
        expect(allObjectsEquals(objs)).toBeFalse();
    });

    it('arrayObjectContain:: doit retrouner true', () => {
        const obj = {
            a: "a",
            b: {
                ba: 'ba' + 1
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        };
        const objs = Array.from({ length: 50 }, (v, k) => ({
            a: "a",
            b: {
                ba: 'ba' + k
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        }));
        expect(arrayObjectContain(objs, obj)).toBeTrue();
    });

    it('arrayObjectContain:: doit retrouner false', () => {
        const obj = {
            a: "a",
            b: {
                ba: 'ba' + 1111
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        };
        const objs = Array.from({ length: 50 }, (v, k) => ({
            a: "a",
            b: {
                ba: 'ba' + k
            },
            c: [
                {
                    ca: "ca",
                    cb: "cb",
                }
            ]
        }));
        expect(arrayObjectContain(objs, obj)).toBeFalse();
    });

    it('setObjects:: doit setter les objets', () => {
        const objs = [
            {
                "PrixOuverture": 0,
                "IsUpdate": true,
                "IsFirstCourOfDay": false,
                "VolumeEchange": 0,
                "ValeurEchange": 0,
                "PrixPlusHaut": 0,
                "PrixPlusBas": 0,
                "NbTransaction": 0,
                "Valeur": 4200,
                "PrixMoyen": 0,
                "PrixReference": 0,
                "ValeurPrecedente": 4200,
                "PrixStaticHaut": 0,
                "PrixStaticBas": 0,
                "PrixDynamiqueHaut": 0,
                "PrixDynamiqueBas": 0,
                "VariationVeillePrixCloturePrix": 0,
                "CodeIsin": "CI0000000014",
                "Symbole": "BICC",
                "Libelle": "Bici C?te D'ivoire",
                "EstListe": false,
                "CategorieTitre": 2,
                "DateSeance": "2021-11-24T10:07:06.815",
                "Profondeur": [],
                "OffreProfondeur": null,
                "VariationValeur": 0,
                "VariationPourcentage": 0,
                "StatutVariation": "Constant",
                "EtatCour": 2
            },
            {
                "PrixOuverture": 0,
                "IsUpdate": true,
                "IsFirstCourOfDay": false,
                "VolumeEchange": 0,
                "ValeurEchange": 0,
                "PrixPlusHaut": 0,
                "PrixPlusBas": 0,
                "NbTransaction": 0,
                "Valeur": 4200,
                "PrixMoyen": 0,
                "PrixReference": 0,
                "ValeurPrecedente": 4200,
                "PrixStaticHaut": 0,
                "PrixStaticBas": 0,
                "PrixDynamiqueHaut": 0,
                "PrixDynamiqueBas": 0,
                "VariationVeillePrixCloturePrix": 0,
                "CodeIsin": "CI0000000014",
                "Symbole": "BICC",
                "Libelle": "Bici C?te D'ivoire",
                "EstListe": false,
                "CategorieTitre": 2,
                "DateSeance": "2021-11-24T10:07:06.815",
                "Profondeur": [],
                "OffreProfondeur": null,
                "VariationValeur": 0,
                "VariationPourcentage": 0,
                "StatutVariation": "Constant",
                "EtatCour": 2
            },
            {
                "PrixOuverture": 0,
                "IsUpdate": true,
                "IsFirstCourOfDay": false,
                "VolumeEchange": 0,
                "ValeurEchange": 0,
                "PrixPlusHaut": 0,
                "PrixPlusBas": 0,
                "NbTransaction": 0,
                "Valeur": 4200,
                "PrixMoyen": 0,
                "PrixReference": 0,
                "ValeurPrecedente": 4200,
                "PrixStaticHaut": 0,
                "PrixStaticBas": 0,
                "PrixDynamiqueHaut": 0,
                "PrixDynamiqueBas": 0,
                "VariationVeillePrixCloturePrix": 0,
                "CodeIsin": "CI0000000014",
                "Symbole": "BICC",
                "Libelle": "Bici C?te D'ivoire",
                "EstListe": false,
                "CategorieTitre": 2,
                "DateSeance": "2021-11-24T10:07:06.815",
                "Profondeur": [],
                "OffreProfondeur": null,
                "VariationValeur": 0,
                "VariationPourcentage": 0,
                "StatutVariation": "Constant",
                "EtatCour": 2
            },
            {
                "PrixOuverture": 0,
                "IsUpdate": true,
                "IsFirstCourOfDay": false,
                "VolumeEchange": 0,
                "ValeurEchange": 0,
                "PrixPlusHaut": 0,
                "PrixPlusBas": 0,
                "NbTransaction": 0,
                "Valeur": 4200,
                "PrixMoyen": 0,
                "PrixReference": 0,
                "ValeurPrecedente": 4200,
                "PrixStaticHaut": 0,
                "PrixStaticBas": 0,
                "PrixDynamiqueHaut": 0,
                "PrixDynamiqueBas": 0,
                "VariationVeillePrixCloturePrix": 0,
                "CodeIsin": "CI0000000014",
                "Symbole": "BICC",
                "Libelle": "Bici C?te D'ivoire",
                "EstListe": false,
                "CategorieTitre": 2,
                "DateSeance": "2021-11-24T10:07:06.815",
                "Profondeur": [],
                "OffreProfondeur": null,
                "VariationValeur": 0,
                "VariationPourcentage": 0,
                "StatutVariation": "Constant",
                "EtatCour": 2
            },
            {
                "PrixOuverture": 1,
                "IsUpdate": true,
                "IsFirstCourOfDay": false,
                "VolumeEchange": 0,
                "ValeurEchange": 0,
                "PrixPlusHaut": 0,
                "PrixPlusBas": 0,
                "NbTransaction": 0,
                "Valeur": 4200,
                "PrixMoyen": 0,
                "PrixReference": 0,
                "ValeurPrecedente": 4200,
                "PrixStaticHaut": 0,
                "PrixStaticBas": 0,
                "PrixDynamiqueHaut": 0,
                "PrixDynamiqueBas": 0,
                "VariationVeillePrixCloturePrix": 0,
                "CodeIsin": "CI0000000014",
                "Symbole": "BICC",
                "Libelle": "Bici C?te D'ivoire",
                "EstListe": false,
                "CategorieTitre": 2,
                "DateSeance": "2021-11-24T10:07:06.815",
                "Profondeur": [],
                "OffreProfondeur": null,
                "VariationValeur": 0,
                "VariationPourcentage": 0,
                "StatutVariation": "Constant",
                "EtatCour": 2
            },
        ]

        const result = [
            {
            "PrixOuverture": 0,
            "IsUpdate": true,
            "IsFirstCourOfDay": false,
            "VolumeEchange": 0,
            "ValeurEchange": 0,
            "PrixPlusHaut": 0,
            "PrixPlusBas": 0,
            "NbTransaction": 0,
            "Valeur": 4200,
            "PrixMoyen": 0,
            "PrixReference": 0,
            "ValeurPrecedente": 4200,
            "PrixStaticHaut": 0,
            "PrixStaticBas": 0,
            "PrixDynamiqueHaut": 0,
            "PrixDynamiqueBas": 0,
            "VariationVeillePrixCloturePrix": 0,
            "CodeIsin": "CI0000000014",
            "Symbole": "BICC",
            "Libelle": "Bici C?te D'ivoire",
            "EstListe": false,
            "CategorieTitre": 2,
            "DateSeance": "2021-11-24T10:07:06.815",
            "Profondeur": [],
            "OffreProfondeur": null,
            "VariationValeur": 0,
            "VariationPourcentage": 0,
            "StatutVariation": "Constant",
            "EtatCour": 2
        },
            {
                "PrixOuverture": 1,
                "IsUpdate": true,
                "IsFirstCourOfDay": false,
                "VolumeEchange": 0,
                "ValeurEchange": 0,
                "PrixPlusHaut": 0,
                "PrixPlusBas": 0,
                "NbTransaction": 0,
                "Valeur": 4200,
                "PrixMoyen": 0,
                "PrixReference": 0,
                "ValeurPrecedente": 4200,
                "PrixStaticHaut": 0,
                "PrixStaticBas": 0,
                "PrixDynamiqueHaut": 0,
                "PrixDynamiqueBas": 0,
                "VariationVeillePrixCloturePrix": 0,
                "CodeIsin": "CI0000000014",
                "Symbole": "BICC",
                "Libelle": "Bici C?te D'ivoire",
                "EstListe": false,
                "CategorieTitre": 2,
                "DateSeance": "2021-11-24T10:07:06.815",
                "Profondeur": [],
                "OffreProfondeur": null,
                "VariationValeur": 0,
                "VariationPourcentage": 0,
                "StatutVariation": "Constant",
                "EtatCour": 2
            },];
        
        expect(setObjects(objs)).toEqual(result);
    });
});