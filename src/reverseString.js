export function reverseString(string) {
    if (string === '') {
        return 'Передана пустая строка';
    } else if (string.length === 1) {
        return 'Передана слишком короткая строка';
    }

    return string.split('').reverse().join('');
}