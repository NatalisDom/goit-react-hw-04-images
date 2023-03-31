import css from 'components/Gallery/ImageGallery.module.css';
import {Item } from 'components/Item/ImageGalleryItem';
import PropTypes from 'prop-types';

export const Gallery = ({ images, toggleModal, showModal }) => {
  return (
    <ul className={css.imageGallery}>
      <Item
        images={images}
        toggleModal={toggleModal}
        showModal={showModal}
      />
    </ul>
  );
};
Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
