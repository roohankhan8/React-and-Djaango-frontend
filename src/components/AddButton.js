import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddButtonIcon } from "../assets/add-button.svg";

const AddButton = () => {
  return <Link to='/note/new' className="floating-button">
    <AddButtonIcon/>
  </Link>
};

export default AddButton;
