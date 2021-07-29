import React, { useState } from "react";
import Light from "./light.jsx";
import PropTypes from "prop-types";

const Home = () => {
	const [trafficLight, setTrafficLight] = useState({
		redLight: "bg-danger",
		orangeLight: "bg-warning",
		greenLight: "bg-success"
	});

	return (
		<div className="box container border border-dark d-flex flex-column">
			<Light
				state={trafficLight.redLight}
				clickChange={() => {
					setTrafficLight({
						redLight: "bg-danger glow",
						orangeLight: "bg-warning",
						greenLight: "bg-success"
					});
				}}
			/>
			<Light
				state={trafficLight.orangeLight}
				clickChange={() => {
					setTrafficLight({
						redLight: "bg-danger",
						orangeLight: "bg-warning glow",
						greenLight: "bg-success"
					});
				}}
			/>
			<Light
				state={trafficLight.greenLight}
				clickChange={() => {
					setTrafficLight({
						redLight: "bg-danger",
						orangeLight: "bg-warning",
						greenLight: "bg-success glow "
					});
				}}
			/>
		</div>
	);
};

export default Home;
