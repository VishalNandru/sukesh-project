const url = "http://localhost:3005/";

let options = {
    method: "GET"
}

const rootDiv = document.getElementById("rootDiv");
const fruitsList = document.createElement("ul");

function displayFruit(fruit){
    const cardListItem = document.createElement("li");
    cardListItem.classList.add("card");
    
}



fetch(url,options)
.then(function(response){
    console.log("This is response",response);
    return response.json()
    
})
.then(function(fruitData){
    console.log("This is fruitData", fruitData);
    fruitData.forEach(fruit =>{
        const listItem = displayFruit(fruit)
    })
    fruitsList.appendchild(listItem);
}).catch(function(error){
    console.log("The error is", error);
})

