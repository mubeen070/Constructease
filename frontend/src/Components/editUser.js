import FileBase64 from 'react-file-base64';
import { useState, useEffect } from 'react';
import { editUser, getSignupData } from '../Service/api';
import { useNavigate, useParams } from 'react-router-dom';
const EditUser = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [userData, setuserData] = useState({
        uName: "", email: "", password: "", contactNo: "", profilePic: ""
    })

    const { uName, email, password, contactNo, profilePic } = userData;
    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getSignupData(id);
        setuserData(response.data);
    }
    const onValueChange = (e) => {
        console.log(e.target.value);
        setuserData({ ...userData, contactNo: e.target.value })
    }

    const edit = async () => {
        await editUser(id, userData)
            .then(() => {
                alert("Success!")
                navigate("/adminview");
            });
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center" >
                    <h1 style={{ color: "black" }}>Constructease</h1>
                    <h4 style={{ color: "black" }}>Create Account</h4>
                    <div className="col-lg-5 col-md-6 col-sm-3">
                        <form>
                            <div className="form-floating mb-1">
                                <input
                                    type="text"
                                    value={uName}
                                    name="uName"
                                    class="containers form-control"
                                    id="floatingInput"
                                    placeholder="Name"
                                />
                                <label for="floatingInput">Name</label>
                            </div>


                            <div className="form-floating mb-1">
                                <input
                                    type="email"
                                    value={email}
                                    name="email"
                                    className="containers form-control"
                                    id="floatingInput"
                                    placeholder="Email"

                                />
                                <label for="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-1">
                                <input
                                    type="password"
                                    value={password}
                                    name="password"
                                    className="containers form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"

                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-1">
                                <input
                                    type="number"
                                    onChange={(e) => onValueChange(e)}
                                    value={contactNo}
                                    name="contactNo"
                                    className="containers form-control"
                                    id="floatingInput"
                                    placeholder="Contact Number"
                                    required
                                />
                                <label for="floatingInput">Contact Number</label>
                            </div>
                            <FileBase64
                                multiple={false}
                                onDone={({ base64 }) => setuserData({ ...userData, profilePic: base64 })} />
                            <div
                                className="d5 d-flex justify-content-center pb-4"
                                style={{ color: "black" }}
                            >
                            </div>
                            <div className="d-flex justify-content-center pb-5">
                                <button className="btn btn-primary ms-2" type="submit" onClick={() => edit()}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditUser;