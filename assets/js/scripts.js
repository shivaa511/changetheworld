
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
    	
    	// fields validation
    	parent_fieldset.find('input[type="text"]').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
        
         var perosnalityerror = document.getElementById("perosnalityerror");
        
        
        var texttotaltime = document.getElementById("texttotaltime");
        var totaltime = document.getElementById("totaltime").value;

          // If x is Not a Number or less than one or greater than 10
          if (isNaN(totaltime) || totaltime < 100 || totaltime > 100) {
            texttotaltime.style.display = "block";
            next_step = false;
          } else {
            texttotaltime.style.display = "none";
          }
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
       
       
       
       if ($("#religion :selected").val() == 0) {
                $("#religion").addClass("input-error");
                next_step = false;
            }
        else {
    			$("#religion").removeClass('input-error');
    		}
        
        if ($("#country :selected").val() == 0) {
                $("#country").addClass("input-error");
                next_step = false;
            }
        else {
    			$("#country").removeClass('input-error');
    		}
        if ($("#workarea :selected").val() == 0) {
                $("#workarea").addClass("input-error");
                next_step = false;
            }
        else {
    			$("#workarea").removeClass('input-error');
    		}
        if ($("#offficetype :selected").val() == 0) {
                $("#offficetype").addClass("input-error");
                next_step = false;
            }
        else {
    			$("#offficetype").removeClass('input-error');
    		}
        if ($("#Worktypology :selected").val() == 0) {
                $("#Worktypology").addClass("input-error");
                next_step = false;
            }
        else {
    			$("#Worktypology").removeClass('input-error');
    		}
        
        
    	// fields validation
    	
       
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
    $('.f1').on('submit', function(f) {
    	
    	// fields validation
    	$(this).find('select').each(function() {
    		if($(this).val() == 0) {
    			f.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
        
        
       
					
        
    	
    });
    
    
});
