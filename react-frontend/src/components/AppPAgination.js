import React, { useEffect, useState, useCallback } from 'react';

//import api from './api';
//import type { RESPONSE_DATA } from './api';
import Pagination from './pagination';



const RESPONSE_DATA = {
    count : 8,
    list: [{name: "1"}, {name: "2"}, {name: "3"},{name: "4"}, {name: "5"}, {name: "6"}, {name: "7"}, {name: "8"}],
};

function AppPage() {
  const [data, setData] = useState(RESPONSE_DATA);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await api.get.data(page);
//         setData(response);
//       } catch (err) {
//         setError(
//           err instanceof Error ? err.message : 'Unknown Error: api.get.data'
//         );
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]);

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = data ? data.count : current;

    setPage(next <= total ? next : current);
  }, [page, data]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  }, [page]);

  return (
    <div className='App'>
      {/* {data?.list ? (
        <ul>
          {data.list.map((item, index) => (
            <li className = "pag-li" key={index}>{`${item.name}`}</li>
          ))}
        </ul>
      ) : (
        'no data'
      )} */}
      {data && (
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: page === 1,
            right: page === data.count,
          }}
          nav={{ current: page, total: data.count }}
        />
      )}
    </div>
  );
}

export default AppPage;