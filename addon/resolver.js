import Resolver from 'ember/resolver';

export default Resolver.extend({
  podBasedLookupWithPrefix: function(podPrefix, parsedName) {
    let fullNameWithoutType = parsedName.fullNameWithoutType;

    if (isComponentTemplate(parsedName)) {
      fullNameWithoutType = fullNameWithoutType.replace(/^components\//, '');
      return podPrefix + '/' + fullNameWithoutType + '/' + parsedName.type;
    }

    switch (parsedName.type) {
      case 'route':
      case 'controller':
      case 'view':
      case 'template':
        if (fullNameWithoutType.indexOf('application') !== 0) {
          fullNameWithoutType = 'application/' + fullNameWithoutType;
        }
    }

    return podPrefix + '/' + fullNameWithoutType + '/' + parsedName.type;
  }
});

function isComponentTemplate(parsedName) {
  return parsedName.type === 'template' &&
    parsedName.fullNameWithoutType.indexOf('components') === 0;
}
