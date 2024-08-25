  import React from "react";
import "../Style/admin.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import { deleteProductData, getproductData, getSignupData, productData, deleteUser } from "../Service/api.js";

const initialValue = {
  prodName: '',
  prodDesc: '',
  prodPrice: '',
  prodImgUrl: ''
}
const Admin = () => {

  const [productsData, setproductsData] = useState([]);
  const [users, setUsers] = useState([]);

  const [product, setProduct] = useState({
    prodName: "",
    prodDesc: "",
    prodPrice: 0,
    prodImgUrl: ""
  })

  const { prodName, prodDesc, prodPrice, prodImgUrl } = product;


  useEffect(() => {
    getproductDetails();
    getUserDetails();
  }, []);


  const onValueChange = (e) => {
    console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const getproductDetails = async () => {
    try {
      const result = await getproductData();
      setproductsData(result.data);
      document.getElementById("form").hidden = true;
    } catch (error) {
      console.log(error);
    }
  }

  const getUserDetails = async () => {
    try {
      const result = await getSignupData();
      setUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(productData)
    try {
      await productData(product)
        .then(() => {
          alert("Product added successfully!");
        })
      getproductDetails();
    } catch (err) {
      console.log(err.message)
      alert("Product addition failed!");
    }
  }

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure?") === true) {
        await deleteProductData(id)
          .then(() => alert("Product deleted successfully!"));
      }
      getproductDetails();

    } catch (error) {
      console.log(error.message);
    }
  }
  const handleDeleteUser = async (id) => {
    try {
      if (window.confirm("Are you sure?") === true) {
        await deleteUser(id)
          .then(() => alert("Product deleted successfully!"));
      }
      getUserDetails();
    } catch (error) {
      console.log(error.message);
    }
  }
  const openComp = () => {
    document.getElementById("form").hidden = false;
  }
  const closeComp = () => {
    document.getElementById("form").hidden = true;
  }

  return (
    <div className="container-fluid" >
      <div
        className="row"
      >
        <div className="col-lg-12 col-sm-12">
          <div className="container" style={{
            padding: "1rem",
            border: '1px solid black'
          }}>
            <h1 className="title">Manage Products</h1>
            <table className="table" >
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
                      <td className="price">{details.prodPrice}
                        <span>$</span></td>
                      <td><img src={details.prodImgUrl} alt="Product"></img></td>
                      <td>
                        <i class="bi bi-trash" onClick={() => handleDelete(details._id)}>Delete</i>
                        <Link to={`/edit/${details._id}`}>
                          <i class="bi bi-pencil-square">Update</i>
                        </Link>
                      </td>
                    </tr>
                  }
                  )}
              </tbody>
            </table>
            <button type="button" className="btn btn-primary" style={{}} onClick={() => openComp()}>Add New</button>

            <form id="form" style={{ bottom: "10rem" }}>
              <div className="container modal-body" style={{ width: "30rem" }}>
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    name="prodName"
                    value={prodName}
                    onChange={(e) => onValueChange(e)}
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
                    onChange={(e) => onValueChange(e)}
                    class="containers form-control"
                    id="floatingInput"
                    placeholder="Product Description"
                    required
                  />
                  <label for="floatingInput">Description</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="number"
                    name="prodPrice"
                    value={prodPrice}
                    onChange={(e) => onValueChange(e)}
                    class="containers form-control"
                    id="floatingInput"
                    placeholder="Product Price"
                    required
                  />
                  <label for="floatingInput">Price $</label>
                </div>
                <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => setProduct({ ...product, prodImgUrl: base64 })} />

                <button className="btn btn-primary my-4" style={{ left: "16rem" }} onClick={handleSubmit}>Add</button>
                <button className="btn btn-primary" style={{ left: "6rem", bottom: "3.7rem" }} onClick={() => closeComp()}>Close</button>
              </div>

            </form>
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="container">
            <h1 className="title">Manage Users</h1>
            <table className="table" >
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Contact No</th>
              <th>Profile Picture</th>
              <th>Operation</th>
              <tbody >
                {
                  users.map((details, index) => {
                    return <tr className="table-row" key={index} >
                      <td>{details.uName}</td>
                      <td>{details.email}</td>
                      <td>{details.password}</td>
                      <td>{details.contactNo}</td>
                      <td><img src={details.profilePic} alt="Product"></img></td>
                      <td>
                        <i class="bi bi-trash" onClick={() => handleDeleteUser(details._id)}>Delete</i>
                        <Link to={`/edituser/${details._id}`}>
                          <i class="bi bi-pencil-square">Update</i>
                        </Link>
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