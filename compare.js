let idfront = document.getElementsByClassName("front");
srcImgTab = [];
    for (let i=0; i <idfront.length ; i++){
        idfront[i].addEventListener('click',() => {
           let srcOk = document.getElementById('card'+i).src;
           srcImgTab.push(srcOk);
           if(srcImgTab.length===2){
                if(srcImgTab[0]===srcImgTab[1]){
                    alert('bravo !');}
                else{
                    alert('bouh!');
                }
            }
            else if (srcImgTab.length>2){
                alert('2 cartes maxi SVP !');
            }
            console.log(srcImgTab);
        });
        
}



