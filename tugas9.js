function panggilobject() {
    var buku = {
        judul: "sikancil",
        penerbit: "media graha",
        tahun: "2009"
    }

    for(var x in buku){
        console.log(buku[x])
    }
}

panggilobject();