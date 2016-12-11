import React from 'react';
import classNames from 'classnames';
import * as styles from './HeaderLayout1.scss';
import SvgX from '../svg/X.js';

const HeaderLayout1 = ({title, onCancel, style}) => {
  return (
    <div className={classNames(styles.header, styles[style])} >
      {title}
      <button className={styles.close} onClick={onCancel}>
        <SvgX width={9} height={9} thickness={1} color={'white'}/>
      </button>
    </div>
  );
};

HeaderLayout1.propTypes = {
  title: React.PropTypes.node,
  onCancel: React.PropTypes.func,
  style: React.PropTypes.oneOf(['red', 'green', 'blue', 'lightGreen'])
};

export default HeaderLayout1;
