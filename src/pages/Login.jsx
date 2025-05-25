// import React, { use } from 'react';
// import { Link } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';

// const Login = () => {

//      const {signin,  googleSignin} = use(Authcontext)

//     const handellogin = (e) => {
        
//          e.preventDefault();

//         const form = e.target;
//         const formData = new FormData(form)
//         const {email, password, logdata} = Object.fromEntries(formData.entries())
//         console.log(logdata);


//          signin(email, password)


//             const handleGoogle = () => {
//     googleSignin()
//       .then((result) => {
//         const user = result.user;
//         console.log("Google login user:", user);
//       })
//       .catch((error) => {
//         console.error(error.message);
//       });
//     }

//     return (
//         <div>
//              <div className="max-w-sm mt-12 mx-auto">
//       <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//         <div className="card-body p-6">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Login</h2>
//           <form onSubmit={handellogin}  className="space-y-4">
//             <input
//               type="email"
//               placeholder="Email"
//               className="input input-bordered w-full"
//              name='email'
//               required
//             />
//             <input
//               type="password"
//               name='password'
//               placeholder="Password"
//               className="input input-bordered w-full"
//               required
//             />
//             <button type="submit" className="btn btn-success w-full rounded-full text-white">
//               Login
//             </button>
//           </form>

//           <div className="divider text-xs text-gray-500">or</div>

//           <button onClick={handleGoogle} className="btn w-full border border-gray-300 rounded-full text-sm">
//             Continue with Google
//           </button>

//           <p className="text-sm text-center mt-4">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-green-700 hover:underline">
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//         </div>
//     );
// };

// export default Login;





import React, { useContext } from 'react';
import { Link } from 'react-router'
import { Authcontext } from '../Auth/Authcontext';

const Login = () => {
  const { signin, googleSignin } = useContext(Authcontext);

  const handellogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());

    signin(email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  };

  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        console.log("Google login user:", result.user);
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
      });
  };

  return (
    <div className="max-w-sm mt-12 mx-auto">
      <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
        <div className="card-body p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Login</h2>
          <form onSubmit={handellogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <button type="submit" className="btn btn-success w-full rounded-full text-white">
              Login
            </button>
          </form>

          <div className="divider text-xs text-gray-500">or</div>

          <button onClick={handleGoogle} className="btn w-full border border-gray-300 rounded-full text-sm">
            Continue with Google
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-700 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
