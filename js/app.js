setInterval(()=>{
        let date = new Date();
        document.getElementById('date').innerHTML = date;  
      },1000)
        window.onload = function() {
          fetch('weather.json')
           .then((response)=>{
               return response.json();
           })
           .then((data)=>{
               console.log('weather info: ',data);
               data.map((cval)=>{
                   if(cval.city=='Pune'){
                      document.getElementById(cval.city).style.backgroundColor = "#fff";
                      document.getElementById(cval.city).style.color = "#333"; 
                      document.getElementById('defaultCity').innerHTML = cval.city; 
                      document.getElementById('temp').innerHTML = cval.temperature+'<sup>0</sup>';
                      document.getElementById('climate').innerHTML = cval.climate;
                      document.getElementById('wetImg').src = `../images/${cval.image}`;
                      document.getElementById('air').innerHTML = cval.airQuality;
                      document.getElementById('wind').innerHTML = cval.wind;
                      document.getElementById('warn').innerHTML = cval.alert; 
                   }
               })
           }).catch((err)=>{
               console.log(err);
           })
        };
      function setWeather(cityInfo){
        let city = cityInfo.id;  
        let promise = new Promise((resolve,reject)=>{
           if(city.length>0){
             resolve(city); 
           }else{
               reject('Please select city from the list');
           }
       });
       promise.then((city)=>{
           console.log('city selected is',city);
           fetch('weather.json')
           .then((response)=>{
               return response.json();
           })
           .then((data)=>{
               console.log('weather info: ',data);
               data.map((cval)=>{
                   if(cval.city==city){
                      document.getElementById(cval.city).style.backgroundColor = "#fff";
                      document.getElementById(cval.city).style.color = "#333"; 
                      document.getElementById('defaultCity').innerHTML = cval.city; 
                      document.getElementById('temp').innerHTML = cval.temperature+'<sup>0</sup>';
                      document.getElementById('climate').innerHTML = cval.climate;
                      document.getElementById('wetImg').src = `../images/${cval.image}`;
                      document.getElementById('air').innerHTML = cval.airQuality;
                      document.getElementById('wind').innerHTML = cval.wind;
                      document.getElementById('warn').innerHTML = cval.alert; 
                   }else{
                      document.getElementById(cval.city).style.backgroundColor = "transparent";
                      document.getElementById(cval.city).style.color = "#fff"; 
                   }
               })
           })
       },function(err){
         console.log(err); 
       }) 
    }  