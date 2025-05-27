const input = document.querySelector("input");
const inputContainer = document.querySelector(".input-container");
const searchResultBox = document.querySelector(".dropdown");

const searches = [
  "فرمول طلایی تعادل بین کار و زندگی برای برنامه‌ نویسان: از استرس تا آرامش",
  "5 نکته مهم در انتخاب اولین زبان برنامه‌نویسی برای یادگیری",
  "برنامه‌ی تشخیص عدد اول در پایتون",
  "پردازش زبان طبیعی (NLP) چیست؟",
  "یوتیوب با چه زبان برنامه نویسی ساخته شده است ؟",
  "بهترین ابزارهای هوش مصنوعی برای برنامه نویسی 🤩",
  "بهترین زبان برنامه نویسی برای طراحی سایت",
  "شی گرایی چیست؟",
  "هوش مصنوعی در بازی‌ها؛ از دشمنان هوشمند تا دنیای پویا",
  "کابوس‌های برنامه‌نویسان:6 اشتباهی که می‌تواند پروژه شما را نابود کند!",
  "dbms چیست؟",
  "تکنیک های طلایی دیباگینگ برای برنامه نویسان",
];

const searchHandler = () => {
  const searchValue = input.value

  const searchResult = searches.filter((search) => search.includes(searchValue))
  
  searchResultBox.innerHTML= ""

  if (searchResult.length && searchValue.length){
    inputContainer.classList.add("searching")
  
    searchResult.forEach((search) => searchResultBox.insertAdjacentHTML("beforeend" ,
        `
        <div class="autocomplete-result">
          <a href="#" class="autocomplete-value">${search}</a>
        </div>
        `
      ))
  } else {
    inputContainer.classList.remove("searching")
  }
}

input.addEventListener("keyup" , searchHandler)