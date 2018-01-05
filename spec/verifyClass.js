const _ = require('underscore');

module.exports = function runVerifyClassTests (constructor, pattern, prototypeOfInstances) {

  describe('verifyClass', function () {
    const patternIs = function () {
      return _(arguments).contains(pattern);
    };

    if (!patternIs(
      'functional',
      'functional-shared',
      'prototypal',
      'pseudoclassical',
      'es2015'
    )) {
      throw new Error('Unrecognized class pattern');
    }

    if (patternIs('prototypal') && !prototypeOfInstances) {
      throw new Error('Testing the prototypal pattern requires you to supply the expected prototype');
    }

    const requireOption = function(optionName) {
      return option(optionName, true);
    };

    const option = function(optionName, required) {
      if (required && !options.hasOwnProperty(optionName)) {
        throw new Error('testClassPattern requires the ' + optionName + ' option');
      }
      const setting = options[optionName];
      delete options[optionName];
      return setting;
    };

    const options = {
      requiresNew: patternIs('es2015'),
      usesNew: patternIs('pseudoclassical', 'es2015'),
      referencesThis: patternIs('pseudoclassical', 'es2015'),
      extendsPrototype: patternIs('pseudoclassical', 'es2015'),
      reusesMethods: patternIs('functional-shared', 'prototypal', 'pseudoclassical', 'es2015'),
      referencesReturn: patternIs('functional', 'functional-shared', 'prototypal'),
      declaresVariables: patternIs('functional', 'functional-shared', 'prototypal'),
      hasOwnMethods: patternIs('functional', 'functional-shared'),
      reusesNonFunctions: patternIs(),
      extendsConstructor: patternIs()
    };

    prototypeOfInstances = (
      patternIs('functional') ? Object.prototype :
        patternIs('functional-shared') ? Object.prototype :
          patternIs('pseudoclassical', 'es2015') ? constructor.prototype :
            prototypeOfInstances
    );

    const constructionArgs = option('constructionArgs') || [];
    const usesNew = requireOption('usesNew');
    const requiresNew = requireOption('requiresNew');
    const instantiate = function() {
      if (usesNew) {
        return new constructor(...constructionArgs);
      } else {
        return constructor.apply(this, constructionArgs);
      }
    };

    const might = function(behavior, setting) {
      return 'does ' + (setting ? '' : 'not ') + behavior;
    };

    const assuming = function(condition) {
      return {expect: function() {
        const expectActual = expect.apply(null, arguments);
        return condition ? expectActual : expectActual.not;
      }};
    };

    describe(pattern + ' instantiation style', function() {
      let instance;

      beforeEach(function() {
        instance = instantiate();
      });

      test('makes new instances that delegate to appropriate prototype object', function() {
        expect(prototypeOfInstances.isPrototypeOf(instance)).toBe(true);
      });

      const constructorPrototypeProto = option('constructorPrototypeProto');
      if (constructorPrototypeProto) {
        test('makes the constructor\'s .prototype property delegate to the appropriate prototype object', function() {
          expect(constructorPrototypeProto.isPrototypeOf(constructor.prototype)).toBe(true);
        });
      }

      test('has a .prototype.constructor property that points back to the constructor itself', function() {
        expect(constructor.prototype.constructor).toBe(constructor);
      });

      test(might('require calling with "new" keyword', requiresNew), function() {
        assuming(requiresNew).expect(() => { constructor.call({}); }).toThrow(/class.*new/i);
      });

      const extendsConstructor = requireOption('extendsConstructor');
      test(might('extend the constructor function', extendsConstructor), function() {
        constructorPropertyCount = Object.keys(constructor).length;
        assuming(extendsConstructor).expect(constructorPropertyCount).toBeGreaterThan(0);
      });

      const extendsPrototype = requireOption('extendsPrototype');
      test(might('extend the constructor function\'s prototype', extendsPrototype), function() {
        // use for non-enumerable property support
        const prototypeObjectPropertyCount = Object.getOwnPropertyNames(constructor.prototype).length;
        // prototype always has constructor property
        assuming(extendsPrototype).expect(prototypeObjectPropertyCount).toBeGreaterThan(1);
      });

      const referencesThis = requireOption('referencesThis');
      test(might('reference the keyword this', referencesThis), function() {
        assuming(referencesThis).expect(/((?!\/\/).)*(this)/m.test(constructor)).toBe(true);
      });

      const referencesReturn = requireOption('referencesReturn');
      test(might('reference the return keyword', referencesReturn), function() {
        // ignore class declarations since strings include methods
        if (String(constructor).indexOf('class') === 0) { return; }

        assuming(referencesReturn).expect(/return/.test(constructor)).toBe(true);
      });

      const declaresVariables = requireOption('declaresVariables');
      test(might('declare variables', declaresVariables), function() {
        // ignore class declarations since strings include methods
        if (String(constructor).indexOf('class') === 0) { return; }

        assuming(declaresVariables).expect(/var |let |const /.test(constructor)).toBe(true);
      });

      test('does store properties without use of a prototype chain', function() {
        _(instance).each(function(value, key) {
          if (typeof value !== 'function') {
            expect(instance.hasOwnProperty(key)).toBe(true);
          }
        });
      });

      const hasOwnMethods = requireOption('hasOwnMethods');
      test(might('store methods without use of a prototype chain', hasOwnMethods), function() {
        _(_(instance).methods()).each(function(methodName) {
          assuming(hasOwnMethods).expect(instance.hasOwnProperty(methodName)).toBe(true);
        });
      });

      const reusesNonFunctions = requireOption('reusesNonFunctions');
      test(might('reuse non-function objects across multiple instances', reusesNonFunctions), function() {
        const otherInstance = instantiate();
        _(instance).each(function(value, key) {
          if (value && typeof value === 'object') {
            assuming(reusesNonFunctions).expect(value).toBe(otherInstance[key]);
          }
        });
      });

      const reusesMethods = requireOption('reusesMethods');
      test(might('reuse methods across multiple instances', reusesMethods), function() {
        const otherInstance = instantiate();
        _(_(instance).methods()).each(function(methodName) {
          assuming(reusesMethods).expect(instance[methodName]).toBe(otherInstance[methodName]);
        });
      });
    });
  });
};
