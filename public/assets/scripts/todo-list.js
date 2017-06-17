$(function(){

	$("form").on("submit",function(e){
		e.preventDefault();
		var item = $("form input");
		var todo = {item: item.val()};

		$.ajax({
			type:"POST",
			url:"/todo",
			data:todo,
			success:function(data){
				location.reload();
			}
		});
	});

	$("li").on("click",function(){
		var item = $(this).text().replace(/ /g,"-");
		$.ajax({
			type:"DELETE",
			url:"/todo/"+ item,
			success:function(){
				location.reload();
			}
		});
	});

});