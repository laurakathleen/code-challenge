$(document).ready(function(){

	//hide sign-out if sign-in is showing
	function logInOrOut(){
		if ($('#sign-in').hasClass('show')) {
			$('#sign-out').hasClass('hide');
		} 
	}

});