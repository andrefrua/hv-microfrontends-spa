import React, { useState, useEffect } from "react";
import HvList from "@hv/uikit-react-core/dist/List";
import { fetchPeople } from "../../../lib/api/people";

const parseData = data =>
  data.map(elem => {
    console.log("elem: ", elem);
    const id = elem.url.split("/").reverse()[1];

    return {
      label: elem.name,
      path: `/people/${id}`
    };
  });

const List = ({ classes }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPeople();
      const listData = parseData(data.results);
      setData(listData);
    };

    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <HvList
        values={data}
        selectable={false}
        condensed
        selectable={false}
        useRouter
      />
    </div>
  );
};

export default List;
