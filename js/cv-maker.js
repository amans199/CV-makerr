
//    start cv 4
function CreatRefrences() {

    $(`					<li class="refrence">
                        <p class="ref_name"><strong><input autocomplete="off" class="cv3-Loisirs lead cv_2_inputs cv_3_titles text_818dv" id="cv3_Loisirs" placeholder="Refrence's Job"></strong></p><p class="ref_name"><strong><input autocomplete="off" class="cv3-Loisirs lead cv_2_inputs cv_3_titles text_818dv" id="cv3_Loisirs" placeholder="Refrence's Name"></strong></p><p><textarea class="ref_contact_details text_Biography text_textareas text_818dv" id="text_Biography" placeholder="Refrence's Contact Details"></textarea></p>
					</li>`).appendTo(".CreatRefrences");

//        $('textarea').autoResize();

}
    
function Creatcontactbox() {

    $(`<li class=""><input autocomplete="off" class="cv3-Loisirs lead cv_2_inputs cv_3_titles text_818dv" id="cv3_Loisirs" placeholder="Phone, Address , Email , ..."></li>`).appendTo(".Creatcontactbox");

//        $('textarea').autoResize();

}   
    
    
function CreateCompétences() {

    $(`<li><input autocomplete="off" class="cv4-Comptences lead cv_2_inputs text_818dv" id="cv3_Compétences" placeholder="a Skill"></li>`).appendTo(".CreateCompétences");

//        $('textarea').autoResize();

}   
    
function Createexperiences() {

    $(`					<li>
						<h4><strong><input autocomplete="off" class="cv4-Comptences lead cv_2_inputs text_818dv" id="cv3_Compétences" placeholder="Company"></strong><input autocomplete="off" class="cv4-Comptences lead cv_2_inputs cv_3_titles text_818dv" id="cv3_Compétences" placeholder="Job Title"></h4>				
                        <h4>
                            <div class="resume-date3 text-md-right">
                                <span class="text-primary" id="printExpDateStart3"><input class="form-control text_textareas" type="date" id="myExpDateStart3"></span>
                                <span class="text-primary" id="printExpDateEnd3"><input class="form-control text_textareas" type="date" id="myExpDateEnd3"></span>
                            </div>
                        </h4>
						
						<p><textarea class="text_818 text_textareas text_818dv" id="text_818" placeholder="Descripe your Job Experience"></textarea></p>
					</li>`).appendTo(".Createexperiences");

//        $('textarea').autoResize();

}   
     
function Createformations() {

    $(`					<li>
						<h4><strong><input autocomplete="off" class="cv3-Compétences lead cv_2_inputs text_818dv" id="cv4_Compétences" placeholder="Bachelor's in Civil Engineering"></strong><input autocomplete="off" class="cv3-Comptences lead cv_2_inputs cv_3_titles text_818dv" id="cv3_Compétences" placeholder="University of Cairo"></h4>
                        <h4>
                            <div class="resume-date3 text-md-right">
                                <span class="text-primary" id="printExpDateStart3"><input class="form-control text_textareas" type="date" id="myExpDateStart3"></span>
                                <span class="text-primary" id="printExpDateEnd3"><input class="form-control text_textareas" type="date" id="myExpDateEnd3"></span>
                            </div>
                        </h4>
						<p><textarea class="text_Biography text_textareas text_818dv" id="text_Biography" placeholder="Descripe your Eduction"></textarea></p>
					</li>`).appendTo(".Createformations");

//        $('textarea').autoResize();

}   
    
    
//end cv 4    
    
function Createuniversity33() {

    $(`<div class="yui-u">
            <h2><input autocomplete="off" class="cv3-university lead cv_2_inputs" id="cv3_university" placeholder="university"></h2>
            <p class="subDetails"><input autocomplete="off" class="cv2-subDetails lead cv_2_inputs" id="cv2-subDetails" placeholder="subDetails"></p>
            <p>
                <textarea class="text_Biography text_textareas" id="text_Biography" placeholder="Descripe your Eduction"></textarea>
            </p>
        </div>`).appendTo(".Createuniversity33");

//        $('textarea').autoResize();

}
    
function Createjob3() {

    $(`							<div class="job">
								<h2><input autocomplete="off" class="cv3-Company lead cv_2_inputs" id="cv3_Company" placeholder="Company"></h2>
								<h3><input autocomplete="off" class="cv3-Job lead cv_2_inputs" id="cv3_Job3" placeholder="Job title"></h3>
								<h4>
                                    <div class="resume-date3 text-md-right">
                                        <span class="text-primary" id="printExpDateStart3"><input class="form-control text_textareas" type="date" id="myExpDateStart3"></span> 
                                        <span class="text-primary" id="printExpDateEnd3"><input class="form-control text_textareas" type="date" id="myExpDateEnd3"></span>
                                    </div>
								</h4>
								<p class="text_for_jobsss"><textarea class="text_Biography text_textareas" id="text_Skills" placeholder="Descripe your Job"></textarea></p>
							</div>`).appendTo(".Createjob3");

//        $('textarea').autoResize();

}

    
function tabsSwitchcv(e, tabName){
  // Declare all variables
  var i, tabcontent, tablinks;
    
    
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("cv_template_tabcontent");
//  tabcontent = document.querySelector(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks_cv_template");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
//  document.querySelector("#" + tabName).style.display = "block";
  e.currentTarget.className += " active";
//  e.target.addClass("active");
//  e.target.removeClass("hide_instaFade");
  document.getElementById("cv_page_explained").style.display = "none";
}
      
  
    
$(document).ready(function() {
    $(".photo_for_template_4").change(function(e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
            img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $(".photo_of_user_4 .photo_for_template_4").after(img);
    }
});
    });     
    
$(document).ready(function() {
    $(".photo_for_template_1").change(function(e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
            img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $(".photo_of_user .photo_for_template_1").after(img);
    }
});
    });    
    
     
$(document).ready(function() {
    $(".photo_for_template_2").change(function(e) {

    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
        var file = e.originalEvent.srcElement.files[i];

        var img = document.createElement("img");
        var reader = new FileReader();
        reader.onloadend = function() {
            img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $(".photo_of_user_2 .photo_for_template_2").after(img);
    }
});
    });    
    
    
    
$(".btn_for_print_out").on("click" , function(){
    window.scrollTo(0,0); 
    var div_to_cover_ths_screen = $(".div_to_cover_ths_screen");

//    html2canvas(document.querySelector("#capture")).then(function(canvas) {
    html2canvas(document.querySelector("#capture"),{ letterRendering: 1, allowTaint : true , backgroundColor: null}).then(function(canvas) {
//    html2canvas(document.querySelector("#capture"),{logging: true, letterRendering: 1, useCORS: true }).then(function(canvas) {
    // Export canvas as a blob 
        canvas.toBlob(function(blob) {
            // Generate file download
            window.saveAs(blob, "my_Corsorr_CV.png");
//            div_to_cover_ths_screen.appendChild(canvas);
//            div_to_cover_ths_screen.appendChild(blob);
        });
//                div_to_cover_ths_screen.removeClass("hide_instaFade");

//                    div_to_cover_ths_screen.appendChild(canvas);
//            div_to_cover_ths_screen.appendChild(blob);
    });
    
//    
//      let region = document.querySelector("#container"); // whole 
//  html2canvas(region, {
//    scale:3
//  }).then(function(canvas) {
//    let pngUrl = canvas.toDataURL("image/png");
//      let img = document.querySelector(".screen");
//      img.src = pngUrl;
//  });
    
    
    
})
    

    
    
$("#tryhtml2canvas").on("click" , function(){
    var trigger_for_printout_btn = $("#tryhtml2canvas");
    var printout_menu = $(".triggered_menu");
    var samantha = $(".samantha");
    var div_to_cover_ths_screen = $(".div_to_cover_ths_screen");
    var div_to_cover_top_of_screen = $(".div_to_cover_top_of_screen");
    
    if(printout_menu.hasClass("hide_triggered_menu")) {
        trigger_for_printout_btn.html('<span class="dashicons dashicons-no-alt dashicon_for_trigger_menu"></span>');
        printout_menu.removeClass("hide_triggered_menu");
        samantha.addClass("hide_instaFade");
        div_to_cover_ths_screen.removeClass("hide_instaFade");
        div_to_cover_top_of_screen.removeClass("hide_instaFade");
        
    }else{
        trigger_for_printout_btn.html('<span class="dashicons dashicons-yes dashicon_for_trigger_menu"></span>');
        printout_menu.addClass("hide_triggered_menu");
        div_to_cover_ths_screen.addClass("hide_instaFade");
        div_to_cover_top_of_screen.addClass("hide_instaFade");

    }
    
})
    
    
$(".div_to_cover_ths_screen").on("click" , function(){
    var trigger_for_printout_btn = $("#tryhtml2canvas");
    var printout_menu = $(".triggered_menu");
    var samantha = $(".samantha");
    var div_to_cover_ths_screen = $(".div_to_cover_ths_screen");
    var div_to_cover_top_of_screen = $(".div_to_cover_top_of_screen");
    
        trigger_for_printout_btn.html('<span class="dashicons dashicons-yes dashicon_for_trigger_menu"></span>');
        printout_menu.addClass("hide_triggered_menu");
        div_to_cover_ths_screen.addClass("hide_instaFade");
        div_to_cover_top_of_screen.addClass("hide_instaFade");
    
})    
    
$(".div_to_cover_top_of_screen").on("click" , function(){
    var trigger_for_printout_btn = $("#tryhtml2canvas");
    var printout_menu = $(".triggered_menu");
    var samantha = $(".samantha");
    var div_to_cover_ths_screen = $(".div_to_cover_ths_screen");
    var div_to_cover_top_of_screen = $(".div_to_cover_top_of_screen");
    
        trigger_for_printout_btn.html('<span class="dashicons dashicons-yes dashicon_for_trigger_menu"></span>');
        printout_menu.addClass("hide_triggered_menu");
        div_to_cover_ths_screen.addClass("hide_instaFade");
        div_to_cover_top_of_screen.addClass("hide_instaFade");
    
})
    
        
$(".style_cv").on("click" , function(){
    var style_cv = $(".style_cv");
    var cv_templates = $(".cv_templates");
    
    if(cv_templates.hasClass("hide_instaFade")) {
        cv_templates.removeClass("hide_instaFade");
    }else{
        cv_templates.addClass("hide_instaFade");
    }
})
    
 

    
function createExpElemetns() {

    $(`               <div class="contentItems" id="printExpData">
                   <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                      <div class="resume-content">
                        <h3 class="mb-0" id="printExpTitle"><input autocomplete="off" class="position_epxo lead text_textareas" id="position_epxo" placeholder="Position"></h3>
                        <div class="subheading mb-3" id="printExpComp"><input autocomplete="off" class="Company_epxo lead text_textareas" id="Company_epxo" placeholder="Company Name"></div>
                        <p>
                            <textarea class="text_expo text_textareas" id="text_expo" placeholder="Descripe Your work there"></textarea>
                        </p>
                      </div>
                      <div class="resume-date text-md-right">
                          <span class="text-primary" id="printExpDateStart"><input class="form-control text_textareas" type="date" id="myExpDateStart"></span> - 
                          <span class="text-primary" id="printExpDateEnd"><input class="form-control text_textareas" type="date" id="myExpDateEnd"></span>
            <!--            <span class="text-primary" id="printExpDateStart">March 2013</span> - <span class="text-primary" id="printExpDateEnd">Present</span>-->
                      </div>
                    </div>
                  </div>`).appendTo("#displayExperiences");
    
        $('textarea').autoResize();

    
}    
    
function createskill11() {

    $(`<li><input autocomplete="off" class="cv2-Skills lead cv_2_inputs" id="cv2-keySkills" placeholder="A Skill"></li>`).appendTo("#keySkills");
//    $('textarea').autoResize();

    
}
       
function CreateEducation() {

    $(`				<article>
					<h2><input autocomplete="off" class="cv2-University lead cv_2_inputs" id="cv2-University" placeholder="College/University"></h2>
					<p class="subDetails"><input autocomplete="off" class="cv2-subDetails lead cv_2_inputs" id="cv2-subDetails" placeholder="subDetails"></p>
					<p>
                        <textarea class="text_Biography text_textareas" id="text_Biography" placeholder="Descripe youe self"></textarea>
                	</p>
				</article>`).appendTo(".Educations");

//        $('textarea').autoResize();

}
    
         
function CreateCompany() {

    $(`				<article>
					<h2><input autocomplete="off" class="cv2-University lead cv_2_inputs" id="cv2-University" placeholder="Job Title at Company"></h2>
					<p class="subDetails">
					    <input autocomplete="off" class="cv2-subDetails lead cv_2_inputs" id="cv2-subDetails" placeholder="October 2004 - December 2006">
				    </p>
					<p>
                        <textarea class="text_Biography text_textareas" id="text_Biography" placeholder="Descripe your Job"></textarea>
					</p>
				</article>`).appendTo(".CreateCompany");

//        $('textarea').autoResize();

}
    
             
function CreateSkill() {

    $(`								<div class="talent">
									<h2><input autocomplete="off" class="cv3-talent lead cv_2_inputs cv_3_sub_titles" id="cv3_talent" placeholder="Skill"></h2>
									<p>
									    <textarea class="text_Biography text_textareas" id="text_Skills" placeholder="Descripe your Skill"></textarea>
									</p>
								</div>`).appendTo(".CreateSkill");

//        $('textarea').autoResize();

}
              
function CreateSkill2() {

    $(`								<ul class="talent">
								<li><input autocomplete="off" class="cv3-skill lead cv_2_inputs" id="cv3_skill" placeholder="skill"></li>
								<li><input autocomplete="off" class="cv3-skill lead cv_2_inputs" id="cv3_skill" placeholder="skill"></li>
								<li class="last"><input autocomplete="off" class="cv3-skill lead cv_2_inputs" id="cv3_skill" placeholder="skill"></li>
							</ul>`).appendTo(".CreateSkill2");

//        $('textarea').autoResize();

}
    
    
    
/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey https://james.padolsey.com
 * @version 1.04
 */

(function($){
    
    $.fn.autoResize = function(options) {
        
        // Just some abstracted details,
        // to make plugin users happy:
        var settings = $.extend({
            onResize : function(){},
            animate : true,
            animateDuration : 150,
            animateCallback : function(){},
            extraSpace : 20,
            limit: 1000
        }, options);
        
        // Only textarea's auto-resize:
        this.filter('textarea').each(function(){
            
                // Get rid of scrollbars and disable WebKit resizing:
            var textarea = $(this).css({resize:'none','overflow-y':'hidden'}),
            
                // Cache original height, for use later:
                origHeight = textarea.height(),
                
                // Need clone of textarea, hidden off screen:
                clone = (function(){
                    
                    // Properties which may effect space taken up by chracters:
                    var props = ['height','width','lineHeight','textDecoration','letterSpacing'],
                        propOb = {};
                        
                    // Create object of styles to apply:
                    $.each(props, function(i, prop){
                        propOb[prop] = textarea.css(prop);
                    });
                    
                    // Clone the actual textarea removing unique properties
                    // and insert before original textarea:
                    return textarea.clone().removeAttr('id').removeAttr('name').css({
                        position: 'absolute',
                        top: 0,
                        left: -9999
                    }).css(propOb).attr('tabIndex','-1').insertBefore(textarea);
					
                })(),
                lastScrollTop = null,
                updateSize = function() {
					
                    // Prepare the clone:
                    clone.height(0).val($(this).val()).scrollTop(10000);
					
                    // Find the height of text:
                    var scrollTop = Math.max(clone.scrollTop(), origHeight) + settings.extraSpace,
                        toChange = $(this).add(clone);
						
                    // Don't do anything if scrollTip hasen't changed:
                    if (lastScrollTop === scrollTop) { return; }
                    lastScrollTop = scrollTop;
					
                    // Check for limit:
                    if ( scrollTop >= settings.limit ) {
                        $(this).css('overflow-y','');
                        return;
                    }
                    // Fire off callback:
                    settings.onResize.call(this);
					
                    // Either animate or directly apply height:
                    settings.animate && textarea.css('display') === 'block' ?
                        toChange.stop().animate({height:scrollTop}, settings.animateDuration, settings.animateCallback)
                        : toChange.height(scrollTop);
                };
            
            // Bind namespaced handlers to appropriate events:
            textarea
                .unbind('.dynSiz')
                .bind('keyup.dynSiz', updateSize)
                .bind('keydown.dynSiz', updateSize)
                .bind('change.dynSiz', updateSize);
            
        });
        
        // Chain:
        return this;
        
    };
    
    
    
})(jQuery);
    $('textarea').autoResize();






