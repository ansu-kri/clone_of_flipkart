let productData = [
    {
        brand: "Puma",
        name: "Allen Solly",
        price: "55-70% off",
        size: "X,XX,XXL",
        productID: "women1",
        catagory: "Casual shirt",
        img: "https://rukminim1.flixcart.com/image/200/200/kqgyhe80/shirt/e/7/k/m-men-slim-fit-solid-mandarin-collar-casual-shirt-juhil-bazar-original-imag4h5nphqhwh9h.jpeg?q=70",
    },
    {
        brand: "Gap",
        name: "Dresses,Top",
        price: "Min 60% off",
        size: "X,M,L,XX,XXL",
        productID: "women2",
        catagory: "Tokyo Talkies,And,Killer",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/dress/z/y/2/m-299tk166-selvia-original-imagbtfgfqdr7h6a-bb.jpeg?q=70",
    },
    {
        brand: "Puma",
        name: "Raymond,Peter England..",
        price: "60-80% off",
        size: "M,L,XX,XXS",
        productID: "women3",
        catagory: "Shirt, Tousers",
        img: "https://rukminim1.flixcart.com/image/200/200/ktx9si80/shirt/u/a/a/42-14381826-mast-harbour-original-imag75ngyhdhcbqc.jpeg?q=70",
    },
    {
        brand: "Gap",
        name: "plus size womens",
        price: "2000",
        size: "X,M,L,XXS,XXL",
        productID: "women4",
        catagory: "formal",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind158-pnk_1_3dc181e4.jpg?rnd=20200526195200",
    },
    {
        brand: "Bady Moo",
        name: "Park Avenue,Blackberrys..",
        price: "Min 65% off",
        size: "X,M,L",
        productID: "women5",
        catagory: "Formal Wear!",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/trouser/o/3/j/32-maw21ct301i-metronaut-original-imag8vfqwu5xnzkc-bb.jpeg?q=70",
    },
    {
        brand: "Pepe jeans",
        name: "Nike, ADIDAS..",
        price: "55-80% off",
        size: "XXS,M,L",
        productID: "women6",
        catagory: "Sports,Trackpants..",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/short/w/i/r/l-solid-men-dark-blue-shorts-adrenex-original-imaghvhr2zvbgp6t.jpeg?q=70",
    },
    {
        brand: "Puma",
        name: "Provogue,Wrogn..",
        price: "Under Rs 599",
        size: "XXL,M,L",
        productID: "women7",
        catagory: "Now or Never Deal!",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/backpack/j/h/v/axe-unisex-laptop-college-school-travel-backpack-king-k-backpack-original-imagjnvvfz34nphg.jpeg?q=70",
    },
    {
        brand: "Gap",
        name: "Grab or Gone",
        price: "Under RS 599",
        size: "X,M,L,XX",
        productID: "women8",
        catagory: "Men's Shoes",
        img: "https://rukminim1.flixcart.com/image/200/200/kq8dua80/shoe/c/d/i/7-95000215-41-roamra-white-original-imag4ahytjmqdzz8.jpeg?q=70",
    },
    {
        brand: "Bady Moo",
        name: "Sabse Amazing Deals!",
        price: "Under RS 299",
        size: "XS,M,L,XX",
        productID: "women9",
        catagory: "Lehengas & choli",
        img: "https://rukminim1.flixcart.com/image/200/200/kz5vwy80/lehenga-choli/v/h/3/free-half-sleeve-bridal-udbhav-textile-original-imagb86ecmmwjewk.jpeg?q=70",
    },
    {
        brand: "Gap",
        name: "Handbags, Slingbags",
        price: "Under RS 299",
        size: "X,L,XX",
        productID: "women10",
        catagory: "Trendy Collection",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/hand-messenger-bag/n/t/e/attractive-sling-bag-tc-225-slnbg-elstc-trn-lck-grn-sling-bag-original-imagkppwjfq8w3ay.jpeg?q=70"
    },
    {
        brand: "Bee bay",
        name: "Handbags",
        price: "Under RS 599",
        size: "M,L,XXS",
        productID: "women11",
        catagory: "Budget Buys",
        img: "https://rukminim1.flixcart.com/image/200/200/kxaq7ww0/hand-messenger-bag/4/g/c/women-shoulder-bag-brown-handbag-29-brownshoulder-01-shoulder-original-imag9sb87fbd5dgv.jpeg?q=70",
    },
    {
        brand: "Kaniroot",
        name: "Trendy Heandbag",
        price: "Under RS 499",
        size: "S,M,L,XXl",
        productID: "women12",
        catagory: "Grab the Deal!",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/sling-bag/r/e/f/women-s-leatherette-sling-bag-maroon-maroon-fgo-489-1-25-fgo-489-original-imagjfmpuynqaqt9.jpeg?q=70",
    },
    {
        brand: "Bee bay",
        name: "Campus, Asian..",
        price: "Under Rs 599",
        size: "S,X,L,XXl",
        productID: "women13",
        catagory: "travel",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/z/v/i/-original-imagg6r9tgyr9zau.jpeg?q=70",
    },
    {
        brand: "Gap",
        name: "Red Tape..",
        price: "Under RS 9999",
        size: "S,M,X,XXL",
        productID: "women14",
        catagory: "sports",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/shoe/n/d/n/4-rlo141-red-tape-pink-navy-original-imaghfkawmtzpn5z.jpeg?q=70",
    },
    {
        brand: "Puma",
        name: "Watches",
        price: "Under RS 1347",
        size: "S,M,X,XXL",
        productID: "women15",
        catagory: "Casual",
        img: "https://rukminim1.flixcart.com/image/200/200/kn4xhu80/watch/n/u/f/anlg-428-blue-brown-analogue-original-imagfvtheszgkhdn.jpeg?q=70",
    },
    {
        brand: "Kaniroot",
        name: "Girls Lehenga Choli",
        price: "799",
        size: "S,M,L,XXL",
        productID: "women16",
        catagory: "festive",
        img: "https://rukminim1.flixcart.com/image/200/200/xif0q/kids-lehenga-choli/v/5/h/15-16-years-tlhc068-bitiya-by-bhama-original-imaghvn4gmrxfha6.jpeg?q=70",
    },
    {
        brand: "Puma",
        name: "Kids Winder Wear",
        price: "Under RS 2000",
        size: "S,XX",
        productID: "women17",
        catagory: "Steal Deals!",
        img: "https://rukminim1.flixcart.com/flap/200/200/image/4572835daccaf844.jpg?q=70",
    },
    {
        brand: "Gap",
        name: "Earrings",
        price: "From RS 199",
        size: "S,M,XX,XXL",
        productID: "women18",
        catagory: "festive",
        img: "https://rukminim1.flixcart.com/image/200/200/kwcfngw0/earring/v/v/w/na-mf-apl-d3red-ashapriya-original-imag7j48eyyggahf.jpeg?q=70",
    },
    {
        brand: "Bee bay",
        name: "plus size womens",
        price: "979",
        size: "M,XXL,XX",
        productID: "women19",
        catagory: "workout",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_228327501_1_857abfa6.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "chil pill supersoft palysuit",
        price: "2000",
        size: "M,X,L,XXL",
        productID: "women20",
        catagory: "travel",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "chil pill supersoft palysuit",
        price: "1347",
        size: "M,L,XXL",
        productID: "women21",
        catagory: "sport",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kazo-123019black_1_85f6e006.jpg?rnd=20200526195200",
    },
    {
        brand: "Gap",
        name: "balck bella",
        price: "976",
        size: "S,XX",
        productID: "women22",
        catagory: "Casual",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200",
    },
    {
        brand: "Puma",
        name: "woman cotton off white",
        price: "456",
        size: "XXL",
        productID: "women23",
        catagory: "festive",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/h/ahtufrgfe19523_1_e0416277.jpg?rnd=20200526195200"
    },
    {
        brand: "Gap",
        name: "woman cotton off white",
        price: "986",
        size: "S,X,L",
        productID: "women24",
        catagory: "party",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/c/achwkea595-1_dc090828.jpg?rnd=20200526195200",
    },
    {
        brand: "Kaniroot",
        name: "chill pill supersoft",
        price: "567",
        size: "S,XXL,XX",
        productID: "women25",
        catagory: "formal",
        img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/3/238451501_1_43bf9c90.jpg?rnd=20200526195200",
    },
];
let container = document.getElementById("container");
// let filter=document.getElementById("filter");
// let filterbrand=document.getElementById("filterbrand")
// let search=document.getElementById("search");
// let sort=document.getElementById("sort");
// let cart = document.querySelector("#cart");
let cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];

function display(data) {
    container.innerHTML=null;
    data.forEach(function (ele) {
        let product = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.img;

        let name = document.createElement("h3");
        name.innerText = ele.name;

        let price=document.createElement("p");
        price.innerText=ele.price;

        // let price = document.createElement("p");
        // price.innerText = "$" + ele.price;

        // let brand = document.createElement("p");
        // brand.innerText = ele.brand;

        // let size = document.createElement("h2");
        // size.innerText = ele.size;

        let catagory = document.createElement("p");
        catagory.innerText = ele.catagory;

        // let cart = document.createElement("button");
        // cart.innerText = "Add To Cart";
        // cart.addEventListener("click", function () {
        //     AddToCart(ele);
        // })

        product.append(img, name, price, catagory);

        container.append(product);
    });
}
display(productData)

// function AddToCart(product) {
//     for (let i = 0; i < cartLS.length; i++) {
//         if (cartLS[i].productID === product.productID) {
//             alert("Product already in the Cart");
//             return;
//         }
//     }
//     cartLS.push(product);
//     alert("Product Added Successfully");
//     localStorage.setItem("cart-page", JSON.stringify(cartLS));

// }
// cart.addEventListener("click", function () {
//     window.location.href = "./cart.html"
// });

// search and filter part

// filter.addEventListener("change", function () {
//     if(filter.value===""){
//         display(productData)
//     }else{
//         let filtered=productData.filter(function(ele){
//             return ele.catagory===filter.value;
//         })
//         display(filtered)
//     }
   
//   });
//   filterbrand.addEventListener("change",function(ele){
//     if(filterbrand.value===""){
//         display(productData)
//     }else{
//         let filtered1=productData.filter(function(ele){
//             return ele.brand.toLocaleLowerCase().includes(filterbrand.value.toLocaleLowerCase())
//         })
//         display(filtered1)
//     }
//   })

//   search.addEventListener("input", function () {
//     if (search.value === null || search.value === "") {
//         display(productData)
//     } else {
//        let  productData2 = productData.filter(function (ele) {
//         return ele.brand
//           .toLocaleLowerCase()
//           .includes(search.value.toLocaleLowerCase());
//       });
//       display(productData2);
//     }
//   });
//   sorting

// sort.addEventListener("change",function(){
//     if(sort.value===""){
//         display(productData)
//     }else{
//         let productData2=productData.map(function(ele){
//             return ele;
//         })
//         let sorted=productData2.sort(function(a,b){
//             if(sort.value==="Low-High"){
//                 return a.price-b.price;
//             }else if(sort.value==="High-Low"){
//                 return b.price-a.price;
//             }
//         })
//         display(sorted)
//     }
// })

//new page open


function view(){
    window.location.href="./newutsav.html"
}