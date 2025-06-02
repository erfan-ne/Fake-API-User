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
      const userTitle = user.results[0]

      fullName.innerHTML = `${userTitle.name.first} ${userTitle.name.last}`
      userName.innerHTML = `${userTitle.login.username}@`
      userEmail.value = userTitle.email
      userPhone.value = userTitle.phone
      userPassword.value = userTitle.login.password
      userAvatar.setAttribute("src" , `${userTitle.picture.large}`)

      // if (userTitle.gender === "male"){
      //   userAvatar.setAttribute("src" , "./public/images/male.png")
      // } else {
      //   userAvatar.setAttribute("src" , "./public/images/female.png")
      // }
    })
}

submitBtn.addEventListener("click" , showNewUser)



