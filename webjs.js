let src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json";
fetch(src).then(function (response) {
    return response.json();
}).then(function (result) {
    for(let i=0; i<8; i++){

//        let content = document.querySelector('.content');
        let box = document.createElement("div");
        let img = document.createElement("img");
        let pic = "http"+((result["result"]["results"][i].file).split('http'))[1];
        
        img.className = "img";
        img.src = pic;
        box.className = "box";
        box.id = "box";
        content.appendChild(box);
        box.appendChild(img);
        let title = document.createElement("div"); 
        title.className = "title";
        let name = result["result"]["results"][i]["stitle"];
        
        
        let n_title = document.createTextNode(name);
//      img.setAttribute(pic);
        box.appendChild(title);
//        box.appendChild(img);
        title.appendChild(n_title);
    

              
        

    }
})








