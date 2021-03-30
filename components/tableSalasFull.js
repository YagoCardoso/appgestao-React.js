import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { array, string } from 'prop-types';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />;
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

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
                    <td>{e.idsala}</td>
                    <td>{e.nome}</td>
                    </tbody>
                </table>
            </div>
     ))
    
    )}  

    const columns = [
        { id: 'idsala', label: 'Nº Sala', minWidth: 10 },
        { id: 'nomesala', label: 'Nome Sala', minWidth: 10 },
        
      ];
      
      function createData(idsala, nomesala) {
        // const density = population / size;
        return { idsala, nomesala};
      }
      
      const rows = [
        createData('India', 'IN', 1324171354, 3287263),
        
      ];
      
      const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 420,
        },
      });
      
      export default function StickyHeadTable() {
        const classes = useStyles();
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };
      
        return (
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        );
      }

      Table.propTypes = {
        items: array.isRequired
      }
      
      export default Table