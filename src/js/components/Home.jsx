import React from "react";

//include images into your bundle

import { SecondsCounter } from "./SecondsCounter";


//create your first component
const Home = () => {
	return (
	<div className="container">
		<SecondsCounter/>
	</div>
	);
};

export default Home;