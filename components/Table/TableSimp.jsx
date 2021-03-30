import { useState } from "react";
import { array, string } from "prop-types";
import MaterialTable from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";

const Table = ({items}) => {
return (

	items.map((e) => (
	  <div>
		<table>
		<thead>
		<td>Nº Sala</td>
		<td>Nome Sala</td>
		</thead>

		<tbody>
		<td>{e.sala.idsala}</td>
		<td>{e.sala.nomesala}</td>
		</tbody>
		</table>
	</div>
	)  )

)}

Table.defaultProps = {
  title: "My Default Title",
};

Table.propTypes = {
  title: string,
  heads: array.isRequired,
};

export default Table;
