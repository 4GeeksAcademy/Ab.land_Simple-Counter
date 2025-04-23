import React from "react";

//include images into your bundle

import { SecondsCounter } from "./SecondsCounter";
import { Buttons } from "./Buttons";
import { TimeInput } from "./TimeInput";

//create your first component
const Home = ({ seconds }) => {
	return (
		<div className='container d-flex flex-column justify-content-center align-items-center'>
			<div className="d-flex justify-content-center align-items-center">
				<SecondsCounter seconds={seconds} />
			</div>
				
		</div>
	);
};

export default Home;