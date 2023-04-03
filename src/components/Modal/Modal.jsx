import { createPortal } from 'react-dom';
import css from 'components/Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ onClose, children, src, tags }) => {
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
  }, [onClose]);

  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <div onClick={onClose} className={css.overlay}>
      <div className={css.modal}>
        {children}
        <img className="container" src={src} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
