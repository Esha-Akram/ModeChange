function circle_button(){
    let circle = document.querySelector('.circle');
    let body = document.body;
    if(circle.style.backgroundImage == 'url("./assets/day.png")')
    {
        circle.style.backgroundImage = 'url("./assets/night.png")';
        body.style.backgroundColor = "#020221";
        body.style.color = "white";
        
    }
    else
    {
        circle.style.backgroundImage = 'url("./assets/day.png")';
        body.style.backgroundColor = "#ECE9E9";
        body.style.color = "black";
    }
}