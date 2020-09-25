
function scroll_to_class(element_class, removed_height) {
	var scroll_to = $(element_class).offset().top - removed_height;
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 0);
	}
}

function bar_progress(progress_line_object, direction) {
	var number_of_steps = progress_line_object.data('number-of-steps');
	var now_value = progress_line_object.data('now-value');
	var new_value = 0;
	if(direction == 'right') {
		new_value = now_value + ( 100 / number_of_steps );
	}
	else if(direction == 'left') {
		new_value = now_value - ( 100 / number_of_steps );
	}
	progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
    $('.f1 fieldset:first').fadeIn('slow');
    
    $('.f1 input[type="text"], .f1 input[type="password"],.f1 input[type="radio"], .f1 textarea, .f1 select' ).on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.f1 .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	var texerrage = document.getElementById("texerrage");
    	// fields validation
    	parent_fieldset.find('input[type="text"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
                texerrage.style.display = "block";
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
                texerrage.style.display = "none";
    		}
    	});
        
         /*var perosnalityerror = document.getElementById("perosnalityerror");
        
        
        var texttotaltime = document.getElementById("texttotaltime");
        var totaltime = document.getElementById("totaltime").value;

          // If x is Not a Number or less than one or greater than 10
          if (isNaN(totaltime) || totaltime < 100 || totaltime > 100) {
            texttotaltime.style.display = "block";
            next_step = false;
          } else {
            texttotaltime.style.display = "none";
          }*/
        var textgender = document.getElementById("textgender");
       
        if(($("input[name='usersex']:checked").length === 0)  ){
                        next_step = false;
						textgender.style.display = "block";
            
            
                        }
        else {
            
            textgender.style.display = "none";
        }
        
        var peronalitytrait = document.getElementById("peronalitytrait");
        var textpersonality = document.getElementById("textpersonality");
        var substr = ['optradio11','optradio12', 'optradio13', 'optradio14','optradio15','optradio16', 'optradio17', 'optradio18','optradio19','optradio10', 'optradio21', 'optradio22','optradio23','optradio24', 'optradio25'];
        $.each(substr , function(index, val) { 
                        if(($("input[name="+val+"]:checked").length === 0) && peronalitytrait.style.display === "block"){
                        next_step = false;
						textpersonality.style.display = "block";
                        }
                else {
            
                textpersonality.style.display = "none";
            }
        });
       
       
       var texerra = document.getElementById("texerra");
       if ($("#religion :selected").val() == 0) {
                $("#religion").addClass("input-error");
                texerra.style.display = "block";
                next_step = false;
            }
        else {
    			$("#religion").removeClass('input-error');
                texerra.style.display = "none";
    		}
        var texerrb = document.getElementById("texerrb");
        if ($("#country :selected").val() == 0) {
                $("#country").addClass("input-error");
                texerrb.style.display = "block";
                next_step = false;
            }
        else {
    			$("#country").removeClass('input-error');
                texerrb.style.display = "none";
    		}
        var texerrc = document.getElementById("texerrc");
        if ($("#workarea :selected").val() == 0) {
                $("#workarea").addClass("input-error");
                texerrc.style.display = "block";
                next_step = false;
            }
        else {
    			$("#workarea").removeClass('input-error');
                texerrc.style.display = "none";
    		}
        var texerrd = document.getElementById("texerrd");
        if ($("#offficetype :selected").val() == 0) {
                $("#offficetype").addClass("input-error");
                texerrd.style.display = "block";
                next_step = false;
            }
        else {
    			$("#offficetype").removeClass('input-error');
                texerrd.style.display = "none";
    		}
        var texerre = document.getElementById("texerre");
        if ($("#Worktypology :selected").val() == 0) {
                $("#Worktypology").addClass("input-error");
                texerre.style.display = "block";
                next_step = false;
            }
        else {
    			$("#Worktypology").removeClass('input-error');
                texerre.style.display = "none";
    		}
        var texerrf = document.getElementById("texerrf");
        if ($("#wkhourmodel :selected").val() == 0) {
                $("#wkhourmodel").addClass("input-error");
                texerrf.style.display = "block";
                next_step = false;
            }
        else {
    			$("#wkhourmodel").removeClass('input-error');
                texerrf.style.display = "none";
    		}
        
        
        
        
    	// fields validation
    	var preference = document.getElementById("preference");
        var textpreference = document.getElementById("textpreference");
        var substra = ['optradiocol1','optradiocol2', 'optradiocol3', 'optradiocol4','optradiocol5','optradiocol6', 'optradiocol12', 'optradiocol7','optradiocol8','optradiocol9', 'optradiocol19', 'optradiocol10','optradiocol18','optradiocol13', 'optradiocol20','optradiocol16','optradiocol21'];
        $.each(substra , function(index, val) { 
                        if(($("input[name="+val+"]:checked").length === 0) && preference.style.display === "block"){
                        next_step = false;
						textpreference.style.display = "block";
                        }
                else {
            
                textpreference.style.display = "none";
            }
        });
        
        var preference = document.getElementById("preference");
        var texerrg = document.getElementById("texerrg");
        if ($("#workdistributiona :selected").val() == 0 && preference.style.display === "block") {
                $("#workdistributiona").addClass("input-error");
                texerrg.style.display = "block";
                next_step = false;
            }
        else {
    			$("#workdistributiona").removeClass('input-error');
                texerrg.style.display = "none";
    		}
        
        var texerrh = document.getElementById("texerrh");
        if ($("#productivitywork :selected").val() == 0 && preference.style.display === "block") {
                $("#productivitywork").addClass("input-error");
                texerrh.style.display = "block";
                next_step = false;
            }
        else {
    			$("#productivitywork").removeClass('input-error');
                texerrh.style.display = "none";
    		}
        
        var texerri = document.getElementById("texerri");
        if ($("#whereworkplaceprefer :selected").val() == 0 && preference.style.display === "block") {
                $("#whereworkplaceprefer").addClass("input-error");
                texerri.style.display = "block";
                next_step = false;
            }
        else {
    			$("#whereworkplaceprefer").removeClass('input-error');
                texerri.style.display = "none";
    		}
        var texerrj = document.getElementById("texerrj");
        if ($("#hourmodel :selected").val() == 0 && preference.style.display === "block") {
                $("#hourmodel").addClass("input-error");
                texerrj.style.display = "block";
                next_step = false;
            }
        else {
    			$("#hourmodel").removeClass('input-error');
                texerrj.style.display = "none";
    		}
       
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
    			// change icons
    			current_active_step.removeClass('active').addClass('activated').next().addClass('active');
    			// progress bar
    			bar_progress(progress_line, 'right');
    			// show next step
	    		$(this).next().fadeIn();
	    		// scroll window to beginning of the form
    			scroll_to_class( $('.f1'), 20 );
	    	});
    	}
      
       
    });
    
    // previous step
    $('.f1 .btn-previous').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	
    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.f1'), 20 );
    	});
    });
    
    // submit
  
      $('.f1').on('submit', function(e) {
    	const scriptURL = 'https://script.google.com/macros/s/AKfycbwe-BQiz-Wz12OwSxg6vJPZizviJZBOLLyd3rCVlCtLTyknfGk/exec'
        
        const form = document.forms['google-sheet']
    	// fields validation
    	
    			
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response =>  location.replace("thankyou.html"))
                .catch(error => console.error('Error!', error.message))
    		
    	// fields validation
        
           
					
        
    	
    });

});
