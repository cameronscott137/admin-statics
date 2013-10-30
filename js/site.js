
	jQuery(document).ready(function($) {
	
 		/* Tag Cloud */
				$(function() {
				  $("#myModal :checkbox").change(function() {
				    var arr = $("#myModal :checkbox:checked").map(function() {
				    	return $(this).parent().text();
				}).get();
				    $("#tagcloud").text(arr.join(','));
				  });
				});
				/* Clear Cloud */
				 $("#clear").click(function() {
				 	$("#tagcloud").empty();
				 	$(':checkbox').attr('checked',false);
				 });


	});

