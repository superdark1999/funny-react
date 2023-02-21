import React, { useState } from "react";

const EmailField = () => {
  const [email, setEmail] = useState("");

  return (
    <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      type="email"
    ></input>
  );
};

export default function InvokingComponent() {
  console.log("render");

  return (
    <div>
      {/* {(() => <div>ahihi</div>)()} */}
      <EmailField />
      {/* {EmailField()}
      {EmailField()}
      {EmailField()}
      {EmailField()} */}
    </div>
  );
}
