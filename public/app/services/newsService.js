//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('newsService', function () {


    this.getNews = function () {
        return news;
    };

    this.insertNew = function (title, description, body) {
        var topID = news.length + 1;
        news.push({
            id: topID,
            title: title,
            description: description,
           body: body
		   
        });
    };

    this.deleteNew = function (id) {
        for (var i = news.length - 1; i >= 0; i--) {
            if (news[i].id === id) {
                news.splice(i, 1);
                break;
            }
        }
    };

    this.getNew = function (id) {
        for (var i = 0; i < news.length; i++) {
            if (news[i].id === id) {
                return news[i];
            }
        }
        return null;
    };
	
	
	


    var news = [
        {
            id: 1, title: 'La cumbre Sherpa Summit convierte a la ciudad de Bilbao en la referencia tecnológica', description: 'Se discute sobre la próxima generación de buscadores, búsqueda móvil e interacción', body: ' El encuentro Sherpa Summit 2014 que se celebra en el Palacio Euskalduna de Bilbao ha convertido a la capital vizcaína en la referencia de las nuevas tecnologías y punto de encuentro de los emprendedores digitales. Auspiciado por el ingeniero de Organización Industrial y Electrónica Industrial y máximo Sher.pa, Xabi Uribe-Etxebarria, es un evento internacional que cuenta con debates de expertos internacionales de primer orden, que discutirán sobre la próxima generación de buscadores, búsqueda móvil, búsqueda por voz, interacción y nuevas interfaces de usuario. <br>Para ello han acudido miembros destacados de la industria de las nuevas tecnologías como el que fuera presidente de Apple, John Sculley o Corrado Tomassoni de la compañía PayPal, entre otros. Además, el evento sirve como espacio de oportunidad para el intercambio de información y la generación de contactos y negocio para el sector digital. De manera paralela, más de 500 profesionales han participado en dos talleres programados bajo el nombre Bilbao app Gunea, promovido por el Ayuntamiento de Bilbao, para facilitar opciones de negocio.'
            
        },
		
		
		
        {
            id: 2, title: 'Sherpa Summit 2014 presentará lo último en buscadores y tecnología wearable', description: 'El próximo 6 de mayo el Palacio Euskalduna acogerá la segunda edición de Sherpa Summit, un encuentro internacional donde se darán cita algunos de los líderes más influyentes en el mundo de las tecnologías. Las claves de esta edición serán las tecnologías wearables y las nuevas generaciones de buscadores móviles.', body: 'Grandes figuras del ámbito de la tecnología como John Schulley, quien fue CEO de Apple durante 10 años, el co-fundador de Misfit Wearable Sridhar Iyengar, el consejero delegado de Glass Up Francesco Giartorsio o Doug Solomon, exdirector mundial de estrategia de Apple, formarán parte del panel de ponentes en el  próximo encuentro Sherpa Summit. Esta cumbre, organizada por el fundador de Sherpa Xabier Uribe-Etxebarria, estará dedicada a mostrar las últimas tendencias en el ámbito de las tecnologías móviles, las interfaces de usuario y los dispositivos wearables, o tecnologías "ponibles".'
            
        }
		
		
        
        
    ];
	
	
	
	
	

	
	
	
	
	

});