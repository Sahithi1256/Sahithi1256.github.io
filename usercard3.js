let yougerversionofsahithi = {
    imageurl: "https://i.pinimg.com/736x/be/32/33/be32339ccdaa8b3f82d0a461be5e3d80.jpg",
    name: "SAHITHI",
    Description:"IIIrd year IT Department Student"
}

let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("sahihti-img").src = displayobject.imageurl;
    document.getElementById("sahithiname").innerHTML = displayobject.name;
    document.getElementById("sahithi-des").innerHTML = displayobject.Description;
}