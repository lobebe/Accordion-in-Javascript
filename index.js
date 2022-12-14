const accordion = document.querySelectorAll(".question")

accordion.forEach(function(eachItem) {
  eachItem.addEventListener("click", function(e) {
    const openQuestion = e.currentTarget
    accordion.forEach(function(item) {
      if (item !== openQuestion) {
        item.classList.remove("show-text")
      }
    });
    openQuestion.classList.toggle("show-text")
  })
})
