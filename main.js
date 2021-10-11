// function preload()
// {
//     classifier = ml5.imageClassifier('DoodleNet')
// }

// function setup(){
//     canvas = createCanvas(300, 300);
//     canvas.center();
//     background("white");
//     canvas.mouseReleased(classifyCanvas);
//     synth = window.speechSynthesis;
// }

// function draw(){
//     strokeWeight(13);
//     stroke(0);
//     if (mouseIsPressed) {
//         line(pmouseX, pmouseY, mouseX, mouseY);
//     }
// }
// function clear(){
//     background("white");
// }

// function classifyCanvaas(){
//     classifier.classify(canvas, gotResults);
// }

// function gotResults(error, results){
//     if (error){
//         console.error(error);
//     }
//     console.log(results)

//     document.getElementById("results").innerHTML = results[0].label;

//     document.getElementById("confidence").innerHTML = Math.round(results[0].confidence * 100) + "%";

//     utterthis = new SpeechSynthesisUtterance(results[0].label);
//     synth.speak(utterthis);
// }

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
  }
  
  function preload() {
  
  
    classifier = ml5.imageClassifier('DoodleNet');
  }
  
  
  
  function clearCanvas() {
  
    background("white");
  }
  
  function draw() {
  
    // Set stroke weight to 13
    strokeWeight(13);
    // Set stroke color to black
    stroke(0);
    // If mouse is pressed, draw line between previous and current mouse positions
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
  
  function classifyCanvas() {
    classifier.classify(canvas, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    console.log(results);
    document.getElementById('results').innerHTML = 'Label: ' + results[0].label;
  
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
  
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
  }
