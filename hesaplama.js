const toplama = (a,b)=>{
    return a+b;
}
const cikarma = (a,b)=>{
    return a-b;
}
const carpma = (a,b)=>{
    return a*b;
}
const bolme = (a,b)=>{
    return a/b;
}
const hesaplama ={
    toplama:toplama,
    cikarma:cikarma,
    carpma:carpma,
    bolme:bolme
}

module.exports = hesaplama;
