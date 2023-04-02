import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ afterPage, showBtn }) => {
  if (showBtn !== 0) {
    return (
      <button onClick={afterPage} className={css.button} type="button">
        Load more
      </button>
    );
  }
};
Button.propTypes = {
  afterPage: PropTypes.func.isRequired,
  showBtn: PropTypes.number.isRequired,
};