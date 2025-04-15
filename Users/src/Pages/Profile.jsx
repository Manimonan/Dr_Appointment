import React from "react";
import { assets } from "../Assets/assets";

function Profile() {
  const [user, setUser] = React.useState({
    name: "Rechart Arther",
    image: assets.profile_pic,
    email: "rechart123@gmail.com",
    phone: "+91 1234567890",
    address: {
      city: "New York",
      state: "New York",
      country: "United States",
    },
    gender: "Male",
    dob: "2000-01-01",
  });

  const [editUser, setEditUser] = React.useState(true);

  return (
    <div className="min-h-[80vh] max-w-[450px] flex flex-col gap-4 text-sm border-none">
      <img className="w-36 rounded-xl" src={user.image} alt="" />
      <div className="flex gap-2">
        <p className="font-medium text-3xl text-neutral-700 mt-4">Name :</p>
        {editUser ? (
          <input
            className="font-medium text-3xl text-neutral-700 mt-4"
            type="text"
            value={user.name}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-3xl text-neutral-700 mt-4">{user.name}</p>
        )}
      </div>

      <hr />

      <div>
        <p className="font-semibold text-neutral-700 text-xl">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 ">
          <p>Email :</p>
          {editUser ? (
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 ">
          <p>Phone :</p>
          {editUser ? (
            <input
              type="phone"
              value={user.phone}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 ">
          <p>Address : </p>
          {editUser ? (
            <p>
              <input
                type="text"
                value={user.address.city}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, city: e.target.value },
                  }))
                }
              />

              <input
                type="text"
                value={user.address.state}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, state: e.target.value },
                  }))
                }
              />

              <input
                type="text"
                value={user.address.country}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, country: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p>
              {user.address.city}, {user.address.state}, {user.address.country}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="font-semibold text-neutral-700 text-xl">BASIC INFORMATION</p>
        <div className="flex gap-2">
          <p>Gender : </p>
          {
            editUser 
            ? <select name="" id="" onChange={(e)=> setUser((prev) =>({...prev , gender: e.target.value}))} >
               <option value="male">Male</option>
               <option value="female">Female</option>
             </select> 
            : <p>{user.gender}</p>
          }
        </div>
        <div className="flex gap-2">
          <p>Birthdate : </p>
          {
            editUser 
            ? <input type="date" value={user.dob} onChange={(e) => setUser((prev) => ({ ...prev, dob: e.target.value }))} /> 
            : <p>{user.dob}</p>
          }
        </div>
      </div>
      <div>
        <button
          className="bg-blue-400 text-white px-8 py-3 rounded-full font-light cursor-pointer"
          onClick={() => {
            setEditUser((prev) => !prev);
          }}
        >
          {editUser ? "Save Information" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default Profile;
