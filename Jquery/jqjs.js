var cnt=0;
$(window).on('load',function()
	{
		$(".startquiz").show();
		$(".question1").hide();
		$(".question2").hide();
		$(".question3").hide();
		$(".question4").hide();
		$(".question5").hide();
		$(".answers").hide();
		$(".trybts").hide();
	});		
	$(document).ready(function()
	{
		$(".bts").click(function(e)
		{
			$(".startquiz").hide();
			$(".question1").show();
			e.preventDefault();
			/*if(($("#opt11").prop("checked")=="false")&&($("#opt12").prop("checked")=="false")&&($("#opt13").prop("checked")=="false"))
			{
               			$(".bts1").prop("disabled", true);
            		}
			else
			{
				$(".bts1").prop("disabled", false);
			}*/
		});	
		$(".bts1").click(function(e)
		{
			if($("#opt13").is(":checked"))
			{
           			cnt++;
      			}
			$(".question1").hide();
			$(".question2").show();
			/*if(($("#opt21").is(":checked"))||($("#opt22").is(":checked"))||($("#opt23").is(":checked"))) 
			{
               			$(".bts2").prop("disabled", true);
            		}
			else
			{
				$(".bts2").prop("disabled", false);	
			}*/
			e.preventDefault();
  		});
		$(".bts2").click(function(e)
		{
			if($("#opt22").is(":checked"))
			{
            			cnt++;
      			}
			$(".question2").hide();
			$(".question3").show();
			/*if(($("#opt31").is(":checked"))||($("#opt32").is(":checked"))||($("#opt33").is(":checked"))) 
			{
                		$(".bts3").prop("disabled", true);
            		}
			else
			{
				$(".bts3").prop("disabled", false);	
			}*/
			e.preventDefault();
  		});	
		$(".bts3").click(function(e)
		{
			if($("#opt32").is(":checked"))
			{
            			cnt++;
      			}
			$(".question3").hide();
			$(".question4").show();
			/*if(($("#opt41").is(":checked"))||($("#opt42").is(":checked"))||($("#opt43").is(":checked"))) 
			{
                		$(".bts4").prop("disabled", true);
          		}
			else
			{
				$(".bts4").prop("disabled", false);	
			}*/
			e.preventDefault();
  		});
		$(".bts4").click(function(e)
		{
			if($("#opt41").is(":checked"))
			{
            			cnt++;
      			}
			$(".question4").hide();
			$(".question5").show();
			/*if(($("#opt51").is(":checked"))||($("#opt52").is(":checked"))||($("#opt53").is(":checked"))) 
			{
               			$(".bts5").prop("disabled", true);
            		}
			else
			{
				$(".bts5").prop("disabled", false);	
			}*/
			e.preventDefault();	
  		});
		$(".bts5").click(function(e)
		{
		if($("#opt51").is(":checked"))
		{
            		cnt++;
      		}
		$(".question5").hide();
		$(".answers").show();
		$("#results").empty();
		$(".answers").text("You got: "+cnt);
		$(".trybts").show();
		e.preventDefault();
  	});
});