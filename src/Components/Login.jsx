
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-dark font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-light">
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn border-none bg-dark text-light hover:bg-[#911F27] btn-primary">Login</button>
        </div>
        <p>New here? Please <Link to='/register'><button className="btn btn-link text-dark">Register</button></Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;