import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('test de snapshot', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Test de snapshot para fallar test', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20),
        };
        expect(user).toMatchSnapshot();
    });

    test('Excepcion de test del snapshot', () => {
        const user = {
            name: 'Alejandro Gonzalez',
            id: Math.floor(Math.random() * 20),
        };
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });

});