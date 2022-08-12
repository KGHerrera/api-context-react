import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader.js";
import Message from "./Message.js";

export default function CrudApi() {
const {db, error, loading} = useContext(CrudContext);

  return (
    <div style={{width: "100%", margin:"2rem"}}>
      <h2>CRUD API con Context API</h2>
      <CrudForm/>
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status} : ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && (
        <CrudTable/>
      )}
    </div>
  );
}
