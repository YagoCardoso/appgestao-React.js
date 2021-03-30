import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table/TableSala";

const Salas = () => {
const [getData, setData] = useState([]);

const deleteUser = (id) => {
axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

useEffect(() => {
axios.get("https://localhost:44354/api/Sala").then((myData) => {
const { data } = myData;
setData(data);
});
}, []);

return (
<>
<Table title={["Salas"]} heads={["Id Sala", "Nome"]} items={getData} />

</>
);
};

export default Salas;