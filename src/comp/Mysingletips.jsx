import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Mysingletips = ({ tips }) => {
  const handeldlt = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://y-gray-seven.vercel.app/tips/${id}`,{
            method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })


        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded-full w-12 h-12 overflow-hidden">
              <img
                src={tips.imageUrl}
                alt={tips.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-semibold text-base">{tips.title}</div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{tips.category}</span>
      </td>
      <td className="space-x-2">
        <Link to={`/updatetips/${tips._id}`}>
          <button className="btn btn-sm btn-info text-white">Update</button>
        </Link>
        <button
          onClick={() => handeldlt(tips._id)}
          className="btn btn-sm btn-error text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Mysingletips;
