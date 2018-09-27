window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

      function initBalls() {
        balls = [];

        var blue = '#3A5BCD';
        var red = '#EF2B36';
        var yellow = '#FFC636';
        var green = '#02A817';
		var orange = '#ffa500';
	
        // L
        balls.push(new Ball(53, 93, 0, 0, blue));
        balls.push(new Ball(53, 103, 0, 0, blue));
        balls.push(new Ball(53, 113, 0, 0, blue));
        balls.push(new Ball(53, 123, 0, 0, blue));
        balls.push(new Ball(53, 133, 0, 0, blue));
        balls.push(new Ball(53, 70, 0, 0, blue));
        balls.push(new Ball(53, 82, 0, 0, blue));
        balls.push(new Ball(53, 96, 0, 0, blue));
        balls.push(new Ball(63, 137, 0, 0, blue));
        balls.push(new Ball(73, 137, 0, 0, blue));
        balls.push(new Ball(83, 137, 0, 0, blue));
        balls.push(new Ball(93, 137, 0, 0, blue));
      

        // O
        balls.push(new Ball(140, 81, 0, 0, red));
        balls.push(new Ball(127, 91, 0, 0, red));
        balls.push(new Ball(126, 103, 0, 0, red));
        balls.push(new Ball(130, 116, 0, 0, red));
        balls.push(new Ball(139, 127, 0, 0, red));
        balls.push(new Ball(153, 130, 0, 0, red));
        balls.push(new Ball(167, 127, 0, 0, red));
        balls.push(new Ball(174, 114, 0, 0, red));
        balls.push(new Ball(172, 98, 0, 0, red));
        balls.push(new Ball(167, 86, 0, 0, red));
        balls.push(new Ball(155, 81, 0, 0, red));
 // T
        balls.push(new Ball(214, 49, 0, 0, green));
        balls.push(new Ball(211, 50, 0, 0, green));
        balls.push(new Ball(211, 61, 0, 0, green));
        balls.push(new Ball(210, 73, 0, 0, green));
        balls.push(new Ball(212, 89, 0, 0, green));
        balls.push(new Ball(210, 105, 0, 0, green));
        balls.push(new Ball(210, 118, 0, 0, green));
        balls.push(new Ball(208, 128, 0, 0, green));
        balls.push(new Ball(210, 128, 0, 0, green));
         balls.push(new Ball(195, 85, 0, 0, green));
        balls.push(new Ball(200, 85, 0, 0, green));
        balls.push(new Ball(215, 85, 0, 0, green));
        balls.push(new Ball(225, 85, 0, 0, green));
        balls.push(new Ball(230, 85, 0, 0, green));
        balls.push(new Ball(215, 128, 0, 0, green));
         balls.push(new Ball(225, 128, 0, 0, green));
         // T
        balls.push(new Ball(254, 49, 0, 0, orange));
        balls.push(new Ball(251, 50, 0, 0,orange));
        balls.push(new Ball(251, 61, 0, 0, orange));
        balls.push(new Ball(250, 73, 0, 0, orange));
        balls.push(new Ball(252, 89, 0, 0, orange));
        balls.push(new Ball(250, 105, 0, 0, orange));
        balls.push(new Ball(250, 118, 0, 0, orange));
        balls.push(new Ball(248, 128, 0, 0, orange));
        balls.push(new Ball(250, 128, 0, 0, orange));
         balls.push(new Ball(235, 85, 0, 0, orange));
        balls.push(new Ball(240, 85, 0, 0, orange));
        balls.push(new Ball(255, 85, 0, 0, orange));
        balls.push(new Ball(265, 85, 0, 0, orange));
        balls.push(new Ball(270, 85, 0, 0, orange));
        balls.push(new Ball(255, 128, 0, 0, orange));
         balls.push(new Ball(265, 128, 0, 0, orange));
        
        // O
        var oOffset = 67;
        balls.push(new Ball(oOffset + 240, 81, 0, 0, yellow));
        balls.push(new Ball(oOffset + 227, 91, 0, 0, yellow));
        balls.push(new Ball(oOffset + 226, 103, 0, 0, yellow));
        balls.push(new Ball(oOffset + 230, 116, 0, 0, yellow));
        balls.push(new Ball(oOffset + 239, 127, 0, 0, yellow));
        balls.push(new Ball(oOffset + 253, 130, 0, 0, yellow));
        balls.push(new Ball(oOffset + 267, 127, 0, 0, yellow));
        balls.push(new Ball(oOffset + 274, 114, 0, 0, yellow));
        balls.push(new Ball(oOffset + 272, 98, 0, 0, yellow));
        balls.push(new Ball(oOffset + 267, 86, 0, 0, yellow));
        balls.push(new Ball(oOffset + 255, 81, 0, 0, yellow));


        return balls;
      }
      function getMousePos(canvas, evt) {
        // get canvas position
        var obj = canvas;
        var top = 0;
        var left = 0;
        while(obj.tagName != 'BODY') {
          top += obj.offsetTop;
          left += obj.offsetLeft;
          obj = obj.offsetParent;
        }

        // return relative mouse position
        var mouseX = evt.clientX - left + window.pageXOffset;
        var mouseY = evt.clientY - top + window.pageYOffset;
        return {
          x: mouseX,
          y: mouseY
        };
      }
      function updateBalls(canvas, balls, timeDiff, mousePos) {
        var context = canvas.getContext('2d');
        var collisionDamper = 0.3;
        var floorFriction = 0.0005 * timeDiff;
        var mouseForceMultiplier = 1 * timeDiff;
        var restoreForce = 0.002 * timeDiff;

        for(var n = 0; n < balls.length; n++) {
          var ball = balls[n];
          // set ball position based on velocity
          ball.y += ball.vy;
          ball.x += ball.vx;

          // restore forces
          if(ball.x > ball.origX) {
            ball.vx -= restoreForce;
          }
          else {
            ball.vx += restoreForce;
          }
          if(ball.y > ball.origY) {
            ball.vy -= restoreForce;
          }
          else {
            ball.vy += restoreForce;
          }

          // mouse forces
          var mouseX = mousePos.x;
          var mouseY = mousePos.y;

          var distX = ball.x - mouseX;
          var distY = ball.y - mouseY;

          var radius = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

          var totalDist = Math.abs(distX) + Math.abs(distY);

          var forceX = (Math.abs(distX) / totalDist) * (1 / radius) * mouseForceMultiplier;
          var forceY = (Math.abs(distY) / totalDist) * (1 / radius) * mouseForceMultiplier;

          if(distX > 0) {// mouse is left of ball
            ball.vx += forceX;
          }
          else {
            ball.vx -= forceX;
          }
          if(distY > 0) {// mouse is on top of ball
            ball.vy += forceY;
          }
          else {
            ball.vy -= forceY;
          }

          // floor friction
          if(ball.vx > 0) {
            ball.vx -= floorFriction;
          }
          else if(ball.vx < 0) {
            ball.vx += floorFriction;
          }
          if(ball.vy > 0) {
            ball.vy -= floorFriction;
          }
          else if(ball.vy < 0) {
            ball.vy += floorFriction;
          }

          // floor condition
          if(ball.y > (canvas.height - ball.radius)) {
            ball.y = canvas.height - ball.radius - 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
          }

          // ceiling condition
          if(ball.y < (ball.radius)) {
            ball.y = ball.radius + 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
          }

          // right wall condition
          if(ball.x > (canvas.width - ball.radius)) {
            ball.x = canvas.width - ball.radius - 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
          }

          // left wall condition
          if(ball.x < (ball.radius)) {
            ball.x = ball.radius + 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
          }
        }
      }
      function Ball(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.origX = x;
        this.origY = y;
        this.radius = 10;

      }
      function animate(canvas, balls, lastTime, mousePos) {
        var context = canvas.getContext('2d');

        // update
        var date = new Date();
        var time = date.getTime();
        var timeDiff = time - lastTime;
        updateBalls(canvas, balls, timeDiff, mousePos);
        lastTime = time;

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        // render
        for(var n = 0; n < balls.length; n++) {
          var ball = balls[n];
          context.beginPath();
          context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
          context.fillStyle = ball.color;
          context.fill();
        }

        // request new frame
        requestAnimFrame(function() {
          animate(canvas, balls, lastTime, mousePos);
        });
      }
      var canvas = document.getElementById('myCanvas');
      var balls = initBalls();
      var date = new Date();
      var time = date.getTime();
      /*
       * set mouse position really far away
       * so the mouse forces are nearly obsolete
       */
      var mousePos = {
        x: 9999,
        y: 9999
      };

      canvas.addEventListener('mousemove', function(evt) {
        var pos = getMousePos(canvas, evt);
        mousePos.x = pos.x;
        mousePos.y = pos.y;
      });

      canvas.addEventListener('mouseout', function(evt) {
        mousePos.x = 9999;
        mousePos.y = 9999;
      });
      animate(canvas, balls, time, mousePos);
