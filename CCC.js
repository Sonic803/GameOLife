

class punto{
  constructor(a,k){
    this.x=0;
    this.y=0;
    this.now=a;
    this.pri=a;
    this.kk=k;
  }
  show(){
   if(this.now){

      square(this.x, this.y, this.kk);
   }
  }
}


function update(x,y,A,xx,yy){
  let c=0;
  for(let i=x-1;i<x+2;i++){
    for(let j=y-1;j<y+2;j++){
      if(i>=0&&j>=0&&i<xx&&j<yy&&A[i][j].pri&&(i!=x||j!=y)){
        c++;
      }
    }
  }
            if(A[x][y].now){
        if(c!=2&&c!=3){
          A[x][y].pri=true;
          A[x][y].now=false;
        }
      }else{
        if(c==3){
          A[x][y].pri=false;
          A[x][y].now=true;


  }
}
}
