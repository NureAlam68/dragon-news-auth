import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

  const {createUser, setUser} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // create user

    createUser(email, password)
    .then((res) => {
      setUser(res.user)
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
              placeholder="Enter your name"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
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