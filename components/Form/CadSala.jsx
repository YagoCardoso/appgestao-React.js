import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const cadastrarSala = async (id) => {
        try {
            const response = await axios.post(`https://localhost:44354/api/Sala/${id}`);
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
    

  return (

    
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>Cadastrar Sala
      </Button>
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
  );
}
