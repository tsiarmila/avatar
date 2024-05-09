document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('avatarCanvas');
    const ctx = canvas.getContext('2d');
    const generateBtn = document.getElementById('generateBtn');
    const hairColorSelect = document.getElementById('hairColorSelect');
    const hairLengthSelect = document.getElementById('hairLengthSelect');
    const hairFormSelect = document.getElementById('hairFormSelect');
    const clothesColorSelect = document.getElementById('clothesColorSelect');
    const addBowSelect = document.getElementById('addBowSelect');
    const addBowtieSelect = document.getElementById('addBowtieSelect');
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
        const bow = addBowSelect.value;
        const bowtie = addBowtieSelect.value;

        if (hairForm === "curly") {
            hairLengthSelect.value = "short";
            hairLength = "short";
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
        if (hairLength === 'short' && hairForm === 'wavy') {
            drawWavyHair(ctx, hairColor);
        }
        if (hairLength === 'long' && hairForm === 'wavy') {
            drawWavyHair(ctx, hairColor);
            drawLongWavyHair(ctx, hairColor);
        }
        if (bow === 'bow') {
            drawBow(ctx, clothesColor);
        }
        if (bowtie === 'bowtie') {
            drawBowtie(ctx);
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
      ctx.strokeStyle = 'black'; // eye color
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(50, 100, 10, Math.PI, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(150, 100, 10, Math.PI, 0);
      ctx.stroke();

      // Draw brows
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
        { x: 28, y: 68 },
        { x: 35, y: 42 },
        { x: 60, y: 25 },
        { x: 65, y: 65 },
        { x: 80, y: 40 },
        { x: 98, y: 60 },
        { x: 100, y: 20 },
        { x: 120, y: 25 },
        { x: 120, y: 50 },
        { x: 145, y: 25 },
        { x: 150, y: 60 },
        { x: 170, y: 75 },
        { x: 172, y: 50 },
    ];

    function drawHairSwirls(hairColor) { // Принимаем цвет волос в качестве аргумента
        swirls.forEach(function(swirl) {
            var length = Math.random() * 50 + 20; // Длина завитушки будет варьироваться от 20 до 70 пикселей
            var angle = Math.random() * Math.PI * 2; // Начальный угол завитушки
            var swirlColor;

            switch (hairColor) {
                case '#f4a460':
                    swirlColor = '#b86b30';
                    break;
                case '#8f715a':
                    swirlColor = 'black';
                    break;
                case '#000000':
                    swirlColor = '#614d3d';
                    break;
                default:
                    swirlColor = '#614d3d';
            };
            drawHairSwirl(swirl.x, swirl.y, length, angle, swirlColor);
        });
    };

    function drawWavyHair(ctx, hairColor) {

        var swirlColor;

        switch (hairColor) {
            case '#f4a460':
                swirlColor = '#b86b30';
                break;
            case '#8f715a':
                swirlColor = '#614d3d';
                break;
            case '#000000':
                swirlColor = '#614d3d';
                break;
            default:
                swirlColor = '#614d3d'; // Если цвет волос не определен, используем коричневый цвет для завитушек
        };

        // Рисуем вертикальную синусоиду
        var startX2 = 120;
        var startY2 = 60;
        var amplitude2 = 5;
        var frequency2 = 0.5;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 80; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем диагональную синусоиду3
        var startX3 = 120;
        var startY3 = 60;
        var amplitude3 = 5;
        var frequency3 = 0.35;
        var step3 = 1;

        ctx.beginPath();
        ctx.moveTo(startX3, startY3);
        for (var x3 = 0; x3 <= 60; x3 += step3) {
            var y3 = amplitude3 * Math.sin(frequency3 * (startY3+x3))-x3/2.5;
            ctx.lineTo(x3 + startX3, startY3 - y3); // отнимаем y2 от startY2, так как координаты в canvas начинаются с верхнего левого угла
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем диагональную синусоиду4
        var startX4 = 120;
        var startY4 = 40;
        var amplitude4 = 5;
        var frequency4 = 0.35;
        var step4 = 1;

        ctx.beginPath();
        ctx.moveTo(startX4, startY4);
        for (var x4 = 0; x4 <= 60; x4 += step3) {
            var y4 = amplitude3 * Math.sin(frequency4 * (startY4+x4))-x4/2.5;
            ctx.lineTo(x4 + startX4, startY4 - y4);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем диагональную синусоиду5
        var startX5 = 120;
        var startY5 = 20;
        var amplitude5 = 5;
        var frequency5 = 0.35;
        var step5 = 1;

        ctx.beginPath();
        ctx.moveTo(startX5, startY5);
        for (var x5 = 0; x5 <= 50; x5 += step3) {
            var y5 = amplitude5 * Math.sin(frequency5 * (startY5+x5))-x5/2.5;
            ctx.lineTo(x5 + startX5, startY5 - y5);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем диагональную синусоиду3
        var startX3 = 120;
        var startY3 = 55;
        var amplitude3 = 5;
        var frequency3 = 0.35;
        var step3 = 1;

        ctx.beginPath();
        ctx.moveTo(startX3, startY3);
        for (var x3 = 0; x3 <= 98; x3 += step3) {
            var y3 = amplitude3 * Math.sin(frequency3 * (startX3 - x3)) - x3 / 3; // изменяем направление движения по оси x и знак y3
            ctx.lineTo(startX3 - x3, startY3 - y3);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем диагональную синусоиду4
        var startX4 = 120;
        var startY4 = 35;
        var amplitude4 = 5;
        var frequency4 = 0.35;
        var step4 = 1;

        ctx.beginPath();
        ctx.moveTo(startX4, startY4);
        for (var x4 = 0; x4 <= 95; x4 += step3) {
            var y4 = amplitude4 * Math.sin(frequency4 * (startX4 - x4)) - x4 / 3; // изменяем направление движения по оси x и знак y4
            ctx.lineTo(startX4 - x4, startY4 - y4);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем диагональную синусоиду5
        var startX5 = 120;
        var startY5 = 17;
        var amplitude5 = 5;
        var frequency5 = 0.35;
        var step5 = 1;

        ctx.beginPath();
        ctx.moveTo(startX5, startY5);
        for (var x5 = 0; x5 <= 88; x5 += step3) {
            var y5 = amplitude5 * Math.sin(frequency5 * (startX5 - x5)) - x5 / 3.3; // изменяем направление движения по оси x и знак y5
            ctx.lineTo(startX5 - x5, startY5 - y5);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();
    };

    function drawLongWavyHair(ctx, hairColor) {

        var swirlColor;

        switch (hairColor) {
            case '#f4a460':
                swirlColor = '#b86b30';
                break;
            case '#8f715a':
                swirlColor = '#614d3d';
                break;
            case '#000000':
                swirlColor = '#614d3d';
                break;
            default:
                swirlColor = '#614d3d'; // Если цвет волос не определен, используем коричневый цвет для завитушек
        };

        // Рисуем вертикальную синусоиду6
        var startX2 = 140;
        var startY2 = 155;
        var amplitude2 = 5;
        var frequency2 = 0.5;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду6
        var startX2 = 150;
        var startY2 = 150;
        var amplitude2 = 5;
        var frequency2 = 0.35;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду6
        var startX2 = 163;
        var startY2 = 138;
        var amplitude2 = 5;
        var frequency2 = 0.5;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду6
        var startX2 = 176;
        var startY2 = 124;
        var amplitude2 = 5;
        var frequency2 = 0.35;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду6
        var startX2 = 180;
        var startY2 = 112;
        var amplitude2 = 5;
        var frequency2 = 0.35;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();


        // Рисуем вертикальную синусоиду7
        var startX2 = 67;
        var startY2 = 156;
        var amplitude2 = 5;
        var frequency2 = 0.5;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду7
        var startX2 = 57;
        var startY2 = 153;
        var amplitude2 = 5;
        var frequency2 = 0.35;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду7
        var startX2 = 47;
        var startY2 = 149;
        var amplitude2 = 5;
        var frequency2 = 0.5;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду7
        var startX2 = 40;
        var startY2 = 142;
        var amplitude2 = 5;
        var frequency2 = 0.35;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду7
        var startX2 = 27;
        var startY2 = 128;
        var amplitude2 = 5;
        var frequency2 = 0.5;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (y2 - startY2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Рисуем вертикальную синусоиду7
        var startX2 = 21;
        var startY2 = 115;
        var amplitude2 = 5;
        var frequency2 = 0.35;
        var step2 = 0.1;

        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        for (var y2 = startY2; y2 <= 200; y2 += step2) {
            var x2 = amplitude2 * Math.sin(frequency2 * (startY2 - y2));
            ctx.lineTo(x2 + startX2, y2);
        }
        ctx.strokeStyle = swirlColor;
        ctx.lineWidth = 3;
        ctx.stroke();

    };

    function drawBow(ctx, clothesColor) {
        // Рисуем верхнюю часть бантика
        ctx.fillStyle = clothesColor;
        var x = 50;
        var y = 50;
        var width = 50;
        var height = 25;
        var cornerRadius = 5;

        ctx.beginPath();
        ctx.moveTo(x-5, y);
        ctx.lineTo(x + width / 2 - cornerRadius, y - height / 2);
        ctx.arcTo(x + width / 2, y - height / 2, x + width / 2, y, cornerRadius);
        ctx.lineTo(x + width / 2 -cornerRadius, y + height / 2);
        ctx.closePath();
        ctx.fill();

        // Рисуем левую часть бантика
        ctx.beginPath();
        ctx.moveTo(x+5, y);
        ctx.lineTo(x - width / 2 + cornerRadius, y - height / 2);
        ctx.arcTo(x - width / 2, y - height / 2, x - width / 2, y, cornerRadius);
        ctx.lineTo(x - width / 2, y + height / 2);
        ctx.closePath();
        ctx.fill();

    }

    function drawBowtie(ctx) {
        // Рисуем верхнюю часть бантика
        ctx.fillStyle = "black";
        var x = 100;
        var y = 170;
        var width = 50;
        var height = 25;
        var cornerRadius = 5;

        ctx.beginPath();
        ctx.moveTo(x-5, y);
        ctx.lineTo(x + width / 2 - cornerRadius, y - height / 2);
        ctx.arcTo(x + width / 2, y - height / 2, x + width / 2, y, cornerRadius);
        ctx.lineTo(x + width / 2 -cornerRadius, y + height / 2);
        ctx.closePath();
        ctx.fill();

        // Рисуем левую часть бантика
        ctx.beginPath();
        ctx.moveTo(x+5, y);
        ctx.lineTo(x - width / 2 + cornerRadius, y - height / 2);
        ctx.arcTo(x - width / 2, y - height / 2, x - width / 2, y, cornerRadius);
        ctx.lineTo(x - width / 2, y + height / 2);
        ctx.closePath();
        ctx.fill();

    }


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

// Рисуем диагональную синусоиду6
// var startX6 = 120;
// var startY6 = 60;
// var amplitude6 = 5;
// var frequency6 = 0.5;
// var step6 = 1;
//
// ctx.beginPath();
// ctx.moveTo(startX6, startY6);
// for (var x6 = 0; x6 <= 60; x6 += step6) {
//     var y6 = amplitude6 * Math.sin(frequency6 * (startY6+x6))-x6/2;
//     ctx.lineTo(x6 + startX6, startY6 - y6); // отнимаем y2 от startY2, так как координаты в canvas начинаются с верхнего левого угла
// }
// ctx.strokeStyle = '#614d3d';
// ctx.lineWidth = 3;
// ctx.stroke();
