import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null); // < AuthUser | null > genetic type
  const handleLogin = () => {
    setUser({
      name: "Abubakar",
      email: "abc@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is -- {user?.name}</div>
      <div>User Email is -- {user?.email}</div>
    </div>
  );
};
