import React from "react";
export default function User({ user, username }) {
  return (
    <div>
      <p style={{fontWeight: 400}}> <strong>Name:</strong>  {user}</p>
      <p> <strong> UserName:</strong> {username}</p>

    </div>
  );
}