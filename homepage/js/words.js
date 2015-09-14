$(function(){
    function words($p) {

        var bg = null;
        var w = 360;
        var h = 360;
        var xpos = $p.createJavaArray('int', [80]);
        var ypos = $p.createJavaArray('int', [80]);

        function setup() {
            $p.size(w, h);
            bg = $p.loadImage("./img/writing.png");

            for (var i = 0; i < xpos.length; i++) {
                xpos[i] = 0;
                ypos[i] = 0;
            }
        }
        $p.setup = setup;
        setup = setup.bind($p);

        function draw() {
            $p.image(bg, 0, 0, w, h);

            for (var i = 0; i < xpos.length - 1; i++) {
                xpos[i] = xpos[i + 1];
                ypos[i] = ypos[i + 1];
            }

            xpos[xpos.length - 1] = $p.mouseX;
            ypos[ypos.length - 1] = $p.mouseY;

            for (var i = 0; i < xpos.length; i++) {
                $p.noStroke();
                $p.fill(255 - i * 3, 10);
                $p.ellipse(xpos[i], ypos[i], i / 5 * 2, i / 5 * 2);
            }
        }
        $p.draw = draw;
        draw = draw.bind($p);

    }

        var canvas = document.getElementById("canvas3");
        var p = new Processing(canvas, words);

});