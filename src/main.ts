import { add } from './services';

const x = 'pepe';
console.log(x);

console.log(add(2, 3));

test('Patata', () => {
    expect(add(2, 1)).toBe(3);
});

test('Patata', () => {
    expect(add(2.5, 1.5)).toBe(4);
});
