import React, {useState} from "react";

//create your first component
const Home = () => { 
	
	const [ colorRojo, setColor1] = useState("sombra");
	const [ colorAmarillo, setColor2] = useState("sombra");
	const [ colorVerde, setColor3] = useState("sombra");

	function TrafficLight1() {

		if(colorRojo === "sombra"){
			setColor1("luz")
			setColor2("sombra")
			setColor3("sombra")
		};
	};

		function TrafficLight2() {

		if(colorAmarillo === "sombra"){
			setColor2("luz")
			setColor1("sombra")
			setColor3("sombra")
		};
	};

		function TrafficLight3() {

		if(colorVerde === "sombra"){
			setColor3("luz")
			setColor1("sombra")
			setColor2("sombra")
		};
	};

	return (
		<div className="text-center bg-dark m-3 d-flex justify-content-center rounded div">
			<div>
				<div className={"d-flex justify-content-center rounded-circle w-25 p-5 m-3 bg-danger rojo "+colorRojo} onClick={()=>TrafficLight1()}></div>
				<div className={"d-flex justify-content-center rounded-circle w-25 p-5 m-3 bg-warning amarillo "+colorAmarillo} onClick={()=>TrafficLight2()}></div>
				<div className={"d-flex justify-content-center rounded-circle w-25 p-5 m-3 bg-success verde "+colorVerde} onClick={()=>TrafficLight3()}></div>
			</div>
		</div>
	);
};

export default Home;
