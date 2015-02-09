//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('guestsService', function () {


    this.getGuests = function () {
        return guests;
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
            name: 'John Sculley', role: 'Ex-Presidente de Apple', hover: 'libs/images/guest1.jpg'
            
        },
		
        {
           name: 'Sridhar Iynegar', role: 'Co-fundador de Misfit ', hover: 'libs/images/guest2.png'
            
        },
		
		{
          name: 'Martin Varsavsky', role: 'CEO & Founder de FON', hover: 'libs/images/guest3.jpg'
            
        },
		
		{
            name: 'Paul Travers', role: 'CEO de Vuzix', hover: 'libs/images/guest4.jpg'
            
        },
		
		
		
		{
            name: 'Koldo Unanue', role: 'Euskaltel', hover: 'libs/images/guest5.jpg'
            
        },
		
		{
            name: 'Guillermo Lopez', role: 'Miembro de Mozilla Hispano', hover: 'libs/images/guest6.jpg'
            
        },
		
		{
            name: 'Doug Solomon', role: 'Former Chief Strategy Office at Apple', hover: 'libs/images/guest7.jpg'
            
        },
		{
            name: 'Corrado Tomassoni', role: 'Global Head of Startups, Accelerators and VCs de Paypal', hover: 'libs/images/guest8.jpg'
            
        },
		
		{
            name: 'David Cuartielles', role: 'Creator of Arduino', hover: 'libs/images/guest9.jpg'
            
        }
		
		   
        
    ];

});