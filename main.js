function startClassification(){

    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/V1kEJKAs1//model.json',modelReady)
    
    }
    
    function modelReady(){
    
    classifier.classify(gotResults);
    
    
    }
    function gotResults(error,results){
    
    if(error){
    
    console.error(error);
    
    }
    else{
    
    console.log(results);
    
    document.getElementById("result_label").innerHTML="i can hear-"+results[0].label;
    document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(3)+"%";
    }
    
    img=document.getElementById("11");
    img2=document.getElementById("22");
    img3=document.getElementById("33");
    
    
    
    if(results[0].label=="dog"){
    
    img.src='dog.gif';
    img.src='cat.png';
    img.src='tiger.png';
    
    }
    if(results[0].label=="cat"){
    
    img.src='dog.png';
    img.src='cat.gif';
    img.src='tiger.png';
    
    
    }
    
    
    
    
    else{
    
        img.src='dog.png';
        img.src='cat.png';
        img.src='tiger.gif';
        
    
    }
    }