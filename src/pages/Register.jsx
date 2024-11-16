import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

  const {createUser, setUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if(name.length < 5) {
      setError("Name must be 6 character or long")
      return;
    }

    // create user

    createUser(email, password)
    .then((res) => {
      setUser(res.user)

      updateUserProfile({displayName: name, photoURL: photo})
      .then(() => {
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((error) => {
      console.log("Error", error.message)
    })
  }




    return (
        <div className="min-h-screen flex justify-center items-center w-11/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-[700px] shrink-0 rounded-none px-[74px] py-[76px]">
        <h2 className="text-[35px] font-semibold text-center mb-[50px]">Register your account</h2>
        <hr />
        <form onSubmit={handleRegister} className="card-body p-0 mt-[50px]">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          {
            error && <p className="text-sm text-red-500">{error}</p>
          }
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white text-[20px] font-semibold rounded-none hover:text-black">Register</button>
          </div>
        </form>
        <p className="text-center mt-[30px] font-semibold">
        Already Have An Account ? <Link className="text-[#F75B5F]" to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
    );
};

export default Register;