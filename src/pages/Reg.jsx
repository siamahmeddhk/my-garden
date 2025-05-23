// import React, { use } from 'react';
// import { Link } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';

// const Reg = () => {


//     const {create, googleSignin} = use(Authcontext)

//     const handelreg = (e) => {
//         e.preventDefault();

//         const form = e.target;
//         const formData = new FormData(form)
//         const {email, password, regdata} = Object.fromEntries(formData.entries())
//         console.log(email, password, regdata);


//          create(email, password)
       
//     }


//      const handleGoogle = () => {
//     googleSignin()
//       .then((result) => {
//         const user = result.user;
//         console.log("Google login user:", user);
//       })
//       .catch((error) => {
//         console.error(error.message);
//       });
//   };

//     return (
//         <div>
//              <div className="max-w-sm mt-12 mx-auto">
//       <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
//         <div className="card-body p-6">
//           <h2 className="text-2xl font-semibold text-green-800 mb-4">Register</h2>
//           <form onSubmit={handelreg} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="input input-bordered w-full"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="input input-bordered w-full"
//               required
//             />
//             <input
//               type="text"
//               name="photoURL"
//               placeholder="Photo URL"
//               className="input input-bordered w-full"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
              
//               className="input input-bordered w-full"
//               required
//             />
//             <button type="submit" className="btn btn-success w-full rounded-full text-white">
//               Register
//             </button>
//           </form>

//           <div className="divider text-xs text-gray-500">or</div>

//           <button onClick={handleGoogle}  className="btn w-full border border-gray-300 rounded-full text-sm">
//             Continue with Google
//           </button>

//           <p className="text-sm text-center mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="text-green-700 hover:underline">
//               Login here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//         </div>
//     );
// };

// export default Reg;


import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../Auth/Authcontext';

const Reg = () => {
    const { create, googleSignin, updateUserProfile } = useContext(Authcontext);
    
    const handelreg = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { name, email, password, photoURL } = Object.fromEntries(formData.entries());
        
        console.log(name, email, password, photoURL);
        
        create(email, password)
            .then((userCredential) => {
              console.log(userCredential)
                // Update user profile with name and photo
                return updateUserProfile(name, photoURL || 'https://i.ibb.co/tLkDzqP/user.png');
            })
            .then(() => {
                console.log("User registered and profile updated successfully");
                // Optionally redirect or show success message
            })
            .catch((error) => {
                console.error("Registration error:", error.message);
            });
    }

    const handleGoogle = () => {
        googleSignin()
            .then((result) => {
                const user = result.user;
                console.log("Google login user:", user);
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div>
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
                                placeholder="Photo URL"
                                className="input input-bordered w-full"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                required
                            />
                            <button type="submit" className="btn btn-success w-full rounded-full text-white">
                                Register
                            </button>
                        </form>
                        <div className="divider text-xs text-gray-500">or</div>
                        <button onClick={handleGoogle} className="btn w-full border border-gray-300 rounded-full text-sm">
                            Continue with Google
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
        </div>
    );
};

export default Reg;