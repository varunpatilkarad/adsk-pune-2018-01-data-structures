const _ = require('underscore');

describe.skip('HashTable', function() {
  let LimitedArray, getIndexBelowMaxForKey, mockHashTableHelpers, HashTable, hashTable;
  const people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];

  beforeEach(function() {
    jest.resetModules();

    LimitedArray = require('../hashTableHelpers/limitedArray');
    getIndexBelowMaxForKey = require('../hashTableHelpers/getIndexBelowMaxForKey');

    jest.mock('../hashTableHelpers');
    mockHashTableHelpers = require('../hashTableHelpers');
    mockHashTableHelpers.LimitedArray
      .mockImplementation((...args) => LimitedArray(...args));
    mockHashTableHelpers.getIndexBelowMaxForKey
      .mockImplementation((...args) => getIndexBelowMaxForKey(...args));

    HashTable = require('../hashTable');
    hashTable = new HashTable();
  });

  test('should have methods named "insert", "remove", and "retrieve', function() {
    expect(typeof hashTable.insert === 'function').toBe(true);
    expect(typeof hashTable.remove === 'function').toBe(true);
    expect(typeof hashTable.retrieve === 'function').toBe(true);
  });

  test('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).toBe('Seagal');
  });

  test('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.toBe('Seagal');
  });

  test('should overwrite values that have the same key', function() {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).toBe('Barker');
  });

  test('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).toBe(undefined);
  });

  test('should handle hash function collisions', function() {
    mockHashTableHelpers.getIndexBelowMaxForKey
      .mockImplementation(() => 0);

    const v1 = 'val1';
    const v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toBe(v1);
    expect(hashTable.retrieve(v2)).toBe(v2);
  });

  // (Advanced! Remove the `.skip` when you want the following tests to run)
  test.skip ('should double in size when needed', function() {
    _.each(people, function(person) {
      const firstName = person[0];
      const lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).toBe(lastName);
    });
    expect(hashTable._limit).toBe(16);
  });

  test.skip ('should halve in size when needed', function() {
    _.each(people, function(person) {
      const firstName = person[0];
      const lastName = person[1];
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).toBe(lastName);
    });
    expect(hashTable._limit).toBe(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._limit).toBe(8);
  });
});
