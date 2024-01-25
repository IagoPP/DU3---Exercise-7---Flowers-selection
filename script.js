function select(){
    let opt=document.getElementById("flores")
    let img=document.getElementById("img")

    switch (opt.value) {
        case "0":
          img.src="flowers-resource/unknown.jpg"
            break;
        case "1":
          img.src="flowers-resource/waterlily.jpg"
          break;
        case "2":
          img.src="flowers-resource/tulip.jpg"
          break;
        case "3":
          img.src="flowers-resource/rose.jpg"
          break;
        case "4":
          img.src="flowers-resource/carnations.jpg"
          break;
        case "5":
          img.src="flowers-resource/gerbera.jpg"
          break;
        case "6":
          img.src="flowers-resource/chrysanthemum.jpg"
          break;
        case "7":
          img.src="flowers-resource/gladiolus.jpg"
          break;
      }
}