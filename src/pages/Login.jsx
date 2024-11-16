import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center w-11/12 mx-auto">
      <div className="card bg-base-100 w-full max-w-[750px] shrink-0 rounded-none px-[74px] py-[76px]">
        <h2 className="text-[35px] font-semibold text-center mb-[50px]">Login your account</h2>
        <hr />
        <form className="card-body p-0 mt-[50px]">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text text-[20px] font-semibold">Password</span>
            </label>
            <input
              type="Enter your password"
              placeholder="password"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white text-[20px] font-semibold rounded-none hover:text-black">Login</button>
          </div>
        </form>
        <p className="text-center mt-[30px] font-semibold">
        Dont’t Have An Account ? <Link className="text-[#F75B5F]" to="/auth/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
