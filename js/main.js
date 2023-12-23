var container = document.querySelector(".container")


// var img = document.querySelector(".img")
// var tittle = document.querySelector(".tittle")
// var text = document.querySelector(".info1")

var array = [
  {
    img : "./assets/nike.jpeg",
    tittle : "irsad",
    text : "her kese ssalamm"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "nike",
    text : "loredfwedf ferwfew4f3r"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  {
    img : "./assets/nike.jpeg",
    tittle : "adidas",
    text : "ldcwdnocern"
    
  },
  
]



array.forEach(element => {

  const div = document.createElement("div")
  const img = document.createElement("img")
  img.src = element.img;
  div.appendChild(img);
 
  var tittle = document.createElement("h2")
  tittle.textContent = element.tittle;
  div.appendChild(tittle)

  var text = document.createElement("p")
  text.textContent = element.text
  div.appendChild(text)


  container.appendChild(div)
});