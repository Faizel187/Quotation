            var message = document.getElementById("tdays").value;



function GetDay(){
                var dropdt = new Date(document.getElementById("ddate").value);
                var pickdt = new Date(document.getElementById("pdate").value);
                return parseInt((dropdt - pickdt) / (24 * 3600 * 1000));
        }

    function cal(){

	    if(document.getElementById("ddate").value && document.getElementById("ddate").value){
	        document.getElementById("tdays").value=GetDay();
	    }  
    }

function GetDays(){
                var dropdt = new Date(document.getElementById("ddate1").value);
                var pickdt = new Date(document.getElementById("pdate1").value);
                return parseInt((dropdt - pickdt) / (24 * 3600 * 1000));
        }

        function cal1(){
        if(document.getElementById("ddate1")){
            document.getElementById("tdays1").value=GetDays();
        }  
    }




function calc(x, y) {  

 return x*y;
}



function call() {

 var x = document.getElementById('tdays').value;
 var y = document.getElementById('riy').value;
 
 document.getElementById('result').value=calc(x, y);
}


function riyadhVal(val, element, result){
    var days = element.value;
    //var val = document.getElementById('riy').value;
    result.value = days * val;
}

function totalAmount(val){
    var result =  document.getElementById('result').value;
    var result0 =  document.getElementById('result0').value;
    var costTransport =  document.getElementById('costTransport').value;
   

    document.getElementById('costFinal').value = parseInt(result) + parseInt(result0) + parseInt(costTransport) + parseInt(val);
}
 
function finalAmount(val){
    var f = document.getElementById('costFinal').value;
    document.getElementById('final').value = val * f;
}

function grandAmount(val){
    var r = document.getElementById('final').value;
    document.getElementById('final1').value = val * r;
}
function endAmount(val){
    var l = document.getElementById('final1').value;
    document.getElementById('end').value = +val + +l;
}

document.getElementById('hide').onchange = displayTextBox;
document.getElementById('show').onchange = displayTextBox;

var textBox = document.getElementById('vrupee');

function displayTextBox(evt){
    console.log(evt.target.value)
    if(evt.target.value=="Yes"){
        textBox.disabled = false;
    }else{
        textBox.disabled = true;
    }
}

  function showMessage(){
            var hotel = document.getElementById("fname").value; //hotel name
            var beds = document.getElementById("country").value; // beds
            var from_date = document.getElementById("pdate").value;  // from_date
            var to_date = document.getElementById("ddate").value;  // to_date
            var total_days = document.getElementById("tdays").value;  // total_days
            var hotel_2 = document.getElementById("fname").value;  // hotel_2
            var beds_2 = document.getElementById("rooms").value;   //beds_2
            var from_date2 = document.getElementById("pdate1").value;  // from_date2
            var to_date2 = document.getElementById("ddate1").value;  // to_date2
            var total_days2 = document.getElementById("tdays1").value;  // total_days2
            var transport_cost = document.getElementById("costTransport").value;  // transport_cost
            var extra_transport = document.getElementById("costExtra").value;   // extra_transport
            var final_cost = document.getElementById("end").value;   //final_cost


            display_message.innerHTML= 'Hotel Name: '+hotel+"\n"+'Room: '+beds+"\n"+'From date: '+from_date+"\n"+'To date: '+to_date+"\n"+'Total days : '+total_days+"\n"+'Hotel Name: '+hotel_2+"\n"+'Room: '+beds_2+"\n"+'From date: '+from_date2+"\n"+'To date: '+to_date2+"\n"+'Total days : '+total_days2+"\n"+'Transport cost: '+transport_cost+"\n"+'Extra cost: '+extra_transport+"\n"+'Final cost: '+final_cost+"\n";
        }
      
       
