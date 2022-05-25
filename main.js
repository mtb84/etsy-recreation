const source = document.querySelector("#etsy-template").innerHTML;
const template = Handlebars.compile(source);

const merchandise = {
  items: [
    {
      title: "CowGirl Boot T-shirt",
      price: "15.99",
      Currency_Code: "USD",
      Made_When: "Made to Order",
      sku: "Hasan2"
    },
    {
      title: "Sublimation Transfer Ready to Press Highland Cow 4th of July",
      price : "1.00",
      Currency_Code: "USD",
      Made_When: "Made to Order",
      sku: "[none]"
    }
  ],
};



const final = document.querySelector(".container");

final.innerHTML = template(merchandise);
