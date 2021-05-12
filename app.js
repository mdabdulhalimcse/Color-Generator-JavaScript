function generateColor() {
    let hexCodes = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let hashColor = '#';

    for(let i = 0; i < 6;i++){
        let number = Math.round(Math.random() * 15); 
        let number2 = hexCodes[number];
        hashColor += number2;
        console.log(hashColor);
    }
    document.getElementById('container').style.backgroundColor = hashColor;
    document.getElementById('output').inner = hashColor;
    document.getElementById('output').style.color = hashColor;
}

generateColor();