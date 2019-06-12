import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('test de snapshot', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
    
});