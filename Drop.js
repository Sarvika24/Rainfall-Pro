class Drop {
    constructor(width){
       
       this. x  = random(width); 
       this. y = 0;
       this. yspeed = 1;
    }

       fall(){

        this.y  = this.y + this.yspeed ;
        
        


     }

     show(){
         stroke (191, 28, 114);
         line (this.x , this.y , this.x , this.y+20);
     }
}