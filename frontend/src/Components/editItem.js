import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getproductData, editUser } from '../Service/api';

const EditUser = () => {

    const [productsData, setproductsData] = useState([]);
    const [prodName, setProdName] = useState("");
    const [prodDesc, setProdDesc] = useState("");
    const [prodPrice, setProdPrice] = useState(0);
    const [prodImgUrl, setProdImgUrl] = useState("");
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadProdDetails();
    }, []);

    async function loadProdDetails() {
        const response = await getproductData(id);
        setproductsData(response.data);
    }

    const editUserDetails = async () => {
        const response = await editUser(id, productsData);
        navigate('/adminview');
    }

    return (
        <div className='container'>
            <h4>Edit Information</h4>
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
            <div className='form-floating'>
                <button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</button>
            </div>
        </div>
    )
}

export default EditUser;