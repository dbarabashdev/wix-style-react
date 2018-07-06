import React from 'react';
import {func, oneOf, string} from 'prop-types';
import Button from '../Button';
import Close from '../new-icons/system/Close';
import CloseLarge from '../new-icons/system/CloseLarge';

/*
  For internal usage,
  TODO should be refactored later, together with buttons cleanup
*/

const CloseButton = ({arialLabel, dataHook, size, theme, onClick}) => {
  return (
    <Button
      aria-label={arialLabel}
      dataHook={dataHook}
      height={size === 'small' ? 'medium' : 'large'}
      theme={theme}
      onClick={onClick}
      >
      {size === 'small' ? <Close/> : <CloseLarge/>}
    </Button>
  );
};

CloseButton.propTypes = {
  arialLabel: string,
  dataHook: string,
  size: oneOf(['small', 'large']),
  theme: string,
  onClick: func
};

CloseButton.defaultProps = {
  arialLabel: 'close button',
  theme: 'close-transparent',
  size: 'large'
};

CloseButton.displayName = 'CloseButton';

export default CloseButton;
