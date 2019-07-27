class Hotel{
    
    constructor(rooms){
        this.rooms = rooms;
    }

     roomsOcupied(){
        for (var i = 0; i < 30; i++) {
                    if (i % 2 === 0) {
                       return true;
                      
                    } else {
                        return false;
                    }
        
                }
    }

    // this.rooms = function(){
       
    //     for (var i = 0; i < 30; i++) {
    //         if (i % 2 === 0) {
    //            return true;
              
    //         } else {
    //             return false;
    //         }

    //     }
    // }
 


    // this.employes = function() {
    //     var newEmployes = 0;
    //     for (var i = 0; i < 30; i++) {
    //         if (i % 3 === 0) {
    //            return newEmployes + 1;
    //         } else {
    //             return newEmployes;
    //         }

    //     }
    // }





}