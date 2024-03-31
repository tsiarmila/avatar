document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('avatarCanvas');
    const ctx = canvas.getContext('2d');
    const generateBtn = document.getElementById('generateBtn');
    const hairColorSelect = document.getElementById('hairColorSelect');
    const hairLengthSelect = document.getElementById('hairLengthSelect');
    const hairFormSelect = document.getElementById('hairFormSelect');
    const clothesColorSelect = document.getElementById('clothesColorSelect');
    const saveBtn = document.getElementById('saveBtn');

    function generateAvatar(ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const hairColor = hairColorSelect.value;
        let hairLength = hairLengthSelect.value;
        const hairForm = hairFormSelect.value;
        const clothesColor = clothesColorSelect.value;

        if (hairForm === "curly") {
            hairLengthSelect.value = "short";
            hairLength = "short";
        }
        if (hairForm === "wavy") {
            hairLengthSelect.value = "long";
            hairLength = "long";
        }

        drawClothes(ctx, clothesColor);
        drawFace(ctx);
        drawHair(ctx, hairColor);

        if (hairLength === 'long' && hairForm === 'straight') {
            drawLongHair(ctx, hairColor);
        }
        if (hairLength === 'short' && hairForm === 'curly') {
            drawHairSwirls(hairColor);
        }
        if (hairLength === 'long' && hairForm === 'wavy') {
            drawWavyHair(ctx, hairColor);
        }



    }

    function drawClothes(ctx, clothesColor) {
      // Draw clothes
      ctx.fillStyle = clothesColor;
      ctx.beginPath();
      ctx.arc(100, 205, 60, 1.7 * Math.PI, 1.3 * Math.PI);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(100, 158, 18, 0, Math.PI);
      ctx.lineWidth = 5;
      ctx.fillStyle = '#ebe4df';
      ctx.fill();
    }

    function drawFace(ctx) {

      // Draw neck
      ctx.fillStyle = '#deb392';
      ctx.beginPath();
      ctx.arc(100, 158, 15, 0, Math.PI);
      ctx.fill();

      // Draw head
      ctx.fillStyle = '#ffcba4'; // skin color
      ctx.beginPath();
      ctx.moveTo(20, 100);
      ctx.bezierCurveTo( 20, 180 , 180, 180, 180, 100);
      ctx.lineTo(180, 60);
      ctx.bezierCurveTo(180, 0, 20, 0, 20, 60);
      ctx.lineTo(20, 100);
      ctx.closePath();
      ctx.fill();

      //Draw ears
      ctx.beginPath();
      ctx.arc(20, 90, 10, 0.5 * Math.PI, 1.5 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(180, 90, 10, 1.5 * Math.PI, 0.5 * Math.PI);
      ctx.fill();

      // Draw eyes
      ctx.fillStyle = '#000000'; // eye color
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(50, 100, 10, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(150, 100, 10, Math.PI, 0);
      ctx.stroke();

      // Draw brows
      ctx.fillStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(50, 100, 20, 1.3 * Math.PI, 1.7 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(150, 100, 20, 1.3 * Math.PI, 1.7 * Math.PI);
      ctx.stroke();

      // Draw mouth
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(100, 100, 40, 0.3 * Math.PI, 0.7 * Math.PI);
      ctx.stroke();

      // Draw dimples
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(50, 125, 2, 0, 2 * Math.PI); // Параметры: центр (100, 100), радиус 2
      ctx.fill();
      ctx.beginPath();
      ctx.arc(150, 125, 2, 0, 2 * Math.PI); // Параметры: центр (100, 100), радиус 2
      ctx.fill();
      ctx.beginPath();
      ctx.arc(56, 130, 1, 0, 2 * Math.PI); // Параметры: центр (100, 100), радиус 2
      ctx.fill();
      ctx.beginPath();
      ctx.arc(144, 130, 1, 0, 2 * Math.PI); // Параметры: центр (100, 100), радиус 2
      ctx.fill();

      // Draw nose
      ctx.fillStyle = '#ab9585';
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(100, 122, 10, 1.3 * Math.PI, 1.7 * Math.PI);
      ctx.fill();
    }

    function drawHair(ctx, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(160, 45);
        ctx.bezierCurveTo(180, 0, 20, 0, 20, 60);
        ctx.lineTo(20, 95);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(180, 95);
        ctx.lineTo(180, 60);
        ctx.bezierCurveTo(180, 0, 20, 0, 20, 60);
        ctx.lineTo(60, 20);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(160, 20);
        ctx.lineTo(155, 35);
        ctx.lineTo(135, 35);
        ctx.lineTo(160, 20);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(150, 10);
        ctx.lineTo(150, 25);
        ctx.lineTo(145, 25);
        ctx.lineTo(150, 10);
        ctx.fill();
    }

    function drawLongHair(ctx, hairColor) {
        ctx.fillStyle = hairColor;
        ctx.beginPath();
        ctx.moveTo(20, 100);
        ctx.quadraticCurveTo(30, 160, 20, 160);
        ctx.lineTo(66, 155);
        ctx.quadraticCurveTo(35, 145, 20, 100);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(180, 100);
        ctx.quadraticCurveTo(170, 160, 180, 160);
        ctx.lineTo(134, 155);
        ctx.quadraticCurveTo(165, 145, 180, 100);
        ctx.fill();
    }

    function drawHairSwirl(x, y, length, angle, swirlColor) {
      ctx.strokeStyle = swirlColor;
      ctx.beginPath();
      ctx.moveTo(x, y);

      var STEPS_PER_ROTATION = 60;
      var increment = 2 * Math.PI / STEPS_PER_ROTATION;
      var theta = angle;

      while (theta < 15) {
        var newX = x + theta * Math.cos(theta);
        var newY = y + theta * Math.sin(theta);
        ctx.lineTo(newX, newY);
        theta += increment;
      }

      ctx.stroke();
    };
    var swirls = [
        { x: 28, y: 80 },
        { x: 32, y: 42 },
        { x: 60, y: 25 },
        { x: 65, y: 70 },
        { x: 80, y: 40 },
        { x: 98, y: 60 },
        { x: 100, y: 20 },
        { x: 120, y: 25 },
        { x: 120, y: 50 },
        { x: 145, y: 25 },
        { x: 150, y: 65 },
        { x: 170, y: 75 },
        { x: 172, y: 50 },
    ];

    function drawHairSwirls(hairColor) { // Принимаем цвет волос в качестве аргумента
        swirls.forEach(function(swirl) {
            var length = Math.random() * 50 + 20; // Длина завитушки будет варьироваться от 20 до 70 пикселей
            var angle = Math.random() * Math.PI * 2; // Начальный угол завитушки
            var swirlColor;

            switch (hairColor) {
                case 'light':
                    swirlColor = '#b86b30';
                    // break;
                case 'dark':
                    swirlColor = '#614d3d';
                    // break;
                case 'black':
                    swirlColor = 'brown';
                    // break;
                default:
                    swirlColor = '#614d3d'; // Если цвет волос не определен, используем коричневый цвет для завитушек
            }
            drawHairSwirl(swirl.x, swirl.y, length, angle, swirlColor);
        });
    };

    function drawWavyHair(ctx, hairColor) {
    // Рисуем горизонтальную синусоиду
    // var startX1 = 120;
    // var startY1 = 60;
    // var amplitude1 = 5;
    // var frequency1 = 0.5;
    // var step1 = 0.1;
    //
    // ctx.beginPath();
    // ctx.moveTo(startX1, startY1);
    // for (var x1 = startX1; x1 <= canvas.width; x1 += step1) {
    //     var y1 = amplitude1 * Math.sin(frequency1 * (x1 - startX1));
    //     ctx.lineTo(x1, y1 + startY1);
    // }
    // ctx.strokeStyle = 'black';
    // ctx.lineWidth = 3;
    // ctx.stroke();

    // Рисуем вертикальную синусоиду
    // var startX2 = 120;
    // var startY2 = 60;
    // var amplitude2 = 5;
    // var frequency2 = 0.5;
    // var step2 = 0.1;
    //
    // ctx.beginPath();
    // ctx.moveTo(startX2, startY2);
    // for (var y2 = startY2; y2 <= canvas.height; y2 += step2) {
    //     var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
    //     ctx.lineTo(x2 + startX2, y2);
    // }
    // ctx.strokeStyle = 'blue'; // Измените цвет для вертикальной синусоиды
    // ctx.lineWidth = 3;
    // ctx.stroke();

    // Рисуем диагональную синусоиду
    var startX2 = 120;
var startY2 = 60;
var amplitude2 = 5;
var frequency2 = 0.5;
var step2 = 0.1;

ctx.beginPath();
ctx.moveTo(startX2, startY2);
for (var y2 = startY2; y2 <= canvas.height; y2 += step2) {
    var x2 = amplitude2 * Math.cos(frequency2 * (y2 - startY2));
    ctx.lineTo(x2 + startX2, y2);
}
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;
ctx.stroke();

};




    function saveAvatar() {
      const link = document.createElement('a');
      link.download = 'avatar.png';

      // Create new canvas
      const roundedCanvas = document.createElement('canvas');
      roundedCanvas.width = canvas.width;
      roundedCanvas.height = canvas.height;

      const roundedCtx = roundedCanvas.getContext('2d');

      roundedCtx.fillStyle = '#f0f0f0';
      roundedCtx.strokeStyle = '#000';

      roundedCtx.save();
      roundedCtx.beginPath();
      roundedCtx.arc(roundedCanvas.width / 2, roundedCanvas.height / 2, roundedCanvas.width / 2, 0, 2 * Math.PI);
      roundedCtx.clip();
      roundedCtx.drawImage(canvas, 0, 0);
      roundedCtx.restore();

      link.href = roundedCanvas.toDataURL(); // По умолчанию формат PNG
      link.click();
    }

    generateBtn.addEventListener('click', function() {
        const hairColor = hairColorSelect.value;
        const hairLength = hairLengthSelect.value;
        generateAvatar(ctx, hairColor, hairLength);
    });

    saveBtn.addEventListener('click', function() {
        saveAvatar();
    });
});
