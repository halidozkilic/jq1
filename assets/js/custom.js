 $(document).ready(function()
    {


//click var olan elementleri dinlerken on yenileride dinler
$("ul").on("click","li",function(){ 
	
	$(this).toggleClass("clicked");
});

	$("ul").on("click","span",function(event){

		 $(this).parent().remove();

		event.stopPropagation(); 

	});


$("input[type='text']").keypress(function(event){

if(event.which==13)
{
	var newItem = $(this).val();
	console.log(newItem);
	$(this).val("");
	$("ul").append("<li><span><i class='fas fa-times' ></i> </span>" +newItem+"</li>")
}


});

var open=true;
$(".fa-edit").click(function(){
	
	if(open)
	{
		$("input[type='text']").hide();
		$('ul').hide();
		open=!open;
	}
	else
	{
		$("input[type='text']").show();
		$('ul').show();
		open=!open;

	}
	


});



  });