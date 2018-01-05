const Set = require('../set');

describe.skip('Set', function() {
  let set;

  beforeEach(function() {
    set = Set();
  });

  test('should have methods named "add", "contains", and "remove"', function() {
    expect(typeof set.add === 'function').toBe(true);
    expect(typeof set.contains === 'function').toBe(true);
    expect(typeof set.remove === 'function').toBe(true);
  });

  test('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).toBe(true);
    expect(set.contains('Susan Sarandon')).toBe(true);
  });

  test('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).toBe(false);
  });
});
