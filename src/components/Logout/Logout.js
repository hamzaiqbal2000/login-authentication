import { Button } from "react-bootstrap";
import React from "react";
import { useAuth } from "../../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <div>
      <Button
        type="submit"
        onClick={logout}
        style={{ float: "right", marginLeft: "20rem" }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
