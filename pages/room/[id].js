import { useState, useEffect } from "react";
import React, { Component, useRef } from 'react'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useRouter} from 'next/router'
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const initialValue = {
    ID:'',
    IDSALA: '',
    NOME: '',
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },}
  }));

 const InsertSala = () => {

const [getSala, setSala] = useState([]);
const router = useRouter();
const classes = useStyles();
const id = router.query.id;
const [values, setValues] = useState(initialValue);
const [nomeSala, setName] = useState('');


useEffect(() => {
    axios.get(`https://localhost:44354/api/Sala/${router.query.id}`).then((myData) => {
const { data } = myData;
setSala(data);
});
}, []);

const submitValue = () => {
  const frmdetails = {
      'IDSALA' : router.query.id,
      'NOME' : nomeSala,
  }
  console.log(frmdetails);
  try {
    axios.put(`https://localhost:44354/api/Sala/${router.query.id}`, frmdetails )
    .then(res => { console.log(res);  console.log(res.data);
      if(res.status == 200){ 
      alert('Alterado com sucesso');
      router.push('/TablesSalasFull');
       
  }
   
    })

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
}


function onSubimitUpdateFormSala(ev){
    ev.preventDefault();
  
    console.log(values);

    try {
      axios.put(`https://localhost:44354/api/Sala/`,id, values )
      .then(res => { console.log(res);  console.log(res.data);
        if(res.status == 200){ 
        alert('Alterado com sucesso');
         
    }
     
      })
  
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

  function onChange(ev) {
    const{name , value} = ev.target;

    setValues({ ...values, [name]: value });
  }

  const cancelFunct = () => {
    router.push('/TablesSalasFull');
  };
  

return (
<>
<div>
      <p>&nbsp; Alterar Salas </p>
      <div>
          <DialogTitle id="form-dialog-title"> Alterar Nome da Sala</DialogTitle>
          <DialogContent>
            <DialogContentText>
        </DialogContentText>
        <form onSubmit={onSubimitUpdateFormSala} className={classes.root}>
              <TextField helperText="não permitido, delete e crie uma nova." disabled onChange ={onChange}  margin="dense" value={getSala.idsala}   name="IDSALA" label="Nº Sala" type="text"  variant="outlined" autoFocus   />
              <TextField  onChange={e => setName(e.target.value)}  margin="dense" helperText={`Atual: ${getSala.nome}`}  name="NOME" label="Nome Sala" type="text"  variant="outlined" autoFocus   />
               <br></br>
               <Button onClick={cancelFunct} variant="contained" color="default" color="danger">Cancelar </Button>
            <Button onClick={submitValue}
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Salvar
      </Button>
            </form>
          </DialogContent>
      </div>
     
    </div>
</>
);
};


export default InsertSala;