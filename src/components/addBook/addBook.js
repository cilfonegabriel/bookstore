import React from "react";
import './addBook.css';

const Add = () => (
    <div className="add-section">
        <h2>Add New Book</h2>
        <form action="">
            <input
                type = 'text'
                placeholder="Enter title of your book"
                required
            />
            <input
                className="author-input"
                type= 'text'
                placeholder="Enter author of your book"
                required
            />
            <button className="btn-submit" type="submit"> Add Book</button>  
        </form>
    </div>
);

export default Add;