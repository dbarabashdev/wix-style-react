import {isClassExists} from '../../test/utils';
import {findByHook, resolveIn, testkitFactoryCreator} from '../test-common';
import textDriverFactory from '../Deprecated/Text/Text.driver';
import tooltipDriverFactory from '../Tooltip/Tooltip.driver';

const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

const loaderDriverFactory = ({element}) => {
  const textDriver = element && textTestkitFactory({wrapper: element, dataHook: 'loader-text'});

  return {
    component: () => element,
    exists: () => !!element,
    getColor: () => isClassExists(element, 'blue') ? 'blue' : 'white',
    getText: () => textDriver.getText(),
    hasText: () => textDriver.exists(),
    isLarge: () => isClassExists(element, 'large'),
    isMedium: () => isClassExists(element, 'medium'),
    isSmall: () => isClassExists(element, 'small'),
    isTiny: () => isClassExists(element, 'tiny'),
    isLoading: () => isClassExists(element, 'loading'),
    isError: () => isClassExists(element, 'error'),
    isSuccess: () => isClassExists(element, 'success'),
    getStatusMessage: () => {
      const tooltipDriver = tooltipDriverFactory({
        element: findByHook(element, 'loader-tooltip')
      });

      tooltipDriver.mouseEnter();
      return resolveIn(500)
        .then(() => tooltipDriver.getContent());
    }
  };
};

export default loaderDriverFactory;
