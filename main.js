function startClassification () {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WZcxxKqle/model.json',modelready);
}

function modelready () {
classifier.classify(gotresult);
}