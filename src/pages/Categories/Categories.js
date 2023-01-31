import React from 'react';
import './cat.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const send = useDispatch();
  const status = useSelector((state) => state.categories);

  const check = () => send(checkStatus());
  return (
    <section className="cat-container">
      <div>
        <h1>Categories</h1>
        <p>{status}</p>
        <button
          type="button"
          onClick={check}
        >
          Check Status
        </button>
      </div>
    </section>
  );
};
export default Categories;
