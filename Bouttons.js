var myVideo = document.getElementById("video1");

	function faireDemarrer() {
		if (myVideo.paused)
			myVideo.play();
		else
			myVideo.pause();
	}
	
	function faireGrossir() {
		myVideo.width = 960;
	}
	
	function faireDiminuer() {
		myVideo.width = 620;
	}
	
	function faireNormal() {
		myVideo.width = 800;
	}
	
