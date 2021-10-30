var ass=new XMLHttpRequest();

ass.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
ass.send();
ass.onload=function(){
    var data=JSON.parse(ass.response);
console.log(data);

for(var i=0; i<data.length; i++){
   console.log(data[i].id,data[i].name,data[i].email);
  
  

}
}
