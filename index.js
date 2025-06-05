  
document.body.style.backgroundColor = "silver";


document.getElementById("title").style.color = "green";

document.querySelectorAll("h3").forEach(h3 => {
  h3.style.textTransform = "uppercase";
});


const fruit = document.createElement("li");
fruit.textContent = "Oranges";
document.getElementById("fruList").appendChild(fruit);


const veg = document.createElement("li");
veg.textContent = "Spinach";
document.getElementById("vegList").appendChild(veg);

document.getElementById("showImage").addEventListener("click", function (event) {
  event.preventDefault();
  const img = document.getElementById("produceImage");
  img.style.display = "block"; 
});

const veges = document.getElementById("veges")
veges.addEventListener("click", (item)=>{
  item.preventDefault()
  const image = document.getElementById('image3');
  image.style.display = "block";
})

const paragraph = document.getElementById("veges");
paragraph.style.textTransform = "uppercase"


const copyr = document.getElementById("copy");
copyr.style.backgroundColor = "grey"