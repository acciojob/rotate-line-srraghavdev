//your JS code here. If required.
function rotate(){
	const line = document.getElementById("line")
	line.style.height="2px"
	line.style.width="200px"
	line.style.backgroundColor="black"
	line.style.position="absolute"
	line.style.top="100px"
	line.style.animation="spin 5s linear infinite"
	const css = document.styleSheets[0]
	css.insertRule(`@keyframes spin {
	from{
		transform: rotate(0deg);
	}
	to{ 
		 transform: rotate(360deg);
	}
}`)
}