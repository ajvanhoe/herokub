document.body.style.border = "5px solid green";

/* element by id vars */
var element = function(id){
    return document.getElementById(id);
}

var name = element("name");
var directions = element("directions");
var description = element("description");
var services = element("services");

var fullAddress = element("full_address");

var addressSuite = element("address_suite");
var addressStreetNumber = element("address_street_number");
var addressRoute = element("address_route");

var addressLocality = element("address_locality");
var addressArea = element("address_area");
var addressAreaCode = element("address_area_code");
var addressCountryCode = element("address_country_code");
var addressCountry = element("address_country");

var addressPostalCode = element("address_postal_code");
var addressLat = element("address_lat");
var addressLng = element("address_lng");

/* details... */ 
var website = element("website");
var logo = element("logo");
var email = element("email");
var rvsqUrl = element("rvsq_url");

var phone = element("phone");
var phoneExt = element("phone_ext");

var fax = element("fax");
var openingHours = element("opening_hours");
var walkInOpHours = element("walk_in_opening_hours");

var patients = element("details_patients");
var details = element("details_products_and_services");
var languages = element("details_languages");


/* more details... */

var clscOp = element("clsc_opening_hours");
var specialOp = element("special_opening_hours");
var specialWalkInOp = element("special_walk_in_opening_hours");
var clscSpecialOp = element("clsc_special_opening_hours");
var samplingOp = element("sampling_service_opening_hours");
var nurseOp = element("nurse_service_opening_hours");
var imageryOp = element("imagery_service_opening_hours");
var samplingSpecialOp = element("sampling_service_special_opening_hours");
var nurseSpecialOp = element("nurse_service_special_opening_hours");
var imagerySpecialOp = element("imagery_service_special_opening_hours");

var generalPhone = element("general_phone");
var appointmentPhone = element("appointment_phone");
var complaintPhone = element("complaint_phone");
var receptionPhone = element("reception_phone");

var samplePhone = element("sample_phone");
var youthPhone = element("youth_phone");
var homePhone = element("home_care_phone");




/* input data */
var sp = document.getElementsByTagName("span");

/* magik button */
var mgb;
var divContent;

var pat;
var lan;

/* add magik div */
mgb = document.createElement('div');
mgb.setAttribute('class', 'magik-button');
divContent = "<hr><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"magik\" class=\"btn btn-success\">Click here for some MAGIK!!!</button>";
divContent+= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"basik\" class=\"btn btn-primary\">Prenesi osnovno</button>";
divContent+= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"addrch\" class=\"btn btn-info\"><span class=\"text-white\">Promena adrese</span></button>";
divContent+= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"nodesc\" class=\"btn btn-info\"><span class=\"text-white\"><strong>opisa bez</strong></span></button>";
divContent+= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"testbtn\" class=\"btn btn-secondary\">test</button><br><br><hr>";

mgb.innerHTML = divContent;
document.body.appendChild(mgb);

/* listeners */
var magik = element('magik');
var basik = element('basik');
var testbtn = element('testbtn');
var addrch = element('addrch');
var nodesc = element('nodesc');


testbtn.addEventListener('click', function(){

    // console.log('patients: '+sp[53].innerHTML);
    // console.log('lang: '+sp[51].innerHTML);
    // console.log('description: '+sp[55].innerHTML);
    // console.log('services: '+sp[9].innerHTML);

    openingHours.innerHTML = sp[47].innerHTML;
    walkInOpHours.innerHTML = sp[49].innerHTML;
    
    pat = sp[53].innerHTML;
    lan = sp[51].innerHTML;

    console.log(patients);
    console.log(languages);
    console.log(pat);
    console.log(lan);

    patients.value = pat;
    languages.value = lan;

  //patients.appendChild(pat);
  //languages.appendChild(lan);


 
 specialOp.innerHTML = sp[69].innerHTML;
 specialWalkInOp.innerHTML = sp[73].innerHTML;
 clscOp.innerHTML = sp[75].innerHTML;
 clscSpecialOp.innerHTML = sp[77].innerHTML;

 samplingOp.innerHTML = sp[79].innerHTML;
 samplingSpecialOp.innerHTML = sp[81].innerHTML;
 
 nurseOp.innerHTML = sp[83].innerHTML;
 nurseSpecialOp.innerHTML = sp[85].innerHTML;

 imageryOp.innerHTML = sp[87].innerHTML;
 imagerySpecialOp.innerHTML = sp[89].innerHTML;




    generalPhone.setAttribute('value', sp[41].innerHTML);
    appointmentPhone.setAttribute('value', sp[43].innerHTML);
    complaintPhone.setAttribute('value', sp[45].innerHTML);
    receptionPhone.setAttribute('value', sp[47].innerHTML);

    samplePhone.setAttribute('value', sp[49].innerHTML);
    youthPhone.setAttribute('value', sp[51].innerHTML);
    homePhone.setAttribute('value', sp[55].innerHTML);




});


nodesc.addEventListener('click', function(){

    name.setAttribute('value', sp[3].innerHTML);
    services.setAttribute('value', sp[9].innerHTML);

    fullAddress.setAttribute('value', sp[11].innerHTML);
    addressSuite.setAttribute('value', sp[13].innerHTML);
    addressStreetNumber.setAttribute('value', sp[15].innerHTML);
    addressRoute.setAttribute('value', sp[17].innerHTML);

    addressLocality.setAttribute('value', sp[19].innerHTML);
    addressArea.setAttribute('value', sp[21].innerHTML);
    addressAreaCode.setAttribute('value', sp[23].innerHTML);
    addressCountryCode.setAttribute('value', sp[25].innerHTML);
    addressCountry.setAttribute('value', sp[27].innerHTML);

    addressPostalCode.setAttribute('value', sp[29].innerHTML);
    addressLat.setAttribute('value', sp[31].innerHTML);
    addressLng.setAttribute('value', sp[33].innerHTML);

    website.setAttribute('value', sp[35].innerHTML);

    logo.setAttribute('value', sp[43].innerHTML);
    email.setAttribute('value', sp[41].innerHTML);

    rvsqUrl.setAttribute('value', sp[45].innerHTML);
    phone.setAttribute('value', sp[37].innerHTML);
    phoneExt.setAttribute('value', sp[39].innerHTML);

    openingHours.innerHTML = sp[47].innerHTML;
    walkInOpHours.innerHTML = sp[49].innerHTML;
 
});



addrch.addEventListener('click', function(){

    name.setAttribute('value', sp[3].innerHTML);
    description.setAttribute('value', sp[55].innerHTML);
    directions.setAttribute('value', sp[7].innerHTML);
    services.setAttribute('value', sp[9].innerHTML);

   // fullAddress.setAttribute('value', sp[11].innerHTML);

   // addressSuite.setAttribute('value', sp[13].innerHTML);
   // addressStreetNumber.setAttribute('value', sp[15].innerHTML);
    addressRoute.setAttribute('value', sp[17].innerHTML);

    addressLocality.setAttribute('value', sp[19].innerHTML);
    addressArea.setAttribute('value', sp[21].innerHTML);
    addressAreaCode.setAttribute('value', sp[23].innerHTML);
    addressCountryCode.setAttribute('value', sp[25].innerHTML);
    addressCountry.setAttribute('value', sp[27].innerHTML);

    //addressPostalCode.setAttribute('value', sp[29].innerHTML);
    //addressLat.setAttribute('value', sp[31].innerHTML);
    //addressLng.setAttribute('value', sp[33].innerHTML);

    website.setAttribute('value', sp[35].innerHTML);

    logo.setAttribute('value', sp[43].innerHTML);
    email.setAttribute('value', sp[41].innerHTML);

    rvsqUrl.setAttribute('value', sp[45].innerHTML);
    phone.setAttribute('value', sp[37].innerHTML);
    phoneExt.setAttribute('value', sp[39].innerHTML);

    fax.setAttribute('value', sp[57].innerHTML);

    openingHours.innerHTML = sp[47].innerHTML;
    walkInOpHours.innerHTML = sp[49].innerHTML;

    pat = sp[53].innerHTML;
    lan = sp[51].innerHTML;

    patients.value = pat;
    languages.value = lan;




});



basik.addEventListener('click', function(){

    name.setAttribute('value', sp[3].innerHTML);
    description.setAttribute('value', sp[55].innerHTML);
    directions.setAttribute('value', sp[7].innerHTML);
    services.setAttribute('value', sp[9].innerHTML);

    fullAddress.setAttribute('value', sp[11].innerHTML);
    addressSuite.setAttribute('value', sp[13].innerHTML);
    addressStreetNumber.setAttribute('value', sp[15].innerHTML);
    addressRoute.setAttribute('value', sp[17].innerHTML);

    addressLocality.setAttribute('value', sp[19].innerHTML);
    addressArea.setAttribute('value', sp[21].innerHTML);
    addressAreaCode.setAttribute('value', sp[23].innerHTML);
    addressCountryCode.setAttribute('value', sp[25].innerHTML);
    addressCountry.setAttribute('value', sp[27].innerHTML);

    addressPostalCode.setAttribute('value', sp[29].innerHTML);
    addressLat.setAttribute('value', sp[31].innerHTML);
    addressLng.setAttribute('value', sp[33].innerHTML);
});

// Do some magik
magik.addEventListener('click', function(){

    name.setAttribute('value', sp[3].innerHTML);
    description.setAttribute('value', sp[55].innerHTML);
    directions.setAttribute('value', sp[7].innerHTML);
    services.setAttribute('value', sp[9].innerHTML);

    fullAddress.setAttribute('value', sp[11].innerHTML);

    addressSuite.setAttribute('value', sp[13].innerHTML);
    addressStreetNumber.setAttribute('value', sp[15].innerHTML);
    addressRoute.setAttribute('value', sp[17].innerHTML);

    addressLocality.setAttribute('value', sp[19].innerHTML);
    addressArea.setAttribute('value', sp[21].innerHTML);
    addressAreaCode.setAttribute('value', sp[23].innerHTML);
    addressCountryCode.setAttribute('value', sp[25].innerHTML);
    addressCountry.setAttribute('value', sp[27].innerHTML);

    addressPostalCode.setAttribute('value', sp[29].innerHTML);
    addressLat.setAttribute('value', sp[31].innerHTML);
    addressLng.setAttribute('value', sp[33].innerHTML);

    website.setAttribute('value', sp[35].innerHTML);

    logo.setAttribute('value', sp[43].innerHTML);
    email.setAttribute('value', sp[41].innerHTML);

    rvsqUrl.setAttribute('value', sp[45].innerHTML);
    phone.setAttribute('value', sp[37].innerHTML);
    phoneExt.setAttribute('value', sp[39].innerHTML);

    fax.setAttribute('value', sp[57].innerHTML);

    openingHours.innerHTML = sp[47].innerHTML;
    walkInOpHours.innerHTML = sp[49].innerHTML;

    pat = sp[53].innerHTML;
    lan = sp[51].innerHTML;

    patients.value = pat;
    languages.value = lan;


     specialOp.innerHTML = sp[69].innerHTML;
     specialWalkInOp.innerHTML = sp[73].innerHTML;
     clscOp.innerHTML = sp[75].innerHTML;
     clscSpecialOp.innerHTML = sp[77].innerHTML;

     samplingOp.innerHTML = sp[79].innerHTML;
     samplingSpecialOp.innerHTML = sp[81].innerHTML;
     
     nurseOp.innerHTML = sp[83].innerHTML;
     nurseSpecialOp.innerHTML = sp[85].innerHTML;

     imageryOp.innerHTML = sp[87].innerHTML;
     imagerySpecialOp.innerHTML = sp[89].innerHTML;


     
    generalPhone.setAttribute('value', sp[41].innerHTML);
    appointmentPhone.setAttribute('value', sp[43].innerHTML);
    complaintPhone.setAttribute('value', sp[45].innerHTML);
    receptionPhone.setAttribute('value', sp[47].innerHTML);

    samplePhone.setAttribute('value', sp[49].innerHTML);
    youthPhone.setAttribute('value', sp[51].innerHTML);
    homePhone.setAttribute('value', sp[55].innerHTML);



  
});

/* test data */ 
// var i;
// for (i = 0; i < sp.length+1; i++) {
//   console.log('element br.'+i+':  '+sp[i].innerHTML);
// } 