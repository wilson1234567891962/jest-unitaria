import { callbackHell } from '../callbacks.js';

describe('Prueba de callbacks promesas', () => {

    test('Implements callbacks', done => {
        function eitherCallBacks(data) {
            expect(data).toBe('Hola Javascripters');
            done();
        };
        callbackHell(eitherCallBacks);
    });
});