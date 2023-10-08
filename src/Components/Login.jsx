import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    //   const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //     .then(result => console.log(result.user))
    //     .catch(error => console.error(error))
    //   }
      const handleLogin = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email, password)
          signInUser(email, password)
          .then(result=> {
            console.log(result.user)
            e.target.reset();
            navigate('/')
  
          })
          .catch(error =>console.error(error))
      }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-dark font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-light">
      <form onSubmit={handleLogin} className="card-body">
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