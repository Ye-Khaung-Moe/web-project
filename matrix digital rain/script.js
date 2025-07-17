const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerHeight;
canvas.height = window.innerHeight;

const greek = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = greek + katakana + latin + nums;

const fontSize = 16; 
const columns = canvas.width/fontSize;

const rainDrop = [];

for (let x = 0; x < columns; x++){
    rainDrop[x] =1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0,0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrop.length; i ++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrop[i]*fontSize);

        if(rainDrop[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrop[i] = 0;
        }
        rainDrop[i]++;
    }
};

setInterval(draw, 30);