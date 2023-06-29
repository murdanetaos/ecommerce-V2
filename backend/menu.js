window.onload = function () {
    fetch("menu.json")
      .then((response) => response.json())
      .then((data) => {
        let productsHtml = "";
        for (let i = 0; i < data.length; i++) {

          let item = data[i];

          let product = `
            <div class="div${i+1}">
              <img src="${item.img}" alt="carimg3">
              <h2>${item.name}</h2>
              <p class="price">${item.price}</p>
              <span class="description">${item.description}</span>
              <button class="submit" shop-item-button" type="button">ADD TO CART</button>
              </div>
          `;

          productsHtml += product;
        }


        let productsContainer = document.getElementsByClassName("parent")[0]

        productsContainer.innerHTML = productsHtml;
      })
      .catch((err) => console.log(err));
  };
  


  // This is a JavaScript function that loads a JSON file called "menu.json" and displays the contents on a webpage. It does this by using the fetch function to get the data, then converting it to a JavaScript object with the .json() method. It then loops through each item in the object and creates a new HTML element for it using the data. Finally, it adds all the HTML elements to a container on the page.