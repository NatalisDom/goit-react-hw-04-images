import React, { useState, useEffect } from 'react';
import { getImages } from 'api/api';
import { FormSearch } from 'components/Searchbar/Searchbar';
import { Gallery } from 'components/Gallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/loader';

import toast, { Toaster } from 'react-hot-toast';
import css from 'components/App.module.css';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [img, setImg] = useState([]);
  const [searchImg, setSearchImg] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const submit = query => {
    setPage(1);
    setImg([]);
    setError(null);
    setSearchImg(query);
  };

  const tumblerLoader = () => setShowLoader(prevLoader => !prevLoader);

  const afterPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const rummage = async () => {
      try {
        tumblerLoader();
        const reply = await getImages(searchImg, page);
        if (reply.length === 0) {
          toast.error(`Sorry, no images for this request ${searchImg}`);
        }
        const base = await reply.map(el => ({
          id: el.id,
          smallImage: el.webformatURL,
          largeImage: el.largeImageURL,
          tags: el.tags,
        }));

        setImg(prevImages => [...prevImages, ...base]);
      } catch (error) {
        setError(error.mesage);
      } finally {
        tumblerLoader();
      }
    };
    if (searchImg) {
      rummage();
    }
  }, [page, searchImg]);

  return (
    <div className={css.app}>
      <FormSearch submit={submit} />
      {error && <h1>{error}</h1>}
      <Gallery images={img} toggleModal={toggleModal} showModal={showModal} />
      <Loader showLoader={showLoader} />
      <Button nextPage={afterPage} showBtn={img.length} />
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            background: '#0e15e8',
            color: '#e8e10e',
          },
        }}
      />
    </div>
  );
};
