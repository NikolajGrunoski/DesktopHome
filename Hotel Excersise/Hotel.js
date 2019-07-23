function Hotel(hotelName){
    this.name = name;

    this.rooms = function(){
        for (var i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                var firstRoom = new Room(i, true);
               // this.rooms.push(firstRoom);
            } else {
                var secondRoom = new Room(i, false);
               // this.rooms.push(secondRoom);
            }

        }
    }





}