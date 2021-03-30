import { useState } from "react";
import { array, string } from "prop-types";
import MaterialTable from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";

const Table = ({ title, heads, items }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <p>{title}</p>
      <MaterialTable>
        <TableHead>
          <TableRow>
            {heads.map((e) => (
              <TableCell key={e}>{e}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : items
          ).map((room) => (
            <TableRow key={room.idsala}>
              {Object.values(room).map((f) => (
                <TableCell key={f}>{f}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              count={items.length}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          </TableRow>
        </TableFooter>
      </MaterialTable>
    </div>
  );
};

Table.defaultProps = {
  title: "My Default Title",
};

Table.propTypes = {
  title: string,
  heads: array.isRequired,
};

export default Table;
