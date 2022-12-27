function preload()
{

}
    
    function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modalloaded);
    posenet.on('pose',gotPoses);
}

function modalloaded()
{
    console.log("poseNet loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 15;
    }
}

function draw()
{

}

function take_snapshot()
{
    save('myfilterImage.png');
}