const source = document.querySelector("#etsy-template").innerHTML;
const template = Handlebars.compile(source);

const merchandise = {
  items: [
    {
      img: "https://i.etsystatic.com/30978253/r/il/3849d0/3919269025/il_570xN.3919269025_7mvm.jpg",
      title: "CowGirl Boot T-shirt",
      price: "15.99",
      Currency_Code: "USD",
      Made_When: "Made to Order",
      sku: "Hasan2"
    },
    {
      img: "https://i.etsystatic.com/24198401/r/il/401166/2941683282/il_570xN.2941683282_lor9.jpg",
      title: "Sublimation Transfer Ready to Press Highland Cow 4th of July",
      price : "1.00",
      Currency_Code: "USD",
      Made_When: "Made to Order",
      sku: "[none]"
    }
  ]
};



const final = document.querySelector(".container");
final.innerHTML = template(merchandise);
