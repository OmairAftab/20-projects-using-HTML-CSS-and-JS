 const passwordbutton =document.getElementById("_password");

 const newpasswordbutton =document.getElementById("_newpassword");

 const variables="123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()[]{}"

 let passwordvalue=""

passwordbutton.onclick = function passwordgenerator(){

    const passwordlength=11;

    for (let index = 0; index < passwordlength; index++) {
        
        const randomindex= Math.floor(Math.random()*variables.length);

        passwordvalue+= variables.substring(randomindex,randomindex+1);
        
        
    }

    document.getElementById("_generator").value=passwordvalue;

    //display new password generator button
newpasswordbutton.style.display = "block"



//hide the passsword generator button coz now we dont need it ab new hee password chahiye aik to show ho gya
passwordbutton.style.display = "none"

 }






//new password ka function
 newpasswordbutton.onclick = function newpasswordgenerator(){


let newpass="";

 for (let i = 0; i < passwordvalue.length; i++) {
     
     const randomindexvalues= variables[Math.floor(Math.random()*variables.length)];

     newpass+= randomindexvalues;
     
     
 }

 passwordvalue=newpass;

 document.getElementById("_generator").value=passwordvalue;


 userwritebox.value=""; // ta k us main kuch bcha hua na rhe complete clear ho jae wo field
    
 }

 


