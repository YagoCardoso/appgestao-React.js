import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table/TableSala";
import TableDisponibilidadeSalas from "../components/Table/TableDisponibilidadeSalas";

const Salas = () => {
const [getSala, setSala] = useState([]);
const [getAgendamento, setAgendamento] = useState([]);
const [getSalasDisponiveis, setSalasDisponiveis] = useState([]);
const [getSalasIndisponiveis, setSalasIndisponiveis] = useState([]);


const deleteUser = (id) => {
axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

useEffect(() => {
    axios.get("https://localhost:44354/api/Sala").then((myData) => {
const { data } = myData;
setSala(data);
});
}, []);

useEffect(() => {
    axios.get("https://localhost:44354/api/Sala/GetSalasDisponiveis").then((myData) => {
const { data } = myData;
setSalasDisponiveis(data);
});
}, []);

useEffect(() => {
    axios.get("https://localhost:44354/api/Sala/GetSalasIndisponiveis").then((myData) => {
const { data } = myData;
setSalasIndisponiveis(data);
});
}, []);

useEffect(() => {
    axios.get("https://localhost:44354/api/Agendamento").then((myData) => {
    const { data } = myData;
    setAgendamento(data);
    });
    }, []);

    const treatDataDispo = getSalasDisponiveis.map((e) => {
        return Object.assign(e.sala, e.agendamento)
      })
      const treatDataInd = getSalasIndisponiveis.map((e) => {
        return Object.assign(e.sala, e.agendamento)
      })

return (
<>
<Table title={["Agendamentos"]} heads={["id", "titulo", "Data Inicio", "Data Fim", "Nº Sala"]} items={getAgendamento} />
<br></br>
<Table title={["Salas"]} heads={["Nº Sala", "Nome"]} items={getSala} />
<br></br>
<Table title={["Salas Disponiveis"]} heads={["Nº Sala", "Nome"]} items={treatDataDispo} />
<br></br>
<Table title={["Salas Indisponiveis"]} heads={["Nº Sala", "Nome"]} items={treatDataInd} />
</>
);
};

export default Salas;