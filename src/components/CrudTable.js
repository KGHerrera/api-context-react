import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { db} = useContext(CrudContext);
  return (
    <div className="tabla">
      <h3>tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>pfp</th>
            <th>nombre</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((item) => (
              <CrudTableRow
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <tr>
              <td colSpan={3}>sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
