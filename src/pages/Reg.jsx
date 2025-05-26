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




// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router';

// import Swal from 'sweetalert2';
// import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
// import { Authcontext } from '../Auth/Authcontext';

// const Reg = () => {
//     const {  googleSignin, updateUserProfile } = useContext(Authcontext);
//     const [isLoading, setIsLoading] = useState(false);
    
//     const handleReg = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
        
//         const form = e.target;
//         const formData = new FormData(form);
//         const { name,  photoURL } = Object.fromEntries(formData.entries());
        
//         try {
          
//             await updateUserProfile(name, photoURL || 'https://i.ibb.co/tLkDzqP/user.png');
            
//             await Swal.fire({
//                 title: 'Registration Successful!',
//                 text: 'Your account has been created successfully.',
//                 icon: 'success',
//                 confirmButtonText: 'Continue',
//                 confirmButtonColor: '#16a34a',
//                 backdrop: `
//                     rgba(0,128,0,0.4)
//                     url("/images/leaf-loading.gif")
//                     center top
//                     no-repeat
//                 `
//             });
            
//             // Redirect or perform other actions after successful registration
//         } catch (error) {
//             let errorMessage = 'Registration failed. Please try again.';
            
//             switch(error.code) {
//                 case 'auth/email-already-in-use':
//                     errorMessage = 'This email is already registered.';
//                     break;
//                 case 'auth/weak-password':
//                     errorMessage = 'Password should be at least 6 characters.';
//                     break;
//                 case 'auth/invalid-email':
//                     errorMessage = 'Please enter a valid email address.';
//                     break;
//             }
            
//             await Swal.fire({
//                 title: 'Registration Error',
//                 text: errorMessage,
//                 icon: 'error',
//                 confirmButtonText: 'Try Again',
//                 confirmButtonColor: '#dc2626'
//             });
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleGoogle = async () => {
//         try {
//             setIsLoading(true);
//             const result = await googleSignin();
//             const user = result.user;
            
//             await Swal.fire({
//                 title: 'Google Login Successful!',
//                 text: `Welcome ${user.displayName || 'User'}`,
//                 icon: 'success',
//                 confirmButtonText: 'Continue',
//                 confirmButtonColor: '#16a34a'
//             });
            
//             // Redirect or perform other actions after successful login
//         } catch (error) {
//             await Swal.fire({
//                 title: 'Google Login Failed',
//                 text: error.message,
//                 icon: 'error',
//                 confirmButtonText: 'Try Again',
//                 confirmButtonColor: '#dc2626'
//             });
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
//             <div className="w-full max-w-md">
//                 <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">
//                     <div className="bg-green-600 p-4 text-center">
//                         <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
//                         <p className="text-green-100">Join our green community today</p>
//                     </div>
                    
//                     <div className="p-6 space-y-4">
//                         <form onSubmit={handleReg} className="space-y-4">
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <FaUser className="text-green-500" />
//                                 </div>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     placeholder="Your Name"
//                                     className="input input-bordered w-full pl-10"
//                                     required
//                                 />
//                             </div>
                            
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <FaEnvelope className="text-green-500" />
//                                 </div>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Your Email"
//                                     className="input input-bordered w-full pl-10"
//                                     required
//                                 />
//                             </div>
                            
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <FaImage className="text-green-500" />
//                                 </div>
//                                 <input
//                                     type="url"
//                                     name="photoURL"
//                                     placeholder="Photo URL (Optional)"
//                                     className="input input-bordered w-full pl-10"
//                                 />
//                             </div>
                            
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <FaLock className="text-green-500" />
//                                 </div>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password (min 6 characters)"
//                                     className="input input-bordered w-full pl-10"
//                                     required
//                                     minLength="6"
//                                 />
//                             </div>
                            
//                             <button 
//                                 type="submit" 
//                                 className="btn btn-success w-full rounded-lg text-white hover:bg-green-700 transition-colors"
//                                 disabled={isLoading}
//                             >
//                                 {isLoading ? (
//                                     <span className="loading loading-spinner"></span>
//                                 ) : 'Register'}
//                             </button>
//                         </form>
                        
//                         <div className="divider text-xs text-gray-500">or continue with</div>
                        
//                         <button 
//                             onClick={handleGoogle} 
//                             className="btn w-full border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
//                             disabled={isLoading}
//                         >
//                             <FaGoogle className="text-red-500 mr-2" />
//                             Google
//                         </button>
                        
//                         <p className="text-sm text-center text-gray-600 mt-4">
//                             Already have an account?{" "}
//                             <Link 
//                                 to="/login" 
//                                 className="text-green-600 hover:text-green-800 font-medium hover:underline transition-colors"
//                             >
//                                 Login here
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
                
//                 <div className="mt-4 text-center text-xs text-gray-500">
//                     By registering, you agree to our Terms and Privacy Policy
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Reg;