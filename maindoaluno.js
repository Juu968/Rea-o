prediction_1 = ""
prediction_2 = ""

//Defina as seguintes características para a câmera:
// largura: 350
// Altura: 300
// image_format: png
// png_quality: 90
Webcam.set({
width: 350,
height: 300,
image_format: "png",
png_quality: 90,
  });

  //Utilize o código 'document.getElementById' para pegar o id da câmera
  //Para descobrir o id da camera, volte ao código html
camera = document.getElementById ("camera");
Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        //Na linha 24, você deverá adicionar o id do resultado
        //Para descobrir qual é o id, volte para o html
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  
  //Adicione o link do teacheable machine
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zgTCmhJ2-/model.json');






function check()
{
  img = document.getElementById('captured_image');
  //Utilize o código 'classifier.classify' para iniciar a classificação da imagem
  classifier.classify(img, gotResult);
}


function gotResult(error, results) {
  //Programe que...
  //Se acontecer um erro, mostre no console esse erro
if(error){
  console.log(error)
} else {
  document.getElementById("result_emotion_name").innerHTML = results[0].label;
  //Repita a linha acima, porém com 'result_emotion_name2'
  prediction_1 = results[0].label;
  prediction_2 = results[1].label;
  speak();


  //Adicione o número 0, pois ele corresponde a primeira previsão
  if(results[0].label == "feliz")
  {
    document.getElementById("update_emoji").innerHTML = "&#128522;";
  }
  if(results[0].label == "triste")
  {
    document.getElementById("update_emoji").innerHTML = "&#128532;";
  }
  if(results[0].label == "feliz")
  {
    document.getElementById("update_emoji").innerHTML = "&#128548;";
  }

  //Adicione o número 1, pois ele corresponde a segunda previsão
  if(results[1].label == "feliz")
  {
    document.getElementById("update_emoji2").innerHTML = "&#128522;";
  }
  if(results[1].label == "triste")
  {
    document.getElementById("update_emoji2").innerHTML = "&#128532;";
  }
  if(results[1].label == "feliz")
  {
    document.getElementById("update_emoji2").innerHTML = "&#128548;";
  }
}
}