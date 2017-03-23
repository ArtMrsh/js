function goTo1(){
 var action = "/mastera/kiev"; // default link
    
    if($('#movetoclient').prop('checked')){
        action += '/vyezd-k-klientu';
    }else{
 
        if($('#id3').length && $('#id3').val().length>0) {
            action += "/" + $('#id3').val();
            $('#metro').val($('#metro').val());
        }
    }
 if($('#id1').length && $('#id1').val().length>0){
   action += "/" + $('#id1').val();
   $('#spec').val($('#id1').val());
  }
       action += "/";
//  $('#period').val($('#id4').val());
  $('#allfilters').attr('action',action);
  $('#allfilters').submit();
  
  //self.location = action;

}

function goTo3(vk){
 var action = "/mastera/kiev"; // default link
    
    if(!vk){
    if($('#movetoclient').prop('checked')){
        action += '/vyezd-k-klientu';
    }
    }
        if($('#id3').length && $('#id3').val().length>0) {
            action += "/" + $('#id3').val();
            $('#metro').val($('#metro').val());
        }
    
if($('#id1').val().length>0){
   action += "/" + $('#id1').val();
   $('#spec').val($('#id1').val());
  }
 if($('#usluga').val().length && $('#usluga').val().length>0){
   action += "/" + $('#usluga').val();
  }
  
   action += "/";
  
  console.log(action);
//  $('#period').val($('#id4').val());
  $('#allfilters').attr('action',action);
  $('#allfilters').submit();
  
  //self.location = action;
}

function onHref(val){
    $('#usluga').val(val);
    goTo3(false);
}
function onRtg(val){
    $('#period').val(val);
    goTo3(false);
}

$(document).on('change','#movetoclient', function(){
               goTo1();
});

$(document).on('change','#id1', function(){
 goTo1();
});
$(document).on('change','#id2', function(){
 goTo3(false);
});
$(document).on('change','#id3', function(){
 goTo3(true);
});
$(document).on('change','#id4', function(){
 goTo3(false);
});

