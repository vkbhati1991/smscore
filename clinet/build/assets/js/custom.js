$(document).ready(function () {
  $(".upload-file-box input[type='file']").change(function () {
    $(this).parents('.file-container').next('.filename').text($(this)[0].files[0].name).fadeIn(100)
  });
    $(".detail-tab-link").click(function(){
    var dataAttr = $(this).attr("data-attr");
    $('.detail-tab-link').removeClass("isActive");
    $(this).addClass("isActive");
     $('.detail-tab-box').hide();
     $(dataAttr).fadeIn(200);
  })
})

$(function () {
  $("#datepicker").datepicker({
    autoclose: true,
    todayHighlight: true
  }).datepicker('update', new Date());
});


function confirmdialog(okurl, cancleurl) {
  var x = document.createElement("div");
  x.innerHTML = `
    <div class="bg-overlay">
      <div class="modal modal--small">
        <div class="modalbody">
          <div class="confirmation-message mid pa-30">
                <span class="confirm-icon mid ht-4 wt-4 br-pill danger ba b--danger f30 mb-20"><i class='fa fa-trash-o'></i></span>
                <span class="confirm-msg ff-bold">Are you sure want to delete this reacord?</span>
           </div>
        </div>
        <div class="modalfooter bt b--moon-gray mid ht-3">
          <a href="${okurl}" class="button button--brand mh-8">OK</a>
           <a href="${cancleurl}" class="button button--danger mh-8 ">Cancel</a>
        </div>
      </div>
  </div > `

  document.body.appendChild(x);
}

function openFilter(id){
    $(id).slideToggle(0).toggleClass("filterOpen")
}

var newwindow;
function popitup(url) {
     newwindow=window.open(url,name,'width=800,height=600,toolbar=0,menubar=0,location=0');
   if (window.focus) {newwindow.focus()}
}

$(document).ready(function(){
	var uri = window.location.toString();
	if (uri.indexOf("?") > 0) {
	    var clean_uri = uri.substring(0, uri.indexOf("?"));
	    window.history.replaceState({}, document.title, clean_uri);
	}
});


