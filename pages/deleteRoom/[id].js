import { useState, useEffect } from "react";
import React, { Component, useRef } from 'react'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router'
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
  },},
}));

 

 const DeletSala = () => {
const router = useRouter();
const classes = useStyles();
const id = router.query.id;

const deletarReg = async () => {
  try {
    const response = await axios.delete(`https://localhost:44354/api/Sala/${id}`);
    if (response.status == 200) {
      // Success 
      console.log(response);
      alert("Excluido com sucesso!")
      router.push('/TablesSalasFull');
    }
  
} catch (error) {
   // Error 
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

const cancelDelete = () => {
  router.push('/TablesSalasFull');
};

return (
<>
<div>
      <p>&nbsp; Deletar Registro </p>
      <div>
          <DialogTitle id="form-dialog-title">  Deseja realmente excluir?</DialogTitle>
          <DialogContent>
            <DialogContentText>
        </DialogContentText>
        <form className={classes.root}>
               <br></br>
                <Button onClick={cancelDelete} variant="contained" color="default" color="danger">Cancelar </Button>
                <Button  onClick={deletarReg} variant="contained" color="secondary"className={classes.button} startIcon={<DeleteIcon />}> Deletar </Button>
            </form>
          </DialogContent>
      </div>
     
    </div>
</>
);
};


export default DeletSala;