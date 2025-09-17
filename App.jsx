import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); 
  const recordsPerPage = 5; 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // total pages
  const totalPages = Math.ceil(data.length / recordsPerPage);

  // calculate slice
  const startIndex = (page - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = data.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Products</h2>
      {currentRecords.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><b>{item.title}</b></p>
          <p>Price: ${item.price}</p>
        </div>
      ))}

      {/* Pagination buttons */}
      <div style={{ marginTop: "20px" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span style={{ margin: "0 10px" }}> Page {page} of {totalPages} </span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default App;
