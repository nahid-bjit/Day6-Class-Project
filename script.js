// ## fetching the data for 1 element ## 


// async function getProductData() {
//     const response = await fetch("https://dummyjson.com/products/1")
//     // console.log("our response is: ", response);
//     const data = await response.json();
//     console.log("our data is: ", data);

//     const div1Dom = document.getElementById("cards");
//     div1Dom.innerHTML = `<article class="card">
//     <header>
//         <h2>${data.title}</h2>
//     </header>    
//     <img src="${data.thumbnail}">
//     <div class="content">
//         <p>${data.description}</p>
//     </div>
        
// </article>`
// }

// getProductData();

// ## fetching data for multiple elements ##

async function getProductData() {
    const response = await fetch("https://dummyjson.com/products")
    // console.log("our response is: ", response);
    const data = await response.json();
    console.log("our data is: ", data);

    const cardDom = document.getElementById("cards");

    data.products.forEach(element => {
        cardDom.innerHTML  += `<article class="card">
        <header>
            <h2>${element.title}</h2>
        </header>    
        <img src="${element.thumbnail}">
        <div class="content">
            <p>${element.description}</p>
        </div>
            
    </article>`
    });
   
}

getProductData();

