import React, { useState } from "react";
import PropTypes from "prop-types";

const Light = props => {
	return <div className={props.state} onClick={props.clickChange}></div>;
};

Light.propTypes = {
	state: PropTypes.bool,
	clickChange: PropTypes.func
};

export default Light;
