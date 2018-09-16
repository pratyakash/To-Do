$("ul").on("click","li",function()
	{
		$(this).toggleClass("done");
	});

$("ul").on("click","span",function(event)
	{
		$(this).parent().fadeOut(500,function()
			{
				$(this).remove();	
			}); 
		event.stopPropagation();
	});

$("input").keypress(function(event)
	{	
		if (event.which===13) 
			{
				var inq=$(this).val();
				$(this).val("");

				$("ul").append("<li><span><i class='fas fa-eraser'></i></span> " +inq+ "</li>");
			}

	});

$(".fa-edit").click(function()
	{
		$("input").fadeToggle();
	});