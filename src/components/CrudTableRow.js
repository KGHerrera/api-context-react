import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ item }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  let { name, image, id } = item;

  return (
    <tr>
      <td>
        <div
          style={{
            width: 100 + "px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: 100 + "px",
            backgroundImage: `url('${image}')`,
            borderRadius: 100 + "px",
          }}
        ></div>
      </td>
      <td>{name}</td>

      <td>
        <button onClick={() => setDataToEdit(item)}>editar</button>
        <button onClick={() => deleteData(id)}>eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
