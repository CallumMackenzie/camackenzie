
const Star = () => {

};

export const DynamicBackground = () => {
	return (<>
		<div className="position-absolute" style={{
			width: "100%",
			zIndex: "-5"
		}}>
			<img src="img/landscape-bg.jpg"
				alt="Landscape background"
				style={{
					objectFit: "cover",
					width: "100%",
					minHeight: "100vh"
				}} />
		</div>
	</>);
};