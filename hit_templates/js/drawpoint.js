var VG = (function(vg) {

    vg.drawPoint= function(ctx, point) {
        ctx.fillStyle = "#ff2626"; // Red color
        var pointSize = 3.5;

        ctx.beginPath();
        ctx.arc(point[1], point[0], pointSize, 0, Math.PI * 2, true);
        ctx.fill();

        //Surround in a ring
        //ctx.strokeStyle = '#42f44b';
        ctx.strokeStyle =  "#ff2626"; 
        var circleSize = 10;
        ctx.arc(point[1], point[0], circleSize, 0, 2* Math.PI);
        ctx.stroke()
        //console.log("Drew point (" + point + ") ");
    }
    
    return vg;
    
}(VG || {}));
