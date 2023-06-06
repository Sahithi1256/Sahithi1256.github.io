let yougerversionofsahithi = {
    imgurl: "https://i.pinimg.com/736x/be/32/33/be32339ccdaa8b3f82d0a461be5e3d80.jpg",
    name: "SAHITHI",
    Description:"IIIrd year IT Department Student"
}
let olderversionofsahithi = {
    imageurl: "https://e0.pxfuel.com/wallpapers/667/489/desktop-wallpaper-cute-cartoon-girl-cute-girl.jpg",
    name :"Elder version of SAHITHI",
    Description: "Achieved 40lakhs package in campus placements"
}
let issahithiyoung = true;
let displayobject;
let flipdata = function(){
    if(issahithiyoung == true){
        displayobject = olderversionofsahithi,
        issahithiyoung = false;
    }
    else{
        displayobject = yougerversionofsahithi,
        issahithiyoung = true;
    }
    document.getElementById("sahihtiimg").src = displayobject.imgurl;
    document.getElementById("sahithiname").innerHTML = displayobject.name;
    document.getElementById("sahithides").innerHTML = displayobject.Description;
}