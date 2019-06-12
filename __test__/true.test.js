import { isNull, isTrue , isFalse, isUndefined} from '../true';

describe('Prueba de conceptos ', () => {

    test('Prueba de null', () => {
        expect(isNull()).toBeNull();
    });

    test('Verdadero', () => {
        expect(isTrue()).toBeTruthy();
    });

    test('Falzo', () => {
        expect(isFalse()).toBeFalsy();
    });

    test('Undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});

