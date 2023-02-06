// let API=`https://fakestoreapi.com/products/category/electronics`;

// fetch(API)
// .then((res)=>{
//     console.log(res)
// })

let container=document.getElementById("containers");

let data;
 async function getData(){
    try{
        let res =await fetch(`https://fakestoreapi.com/products/category/electronics`);
        data=await res.json()
        appendProduct(data)
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
getData();

function appendProduct(data){
    data.forEach((el)=>{
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let title=document.createElement("p");
        title.innerText=el.title;

        div.append(img,title)
        container.append(div)
    })
}