import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const Producto = () => {

    const [productos, setAdminData] = useState([]);

    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/productos/")
        .then((response) => {
          setAdminData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

  return (
<div className="container mt-3">
     <h3 className='mb-3 text-primary'>Lista de Productos</h3>  
      <table className="table table-bordered shadow table-striped w-50">
        <thead className='thead-dark'>
          <tr className="text-center">
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            return (
              <tr key={producto.codigo}>
                <td>{producto.codigo}</td>
                <td>{producto.descripcion}</td>
                <td>S/ {producto.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Producto