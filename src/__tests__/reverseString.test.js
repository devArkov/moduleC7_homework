import { reverseString } from '../reverseString';

xdescribe('test reverse string', () => {
    const string = 'abc';
    const empty = '';
    const short = 'a'
    it(`reverse ${string} string to cba`, () => {
        const result = reverseString(string);
        expect(result).toBe('cba');
    }),
    it(`reverse ${empty} string should return "Передана пустая строка"`, () => {
        const result = reverseString(empty);
        expect(result).toBe('Передана пустая строка');
    }),
    it(`reverse ${short} string should return "Передана слишком короткая строка"`, () => {
        const result = reverseString(short);
        expect(result).toBe('Передана слишком короткая строка');
    })
});


describe('test reverse string', () => {
    const string = 'abc';
    const empty = '';
    const short = 'a'
    it('handle reverse of normal, empty and short string', () => {
        expect(reverseString(string)).toBe('cba');
        expect(reverseString(empty)).toBe('Передана пустая строка');
        expect(reverseString(short)).toBe('Передана слишком короткая строка');
    });
});