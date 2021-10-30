var request=new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true);

request.send();

request.onload=function(){

    var data=JSON.parse(request.response);
console.log(data);
console.log(data[0].region);
 for(var i=0; i<data.length; i++){
     var output=(data[i].name.official);
  console.log(output);
}
}
