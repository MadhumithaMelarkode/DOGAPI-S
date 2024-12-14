const btn=document.getElementById("btn");
const img=document.getElementById("img");
let breeds=document.getElementById("breeds");
btn.addEventListener('click',()=>{
let input = breeds.value.toLowerCase().split(' ').reverse().join('/');
fetch('https://dog.ceo/api/breed/'+input+'/images/random')
.then((res)=>{
    return res.json();
})
    .then((data)=>{
        img.src=data.message;
    })
    .catch((err)=>{
        console.log("Something went wrong")
    })
});
function API(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res)=>{
        return res.json();
    })
        .then((data)=>{
            img.src=data.message;
        })
        .catch((err)=>{
            console.log("Something went wrong")
        })
}
API();
breeds.addEventListener('click',optionsSelector);
function optionsSelector(){
// let list='';
// let input = breeds.value;
// input = input.split('').reverse.join('/');
// console.log(input);
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res)=>{
         return res.json();
    })
    .then((data)=>{
        let breedslist = data.message;
        for(let breed in breedslist)
        {
            const opt = document.createElement("option");
            if(breedslist[breed].length===0)
            {
            breed=breed[0].toUpperCase()+breed.substring(1);
            opt.innerText=breed;
            opt.value=breed;
            // console.log(breed);
            // list+=`<option value=breed>${breed}</option>`;
            }
            else
            {
            for(let sbreed of breedslist[breed])
            {
                breed=breed[0].toUpperCase()+breed.substring(1);  
                sbreed=sbreed[0].toUpperCase()+sbreed.substring(1); 
                opt.innerText=sbreed+" "+breed;
                opt.value=sbreed+" "+breed;
                // list+=`<option value=breed>${sbreed+" "+breed}</option>`;
            }
            }
            // breeds.innerHTML=list;
            breeds.appendChild(opt);
        }
    
    })
    .catch((err)=>{
        console.log("something went wrong");
    })
}
