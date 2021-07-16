Webcam.set ({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snap() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version is " , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lZOeP7YiR/model.json",modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}

prediction_1 = "";

function check() {
    image = document.getElementById("captured_img");
    classifier.classify(image, got_result);
}

function got_result(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
    }

    if (results[0].label == "awesome") {
        document.getElementById("gesture").innerHTML = "&#128076;";
    }

    if (results[0].label == "thumbs up") {
        document.getElementById("gesture").innerHTML = "&#128077;";
    }

    if (results[0].label == "thumbs down") {
        document.getElementById("gesture").innerHTML = "&#128078;";
    }

    if (results[0].label == "victory") {
        document.getElementById("gesture").innerHTML = "&#9996;";
    }

    
    }