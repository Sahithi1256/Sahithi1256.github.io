let yougerversionofsahithi = {
    imageurl: "https://i.pinimg.com/736x/be/32/33/be32339ccdaa8b3f82d0a461be5e3d80.jpg",
    name: "SAHITHI",
    Description:"IIIrd year IT Department Student"
}

let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayobject.name = "abcd hello"
        //displayobject.name = data.results[0].name.first + " " + data.results[0].name.last 
        // displayobject.imageurl = data.results[0].picture.large
        // displayobject.Description = data.results[0].gender
        document.getElementById("sahihti-img").src = displayobject.imageurl;
        document.getElementById("sahithiname").innerHTML = displayobject.name;
        document.getElementById("sahithi-des").innerHTML = displayobject.Description;
    })
}