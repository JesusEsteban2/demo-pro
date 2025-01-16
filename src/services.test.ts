import { add } from './services';
import { expect, test } from 'vitest';

test('adds 0 + 0 to = 0', () => expect(add(0, 0)).toBe(0));

test('adds 2,5 + 1,5 to = 4', () => expect(add(2.5, 1.5)).toBe(4));

test('adds 1 + 2 to = 3', () => {
    expect(add(1, 2)).toBe(3);
});
