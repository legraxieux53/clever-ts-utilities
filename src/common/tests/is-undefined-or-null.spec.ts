import { isUndefinedOrNull } from "../is-undefined-or-null";

describe("is-undefined-or-null", () => {
  it(`retourne true si l'objet est null`, () => {
    expect(isUndefinedOrNull(null)).toBeTrue();
  });

  it(`retourne true si l'objet est 0`, () => {
    expect(isUndefinedOrNull(0)).toBeTrue();
  });

  it(`retourne true si l'objet est undefined`, () => {
    expect(isUndefinedOrNull(undefined)).toBeTrue();
  });

  it(`retourne true si l'objet est vide`, () => {
    expect(isUndefinedOrNull({})).toBeTrue();
  });

  it(`retourne false si l'objet n'est pas vide`, () => {
    expect(isUndefinedOrNull({ nom: "dfgfdg" })).toBeFalse();
  });
});
