import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { Authcontext } from "../Auth/Authcontext";
import Swal from "sweetalert2";
import { use } from "react";

const Update = () => {
  const {
    _id,
    title,
    description,
    plantType,
    difficulty,
    imageUrl,
    availability,
    category,
  } = useLoaderData();

  const { user } = use(Authcontext);
  const userName = user?.displayName || "Anonymous";
  const userEmail = user?.email;

  const navigate = useNavigate();

  const handleupdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const upData = Object.fromEntries(formData.entries());

    fetch(`https://y-gray-seven.vercel.app/tips/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.message) {
          Swal.fire({
            title: "Updated Successfully!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            navigate("/my-tips");
          });
        } else {
          Swal.fire({
            title: "No Changes Detected",
            text: "You must update at least one field.",
            icon: "info",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Update Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-12 pb-6">
        <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden">
          <div className="card-body p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Update Garden Tip
            </h2>

            <form onSubmit={handleupdate} className="space-y-4">
              {/* Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                />
              </div>

              {/* Plant Type/Topic */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Plant Type/Topic
                  </span>
                </label>
                <input
                  type="text"
                  name="plantType"
                  defaultValue={plantType}
                  className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                />
              </div>

              {/* Difficulty Level */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Difficulty Level
                  </span>
                </label>
                <select
                  name="difficulty"
                  defaultValue={difficulty}
                  className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                >
                  <option value="">Select difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Description
                  </span>
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  className="textarea textarea-bordered h-32 w-full bg-base-200 rounded-lg focus:bg-base-100"
                  placeholder="Share your gardening tip in detail..."
                  required
                ></textarea>
              </div>

              {/* Image URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Image URL (optional)
                  </span>
                </label>
                <input
                  type="url"
                  name="imageUrl"
                  defaultValue={imageUrl}
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                />
              </div>

              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Category
                  </span>
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Composting">Composting</option>
                  <option value="Plant Care">Plant Care</option>
                  <option value="Vertical Gardening">Vertical Gardening</option>
                  <option value="Indoor Gardening">Indoor Gardening</option>
                  <option value="Pest Control">Pest Control</option>
                  <option value="Soil Health">Soil Health</option>
                </select>
              </div>

              {/* Availability */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Availability
                  </span>
                </label>
                <select
                  name="availability"
                  defaultValue={availability}
                  className="select select-bordered w-full bg-base-200 rounded-lg focus:bg-base-100"
                  required
                >
                  <option value="Public">Public</option>
                  <option value="Hidden">Hidden</option>
                </select>
              </div>

              {/* Submitted By (Read-only) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Submitted By
                  </span>
                </label>
                <div className="bg-base-200 p-3 rounded-lg border border-base-300">
                  <p className="text-base-content">
                    <span className="font-semibold">Name:</span> {userName}
                    <br />
                    <span className="font-semibold">Email:</span> {userEmail}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="card-actions justify-end mt-6">
                <button
                  type="submit"
                  className="btn btn-success rounded-full px-6 py-2 text-white hover:bg-green-700 transition-colors"
                >
                  Update Tip
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
