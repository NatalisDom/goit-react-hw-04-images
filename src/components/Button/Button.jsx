import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ nextPage, showBtn }) => {
  if (showBtn !== 0) {
    return (
      <button onClick={nextPage} className={css.button} type="button">
        Load more
      </button>
    );
  }
};
Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
  showBtn: PropTypes.number.isRequired,
};