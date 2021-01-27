
    var mapColor = '#000000';
  var starColor = '#ffffff';
  var order = Math.floor(Math.random()*20000 + 10000);
//   document.getElementById('order_id').value = order
  same_bc(true)
  change_background(mapColor)
  set_date()
  var lat11, lng11, fcolor;
  var selectedFont;

  function trigger_change_event(element_id){
  element = document.getElementById(element_id);
    var event = new Event('change');
    element.dispatchEvent(event);
}
  function set_date(){
        dates('option');
        months('option');
        var d = new Date();
        var year = d.getFullYear();
        years('option', year-70, year+10);
        var month = convert_month(d.getMonth()+1);
        document.getElementById("inputmonth").value = month;
        document.getElementById("inputyear").value = d.getFullYear();
        document.getElementById("inputday").value = d.getDate();
        document.getElementById("hr_form").value = d.getHours();
        document.getElementById("min_form").value = d.getMinutes();
        var t__hr = document.getElementById("hr_form").value;
        $("#hr").val(t__hr);
        trigger_change_event("hr");
        //min
        var t_min = document.getElementById("min_form").value;
        $("#min").val(t_min);
        trigger_change_event("min");

//         $('#custom_mon').html(month)
//         $('#custom_yer').html(d.getFullYear())
//         $('#custom_day').html(d.getDate())
//         $('#custom_hr').html(d.getHours())
//         $('#custom_min').html(d.getMinutes())

//         $('#custom_dtag').text(daytag(d.getDate()))
//         $('#custom_ttag').text(timetag(d.getHours()))
    on_date_change()
}

function set_res_date(day,monthh,year){
    var month_list = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
    month = month_list.indexOf(monthh);
    month_str = month;
    if(month<=9){
        month_str = "0"+month_str;
    }
    day_str = day;

    if(day<=9){
        day_str = "0"+day_str;
    }

    month_val = month-1;

    var t_hr = document.getElementById("hr_form").value;

    var t_min = document.getElementById("min_form").value;

    var d = new Date(year, month_val, day_str, t_hr, t_min)
    Celestial.date(d,Celestial.timezone())
    console.log(Celestial.timezone())
    var showHr = t_hr;
    var showMin = t_min;
    if(t_hr > 12){
      showHr = t_hr-12;
    }
    if(t_hr > 23 || t_hr < 0){
      showHr = 00;
      $('#hr_form').val(0)
      t_hr = 0;
      $("#hr").val(t_hr);
      trigger_change_event("hr");
    }

    if(t_min > 59 || t_min < 0){
      $('#min_form').val(0)
      t_min = 0;
      $("#min").val(t_min);
      trigger_change_event("min");
    }
    if(t_min < 10){
      showMin = '0'+t_min
    }
//         $('#custom_mon').html(monthh)
//         $('#custom_yer').html(year)
//         $('#custom_day').html(day)
//         $('#custom_hr').html(showHr)
//         $('#custom_min').html(showMin)

//         $('#custom_dtag').text(daytag(day))
//         $('#custom_ttag').text(timetag(t_hr))
//         $('#custom_day').html(day)
        if(!document.getElementById('unknownTime').checked){
         document.querySelector('input#mat-input-7').value = day+daytag(day)+" "+monthh+" "+year;
          $('#custom_date').html(day+daytag(day)+" "+monthh+" "+year)
        }else{
        	document.querySelector('input#mat-input-7').value = day+daytag(day)+" "+monthh+" "+year+" AT "+showHr+":"+showMin+" "+timetag(t_hr);
          $('#custom_date').html( day+daytag(day)+" "+monthh+" "+year+" AT "+showHr+":"+showMin+" "+timetag(t_hr))
        }
}
  
  // Change Functions
  function on_month_change(){
          var month = document.getElementById("inputmonth").value;
          var month_list = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
          month_index = month_list.indexOf(month);
          var op = document.getElementById("inputday").getElementsByTagName("option");
          if(month_index == 1 || month_index == 3 || month_index == 5 || month_index == 7 || month_index == 8 || month_index == 10 || month_index == 12){
              op[30].style.display = "block";
              op[29].style.display = "block";
          }else if(month_index == 2){
              op[30].style.display = "none";
              op[29].style.display = "none";
          }else{
              op[30].style.display = "none";
              op[29].style.display = "block";
          }
          on_date_change();
  }
  
  function on_date_change(){
          var month = document.getElementById("inputmonth").value
          var year = document.getElementById("inputyear").value
          var day = document.getElementById("inputday").value
//         document.querySelector('#subtitle').value = day+daytag(day)+" "+month+" "+year;
//         trigger_change_event('subtitle')
          set_res_date(day,month,year);
  }
    function convert_month(month){
      var months = ['test','January','February','March','April','May','June','July','August','September','October','November','December'];
      return months[month];
    }
  var unknownTimeChecked;
  function unknownTime(checkboxElem) {
  if (!checkboxElem.checked) {
      unknownTimeChecked = true;
      $('#hr_form,#min_form').prop('disabled', true);
//       document.getElementById("hr_form").value = 00;
//       document.getElementById("min_form").value = 01;
//       $("#hr").val(document.getElementById("hr_form").value);
//       trigger_change_event("hr");
//       $("#min").val(document.getElementById("hr_form").value);
//       trigger_change_event("min");
      $('#yes_no_time').css('display','none')
  } else {
      $('#yes_no_time').css('display','inline-block')
      $('#hr_form,#min_form').prop('disabled', false);
      unknownTimeChecked = false;
  }
    on_date_change()
}
   var fcolorName, starmapColorName;

  function same_bc(checked){
    console.log(checked)
    show_border()
  if(checked == true){
    starColor = '#ffffff';
    $('.editor-color-53 .cust').css('fill', mapColor)
    $('.custom-frame').css('background',mapColor);
    $('.custom-frame').css('color', starColor);
    $('.frame-container').css('color','3px solid '+starColor);
    $('.custom-textarea').css('color', starColor)
    if(mapColor == '#ffffff'){
      $('.bor').css('fill','#000000')
      $('.strokeCouple').css('stroke','#000000')
    }else{
      $('.bor').css('fill', starColor)
      $('.strokeCouple').css('stroke', starColor)
    }
//     fcolor = mapColor;
//     tcolor = starColor;
  }else{
    starColor = '#000000';
    $('.custom-frame').css('background','#ffffff');
    $('.custom-frame').css('color','#000000');
    $('.frame-container').css('color','3px solid #000000');
    $('.editor-color-53 .cust').css('fill', '#ffffff')
    $('.custom-textarea').css('color', '#000000')
    if(document.getElementById('cb61').checked){
      $('.bor').css('fill','#000000')
      $('.strokeCouple').css('stroke', '#000000')
    }else{
      $('.bor').css('fill', '#ffffff')
      $('.strokeCouple').css('stroke', '#ffffff')
    }
//     fcolor = '#ffffff';
//     tcolor = '#060808';
  }

}
function change_background(color){
  console.log(color +'This is the color')
  $('#div_color').css('background',color)
  mapColor = color
  $('#background-fill').val(color)
  trigger_change_event("background-fill");
  fcolor = color;
 if(mapColor == '#333744'){
  starmapColorName = "Blackish"
  }else if(mapColor == '#6c6e78'){
  starmapColorName = "Grey"
  }else if(mapColor == '#0f1d42'){
  starmapColorName = "Midnight Blue"
  }else if(mapColor == '#025D8C'){
  starmapColorName = "Baby Blue"
  }else if(mapColor == '#d48290'){
  starmapColorName = "Baby Pink"
  }else if(mapColor == '#2c8a98'){
  starmapColorName = "Light Turquoise"
  }else if(mapColor == '#be2e52'){
  starmapColorName = "Bright Red"
  }else{
  	starmapColorName = "Midnight Black"
  }
     
//   if(document.getElementById('cb14').checked){
//     console.log('CB14 '+fcolor)
//     $('#layout2').css('background',fcolor)
//   }
  if(!document.getElementById('cb61').checked){
    $('.frame_bc').css('background', color)
    $('.editor-color-53 .cust').css('fill', color)
  	same_bc(true)
  }else{
//     $('.frame_bc').css('background', '#ffffff')
//     $('.editor-color-53 .cust').css('fill', '#ffffff')
    same_bc(false)
        $('.bor').css('fill', '#000000')
        $('.strokeCouple').css('stroke', '#000000')
  }
}

function daytag(day){
  var daytag = "th";
  if(day == 1 || day == 21 || day == 31){
      daytag = "st";
  }else if(day == 2 || day == 22){
      daytag = "nd";
  }else if(day == 3 || day == 23){
      daytag = "rd";
  }else{
      daytag = "th";
  }
  return daytag;
}

function timetag(hrs){
  var timetag = "am";
  if(hrs > 12){
    timetag = "pm";
  }else if(hrs == 12){
    timetag = "pm";
  }else{
    timetag = "am"
  }
  return timetag;

}

function lat_card(lat){
  var latitudeCardinal;
  var latitude = lat;
  if(lat >= 0){
    latitudeCardinal = "N";
  }else{
   latitudeCardinal = "S";
   latitude = -1*lat;
  }
 return latitude + "˚ " + latitudeCardinal
}
  
  function lat_cor(lat){
  var latitudeCardinal;
  var latitude = lat;
  if(lat >= 0){
    latitudeCardinal = "N";
  }else{
   latitudeCardinal = "S";
   latitude = -1*lat;
  }
 return latitudeCardinal
}
  
   function lat_num(lat){
  var latitudeCardinal;
  var latitude = lat;
  if(lat >= 0){
    latitudeCardinal = "N";
  }else{
   latitudeCardinal = "S";
   latitude = -1*lat;
  }
 return latitude 
}

function lng_card(lng){
  var longitudeCardinal;
  var longitude = lng;
  if(lng >= 0){
    longitudeCardinal = "E";
  }else{
    longitudeCardinal = "W";
    longitude = -1*lng;
  }
return longitude + "˚ " + longitudeCardinal
}
  
  function lng_cor(lng){
  var longitudeCardinal;
  var longitude = lng;
  if(lng >= 0){
    longitudeCardinal = "E";
  }else{
    longitudeCardinal = "W";
    longitude = -1*lng;
  }
return longitudeCardinal
}
  
  function lng_num(lng){
  var longitudeCardinal;
  var longitude = lng;
  if(lng >= 0){
    longitudeCardinal = "E";
  }else{
    longitudeCardinal = "W";
    longitude = -1*lng;
  }
return longitude;
}
  
    var shapeName='Cerc';
function change_shape(val){
  if(val.id == 'cb17'){
    shapeName = 'Cerc';
    $('.custom_iframe').html($('#abc_6').val())
  }else if(val.id == 'cb18'){
    shapeName = 'Fetita';
    $('.custom_iframe').html($('#abc_4').val())
  }else if(val.id == 'cb19'){
    shapeName = 'Baiat';
    $('.custom_iframe').html($('#abc_1').val())
  }else if(val.id == 'cb20'){
    shapeName = 'Stea';
    $('.custom_iframe').html($('#abc_3').val())
  }else if(val.id == 'cb21'){
    shapeName = 'Inima';
    $('.custom_iframe').html($('#abc_2').val())
  }else if(val.id == 'cb51'){
    shapeName = 'Cuplu';
    $('.custom_iframe').html($('#abc_7').val())
  }else if(val.id == 'cb52'){
    shapeName = 'Pisica';
    $('.custom_iframe').html($('#abc_8').val())
  }else if(val.id == 'cb53'){
    shapeName = 'Catel';
    $('.custom_iframe').html($('#abc_9').val())
  }else if(val.id == 'cb54'){
    shapeName = 'Casa';
    $('.custom_iframe').html($('#abc_10').val())
  }
  else{
    shapeName = 'Cerc';
    $('.custom_iframe').html($('#abc_6').val())
  }
 
  if(document.getElementById('cb61').checked){
    $('.editor-color-53 .cust').css('fill', '#ffffff')
    $('.bor').css('fill','#000000')
    $('.strokeCouple').css('stroke','#000000')
  }else{
    $('.editor-color-53 .cust').css('fill', fcolor)
    $('.bor').css('fill','#ffffff')
    $('.strokeCouple').css('stroke','#ffffff')
  }
}
  
  function show_grid()
{
    var showGrid = document.getElementById("cb1").checked;
    document.getElementById("lines-graticule-show").checked = showGrid;
    trigger_change_event("lines-graticule-show");
}

// Constellations
function change_constellations()
{
    var showConst = document.getElementById("cb2").checked;
    document.getElementById("constellations-lines").checked = showConst;
    trigger_change_event("constellations-lines")
}

function show_milkyway()
{
    var showMoon = document.getElementById("cb3").checked;
    document.getElementById("mw-show").checked = showMoon;
    trigger_change_event("mw-show");
}
  
function show_border()
{
    var showBorder = document.getElementById("cb333").checked;
  if(showBorder){
    if(document.getElementById('cb61').checked){
    $(".pt-2.pb-1.frame-container").css('border','2px solid #000') ;
    }else{
      $(".pt-2.pb-1.frame-container").css('border','2px solid #fff') ;
    }
  }else{
  	 $(".pt-2.pb-1.frame-container").css('border','none') ;
  }
}  
  
  function message_input(val){
  $('.custom-textarea').val(val)
}
function changeTitle(val){
  $('#skyMap').html(val)
}
  
    var lines = 4;
    var linesUsed = $('#linesUsed');

    $('#mssgMain').keydown(function(e) {

        newLines = $(this).val().split("\n").length;
        linesUsed.text(newLines);

        if(e.keyCode == 13 && newLines >= lines) {
            linesUsed.css('color', 'red');
            return false;
        }
        else {
            linesUsed.css('color', '');
        }
    });
  
  var maxLength = 40;
$('#mssgMain').on('input focus keydown keyup', function() {
    var text = $(this).val();
    var lines = text.split(/(\r\n|\n|\r)/gm); 
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].length > maxLength) {
            lines[i] = lines[i].substring(0, maxLength);
        }
    }
    $(this).val(lines.join(''));
});


   function initialize() {
            var input = document.getElementById('address_form1');
            var autocomplete = new google.maps.places.Autocomplete(input);
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                console.log(place);
                console.log(place.geometry.location.lat());
                console.log(place.geometry.location.lng());
               Celestial.location([place.geometry.location.lat(), place.geometry.location.lng()])
                let lat_1 = (place.geometry.location.lat()).toFixed(4);
            let lng_1 = (place.geometry.location.lng()).toFixed(4);
          $('#custom_add').text(input.value);
              $('input#mat-input-6').val(input.value);
          $('#custom_lat').text(lat_card(lat_1));
          $('#custom_lng').text(lng_card(lng_1));
              
		  $('input#mat-input-8').val(lat_num((place.geometry.location.lat()).toFixed(4)));  
          $('input#mat-input-9').val(lng_num((place.geometry.location.lng()).toFixed(4)));  
              $('select#mat-input-11').val(lng_cor(place.geometry.location.lng()));  
              
          $('select#mat-input-19').val(lat_cor(place.geometry.location.lat()));  

//         document.getElementById('location_id').value = document.getElementById('address_form1').value
            });
          }
          
          google.maps.event.addDomListener(window, 'load', initialize);
