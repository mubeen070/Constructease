import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getproductData, editProduct } from '../Service/api';
import FileBase64 from 'react-file-base64';


const initialValue = {
    prodName: '',
    prodDesc: '',
    prodPrice: '',
    prodImgUrl: ''
}

const EditItem = () => {

    const [productsData, setproductsData] = useState(initialValue);
    const { prodName, prodDesc, prodPrice, prodImgUrl } = productsData;
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        loadProdDetails();
    }, []);

    const loadProdDetails = async () => {
        const response = await getproductData(id);
        setproductsData(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setproductsData({ ...productsData, [e.target.name]: e.target.value })
    }


    const editProdDetails = async () => {
        await editProduct(id, productsData)
            .then(() => {
                alert("Success!")
                navigate("/adminview");
            });
    }

    return (
        <div className='container' style={{ width: "30rem" }}>
            <h4>Edit Information</h4>
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
                onDone={({ base64 }) => setproductsData({ ...productsData, prodImgUrl: base64 })} />
            <div className='form-floating'>
                <button className='btn btn-info' style={{ left: "10rem", marginTop: "2rem" }} onClick={() => editProdDetails()}>Edit Product</button>
            </div>
        </div>
    )
}

export default EditItem;