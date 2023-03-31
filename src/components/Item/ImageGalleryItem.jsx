import css from 'components/Item/ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Item = ({ images, showModal, toggleModal }) => {
  const [largeImg, setLargeImg] = useState('');
  const [sign, setSign] = useState('');

  const setImg = (el, sign) => {
    setLargeImg(el);
    setSign(sign);
  };

  return images.map(el => (
    <li key={el.id} className={css.Item}>
      <img
        id={el.id}
        onClick={() => {
          setImg(el.largeImage, el.tags);
          toggleModal();
        }}
        className={css.image}
        src={el.smallImage}
        alt={el.tags}
      />

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImg} alt={sign} />
        </Modal>
      )}
    </li>
  ));
};

Item.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
