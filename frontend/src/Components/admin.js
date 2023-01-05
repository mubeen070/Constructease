import React from "react";
import "../Style/admin.css";
import { useState, useEffect } from "react";
import { getproductData, productData } from "../Service/api.js";
const Admin = () => {

  const [productsData, setproductsData] = useState([]);


  useEffect(() => {
    getproductDetails();
  }, []);


  const getproductDetails = async () => {
    const result = await getproductData();
    setproductsData(result.data);
    console.log(result.data)
  }

  const [prodData, setprodData] = useState({
    prodName: "", prodDesc: "", prodPrice: "", prodImgUrl: ""
  })

  const { prodName, prodDesc, prodPrice, prodImgUrl } = prodData;

  const handleChange = (e) => {
    setprodData({ ...prodData, [e.target.name]: [e.target.value] })
    console.log(prodData)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productData(prodData)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container-fluid" >
      <h1 style={{ color: "black", marginBottom: "5rem" }}>Manage Items</h1>
      <div
        className="row"
      >
        <div className="container" style={{ width: "30rem" }}>
          <div className="form-floating mb-1">
            <input
              type="text"
              name="prodName"
              value={prodName}
              onChange={handleChange}
              class="containers form-control"
              id="floatingInput"
              placeholder="Product Name"
            />
            <label for="floatingInput">Product Name</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              name="prodDesc"
              value={prodDesc}
              onChange={handleChange}
              class="containers form-control"
              id="floatingInput"
              placeholder="Product Description"
            />
            <label for="floatingInput">Product Description</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              name="prodPrice"
              value={prodPrice}
              onChange={handleChange}
              class="containers form-control"
              id="floatingInput"
              placeholder="Product Price"
            />
            <label for="floatingInput">Product Price $</label>
          </div>
          <div className="form-floating mb-1">
            <input
              type="text"
              name="prodImgUrl"
              value={prodImgUrl}
              onChange={handleChange}
              class="containers form-control"
              id="floatingInput"
              placeholder="Product Image Url"
            />
            <label for="floatingInput">Product Image URL</label>
          </div>
          <button className="btn btn-primary my-4 " style={{ right: "0" }} onClick={(e) => handleSubmit(e)}>Add</button>

        </div>



        <div className="col-lg-12">

          <div className="container" style={{ padding: "4rem", backgroundColor: "lightgray", border: "1px solid black", marginBottom: "20px" }}>

            <table className="table mx-1" style={{ border: "1px solid black" }}>
              <thead>

                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Operation</th>
              </thead>
              <tbody >
                {
                  productsData.map((details) => {
                    return (<tr>
                      <td>{details.prodName}</td>
                      <td>{details.prodDesc}</td>
                      <td>{details.prodPrice}</td>
                      <td><img src={details.prodImgUrl} alt="Product"></img></td>
                      <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                   ) }
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
