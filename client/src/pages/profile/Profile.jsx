import React, { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    address: false,
  });

  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, San Francisco, CA 94105",
  });

  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
    // Add logic to save the updated information (e.g., send to an API)
    alert(`${field.charAt(0).toUpperCase() + field.slice(1)} updated!`);
  };

  const handleChange = (e, field) => {
    setUserInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="w-[80%] max-w-5xl mx-auto mt-16 px-4 mb-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold">
          Your Profile at Tasty<span className="text-[#e67e22]">Go</span>
        </h1>
        <p className="mt-6 text-lg text-[#888]">
          Manage your personal information and preferences.
        </p>
      </div>

      <div className="p-6 space-y-6 rounded-lg shadow-md bg-gray-50">
        {/* Name Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Name:</h2>
            {isEditing.name ? (
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => handleChange(e, "name")}
                className="p-2 mt-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="mt-2 text-gray-700">{userInfo.name}</p>
            )}
          </div>
          <button
            className="text-[#e67e22] font-semibold"
            onClick={() =>
              isEditing.name ? handleSave("name") : handleEdit("name")
            }
          >
            {isEditing.name ? "Save" : "Edit"}
          </button>
        </div>

        {/* Email Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Email:</h2>
            {isEditing.email ? (
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => handleChange(e, "email")}
                className="p-2 mt-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="mt-2 text-gray-700">{userInfo.email}</p>
            )}
          </div>
          <button
            className="text-[#e67e22] font-semibold"
            onClick={() =>
              isEditing.email ? handleSave("email") : handleEdit("email")
            }
          >
            {isEditing.email ? "Save" : "Edit"}
          </button>
        </div>

        {/* Address Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Delivery Address:</h2>
            {isEditing.address ? (
              <input
                type="text"
                value={userInfo.address}
                onChange={(e) => handleChange(e, "address")}
                className="p-2 mt-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="mt-2 text-gray-700">{userInfo.address}</p>
            )}
          </div>
          <button
            className="text-[#e67e22] font-semibold"
            onClick={() =>
              isEditing.address ? handleSave("address") : handleEdit("address")
            }
          >
            {isEditing.address ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
