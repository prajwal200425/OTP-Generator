function generateOTP() {
    const otp = Math.floor(100000 + Math.random()*900000);
    let show = document.getElementById("show")
    .innerText =`${otp}`;
  
}

