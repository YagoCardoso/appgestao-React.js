import { useState } from "react";
import { array, string } from "prop-types";
import MaterialTable from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import  AddBox  from '@material-ui/icons/AddBox';
import  Edit  from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';
import React from 'react';

const Table = ({ title, heads, items }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = React.useState(false); 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const cadastrarAgendamento = async (id) => {
    try {
        const response = await axios.post(`https://localhost:44354/api/Agendamento/${id}`);
        // Success 🎉
        console.log(response);
    } catch (error) {
        // Error 😨
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error);
    }
};

const deletarAgendamento = async (id) => {
  try {
      const response = await axios.delete(`https://localhost:44354/api/Agendamento/${id}`);
      // Success 🎉
      console.log(response);
  } catch (error) {
      // Error 😨
      if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      } else if (error.request) {
          console.log(error.request);
      } else {
          console.log('Error', error.message);
      }
      console.log(error);
  }
};
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p>&nbsp;<strong>{title}</strong></p>
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
              <TableCell>
              <IconButton onClick={handleClickOpen} style={{ color: green[500] }} aria-label="add"><AddBox /></IconButton>
              <IconButton color="primary" aria-label="edit"><Edit /></IconButton>
              <IconButton onClick={handleClickOpen} color="action" aria-label="delete"><DeleteIcon /></IconButton>
              </TableCell>
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
      <div>
    
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title"> Cadastro Salas</DialogTitle>
      <DialogContent>
        <DialogContentText>
         Digite o Nº da sala e o Nome da sala abaixo!
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="idsala"
          label="Nº Sala"
          type="number"
          fullWidth
        />
         <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome Sala"
          type=""
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={cadastrarSala} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  </div>
     
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
