
        let randomNumbers =[];
        let allFrontTab = getElementsByClassName('front');

        for(i=0;i<12;i++){
            let number = Math.round((Math.random()*11)+1);

            while(randomNumbers.includes(number)){
                number = Math.round((Math.random()*11)+1);
            }
            randomNumbers.push(number);
        
            
            }
        for(i=0;i<12;i++){
            if (randomNumbers[i]>6){
                randomNumbers[i]=randomNumbers[i]-6;
                allFrontTab[i].src = 'images/carte'+ randomNumbers[i] + '.jpg';
        
            }
            

            
            
        }
        