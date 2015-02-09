//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('guestsService', function () {
    this.getGuests = function () {
        return guests;
    };

    this.insertGuest = function (name, role, hover) {
        var topID = guests.length + 1;
        guests.push({
            id: topID,
            name: name,
            role: role,
           hover: hover
        });
    };

    this.deleteGuest = function (id) {
        for (var i = guests.length - 1; i >= 0; i--) {
            if (guests[i].id === id) {
                guests.splice(i, 1);
                break;
            }
        }
    };

    this.getGuest = function (id) {
        for (var i = 0; i < guests.length; i++) {
            if (guests[i].id === id) {
                return guests[i];
            }
        }
        return null;
    };

    var guests = [
        {
            id: 1, name 'Juan', role 'Futbolista', hover 'que majo es este hombre'
            
        },
		
        {
            id: 2, name 'Pedro', role 'Futbolista', hover 'que majo es este hombre'
            
        },
		{
            id: 3, name 'Paco', role 'Futbolista', hover 'que majo es este hombre'
            
        },
		
		{
            id: 4, name 'Iñigo', role 'Futbolista', hover 'que majo es este hombre'
            
        },
		
		{
            id: 5, name 'Pablo', role 'Futbolista', hover 'que majo es este hombre'
            
        }
		
		
        
        
    ];

});