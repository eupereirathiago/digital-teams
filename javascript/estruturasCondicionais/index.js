modo.onchange = () => {

    if(modo.value == 1){
        document.querySelector('body').style.backgroundColor = "#121212";
    }else{
        document.querySelector('body').style.backgroundColor = "#FFF";
    }
}