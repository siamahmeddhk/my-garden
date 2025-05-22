import React from 'react';
import { Link } from 'react-router';

const Reg = () => {
    return (
        <div>
             <div className="max-w-sm mt-12 mx-auto">
      <div className="card bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden">
        <div className="card-body p-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Register</h2>
          <form  className="space-y-4">
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
              type="text"
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

          <button  className="btn w-full border border-gray-300 rounded-full text-sm">
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