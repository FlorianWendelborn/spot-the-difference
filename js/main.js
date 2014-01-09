cl = "";
cr = "";
ctxl = "";
ctxr = "";
matrix = "";

cls = ["#444","red","yellow","green","blue","white","lila"];

pixelx = 4;
pixely = 4;

function init(){
	cl = document.getElementById("ctxl");
	cr = document.getElementById("ctxr");
	ctxl = cl.getContext("2d");
	ctxr = cr.getContext("2d");
	newMatrix();
	drawMatrix();
}

function newMatrix(){
	matrix = new Array();
	for(x = 0;x < cl.width/pixelx;x++){
		matrix[x] = new Array();
		for(y = 0;y < cl.height/pixely;y++){
			matrix[x][y] = Math.round(Math.random()*cls.length-0.5);
		}
	}
}

function drawMatrix(){
	for(x = 0;x < matrix.length;x++){
		for(y = 0;y < matrix[x].length;y++){
			ctxl.fillStyle = cls[matrix[x][y]];
			ctxr.fillStyle = cls[matrix[x][y]];
			ctxl.fillRect(x*pixelx,y*pixely,pixelx,pixely);
			ctxr.fillRect(x*pixelx,y*pixely,pixelx,pixely);
		}
	}
	check = new Array();
	for(i = 0;i < 3;i++){
		x = Math.round(Math.random()*matrix.length - 0.5);
		y = Math.round(Math.random()*matrix[0].length - 0.5);
		c = cls.length-matrix[x][y]-1;
		for(j = 0; j < i;j++){
			if(x + "-" + y != check[j]){
				check[i] = x + "-" + y;
				ctxr.fillStyle = cls[c];
				ctxr.fillRect(x*pixelx,y*pixely,pixelx,pixely);
			}
			else{
				i--;
			}
		}
	}
}