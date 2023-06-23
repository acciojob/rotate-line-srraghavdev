//your JS code here. If required.
function rotate(){
	const line = document.getElementById("line")
	line.style.height="2px"
	line.style.backgroundColor="black"
	line.style.position="absolute"
	line.style.top="100px"
	line.style.animation="spin 5s linear infinite"
	const css = document.styleSheets[0]
	css.insertRule(`@keyframes spin {
	0%{
		transform: rotate(135deg);
	}
	20%{
		transform:rotate(180deg);
	}
	40%{
		transform:rotate(225deg);
	}
	60%{
		transform:rotate(270deg);
	}
	80%{
		transform:rotate(315deg);
	}
	100%{
		transform:rotate(360deg);
	}`)
}
}