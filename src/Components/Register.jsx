import { Link } from "react-router-dom";
import { useContext, useNavigate } from "react";
import { AuthContext } from "./AuthProvider";



const Register = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => console.log(result.user))
        .catch(error => console.error(error))
      }
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
              console.log(result.user)
            
        })
        .catch(error=> 
            console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-dark font-bold">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-light">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
        </div>
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
          <button className="btn border-none bg-dark text-light hover:bg-[#911F27] btn-primary">Register</button>
          <p>Sign in with <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
        </div>
        <p>Already have an account? Please <Link to='/login'><button className="btn text-dark btn-link">Login</button></Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;