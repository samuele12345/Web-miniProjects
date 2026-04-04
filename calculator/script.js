const dis = document.querySelector("#display");
let isOff = false;

function appendToDisplay(char){
    if(isOff){
        clearDisp();
        return;
    }

    if(dis.value === "Error"){
        clearDisp();
    }
    dis.value += char;
}

function calculate(){
    if(isOff){
        return;
    }

    while(dis.value.startsWith("0")){
        dis.value = dis.value.slice(1, dis.length);
    }

    try{
        // eval esegue ciò che viene inserito, quindi assolutamente non usare se la pagina utilizza
        // cookies, login...
        dis.value = eval(dis.value);
    }catch(error){
        dis.value = "Error";
    }
}

function clearDisp(){
    dis.value = "";
}

function del(){
    if(isOff){
        return;
    }

    dis.value = dis.value.slice(0, (dis.value.length)-1);
}

function onOff(){
    if(isOff){
        isOff = false;
        dis.style.backgroundColor = "hsl(122, 15%, 36%)";
    }else{
        isOff = true;
        clearDisp();
        dis.style.backgroundColor = "black";
    }
}
