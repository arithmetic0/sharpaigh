{
$(document).ready(function(){

    $('#menu').accordion({collapsible: true, active: false});
  
        $('#item1,#item2,#item3,#item4,#item5,#item6,#item7,#item8').click(function(){
    $(this).effect('fold',2000);    
    });
  
   $('#one').click(function(){
      $(this).animate({
      backgroundColor: 'yellow'
      });
      $('#two,#three').animate({
      backgroundColor: '#7fffd4'
      });
  
      
     
    $('#two').click(function(){
      $(this).animate({
      backgroundColor: 'yellow'
      });
      $('#one,#three').animate({
      backgroundColor: '#7fffd4'
      });
      
    $('#three').click(function(){
      $(this).animate({
      backgroundColor: 'yellow'
      });
      $('#two,#one').animate({
      backgroundColor: '#7fffd4'
      });
      
      
    }); 
    });
   });
    });


var sec2 = function(){
  $("#sec3").hide();
  $("#sec4").hide();
  $("#sec2").show();
  $("#one").animate({
      backgroundColor: 'yellow'
      });
};
var sec3 = function(){
  $("#sec2").hide();
  $("#sec3").show();
  $("#sec4").hide();
    $("#two").animate({
      backgroundColor: 'yellow'
      });
};
var sec4 = function(){
  $("#sec4").show();
  $("#sec2").hide();
  $("#sec3").hide();
    $("#three").animate({
      backgroundColor: 'yellow'
      });
};
}


{
var showing = function(){
   document.getElementById("ages").innerHTML= "";
   document.getElementById("names").innerHTML = "";  
  var arrays = [];
  arrays[0] = {
  'name':"sharpaigh",
  'age': 20
};
  arrays[1] = {
  'name':"sharpay",
  'age': 24
};  
  
  var total = 0;
  var named = [];
  for(var i = 0; i < arrays.length; i++){
  document.getElementById("names").innerHTML += arrays[i].name + "<br>";
 document.getElementById("ages").innerHTML += arrays[i].age + "<br>";
   total += arrays[i].age;
   named += arrays[i].name;
    
    }
  document.getElementById("totals").innerHTML = total;
  document.getElementById("arrayed").innerHTML = named;

  
};

}


{
var b1 = function(){
  $('#b1').animate({
    backgroundColor: 'yellow'
  });
    $('#b2,#b3').animate({
    backgroundColor: 'aqua'
  });
};

var b2 = function(){
  $('#b2').animate({
    backgroundColor: 'yellow'
  });
    $('#b1,#b3').animate({
    backgroundColor: 'aqua'
  });
};


var b3 = function(){
  $('#b3').animate({
    backgroundColor: 'yellow'
  });
    $('#b2,#b1').animate({
    backgroundColor: 'aqua'
  });
};

}



{
  var main_course = function(){
var imgs = ['img1','img2','img3','img4','img5','img6','img7','img8'];
var details = ['detail1','detail2','detail3','detail4','detail5','detail6','detail7','detail8'];
    
var foods = [];
  foods[0] = {
  'src':"http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/07/Pizza-Slice-Wallpaper.jpg",
  'detail': 'pizza $6'
};
  foods[1] = {
  'src':"http://assets.bwbx.io/images/users/iqjWHBFdfxIU/iSvm0JpMROvo/v1/-1x-1.jpg",
  'detail': 'fried chicken $8'
};  
  foods[2] = {
  'src':"http://horoscope.tips/uploads/getty_rm_photo_of_cheeseburger_and_fries.jpg",
  'detail': 'burger $3'
};      
  foods[3] = {
  'src':"http://74211.com/wallpaper/picture_big/Juicy-Sandwiches-with-a-Cup-of-Coffee-Can-Ensure-You-an-Efficient-and-Pleasant-Day-HD-Delicious-Food-Wallpaper.jpg",
  'detail': 'hor cake $5'
};    
  foods[4] = {
  'src':"http://www.hd-wallpapers9.com/gallery/Hd/Food%20and%20Drink%20Hd%20Wallpapers/Food%20and%20Drink%20Hd%20Wallpapers010.jpg",
  'detail': 'grilled chicken $9'
};      
  foods[5] = {
  'src':"http://hotmillion.ca/wp-content/uploads/2015/03/Wonderful-Indian-Food-Wallpaper.jpg",
  'detail': 'chicken bbq $8'
};      
  foods[6] = {
  'src':"http://www.hd-wallpapers9.com/gallery/Hd/Food%20and%20Drink%20Hd%20Wallpapers/Food%20and%20Drink%20Hd%20Wallpapers009.jpg",
  'detail': 'squid $12'
};      
  foods[7] = {
  'src':"http://pic1.win4000.com/wallpaper/9/511f32d1a5a88.jpg",
  'detail': 'sardines $5'
};      
    
    
    
    
    for(var i = 0; i < foods.length; i++)
    {
document.getElementById(imgs[i]).src = foods[i].src;   
document.getElementById(details[i]).innerHTML = foods[i].detail;
    }

if(document.getElementById("detail4").innerHTML == ""){
  $('#item4, #item5, #item6, #item7, #item8').hide();
}
else if(document.getElementById("detail5").innerHTML == ""){
  $('#item5, #item6, #item7, #item8').hide();
}
else if(document.getElementById("detail6").innerHTML == ""){
  $('#item6, #item7, #item8').hide();
}
else if(document.getElementById("detail7").innerHTML == ""){
  $('#item7, #item8').hide();
}
else if(document.getElementById("detail8").innerHTML == ""){
  $('#item8').hide();
}
else
  {
   $('#item1, #item2, #item3, #item4, #item5, #item6, #item7, #item8').show(); 
  }
    
    
  }
}


var ordering;


{
 
  var item1 = function(){
    $('#orders1').fadeIn(2000);
    $('#orders2').fadeIn(2000);    
  var ordering = [];
    var length = ordering.length;
    ordering[0] = {
  'name':"sharpaigh",
  'item_price': 20
};
    
   document.getElementById("quantity2").value = ordering[0].item_price;
   document.getElementById("price2").value = length;
    
    
  var orders = ['order1','order2','order3','order4','order5','order6','order7','order8','order9'];
  var quantitys = ['quantity1','quantity2','quantity3','quantity4','quantity5','quantity6','quantity7','quantity8','quantity9'];
   var prices = ['price1','price2','price3','price4','price5','price6','price7','price8','price9'];
   
document.getElementById(orders[0]).innerHTML = document.getElementById("detail1").innerHTML; 
var quantity = document.getElementById(quantitys[0]).value; 
var price = document.getElementById("detail1").innerHTML; 
    price = price.replace ( /[^\d.]/g, '' );
    price = parseInt(price);  
   var total = quantity * price;
document.getElementById(prices[0]).value = total; 

 
};
  var item2 = function(){
};
  var item3 = function(){
};
  var item4 = function(){
};
  var item5 = function(){
};
  var item6 = function(){
};
  var item7 = function(){
};
  var item8 = function(){
};
   
}
