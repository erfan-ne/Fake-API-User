const submitBtn = document.querySelector(".submit")
const userAvatar = document.querySelector(".user-avatar")
const fullName = document.querySelector(".fullName")
const userName = document.querySelector(".username")
const userEmail = document.querySelector("#email")
const userPhone = document.querySelector("#phone")
const userPassword = document.querySelector("#password")


const showNewUser = () =>{
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(user => {
      const {
        name:{first , last},
        login:{username , password},
        email,
        phone,
        picture:{large}
      } = user.results[0]
      

      fullName.innerHTML = `${first} ${last}`
      userName.innerHTML = `${username}@`
      userEmail.value = email
      userPhone.value = phone
      userPassword.value = password
      userAvatar.setAttribute("src" , `${large}`)

      // if (userTitle.gender === "male"){
      //   userAvatar.setAttribute("src" , "./public/images/male.png")
      // } else {
      //   userAvatar.setAttribute("src" , "./public/images/female.png")
      // }
    })
}

submitBtn.addEventListener("click" , showNewUser)



