import { expect, test } from 'vitest';
import { helloWorld, sayHello, isDate } from '../dist';

test('测试示例方法, 无输入, 返回 "Hello, World!"', () => {
  expect(helloWorld());
});

test('sayHello, 输入"hacxy" 返回"Hello, hacxy!"', () => {
  expect(sayHello('hacxy')).toBe('Hello, hacxy!');
});

test('isDate 输入参数,返回boolean', () => {
  expect(isDate(new Date())).toBe(true);
})