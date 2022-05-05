//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus:Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            message: 'Benvenuto, cerca qui lo sfondo che fa per te!',
            image: 'https://unsplash.it/500/500?'
        }
     
    })


    
