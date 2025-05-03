 const heading=document.getElementById("_heading");

 const userwritebox =document.getElementById("_writecapctha");

 const submitbutton =document.getElementById("_submit");

 const refreshbutton =document.getElementById("_refresh");

 const body=document.body;

 const variables="123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

 let captchavalue=""

 body.onload = function captchagenerator(){

    const captchalength=6;

    for (let index = 0; index < captchalength; index++) {
        
        const randomindex= Math.floor(Math.random()*variables.length);

        captchavalue+= variables.substring(randomindex,randomindex+1);
        
        
    }

    document.getElementById("_generator").value=captchavalue;

    heading.innerText="Captcha Generator"


 }

 submitbutton.onclick = function checkvalue(){

    let input=userwritebox.value;

    if(input==captchavalue){
        heading.innerText="Captcha Matched💯"
    }else if(input==""){
        heading.innerText="Please enter the captcha⚠️"
    }else{
        heading.innerText="Incorrect Captcha❌"
    }


 }


 refreshbutton.onclick = function refreshpage(){


let newcaptcha="";

 for (let i = 0; i < captchavalue.length; i++) {
     
     const randomindexvalues= variables[Math.floor(Math.random()*variables.length)];

     newcaptcha+= randomindexvalues;
     
     
 }

 captchavalue=newcaptcha;

 document.getElementById("_generator").value=captchavalue;

 heading.innerText="Captcha Generator"

 userwritebox.value=""; // ta k us main kuch bcha hua na rhe complete clear ho jae wo field
    
 }

 


