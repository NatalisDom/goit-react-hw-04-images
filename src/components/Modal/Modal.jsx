import { createPortal } from 'react-dom';
import css from 'components/Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const keydownImg = Event => {
      if (Event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keydownImg);

    return () => {
      window.removeEventListener('keydown', keydownImg);
    };
  },   [onClose]);

  const clickImg = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <div onClick={clickImg} className={css.overlay}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
