$(document).ready(function(){

  $("#btnn").click(function(){
  	$("#pmfooter").show();
    var temp="r("+$("#aforp").val().toString()+$("#bforp").val().toString()+") ";
    $("#ppab").text(temp);
     temp="r("+$("#bforp").val().toString()+$("#cforp").val().toString()+") ";
    $("#ppbc").text(temp);
     temp="r("+$("#aforp").val().toString()+$("#cforp").val().toString()+") ";
    $("#ppac").text(temp);
    
  });
  $("#submitbtn").click(function(){
    
    var chk=$('input[name="crtype"]:checked').val().toString();
    var ab=$("#abpar").val();
    var bc=$("#bcpar").val();
    var ac=$("#acpar").val();
    console.log(ab);
    console.log(bc);
    console.log(ac);
    if(chk=='partial'){
      var sum=( ab-(ac*bc) ) / (Math.sqrt( (1-(ac*ac)) * (1-(bc*bc)) ));
      
      $("#pmfinal").text(sum.toFixed(3));
    }
    else{
      var sum=Math.sqrt((ab*ab)+(ac*ac)-(2*ab*bc*ac))/Math.sqrt(1-(bc*bc));
     
      $("#pmfinal").text(sum.toFixed(3));
    }
   });




  $("#btnps").click(function(){
  	$("#psfooter").show();
    var temp="r("+$("#aforps").val().toString()+$("#bforps").val().toString()+"."+$("#dforps").val().toString()+") ";
    $("#psabd").text(temp);
     temp="r("+$("#bforps").val().toString()+$("#cforps").val().toString()+"."+$("#dforps").val().toString()+") ";
    $("#psbcd").text(temp);
     temp="r("+$("#aforps").val().toString()+$("#cforps").val().toString()+"."+$("#dforps").val().toString()+") ";
    $("#psacd").text(temp);
    
  });
  $("#submitbtnps").click(function(){
    
    var chk=$('input[name="crtype"]:checked').val().toString();
    var abd=$("#abdspar").val();
    var bcd=$("#bcdspar").val();
    var acd=$("#acdspar").val();
    console.log(ab);
    console.log(bc);
    console.log(ac);
    
    var sum=(abd-(acd*bcd))/(Math.sqrt(1-(acd*acd))*Math.sqrt(1-(bcd*bcd)));
    $("#psfinal").text(sum.toFixed(3));
    
   }); 
});



