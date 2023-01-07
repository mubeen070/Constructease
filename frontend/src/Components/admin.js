import React from "react";
import "../Style/admin.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { deleteProductData, getproductData, productData } from "../Service/api.js";
const Admin = () => {

  const [productsData, setproductsData] = useState([]);
  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodPrice, setProdPrice] = useState(0);
  const [prodImgUrl, setProdImgUrl] = useState("");



  useEffect(() => {
    getproductDetails();
  }, []);


  const getproductDetails = async () => {
    try {
      const result = await getproductData();
      setproductsData(result.data);
    } catch (error) {
      console.log(error);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productData({ prodName, prodDesc, prodPrice, prodImgUrl })
        .then(() => {
          setProdName("");
          setProdDesc("");
          setProdPrice(0);
          setProdImgUrl("");
          alert("Product added successfully!");
        })
    } catch (err) {
      console.log(err.message)
      alert("Product addition failed!");
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteProductData(id)
        .then(() => alert("Product deleted successfully!"));
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="container-fluid" >
      <div
        className="row"
      >
        <form>
          <h1 className="text-dark">Add Product</h1>
          <div className="container" style={{ width: "30rem" }}>
            <div className="form-floating mb-1">
              <input
                type="text"
                name="prodName"
                value={prodName}
                onChange={(e) => setProdName(e.target.value)}
                class="containers form-control"
                id="floatingInput"
                placeholder="Product Name"
                required
              />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="text"
                name="prodDesc"
                value={prodDesc}
                onChange={(e) => setProdDesc(e.target.value)}
                class="containers form-control"
                id="floatingInput"
                placeholder="Product Description"
              />
              <label for="floatingInput">Description</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="number"
                name="prodPrice"
                value={prodPrice}
                onChange={(e) => setProdPrice(e.target.value)}
                class="containers form-control"
                id="floatingInput"
                placeholder="Product Price"
                required
              />
              <label for="floatingInput">Price $</label>
            </div>
            <div className="form-floating mb-1">
              <input
                type="text"
                name="prodImgUrl"
                value={prodImgUrl}
                onChange={(e) => setProdImgUrl(e.target.value)}
                class="containers form-control"
                id="floatingInput"
                placeholder="Image Url"
                required
              />
              <label for="floatingInput">Image URL</label>

            </div>

            <button className="btn btn-primary my-4 " style={{ right: "0" }} onClick={handleSubmit}>Add</button>

          </div>
        </form>


        <div className="col-lg-12">

          <div className="container" style={{ padding: "4rem", border: "1px solid black", marginBottom: "20px" }}>

            <table className="table" style={{ border: "0px solid black" }}>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Operation</th>
              <tbody >
                {
                  productsData.map((details, index) => {
                    return <tr className="table-row" key={index} >
                      <td>{details.prodName}</td>
                      <td>{details.prodDesc}</td>
                      <td>{details.prodPrice}
                        <span>$</span></td>
                      <td><img src={details.prodImgUrl} alt="Product"></img></td>
                      <td>
                        <i class="bi bi-trash" onClick={() => handleDelete(details._id)}></i>
                        <i class="bi bi-pencil-square" component={Link} to={`/edit/${details._id}`}></i>
                      </td>
                    </tr>
                  }
                  )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

  );
};
export default Admin;