function gotResults(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = math.flor(math.random() * 255) + 1;
        random_number_g = math.flor(math.random() * 255) + 1;
        random_number_b = math.flor(math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    }
}