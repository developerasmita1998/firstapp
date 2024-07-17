import './App.css';
import Swal from 'sweetalert2';

function App() {



  // const showSwal =()=>{
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your file has been deleted.",
  //         icon: "success"
  //       });
  //     }
  //   });
  // }

  const showSwal =()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You want to do sign up!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, signup!"
    }).then((result) => {
      if (result.isConfirmed) {
    
      }
    });
  }

  const checkValidation = () => {
    const first = document.getElementById("first").value.trim();
    const last = document.getElementById("last").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;

    if (!first || !last || !email || !password || !confirm || (!male && !female)) {
      let message = "All fields are mandatory";
      if (!first) message = "Please enter firstname";
      else if (!last) message = "Please enter lastname";
      else if (!email) message = "Please enter email";
      else if (!password) message = "Please enter password";
      else if (!confirm) message = "Please enter confirm password";
      else if (!male && !female) message = "Please tick gender";

      alert(message);
      return false;
    }

    if (password !== confirm) {
      alert("Please fill the same password");
      return false;
    }

    showSwal();
    return true;
  }

  return (
    <div className="container">
      <div className="inner">
        <label htmlFor="first" className='mylabel'>First Name</label>
        <input type="text" id="first" className='myinput' placeholder='First Name' /><br/>

        <label htmlFor="last" className='mylabel'>Last Name</label>
        <input type="text" id="last" className='myinput' placeholder='Last Name' /><br/>

        <label htmlFor="email" className='mylabel'>Email Address</label>
        <input type="email" id="email" className='myinput' placeholder='Email Address' /><br/>

        <label htmlFor="password" className='mylabel'>Password</label>
        <input type="password" id="password" className='myinput' placeholder='Password' /><br/>

        <label htmlFor="confirm" className='mylabel'>Confirm Password</label>
        <input type="password" id="confirm" className='myinput' placeholder='Confirm Password' /><br/>

        <label className='mylabel'>Gender</label>
        <label htmlFor="male" className='mylabel1'>Male</label>
        <input type="radio" id="male" name="gender" className='myinput1' />
        <label htmlFor="female" className='mylabel1'>Female</label>
        <input type="radio" id="female" name="gender" className='myinput1' />

        <div className='mydiv'>
          <button type="submit" className='mybutton' onClick={checkValidation}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
