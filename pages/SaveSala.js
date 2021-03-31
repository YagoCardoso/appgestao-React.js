import React, { Component, useRef } from 'react'
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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import  AddBox  from '@material-ui/icons/AddBox';
import  Edit  from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';
import axios from "axios";



const initialValue = {
  IDSALA: '',
  NOME: '',
}

const TablesTools = () => {
  const [values, setValues] = useState(initialValue);
 

  function onChange(ev) {
    const{name , value} = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubimitFormSala(ev){
    ev.preventDefault();



    try {
      axios.post(`https://localhost:44354/api/Sala/`,  values )
      .then(res => { console.log(res);  console.log(res.data);
      
      
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

return (
<>
 <div>
      <form onSubmit={onSubimitFormSala}>
        <label>
          Sala:
          <input placeholder="n sala" type="text" name="IDSALA" onChange ={onChange} />
          <input placeholder="nome" type="text" name="NOME" onChange ={onChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
</>
);
};

export default TablesTools;