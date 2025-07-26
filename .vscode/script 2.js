let form=document.querySelector("form");
let inp=document.querySelectorAll("input");

document.querySelector("cursore")

window.addEventListener("mousemove",function(dets){
// console.log(dets.clientX, dets.clientY);
curs .style.top = dets.clientY+"px"
curs .style.left = dets.clientX+"px"
})

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     console.log(dets);})
   
    
    form.addEventListener("submit",function(dets){
        div .classlist.add("card")

        let profile =document.createElement("div")
        profile.classList.add("profile")

        let img=document.createElement("img")
        img.setAttribute(" src="",inp[0].value)

            let h3=document.createElement("h3")
            h3.textContent =inp[1].value

            let h5=document.createElement("h5")
            h5.textContent =inp[2].value

            let p=document.createElement("p")
            p.textContent =inp[3].value

            profile.appendChild(img);
            div.appendChild(profile);
            div.appendChild(h3);
            div.appendChild(h5);
            div.appendChild(p);
    }
)
    
    


