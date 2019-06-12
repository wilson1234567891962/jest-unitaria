import { arrayFruits, arrayColors } from '../arrays.js';

describe('Prueba de conceptos de arrays ', () => {

    test('Contiene un elemento', () => {
        expect(arrayFruits()).toContain('banana');
    });

    test('Contiene un elemento', () => {
        expect(arrayColors()).not.toContain('Prueba');
    });

});

