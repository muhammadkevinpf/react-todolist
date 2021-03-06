import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <Button text={showAdd ? "Close" : "Add"} onClick={showAddToggle} />
      <h1 className="header-title">Todo Lists</h1>
      <Button align="right" text="Clear" color="red" onClick={clearTodos} />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
