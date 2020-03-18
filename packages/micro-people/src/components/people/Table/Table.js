/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React, { useState, useEffect } from "react";
import HvTable from "@hv/uikit-react-core/dist/Table";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import { Link } from "react-router-dom";
import { fetchPeople } from "../../../lib/api/people";

const getColumns = () => [
  {
    headerText: "Name",
    accessor: "name",
    fixed: "left",
    format: value => {
      const id = value.original.url.split("/").reverse()[1];

      return (
        <Link to={`/${id}`}>
          <HvTypography variant="inlineLink">
            {value.original.name}
          </HvTypography>
        </Link>
      );
    }
  },
  {
    headerText: "Height",
    accessor: "height",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Mass",
    accessor: "mass",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Hair Color",
    accessor: "hair_color",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Skin Color",
    accessor: "skin_color",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Eye Color",
    accessor: "eye_color",
    cellType: "alpha-numeric"
  },
  {
    headerText: "Birth Year",
    accessor: "birth_year",
    cellType: "alpha-numeric"
  }
];

const Table = () => {
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);

  const onPageSizeChange = newPageSize => setPageSize(newPageSize);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchPeople();
      setData(res.results);
    };

    fetchData();
  }, []);

  return (
    data && (
      <HvTable
        data={data}
        columns={getColumns()}
        defaultPageSize={10}
        pageSize={pageSize}
        resizable={false}
        labels={{}}
        onPageSizeChange={onPageSizeChange}
      />
    )
  );
};

export default Table;
