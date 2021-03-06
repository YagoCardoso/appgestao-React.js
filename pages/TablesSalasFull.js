import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table/TableSala";
import TableSalaDispANDind from "../components/Table/TableSalaDispANDind";


const TablesTools = () => {
const [getSala, setSala] = useState([]);
const [getSalasDisponiveis, setSalasDisponiveis] = useState([]);
const [getSalasIndisponiveis, setSalasIndisponiveis] = useState([]);


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

    const treatDataDispo = getSalasDisponiveis.map((e) => {
        return Object.assign(e.sala)
      })
      const treatDataInd = getSalasIndisponiveis.map((e) => {
        return Object.assign(e.sala)
      })

return (
<>
<Table title={["Todas Salas"]} heads={["Nº Sala", "Nome","Ações"]} items={getSala} callback={setSala} />
<br></br>
<TableSalaDispANDind title={["Salas Disponiveis"]} heads={["Nº Sala", "Nome"]} items={treatDataDispo} />
<br></br>
<TableSalaDispANDind title={["Salas Indisponiveis"]} heads={["Nº Sala", "Nome"]} items={treatDataInd} />
</>
);
};

export default TablesTools;