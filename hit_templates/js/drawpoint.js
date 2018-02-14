var VG = (function(vg) {

    vg.drawPoint= function(ctx, point, wStart, hStart, pointSize) {
        ctx.fillStyle = "#ff2626"; // Red color
        //var pointSize = 3.5;
        
        x = point[1]+wStart;
        y = point[0]+hStart;

        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
        ctx.fill();

        // Fill in a ring
        //ctx.strokeStyle = '#42f44b';
        //var circleSize = 2;
        //ctx.arc(x, y, circleSize, 0, 2* Math.PI);
        //ctx.stroke()

        //Surround in a ring
        //ctx.strokeStyle = '#42f44b';
        ctx.strokeStyle =  "#ff2626"; 
        var circleSize = pointSize+pointSize*2;
        ctx.arc(x, y, circleSize, 0, 2* Math.PI);
        ctx.stroke()
        //console.log("Drew point (" + point + ") ");
    }
    
    return vg;
    
}(VG || {}));
