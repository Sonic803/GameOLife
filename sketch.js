
let windth=1000;
let heigth=1000;
let kk=5;
let w=windth/kk;
let h=heigth/kk;
let i,j;
 let A=new Array(h);

function setup() {
  createCanvas(windth,heigth);
  background(100,100,100,100);
let as=[true,false];

for(let i=0; i<h; i++) {
    A[i] = new Array(w);
    for(let j=0;j<w;j++){
      A[i][j]=new punto(false,kk);
      A[i][j].x=i*kk;
      A[i][j].y=j*kk;
      A[i][j].now=random(as);
      A[i][j].pri=random(as);
    }
    }

}
let d=true;
let e=0;
function draw() {
  createCanvas(windth,heigth);
  background(100,100,100,100);
  if(mouseX>windth){
    d=true;
  }
//  if(mouseX>0&&mouseY>0&&!d&&mouseX<windth&&mouseY<heigth){
//    A[(mouseX-mouseX%kk)/kk][(mouseY-mouseY%kk)/kk].now=true;
//    A[(mouseX-mouseX%kk)/kk][(mouseY-mouseY%kk)/kk].pri=true;
//  }
e++;
if(e>10){
    for(i=0;i<w;i++){
      for(j=0;j<h;j++){
         update(i,j,A,h,w)
        }
      }
}


  for(i=0;i<w;i++){
    for(j=0;j<h;j++){
      A[i][j].pri=A[i][j].now;
      A[i][j].show();
    }
  }

}
