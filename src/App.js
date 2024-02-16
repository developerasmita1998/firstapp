import './App.css';

function App() {



  const checkValidation = () => {
    
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;   
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var male  = document.getElementById("male").checked;
    var female  = document.getElementById("female").checked;

    
    first = first.trim();
    last = last.trim();
    email = email.trim();
    password = password.trim();
    confirm = confirm.trim();
    

   if(!first ||!last ||!email ||!password ||!confirm || (!male && !female)){
     if(!first && !last && !email && !password && !confirm && (!male && !female)){
            alert("All fields are mandatory");
            return false;
     }
     if(!first ){
     alert("Please enter firstname");
    return false;
    }
     if(!last){
      alert("Please enter lastname");
      return false;
    }

    if(!email){
      alert("Please enter email");
      return false;

   }

   if(!password){
    alert("Please enter password ");
    return false;

 }

 if(!confirm){
  alert("Please enter confirm password ");
  return false;

}
if(!male && !female){
  alert("Please tickout gender");
  return false;

}
}
    else{
    if(password !== confirm){
      alert("Please fill same password");
      return false;
    
    }

   

   else{
    alert("All good")
    return true;
   
   }
  }
}





  return (
      <div className="container">
      <div className="inner">
        
        <label for="first" className='mylabel'> First Name</label>
        <input type="text" id="first"  className='myinput' placeholder='First Name'/><br/>

        <label for="last" className='mylabel'> Last Name</label>
        <input type="text" id="last" className='myinput'  placeholder=' Last Name'/><br/>

        <label for="email" className='mylabel'>Email Adress</label>
        <input type="email" id="email" className='myinput' placeholder='Email Adress'/><br/>

        <label for="password" className='mylabel'>Password</label>
        <input type="password" id="password" className='myinput' placeholder='Password'/><br/>

        <label for="confirm" className='mylabel'>Confirm Password</label>
        <input type="password" id="confirm" className='myinput' placeholder='Confirm Password'/><br/>
         

         <label for="gender" className='mylabel'>Gender</label>
        
          <label for="male" className='mylabel1'>Male</label>
        <input type="radio"  id="male" name="gender" className='myinput1'/>
        
        <label for="female" className='mylabel1' >Female</label>
        <input type="radio"  id="female" name="gender" className='myinput1'/>

       <div className='mydiv'> <button type="submit" className='mybutton' onClick={()=> checkValidation()}>Submit
       </button></div>
        

    </div>
    </div>

  );
}

export default App;
