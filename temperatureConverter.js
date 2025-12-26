const textBox=document.getElementById("textBox");
const toFahrenheiht=document.getElementById("toFahrenheit");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");
let temp;
function convert(){
 if(toFahrenheiht.checked){
    temp=Number(textBox.value);
    let fahrenheiht=(1.8*temp)+32;
    result.textContent=`${temp}C converted to fahrenheiht gives ${fahrenheiht}F`

}
 else if(toCelcius.checked){
    temp=Number(textBox.value);
    let celcius=(temp-32)/1.8;
    result.textContent=`${temp}F converted to celcius gives ${celcius}C`
 }
 else{
    result.textContent="Select a unit";
 }
}
