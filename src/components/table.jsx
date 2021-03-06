import React, { useEffect, useState } from "react";
import search from "../services/searchAjax";
import Loading from "./loading";
import TableRow from "./tableRow";

const Table = ({ results }) => {
  const [joke, setJoke] = useState({});
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    if (results.result.length) {
      setArrived(true);
    }
  }, [results]);

  const toggleClick = (res) => {
    setJoke(res);
  };

  if (!arrived) return <Loading />;
  return (
    <div className="container">
      <div className="ite ite-1">ID</div>
      <div className="ite ite-2">Category</div>
      <div className="ite ite-3">Created at</div>

      {results.result.map((res, idx) => {
        let data = res.created_at;
        let dateToDisplay = search.reverseDate(data);
        return (
          <TableRow
            key={idx}
            res={res}
            joke={joke}
            toggleClick={toggleClick}
            dateToDisplay={dateToDisplay}
          />
        );
      })}
    </div>
  );
};

export default Table;
