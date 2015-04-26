$(document).ready(function() {
	$("#addTask").click(function(){
		nTask = $("#newTask").val()
		$("#todo").append("<li>" + nTask + "</li>")
	})
})