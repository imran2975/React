import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { handleSort, sortColumn, data, columns } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />

      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
