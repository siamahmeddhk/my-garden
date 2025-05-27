// import React, { useContext } from 'react';
// import { Link } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';

// const Reg = () => {
//     const { create, googleSignin, updateUserProfile } = useContext(Authcontext);
    
//     const handelreg = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const formData = new FormData(form);
//         const { name, email, password, photoURL } = Object.fromEntries(formData.entries());
        
//         console.log(name, email, password, photoURL);
        
//         create(email, password)
//             .then((userCredential) => {
//               console.log(userCredential)
//                 // Update user profile with name and photo
//                 return updateUserProfile(name, photoURL || 'https://i.ibb.co/tLkDzqP/user.png');
//             })
//             .then(() => {
//                 console.log("User registered and profile updated successfully");
//                 // Optionally redirect or show success message
//             })
//             .catch((error) => {
//                 console.error("Registration error:", error.message);
//             });
//     }

//     const handleGoogle = () => {
//         googleSignin()
//             .then((result) => {
//                 const user = result.user;
//                 console.log("Google login user:", user);
//             })
//             .catch((error) => {
//                 console.error(error.message);
//             });
//     };

//     return (
//         <div>
//             <div className="max-w-sm mt-12 mx-auto">
//                 <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//                     <div className="card-body p-6">
//                         <h2 className="text-2xl font-semibold text-green-800 mb-4">Register</h2>
//                         <form onSubmit={handelreg} className="space-y-4">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Your Name"
//                                 className="input input-bordered w-full"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Your Email"
//                                 className="input input-bordered w-full"
//                                 required
//                             />
//                             <input
//                                 type="url"
//                                 name="photoURL"
//                                 placeholder="Photo URL"
//                                 className="input input-bordered w-full"
//                             />
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 className="input input-bordered w-full"
//                                 required
//                             />
//                             <button type="submit" className="btn btn-success w-full rounded-full text-white">
//                                 Register
//                             </button>
//                         </form>
//                         <div className="divider text-xs text-gray-500">or</div>
//                         <button onClick={handleGoogle} className="btn w-full border border-gray-300 rounded-full text-sm">
//                             Continue with Google
//                         </button>
//                         <p className="text-sm text-center mt-4">
//                             Already have an account?{" "}
//                             <Link to="/login" className="text-green-700 hover:underline">
//                                 Login here
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Reg;



// import React, { useContext } from 'react';
// import { Link } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';
// import Swal from 'sweetalert2';

// const Reg = () => {
//   const { create, googleSignin} = useContext(Authcontext);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const { email, password} = Object.fromEntries(formData.entries());

//     // Password validation
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
//     if (!passwordRegex.test(password)) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Invalid Password',
//         text: 'Password must be at least 6 characters long, contain one uppercase letter and one number.',
//       });
//     }

//     create(email, password)
//     //   .then((userCredential) => {
//     //     return updateUserProfile(name, photoURL || 'https://i.ibb.co/tLkDzqP/user.png');
//     //   })
//       .then(() => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Registration Successful',
//           text: 'Your account has been created!',
//         });
//         form.reset();
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Registration Failed',
//           text: error.message,
//         });
//       });
//   };

//   const handleGoogle = () => {
//     googleSignin()
//       .then((result) => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Google Sign-in Success',
//           text: `Welcome ${result.user.displayName || 'User'}!`,
//         });
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Google Sign-in Failed',
//           text: error.message,
//         });
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-50 to-white px-4">
//       <div className="w-full max-w-sm shadow-xl rounded-2xl bg-white border border-gray-100 p-6">
//         <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Create Account</h2>
//         <form onSubmit={handleRegister} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="input input-bordered w-full"
//             required
//           />
//           <input
//             type="url"
//             name="photoURL"
//             placeholder="Photo URL (optional)"
//             className="input input-bordered w-full"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="input input-bordered w-full"
//             required
//           />
//           <button type="submit" className="btn btn-success w-full rounded-full text-white">
//             Register
//           </button>
//         </form>

//         <div className="divider text-xs text-gray-500">or</div>

//         <button
//           onClick={handleGoogle}
//           className="btn w-full border border-gray-300 rounded-full text-sm"
//         >
//           Continue with Google
//         </button>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{' '}
//           <Link to="/login" className="text-green-700 hover:underline font-medium">
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Reg;



import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Authcontext } from "../Auth/Authcontext";

const Reg = () => {
  const { create, googleSignin, updateUserProfile } = useContext(Authcontext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Password validation helper
  const validatePassword = (password) => {
    // Minimum 6 chars, at least one uppercase, one lowercase, one digit
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  const handelreg = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, password, photoURL } = Object.fromEntries(
      formData.entries()
    );

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text:
          "Password must be at least 6 characters and contain uppercase, lowercase, and a number.",
      });
      return;
    }

    setLoading(true);

    create(email, password)
      .then(() => {
        return updateUserProfile(name, photoURL || "https://i.ibb.co/tLkDzqP/user.png");
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registered!",
          text: "Your account has been created successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/"); // Redirect to Home
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    setLoading(true);
    googleSignin()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          text: `Welcome ${result.user.displayName}`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-sm mt-12 mx-auto">
      <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
        <div className="card-body p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Register</h2>
          <form onSubmit={handelreg} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="url"
              name="photoURL"
              placeholder="Photo URL (optional)"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
              minLength={6}
            />
            <button
              type="submit"
              className="btn btn-success w-full rounded-full text-white"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="divider text-xs text-gray-500">or</div>

          <button
            onClick={handleGoogle}
            className="btn w-full border border-gray-300 rounded-full text-sm"
            disabled={loading}
          >
            {loading ? "Loading..." : "Continue with Google"}
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reg;
