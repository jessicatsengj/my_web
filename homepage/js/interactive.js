$(function(){
    function interactive($p) {
        var Snow = (function() {
            function Snow() {
                var $this_1 = this;

                function $superCstr() {
                    $p.extendClassChain($this_1)
                }
                $this_1.maxVy = 2;
                $this_1.angle = 0;
                $this_1.amplitude = 0;
                $this_1.vx = 0;
                $this_1.vy = 0;
                $this_1.x = 0;
                $this_1.y = 0;
                $this_1.size = 0;
                $this_1.alpha = 0;

                function display$0() {
                    $this_1.angle += 0.15;
                    $this_1.vx = $p.sin($this_1.angle) * $this_1.amplitude + wind;
                    $this_1.x += $this_1.vx;
                    $this_1.y += $this_1.vy;
                    if ($this_1.x > $p.width) {
                        $this_1.x = 0;
                    }
                    if ($this_1.x < 0) {
                        $this_1.x = $p.width;
                    }
                    if ($this_1.y > $p.height) {
                        $this_1.y = 0;
                        $this_1.vy = 1 + $this_1.size * $this_1.maxVy;
                    }

                    $p.fill(255, $this_1.alpha);
                    $p.noStroke();
                    $p.ellipse($this_1.x, $this_1.y, $this_1.size * 10, $this_1.size * 10);
                }
                $p.addMethod($this_1, 'display', display$0, false);

                function $constr_0() {
                    $superCstr();

                    $this_1.x = $p.random(0, $p.width);
                    $this_1.y = $p.random(-100, 0);
                    $this_1.size = $p.random(1);

                    $this_1.vx = 0;
                    $this_1.vy = 1 + $this_1.size * $this_1.maxVy;
                    $this_1.alpha = $p.random(255);

                    $this_1.angle = $p.random(2 * $p.PI);
                    $this_1.amplitude = $p.random(2);
                }

                function $constr() {
                    if (arguments.length === 0) {
                        $constr_0.apply($this_1, arguments);
                    } else $superCstr();
                }
                $constr.apply(null, arguments);
            }
            return Snow;
        })();
        $p.Snow = Snow;

        var bg = null;
        var flower = null;

        var w = 360;
        var h = 360;
        var X = 0,
            Y = 0;
        var nX = 0,
            nY = 0;
        var fw = w / 8;
        var fh = h / 8;
        var delay = 10;
        var rot = 0;

        var flakes = 50;
        var snows = $p.createJavaArray('Snow', [flakes]);

        var wind = 0;

        function setup() {
            $p.size(w, h);
            bg = $p.loadImage("./img/interactive3.png");
            flower = $p.loadImage("./img/plum.png");
            $p.frameRate(10);
            X = $p.width / 2;
            Y = $p.height / 2;
            nX = X;
            nY = Y;
            rot = 0.0;

            for (var i = 0; i < flakes; i++) {
                snows[i] = new Snow();
            }
        }
        $p.setup = setup;
        setup = setup.bind($p);

        function draw() {
            fw += $p.parseInt($p.sin($p.frameCount / 5) * 2);
            fh += $p.parseInt($p.sin($p.frameCount / 5) * 2);

            $p.background(0);
            $p.imageMode($p.CORNER);
            $p.image(bg, 0, 0, w, h);

            X += (nX - X) / delay;
            Y += (nY - Y) / delay;

            if ($p.mouseX > w - 5) {
                X += 5;
            } else if ($p.mouseX < 5) {
                X -= 5;
            } else if ($p.mouseY > h - 5) {
                Y += 5;
            } else if ($p.mouseY < 5) {
                Y -= 5;
            }

            $p.pushMatrix();

            $p.translate(X, Y);
            $p.rotate(rot);
            $p.imageMode($p.CENTER);
            $p.image(flower, 0, 0, fw, fh);
            rot += $p.parseInt($p.sin($p.frameCount / 10) * 2);
            $p.popMatrix();

            if ($p.mouseX < $p.width / 3) {
                wind = -3;
            } else if ($p.mouseX < $p.width / 3 * 2) {
                wind = 0;
            } else {
                wind = 3;
            }

            for (var i = 0; i < flakes; i++) {
                snows[i].display();
            }
        }
        $p.draw = draw;
        draw = draw.bind($p);

        function mouseMoved() {
            nX = $p.mouseX;
            nY = $p.mouseY;
        }
        $p.mouseMoved = mouseMoved;
        mouseMoved = mouseMoved.bind($p);

    }

        var canvas = document.getElementById("canvas2");
        var p = new Processing(canvas, interactive);

});