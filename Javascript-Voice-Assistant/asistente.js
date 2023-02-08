

if (annyang) {

    //Variable para almacenar las voces de nuestro sistema.
    var voices;

    //Inicializamos utter.
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es-AR';

    //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };

   
    //Definimos los comandos a utilizar.
    var commands = {
        'hola': function () {
            utter.text = 'Hola ';
            //Setea la voz que queremos usar en base a nuestra lista.
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'como estas': function () {
            utter.text = 'Muy bien!';
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        },
        'enciende': function () {
          utter.text='Iniciando sistemas, haciendo copias de seguridad y recuperando los datos. Acediendo a la base del gobierno y a tus cuentas en suiza...     Sistema iniciado, quien es ? ';
          utter.voice=voices[2];
          window.speechSynthesis.speak(utter);
        },
        'gaspar': function () {
            utter.text='Hola  , ¿como vas ';
            utter.voice=voices[2];
            window.speechSynthesis.speak(utter);
          },
        'yo': function () {
            utter.text='Encantado de hablar contigo Yago, como estas?            Es un placer servirle amo. Que quiere hacer hoy ?';
            utter.voice=voices[2];
            window.speechSynthesis.speak(utter);
          },
          'aurora': function () {
            utter.text='Hola aurora mi amo me dejó a tu cargo, de paso me dice que no le arranca el coche, quedo a tu disposicion para cualquier cosa, un beso';
            utter.voice=voices[2];
            window.speechSynthesis.speak(utter);
          },
          'maria': function () {
            utter.text='';
            frases = ['hola Maria , como estas hoy ? Espero que estes disfrutando de tu dia.',
            'me dijo un pajarito que te gustan los porritos yo de eso se mucho , drogas sinteticas...krack ...      setas tambien ',
            'Hola Maria soy tu asistente , te abro el acceso a tus carpetas y a las cosas que puedes acceder del sistema',
        ];
         utter.text = frases[Math.floor(Math.random() * frases.length)]
        utter.voice=voices[1];
        window.speechSynthesis.speak(utter);
          },
        'abril': function () {
            frases = ['hola avril , siempre es un placer hablar contigo estoy a tu disposicion?   Avisame si necesitas algo',
            'Hola Avril, accediendo a tus cuentas y datos bancarios, el jefe te dejó todo a tu disposicion.',
            'Hola Avril soy tu asistente , ¿como estas hoy  ? Te veo muy guapa, yago me dejó a tu cargo',
            '¿Hola , te pido cita para hacerte las uñas ? , ¿quieres ir a la peluqeria? Estoy a tu entera disposicion mi ama.'
        ];
            utter.text = frases[Math.floor(Math.random() * frases.length)]
            utter.voice=voices[1];
            window.speechSynthesis.speak(utter);
          },
          'youtube': function () {
            utter.text='abriendo';
           window.open('https://www.youtube.com/');
          },
          'instagram': function () {
            utter.text='abriendo';
           window.open('https://www.instagram.com/');
          },
          'mierda': function () {
            utter.text='no digas tacos amo, te van a ver mal';
            utter.voice=voices[2];
            window.speechSynthesis.speak(utter);
          },
          

        //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
        'cuentame un chiste': function () {
            chistes = ['Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.',
                'Estas obsesionado con la comida!   No se a que te refieres croquetamente.',
                'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
                'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.'
            ];
            utter.text = chistes[Math.floor(Math.random() * chistes.length)]
            utter.voice = voices[2];
            window.speechSynthesis.speak(utter);
        }
    };

    //Esto nos sirve para ver que escucha el programa en tiempo real.
    
    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
       });
       


    //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);

    //Annyang comienza a escuchar.
    annyang.start({ autoRestart: false, continuous: true });
}