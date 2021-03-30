import { useState, useEffect } from "react";
import axios from "axios";
import CadSala from "../components/Form/CadSala";

const FormSala = () => {
const [getSala, setSala] = useState([]);

const cadastrarSala = (id) => {
axios.post(`https://localhost:44354/api/Sala/${id}`);
};



return (
<>
<h1>Cadastro de Salas</h1>
<br></br>
<CadSala  />
</>
);
};

export default FormSala;