import {rootValue} from '../server';

describe('Hello World', () => {
  test('should return hello world', () => {
    const {hello} = rootValue;
    const output = hello();
    expect(output).toBe('Hello World!');
  });
});
