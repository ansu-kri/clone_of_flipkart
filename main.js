import { navbar } from "./components/navbar.js";
let nav=document.getElementById("navv");
nav.innerHTML=navbar()
import { footer } from "./components/footer.js";
let foot=document.getElementById("foot");
foot.innerHTML=footer();

let slidShow=()=>{
    let arr=['https://dog55574plkkx.cloudfront.net/images/flipkart-big-billion-days-offer.jpg','https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/bestsellers.jpg?ssl=1','https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d723e643fd22e0d0.jpg?q=50','https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Landing-page-banner-scaled.jpg']
    let i=0;
    let div=document.getElementById("top_bannar");
    let img=document.createElement("img")
    img.src=arr[0];

    div.append(img);
    i=i+1;
    setInterval(function(){
        if(i==4){
            i=0;
        }
        img.src=arr[i];
        i=i+1;
        div.append(img);
    },2000)
}
slidShow()