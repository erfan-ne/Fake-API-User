const nameInput = document.querySelector ("#fullName-input")
const mailInput = document.querySelector ("#email-input")
const subjectInput = document.querySelector("#subject-input")
const textField = document.querySelector(".text-field")
const submitBtn = document.querySelector("button")

const message = []

const addMessage = () => {
  const newMessage = {
    userName : nameInput.value,
    userMail : mailInput.value,
    subject : subjectInput.value,
    text : textField.value
  };
  message.push(newMessage)
  alert("نظر شما ثبت شد")
  console.log(message);
}

submitBtn.addEventListener("click", addMessage)

