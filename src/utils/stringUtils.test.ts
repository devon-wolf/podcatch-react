import { makeUrlPath, splitUrlPath } from './stringUtils';

describe('string utils', () => {
  it('replaces spaces with hyphens', () => {
    const testString = 'this is a sentence';
    const expected = 'this-is-a-sentence';
    const actual = makeUrlPath(testString);
    expect(actual).toEqual(expected);
  });
  it('trims extra spaces at start and end', () => {
    const testString = ' this is a sentence ';
    const expected = 'this-is-a-sentence';
    const actual = makeUrlPath(testString);
    expect(actual).toEqual(expected);

    const testString2 = '     this is a sentence     ';
    const expected2 = 'this-is-a-sentence';
    const actual2 = makeUrlPath(testString2);
    expect(actual2).toEqual(expected2);
  });
  it('preserves extra spaces within text body', () => {
    const testString = 'this  is  a  sentence';
    const expected = 'this--is--a--sentence';
    const actual = makeUrlPath(testString);
    expect(actual).toEqual(expected);
  });
  // TODO continue tests with weird cases

  it('replaces hyphens with spaces', () => {
      const testString = 'this-is-a-sentence';
      const expected = 'this is a sentence';
      const actual = splitUrlPath(testString);
      expect(actual).toEqual(expected);
  })
});
