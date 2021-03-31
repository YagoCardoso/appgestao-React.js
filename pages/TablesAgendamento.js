import { useState, useEffect } from "react";
import axios from "axios";
import TableAgendamento from "../components/Table/TableAgendamento";

const TablesTools = () => {
const [getAgendamento, setAgendamento] = useState([]);

useEffect(() => {
    axios.get("https://localhost:44354/api/Agendamento").then((myData) => {
    const { data } = myData;
    setAgendamento(data);
    });
    }, []);

return (
<>
<TableAgendamento title={["Agendamentos"]} heads={["id","titulo", "Data Inicio", "Data Fim", "Nº Sala","Ações",]} items={getAgendamento} />
<br></br>
</>
);
};

export default TablesTools;