import { Vortex } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({showLoader}) => {
  return (
    <Vortex
      visible={showLoader}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  );
};


Loader.propTypes = {
  ariaLabel: PropTypes.string,
  colors: PropTypes.array,
  height: PropTypes.number,
  visible: PropTypes.bool,
  width: PropTypes.number,
};
