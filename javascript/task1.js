function cardo(){
    const car={
        make:"BMW",
        model:4400,
        year:2022,
        color:"black",
        milage:0,
        isRunning:"true",
        start : function(){
            if(this.isRunning=="true"){
                console.log("car is started");
            }
            else{
                console.log("car is already running");
            }
        },
        stop : function(){
            if(this.isRunning=="false"){
                console.log("car is stopped");
            }
            else{
                console.log("car is already stopped");
            }
        },
        drive : function(d){
            if(this.isRunning){
                this.milage+=d;
                console.log(this.milage,"is a distance of car ");
            }
            else{
                console.log("car is not running");
            }
        }
    }



console.log("car:", car);
car.start();
car.stop();
car.drive(50);

}


cardo();