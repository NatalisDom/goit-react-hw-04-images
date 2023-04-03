import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import css from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

export const FormSearch = ({ submit }) => {
  const [query, setQuery] = useState('');

  const change = ({ target: { value } }) => {
    setQuery(value);
  };

  const Submit = e => {
    e.preventDefault();

    submit(query);
    reset();
  };

  function reset() {
    setQuery('');
  }

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={Submit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>
            <ImSearch />
          </span>
        </button>

        <input
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={change}
          className={css.input}
          type="text"
        />
      </form>
    </header>
  );
};

FormSearch.propTypes = {
  query: PropTypes.func,
  change: PropTypes.func,
  submit: PropTypes.element,
};
