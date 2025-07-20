const questionsData: Record<string, {
  question: { en: string; es: string };
  options: string[];
  correctAnswer: string;
  audioUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
}[]> = {  // 📌 Módulo 101: Getting Started: The English Alphabet and Numbers
  101: [
   {
    question: {
      es: "🔊 ¿Qué letra escuchas?",
      en: "🔊 What letter do you hear?",
    },
    options: ["T", "F", "N", "M"],
    correctAnswer: "T",
    audioUrl: "/assets/audio/y-21.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué número escuchas?",
      en: "🔊 What number do you hear?",
    },
    options: ["3", "5", "2", "1"],
    correctAnswer: "3",
    audioUrl: "/assets/audio/a-3.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué letra escuchas?",
      en: "🔊 What letter do you hear?",
    },
    options: ["N", "J", "B", "D"],
    correctAnswer: "J",
    audioUrl: "/assets/audio/y-10.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué número escuchas?",
      en: "🔊 What number do you hear?",
    },
    options: ["6", "8", "4", "7"],
    correctAnswer: "6",
    audioUrl: "/assets/audio/a-6.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué letra escuchas?",
      en: "🔊 What letter do you hear?",
    },
    options: ["V", "U", "Y", "X"],
    correctAnswer: "Y",
    audioUrl: "/assets/audio/y-26.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué número escuchas?",
      en: "🔊 What number do you hear?",
    },
    options: ["1", "10", "7", "9"],
    correctAnswer: "10",
    audioUrl: "/assets/audio/a-10.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué letra escuchas?",
      en: "🔊 What letter do you hear?",
    },
    options: ["R", "S", "K", "L"],
    correctAnswer: "K",
    audioUrl: "/assets/audio/y-11.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué número escuchas?",
      en: "🔊 What number do you hear?",
    },
    options: ["4", "5", "3", "2"],
    correctAnswer: "4",
    audioUrl: "/assets/audio/a-4.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué letra escuchas?",
      en: "🔊 What letter do you hear?",
    },
    options: ["C", "D", "G", "E"],
    correctAnswer: "E",
    audioUrl: "/assets/audio/y-05.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué número escuchas?",
      en: "🔊 What number do you hear?",
    },
    options: ["9", "8", "6", "7"],
    correctAnswer: "9",
    audioUrl: "/assets/audio/a-9.mp3",
  },
  ],

  // 📌 Módulo 102: Greetings and Basic Politeness
  102: [
     {
    question: {
      es: "🔊 ¿Qué expresión escuchas?",
      en: "🔊 What expression do you hear?",
    },
    options: ["Hello", "Goodbye", "Thank you", "Please"],
    correctAnswer: "Hello",
    audioUrl: "/assets/audio/hello.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué expresión escuchas?",
      en: "🔊 What expression do you hear?",
    },
    options: ["Good morning", "Good night", "Good afternoon", "Hi"],
    correctAnswer: "Good night",
    audioUrl: "/assets/audio/good-night.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué expresión escuchas?",
      en: "🔊 What expression do you hear?",
    },
    options: ["Thank you", "You're welcome", "Excuse me", "I'm sorry"],
    correctAnswer: "Thank you",
    audioUrl: "/assets/audio/thank-you.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué expresión escuchas?",
      en: "🔊 What expression do you hear?",
    },
    options: ["Excuse me", "Please", "Thank you", "Hi"],
    correctAnswer: "Please",
    audioUrl: "/assets/audio/please.mp3",
  },
  {
    question: {
      es: "🔊 ¿Qué expresión escuchas?",
      en: "🔊 What expression do you hear?",
    },
    options: ["Good morning", "Good afternoon", "Good night", "Goodbye"],
    correctAnswer: "Good morning",
    audioUrl: "/assets/audio/good-morning.mp3",
  },
  {
    question: {
      es: "🕒 A las 6:00 p.m., ¿cuál saludo es correcto?",
      en: "🕒 At 6:00 p.m., what greeting is correct?",
    },
    options: ["Good morning", "Good afternoon", "Good evening", "Good night"],
    correctAnswer: "Good evening",
  },
  {
    question: {
      es: "🧑‍🤝‍🧑 ¿Qué decimos cuando conocemos a alguien por primera vez?",
      en: "🧑‍🤝‍🧑 What do we say when we meet someone for the first time?",
    },
    options: ["See you later", "Nice to meet you", "Goodbye", "I'm sorry"],
    correctAnswer: "Nice to meet you",
  },
  {
    question: {
      es: "🏨 En un hotel, el recepcionista normalmente dice:",
      en: "🏨 In a hotel, the receptionist usually says:",
    },
    options: ["Welcome", "How are you?", "Excuse me", "Nice to meet you"],
    correctAnswer: "Welcome",
  },
  {
    question: {
      es: "🗣️ ¿Cuál expresión es una despedida?",
      en: "🗣️ Which expression is a farewell?",
    },
    options: ["Hi", "Goodbye", "Please", "Hello"],
    correctAnswer: "Goodbye",
  },
  {
    question: {
      es: "🔊 ¿Qué expresión escuchas?",
      en: "🔊 What expression do you hear?",
    },
    options: ["You're welcome", "Thank you", "Goodbye", "Excuse me"],
    correctAnswer: "You're welcome",
    audioUrl: "/assets/audio/youre-welcome.mp3",
  },
  ],

  // 📌 Módulo 103: Introducing Yourself and Others
  103: [
    {
    question: {
      en: "🔊 What country do you hear?",
      es: "🔊 ¿Qué país escuchas?",
    },
    options: ["Germany", "France", "Italy", "Russia"],
    correctAnswer: "Germany",
    audioUrl: "/assets/audio/Germany.mp3",
  },
  {
    question: {
      en: "🔊 What country do you hear?",
      es: "🔊 ¿Qué país escuchas?",
    },
    options: ["Mexico", "Brazil", "Colombia", "Portugal"],
    correctAnswer: "Mexico",
    audioUrl: "/assets/audio/Mexico.mp3",
  },
  {
    question: {
      en: "What question would you ask to know someone's name?",
      es: "¿Qué pregunta harías para saber el nombre de alguien?",
    },
    options: [
      "How old are you?",
      "Where are you from?",
      "What is your name?",
      "What do you do?",
    ],
    correctAnswer: "What is your name?",
  },
  {
    question: {
      en: "Which of these is a country?",
      es: "¿Cuál de estos es un país?",
    },
    options: ["Chinese", "Japan", "English", "Spanish"],
    correctAnswer: "Japan",
  },
  {
    question: {
      en: "What is the correct answer to: 'Where are you from?'",
      es: "¿Cuál es la respuesta correcta a: '¿De dónde eres?'",
    },
    options: [
      "I'm from Brazil.",
      "I live in a house.",
      "I'm 25 years old.",
      "I like music.",
    ],
    correctAnswer: "I'm from Brazil.",
  },
  {
    question: {
      en: "🔊 What country do you hear?",
      es: "🔊 ¿Qué país escuchas?",
    },
    options: ["Argentina", "Uruguay", "England", "USA"],
    correctAnswer: "Argentina",
    audioUrl: "/assets/audio/Argentina.mp3",
  },
  {
    question: {
      en: "Which question asks about your job?",
      es: "¿Qué pregunta se usa para preguntar sobre tu trabajo?",
    },
    options: [
      "What do you do?",
      "What do you like?",
      "How are you?",
      "Where are you from?",
    ],
    correctAnswer: "What do you do?",
  },
  {
    question: {
      en: "How do you introduce someone else?",
      es: "¿Cómo presentas a otra persona?",
    },
    options: [
      "He's my friend.",
      "I’m good, thanks.",
      "Nice to meet me.",
      "Good morning, teacher.",
    ],
    correctAnswer: "He's my friend.",
  },
  {
    question: {
      en: "🔊 What country do you hear?",
      es: "🔊 ¿Qué país escuchas?",
    },
    options: ["Korea", "India", "Italy", "Australia"],
    correctAnswer: "Korea",
    audioUrl: "/assets/audio/Korea.mp3",
  },
  {
    question: {
      en: "How do you respond to 'Nice to meet you'?",
      es: "¿Cómo respondes a 'Nice to meet you'?",
    },
    options: [
      "You're welcome",
      "Nice to meet you too",
      "See you later",
      "Good morning",
    ],
    correctAnswer: "Nice to meet you too",
  },
  ],

  // 📌 Módulo 104: The Verb to Be in Depth
  104: [
     {
    question: {
      en: "🔊 Complete: ___ am a student.",
      es: "🔊 Completa: ___ soy un estudiante.",
    },
    options: ["I", "He", "They"],
    correctAnswer: "I",
    audioUrl: "/assets/audio/i.mp3",
  },
  {
    question: {
      en: "🔊 Complete: ___ is my brother.",
      es: "🔊 Completa: ___ es mi hermano.",
    },
    options: ["We", "She", "He"],
    correctAnswer: "He",
    audioUrl: "/assets/audio/he.mp3",
  },
  {
    question: {
      en: "🔊 Complete: ___ are friends.",
      es: "🔊 Completa: ___ son amigos.",
    },
    options: ["It", "They", "She"],
    correctAnswer: "They",
    audioUrl: "/assets/audio/they.mp3",
  },
  {
    question: {
      en: "🔊 Complete: ___ is a cat.",
      es: "🔊 Completa: ___ es un gato.",
    },
    options: ["It", "You", "They"],
    correctAnswer: "It",
    audioUrl: "/assets/audio/it.mp3",
  },
  {
    question: {
      en: "🔊 Complete: ___ are from Mexico.",
      es: "🔊 Completa: ___ somos de México.",
    },
    options: ["He", "We", "It"],
    correctAnswer: "We",
    audioUrl: "/assets/audio/we.mp3",
  },
  {
    question: {
      en: "Choose the correct form: I ___ a nurse.",
      es: "Elige la forma correcta: Yo ___ una enfermera.",
    },
    options: ["is", "are", "am"],
    correctAnswer: "am",
  },
  {
    question: {
      en: "Choose the correct form: You ___ a painter.",
      es: "Elige la forma correcta: Tú ___ un pintor.",
    },
    options: ["am", "is", "are"],
    correctAnswer: "are",
  },
  {
    question: {
      en: "Choose the correct form: He ___ an engineer.",
      es: "Elige la forma correcta: Él ___ un ingeniero.",
    },
    options: ["are", "am", "is"],
    correctAnswer: "is",
  },
  {
    question: {
      en: "Choose the correct form: They ___ chefs.",
      es: "Elige la forma correcta: Ellos ___ chefs.",
    },
    options: ["am", "is", "are"],
    correctAnswer: "are",
  },
  {
    question: {
      en: "Choose the correct form: She ___ a scientist.",
      es: "Elige la forma correcta: Ella ___ una científica.",
    },
    options: ["are", "is", "am"],
    correctAnswer: "is",
  },
  ],

  // 📌 Módulo 105: Everyday Objects and Basic Adjectives
  105: [
    {
    question: {
      en: "🔊 What object do you hear?",
      es: "🔊 ¿Qué objeto escuchas?",
    },
    options: ["Mirror", "Toothbrush", "Bucket", "Bathtub"],
    correctAnswer: "Mirror",
    audioUrl: "/assets/audio/Mirror.mp3",
    imageUrl: "/assets/bathroom/Mirror-Bathroom-Words.png",
  },
  {
    question: {
      en: "What object do you wear on your wrist?",
      es: "¿Qué objeto usas en la muñeca?",
    },
    options: ["Hat", "Watch", "Socks", "Shirt"],
    correctAnswer: "Watch",
    imageUrl: "/assets/clothes/watch.png",
  },
  {
    question: {
      en: "What is used to clean your teeth?",
      es: "¿Qué usas para limpiar tus dientes?",
    },
    options: ["Toothbrush", "Soap", "Brush", "Scissors"],
    correctAnswer: "Toothbrush",
    imageUrl: "/assets/bathroom/Toothbrush-Bathroom-Words.png",
    audioUrl: "/assets/audio/Toothbrush.mp3",
  },
  {
    question: {
      en: "Which one is a furniture item?",
      es: "¿Cuál de estos es un mueble?",
    },
    options: ["Mirror", "Cabinet", "Shampoo", "Toothpaste"],
    correctAnswer: "Cabinet",
    imageUrl: "/assets/furniture/Cabinet.png",
    audioUrl: "/assets/audio/Cabinet.mp3",
  },
  {
    question: {
      en: "This object is usually soft and used in bed.",
      es: "Este objeto normalmente es suave y se usa en la cama.",
    },
    options: ["Pillow", "Lamp", "Chair", "Keyboard"],
    correctAnswer: "Pillow", // Asegúrate de tener esta imagen/audio si usas esta opción
  },
  {
    question: {
      en: "🔊 What item do you hear?",
      es: "🔊 ¿Qué objeto escuchas?",
    },
    options: ["Mixer", "Microwave", "Toaster", "Blender"],
    correctAnswer: "Toaster",
    audioUrl: "/assets/audio/Toaster.mp3",
    imageUrl: "/assets/kitchen/Toaster.png",
  },
  {
    question: {
      en: "Which object is used to sit?",
      es: "¿Qué objeto se usa para sentarse?",
    },
    options: ["Stool", "Shelf", "Watch", "Clock"],
    correctAnswer: "Stool",
    imageUrl: "/assets/furniture/Stool.png",
    audioUrl: "/assets/audio/Stool.mp3",
  },
  {
    question: {
      en: "What is the opposite of big?",
      es: "¿Cuál es el opuesto de grande?",
    },
    options: ["Tall", "Fast", "Small", "Round"],
    correctAnswer: "Small",
  },
  {
    question: {
      en: "Which one is an adjective?",
      es: "¿Cuál de estos es un adjetivo?",
    },
    options: ["Table", "Happy", "Speak", "Fork"],
    correctAnswer: "Happy",
  },
  {
    question: {
      en: "Which object do you use to write?",
      es: "¿Qué objeto usas para escribir?",
    },
    options: ["Pencil", "Book", "Ruler", "Scissors"],
    correctAnswer: "Pencil",
    imageUrl: "/assets/school/pencil.png",
    audioUrl: "/assets/audio/Pencil.mp3",
  },
  ],

  // 📌 Módulo 106: Talking About Places and Directions
  106: [
        {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["under", "on", "behind"],
      correctAnswer: "on",
      imageUrl: "/assets/prepositions/On Preposition of Place.png",
      audioUrl: "/assets/audio/on.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["on", "under", "next to"],
      correctAnswer: "under",
      imageUrl: "/assets/prepositions/Under Preposition of Place.png",
      audioUrl: "/assets/audio/under.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["behind", "between", "on"],
      correctAnswer: "behind",
      imageUrl: "/assets/prepositions/Behind Preposition of Place.png",
      audioUrl: "/assets/audio/behind.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["in front of", "under", "next to"],
      correctAnswer: "in front of",
      imageUrl: "/assets/prepositions/In Front of Preposition of Place.png",
      audioUrl: "/assets/audio/in front of.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["inside", "outside", "beside"],
      correctAnswer: "inside",
      imageUrl: "/assets/prepositions/Inside Preposition of Place.png",
      audioUrl: "/assets/audio/inside.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["between", "among", "next to"],
      correctAnswer: "between",
      imageUrl: "/assets/prepositions/Between Preposition of Place.png",
      audioUrl: "/assets/audio/between.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["beside", "across", "among"],
      correctAnswer: "among",
      imageUrl: "/assets/prepositions/Among Preposition of Place.png",
      audioUrl: "/assets/audio/among.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["outside", "inside", "through"],
      correctAnswer: "outside",
      imageUrl: "/assets/prepositions/Outside Preposition of Place.png",
      audioUrl: "/assets/audio/outside.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["above", "under", "behind"],
      correctAnswer: "above",
      imageUrl: "/assets/prepositions/Above Preposition of Place.png",
      audioUrl: "/assets/audio/above.mp3",
    },
    {
      question: {
        en: "Where is the chick?",
        es: "¿Dónde está el pollito?",
      },
      options: ["beside", "across", "through"],
      correctAnswer: "beside",
      imageUrl: "/assets/prepositions/Beside Preposition of Place.png",
      audioUrl: "/assets/audio/beside.mp3",
    },
  ],

  // 📌 Módulo 107: Colors, Numbers (21-100), and Dates
  107: [
   {
    question: {
      en: "What color is this?",
      es: "¿Qué color es este?",
    },
    options: ["blue", "green", "red", "black"],
    correctAnswer: "red",
    imageUrl: "/assets/colors/red.png",
    audioUrl: "/assets/audio/red.mp3",
  },
  {
    question: {
      en: "What color is this?",
      es: "¿Qué color es este?",
    },
    options: ["pink", "blue", "white", "yellow"],
    correctAnswer: "blue",
    imageUrl: "/assets/colors/blue.png",
    audioUrl: "/assets/audio/blue.mp3",
  },
  {
    question: {
      en: "What color is this?",
      es: "¿Qué color es este?",
    },
    options: ["purple", "green", "brown", "gray"],
    correctAnswer: "green",
    imageUrl: "/assets/colors/green.png",
    audioUrl: "/assets/audio/green.mp3",
  },

  // ✅ Números
  {
    question: {
      en: "What number comes after 29?",
      es: "¿Qué número viene después del 29?",
    },
    options: ["28", "30", "31", "40"],
    correctAnswer: "30",
  },
{
  question: {
    en: "What number is 'thirty-five'?",
    es: "¿Qué número es 'thirty-five'?",
  },
  options: ["25", "30", "35", "40"],
  correctAnswer: "35"
},
  {
    question: {
      en: "What is 7 times 10?",
      es: "¿Cuánto es 7 por 10?",
    },
    options: ["60", "70", "80", "90"],
    correctAnswer: "70",
  },

  // ✅ Meses
  {
    question: {
      en: "Which month is this?",
      es: "¿Qué mes es este?",
    },
    options: ["March", "May", "January", "June"],
    correctAnswer: "January",
    imageUrl: "/assets/months/january_hires.png",
    audioUrl: "/assets/audio/january.mp3",
  },
  {
    question: {
      en: "Listen and choose the correct month.",
      es: "Escucha y elige el mes correcto.",
    },
    options: ["August", "April", "October", "December"],
    correctAnswer: "August",
    audioUrl: "/assets/audio/august.mp3",
  },

  // ✅ Días
  {
    question: {
      en: "What day comes after Wednesday?",
      es: "¿Qué día viene después del miércoles?",
    },
    options: ["Tuesday", "Thursday", "Friday", "Monday"],
    correctAnswer: "Thursday",
  },
  {
    question: {
      en: "Which day is this?",
      es: "¿Qué día es este?",
    },
    options: ["Sunday", "Monday", "Friday", "Saturday"],
    correctAnswer: "Friday",
    imageUrl: "/assets/days/friday_hires.png",
    audioUrl: "/assets/audio/friday.mp3",
  },
  ],

  // 📌 Módulo 108: Describing People and Things
  108: [
   {
    question: {
      en: "What is this person like?",
      es: "¿Cómo es esta persona?",
    },
    options: ["He's got brown hair", "He's bald", "He's tall", "He's got a ponytail"],
    correctAnswer: "He's got brown hair",
    imageUrl: "/assets/describing/Casual Avatars-03.png",
  },
  {
    question: {
      en: "Choose the best description.",
      es: "Elige la mejor descripción.",
    },
    options: ["He's short", "He's tall", "He's old", "He's bald"],
    correctAnswer: "He's tall",
    imageUrl: "/assets/describing/Casual Avatars-07.png",
  },
  {
    question: {
      en: "Look at the image. What’s the best description?",
      es: "Mira la imagen. ¿Cuál es la mejor descripción?",
    },
    options: ["He's bald", "He's got glasses", "He's got earrings", "He's got a beard"],
    correctAnswer: "He's bald",
    imageUrl: "/assets/avatars/Avatars-10.png",
  },
  {
    question: {
      en: "What type of skin does he have?",
      es: "¿Qué tipo de piel tiene él?",
    },
    options: ["Light skin", "Dark skin", "Brown skin", "Red skin"],
    correctAnswer: "Dark skin",
    imageUrl: "/assets/describing/Casual Avatars-05.png",
  },
  {
    question: {
      en: "She's got _____",
      es: "Ella tiene _____",
    },
    options: ["short hair", "a beard", "a ponytail", "a mustache"],
    correctAnswer: "a ponytail",
    imageUrl: "/assets/avatars/Avatars-06.png",
  },
  {
    question: {
      en: "He's got _____",
      es: "Él tiene _____",
    },
    options: ["a headscarf", "a bun", "a mustache", "a ponytail"],
    correctAnswer: "a mustache",
    imageUrl: "/assets/avatars/Avatars-07.png",
  },
  {
    question: {
      en: "Which adjective matches this object?",
      es: "¿Qué adjetivo describe mejor este objeto?",
    },
    options: ["dirty", "clean", "soft", "broken"],
    correctAnswer: "dirty",
    imageUrl: "/assets/adjectives/dirty.png",
    audioUrl: "/assets/audio/dirty.mp3",
  },
  {
    question: {
      en: "How does he feel?",
      es: "¿Cómo se siente él?",
    },
    options: ["Happy", "Sad", "Angry", "Confused"],
    correctAnswer: "Happy",
    imageUrl: "/assets/adjectives/1.png",
    audioUrl: "/assets/audio/happy.mp3",
  },
  {
    question: {
      en: "What word describes this emotion?",
      es: "¿Qué palabra describe esta emoción?",
    },
    options: ["Excited", "Irritated", "Sleepy", "In love"],
    correctAnswer: "In love",
    imageUrl: "/assets/adjectives/17.png",
    audioUrl: "/assets/audio/love.mp3",
  },
  {
    question: {
      en: "What kind of personality does this describe?",
      es: "¿Qué tipo de personalidad describe esto?",
    },
    options: ["Friendly", "Lazy", "Rude", "Polite"],
    correctAnswer: "Friendly",
    imageUrl: "/assets/adjectives/friendly.png",
    audioUrl: "/assets/audio/friendly.mp3",
  }
  ],

  // 📌 Módulo 109: Talking About Your Routine
  109: [
      {
    question: {
      en: "🛏️ What is she doing?",
      es: "🛏️ ¿Qué está haciendo ella?",
    },
    options: ["She is sleeping", "She is waking up", "She is reading"],
    correctAnswer: "She is waking up",
    imageUrl: "/assets/routines/Daily routine png-01.png",
  },
  {
    question: {
      en: "🍳 What is she doing in this picture?",
      es: "🍳 ¿Qué está haciendo ella en esta imagen?",
    },
    options: ["She is sleeping", "She is having breakfast", "She is working"],
    correctAnswer: "She is having breakfast",
    imageUrl: "/assets/routines/Daily routine png-04.png",
  },
  {
    question: {
      en: "💼 What is her activity?",
      es: "💼 ¿Cuál es su actividad?",
    },
    options: ["She is eating lunch", "She is reading", "She is working"],
    correctAnswer: "She is working",
    imageUrl: "/assets/routines/Daily routine png-19.png",
  },
  {
    question: {
      en: "🍲 What is she doing?",
      es: "🍲 ¿Qué está haciendo ella?",
    },
    options: ["She is eating lunch", "She is waking up", "She is taking a bath"],
    correctAnswer: "She is eating lunch",
    imageUrl: "/assets/routines/Daily routine png-10.png",
  },
  {
    question: {
      en: "📖 What is the correct description?",
      es: "📖 ¿Cuál es la descripción correcta?",
    },
    options: ["She is relaxing", "She is reading", "She is eating"],
    correctAnswer: "She is reading",
    imageUrl: "/assets/routines/Daily routine png-12.png",
  },
  {
    question: {
      en: "🛁 What is she doing?",
      es: "🛁 ¿Qué está haciendo ella?",
    },
    options: ["She is sleeping", "She is taking a bath", "She is working"],
    correctAnswer: "She is taking a bath",
    imageUrl: "/assets/routines/Daily routine png-03.png",
  },
  {
    question: {
      en: "🛌 What activity is this?",
      es: "🛌 ¿Qué actividad es esta?",
    },
    options: ["She is sleeping", "She is reading", "She is waking up"],
    correctAnswer: "She is sleeping",
    imageUrl: "/assets/routines/Daily routine png-22.png",
  },
  {
    question: {
      en: "🧘‍♀️ What is she doing in the afternoon?",
      es: "🧘‍♀️ ¿Qué hace ella en la tarde?",
    },
    options: ["She is relaxing", "She is taking a bath", "She is sleeping"],
    correctAnswer: "She is relaxing",
    imageUrl: "/assets/routines/Daily routine png-07.png",
  },
  {
    question: {
      en: "🌙 What do we usually do at night?",
      es: "🌙 ¿Qué solemos hacer por la noche?",
    },
    options: ["Take a bath", "Work", "Sleep"],
    correctAnswer: "Sleep",
  },
  {
    question: {
      en: "☀️ Which activity happens in the morning?",
      es: "☀️ ¿Qué actividad ocurre en la mañana?",
    },
    options: ["She is having dinner", "She is waking up", "She is reading"],
    correctAnswer: "She is waking up",
  }

  ],

  // 📌 Módulo 110: Practical Phrases: Shopping and Ordering Food
  110: [
   {
    question: {
      en: "🛍️ Where did she buy bread?",
      es: "🛍️ ¿Dónde compró pan?",
    },
    options: ["Bookstore", "Bakery", "Clothing Store", "Gift Shop"],
    correctAnswer: "Bakery",
    imageUrl: "/assets/img/bakery.png",
  },
  {
    question: {
      en: "💬 What does the cashier say?",
      es: "💬 ¿Qué dice el cajero?",
    },
    options: [
      "How are you?",
      "Can I help you?",
      "Where are you from?",
      "I am fine, thank you",
    ],
    correctAnswer: "Can I help you?",
    imageUrl: "/assets/img/can-i-help-you.webp",
    audioUrl: "/assets/audio/phrase01.mp3",
  },
  {
    question: {
      en: "🛒 What store do you visit to buy medicine?",
      es: "🛒 ¿Qué tienda visitas para comprar medicina?",
    },
    options: ["Pharmacy", "Jewelry Store", "Grocery Store", "Bakery"],
    correctAnswer: "Pharmacy",
    imageUrl: "/assets/img/pharmacy.png",
  },
  {
    question: {
      en: "🧃 What drink is this?",
      es: "🧃 ¿Qué bebida es esta?",
    },
    options: ["Juice", "Milk", "Wine", "Soda"],
    correctAnswer: "Juice",
    imageUrl: "/assets/img/Juice.png",
  },
  {
    question: {
      en: "📚 I found a great novel at the ___",
      es: "📚 Encontré una gran novela en la ___",
    },
    options: ["Clothing Store", "Gift Shop", "Bookstore", "Bakery"],
    correctAnswer: "Bookstore",
    imageUrl: "/assets/img/bookstore.png",
  },
  {
    question: {
      en: "💳 What question is this? (Cashier asking)",
      es: "💳 ¿Qué pregunta es esta? (El cajero pregunta)",
    },
    options: [
      "Do you want coffee?",
      "How old are you?",
      "Cash or card?",
      "What do you like?",
    ],
    correctAnswer: "Cash or card?",
    imageUrl: "/assets/img/cash-or-card.png",
    audioUrl: "/assets/audio/phrase07.mp3",
  },
  {
    question: {
      en: "🍔 What is this food?",
      es: "🍔 ¿Qué comida es esta?",
    },
    options: ["Pizza", "Hot Dog", "Burger", "Taco"],
    correctAnswer: "Burger",
    imageUrl: "/assets/img/01.png",
    audioUrl: "/assets/audio/burger.mp3",
  },
  {
    question: {
      en: "🍓 What fruit is this?",
      es: "🍓 ¿Qué fruta es esta?",
    },
    options: ["Strawberry", "Tomato", "Mango", "Apple"],
    correctAnswer: "Strawberry",
    imageUrl: "/assets/img/3 a.png",
    audioUrl: "/assets/audio/strawberry.mp3",
  },
  {
    question: {
      en: "🍷 Choose the correct name of the drink:",
      es: "🍷 Elige el nombre correcto de la bebida:",
    },
    options: ["Wine", "Coffee", "Tea", "Milk"],
    correctAnswer: "Wine",
    imageUrl: "/assets/img/Wine.png",
    audioUrl: "/assets/audio/wine.mp3",
  },
  {
    question: {
      en: "🛍️ She picked up a gift at the ___",
      es: "🛍️ Ella recogió un regalo en la ___",
    },
    options: ["Bookstore", "Gift Shop", "Bakery", "Clothing Store"],
    correctAnswer: "Gift Shop",
    imageUrl: "/assets/img/gift-shop.png",
  },
  ],

  // 📌 Módulo 111: Common Questions and Responses
  111: [
     {
    question: {
      en: "🧒 The answer is: *Jack*. What is the correct question?",
      es: "🧒 La respuesta es: *Jack*. ¿Cuál es la pregunta correcta?",
    },
    options: [
      "What's your name?",
      "Where are you from?",
      "How old are you?",
      "What do you do?",
    ],
    correctAnswer: "What's your name?",
  },
  {
    question: {
      en: "📞 The answer is: *2345678*. What is the correct question?",
      es: "📞 La respuesta es: *2345678*. ¿Cuál es la pregunta correcta?",
    },
    options: [
      "What's your favorite number?",
      "What's your phone number?",
      "Where do you live?",
      "What’s your address?",
    ],
    correctAnswer: "What's your phone number?",
  },
  {
    question: {
      en: "🌍 The answer is: *London*. What is the correct question?",
      es: "🌍 La respuesta es: *Londres*. ¿Cuál es la pregunta correcta?",
    },
    options: [
      "Where are you from?",
      "Where do you live?",
      "What’s your favorite city?",
      "What language do you speak?",
    ],
    correctAnswer: "Where are you from?",
  },
  {
    question: {
      en: "🎨 The answer is: *blue*. What is the correct question?",
      es: "🎨 La respuesta es: *azul*. ¿Cuál es la pregunta correcta?",
    },
    options: [
      "What color is your house?",
      "What’s your favorite subject?",
      "What’s your favorite color?",
      "What color are your eyes?",
    ],
    correctAnswer: "What’s your favorite color?",
  },
  {
    question: {
      en: "🏐 The answer is: *volleyball*. What is the correct question?",
      es: "🏐 La respuesta es: *voleibol*. ¿Cuál es la pregunta correcta?",
    },
    options: [
      "What’s your favorite game?",
      "What sport do you play at school?",
      "Do you like sports?",
      "What’s your favorite sport?",
    ],
    correctAnswer: "What’s your favorite sport?",
  },
  {
    question: {
      en: "📚 The answer is: *geography*. What is the correct question?",
      es: "📚 La respuesta es: *geografía*. ¿Cuál es la pregunta correcta?",
    },
    options: [
      "What do you study?",
      "What’s your favorite subject?",
      "What class do you hate?",
      "What’s your teacher's name?",
    ],
    correctAnswer: "What’s your favorite subject?",
  },
  {
    question: {
      en: "🐶 The answer is: *Yes, I have.* What is the correct question?",
      es: "🐶 La respuesta es: *Sí, tengo.* ¿Cuál es la pregunta correcta?",
    },
    options: [
      "Do you like animals?",
      "Do you want a dog?",
      "Do you have any pets?",
      "Are you allergic to pets?",
    ],
    correctAnswer: "Do you have any pets?",
  },
  {
    question: {
      en: "👧 The answer is: *No, I don’t.* What is the correct question?",
      es: "👧 La respuesta es: *No, no tengo.* ¿Cuál es la pregunta correcta?",
    },
    options: [
      "Do you have any brothers or sisters?",
      "Are you an only child?",
      "Do you like your family?",
      "Do you have cousins?",
    ],
    correctAnswer: "Do you have any brothers or sisters?",
  },
  {
    question: {
      en: "🕙 The answer is: *It’s 10 o’clock.* What is the correct question?",
      es: "🕙 La respuesta es: *Son las 10 en punto.* ¿Cuál es la pregunta correcta?",
    },
    options: [
      "What time do you go to bed?",
      "What time is it?",
      "What time do you get up?",
      "Is it late?",
    ],
    correctAnswer: "What time is it?",
  },
  {
    question: {
      en: "🔢 The answer is: *11*. What is the correct question?",
      es: "🔢 La respuesta es: *11*. ¿Cuál es la pregunta correcta?",
    },
    options: [
      "What’s your favorite number?",
      "How many siblings do you have?",
      "How old are you?",
      "What grade are you in?",
    ],
    correctAnswer: "How old are you?",
  }, 
  ],

  
  // 📌 Módulo 111: Common Questions and Responses
  201: [
       {
    question: {
      en: "I was tired, ___ I went to the party.",
      es: "Estaba cansado, ___ fui a la fiesta.",
    },
    options: ["although", "but", "because"],
    correctAnswer: "but",
  },
  {
    question: {
      en: "She studied hard, ___ she passed the test.",
      es: "Ella estudió mucho, ___ aprobó el examen.",
    },
    options: ["so", "while", "however"],
    correctAnswer: "so",
  },
  {
    question: {
      en: "I didn’t go out ___ it was raining.",
      es: "No salí ___ estaba lloviendo.",
    },
    options: ["because", "although", "and"],
    correctAnswer: "because",
  },
  {
    question: {
      en: "We arrived on time, ___ the others were late.",
      es: "Llegamos a tiempo, ___ los otros llegaron tarde.",
    },
    options: ["and", "but", "while"],
    correctAnswer: "and",
  },
  {
    question: {
      en: "He was tired, ___ he kept working.",
      es: "Estaba cansado, ___ siguió trabajando.",
    },
    options: ["however", "because", "while"],
    correctAnswer: "however",
  },
  {
    question: {
      en: "___ he is rich, he is generous.",
      es: "___ es rico, es generoso.",
    },
    options: ["Although", "But", "And"],
    correctAnswer: "Although",
  },
  {
    question: {
      en: "We didn’t have dinner, ___ we were very hungry.",
      es: "No cenamos, ___ teníamos mucha hambre.",
    },
    options: ["because", "so", "although"],
    correctAnswer: "so",
  },
  {
    question: {
      en: "He didn’t go to work ___ he was ill.",
      es: "No fue a trabajar ___ estaba enfermo.",
    },
    options: ["because", "but", "so"],
    correctAnswer: "because",
  },
  {
    question: {
      en: "It was raining, ___ we still went for a walk.",
      es: "Estaba lloviendo, ___ aún así fuimos a caminar.",
    },
    options: ["but", "so", "while"],
    correctAnswer: "but",
  },
  {
    question: {
      en: "She was talking ___ I was cooking.",
      es: "Ella estaba hablando ___ yo estaba cocinando.",
    },
    options: ["while", "because", "so"],
    correctAnswer: "while",
  }
  ],
  202: [
       {
    question: {
      en: "She ___ eats lunch.",
      es: "Ella ___ almuerza.",
    },
    options: ["never", "always", "sometimes", "usually"],
    correctAnswer: "usually",
    imageUrl: "/assets/routines/Daily routine png-10.png",
  },
  {
    question: {
      en: "She ___ walks the dog.",
      es: "Ella ___ pasea al perro.",
    },
    options: ["always", "never", "rarely", "sometimes"],
    correctAnswer: "always",
    imageUrl: "/assets/routines/Daily routine png-17.png",
  },
  {
    question: {
      en: "She ___ goes to bed early.",
      es: "Ella ___ se acuesta temprano.",
    },
    options: ["never", "always", "usually", "sometimes"],
    correctAnswer: "sometimes",
    imageUrl: "/assets/routines/Daily routine png-22.png",
  },
  {
    question: {
      en: "She ___ has breakfast.",
      es: "Ella ___ desayuna.",
    },
    options: ["always", "rarely", "never", "sometimes"],
    correctAnswer: "always",
    imageUrl: "/assets/routines/Daily routine png-04.png",
  },
  {
    question: {
      en: "She ___ goes running.",
      es: "Ella ___ sale a correr.",
    },
    options: ["never", "rarely", "often", "usually"],
    correctAnswer: "rarely",
    imageUrl: "/assets/routines/Daily routine png-15.png",
  },
  {
    question: {
      en: "She ___ reads a book.",
      es: "Ella ___ lee un libro.",
    },
    options: ["often", "rarely", "never", "usually"],
    correctAnswer: "often",
    imageUrl: "/assets/routines/Daily routine png-12.png",
  },
  {
    question: {
      en: "She ___ drinks water.",
      es: "Ella ___ toma agua.",
    },
    options: ["never", "rarely", "always", "sometimes"],
    correctAnswer: "always",
    imageUrl: "/assets/routines/Daily routine png-14.png",
  },
  {
    question: {
      en: "She ___ uses the toilet before bed.",
      es: "Ella ___ usa el baño antes de dormir.",
    },
    options: ["sometimes", "usually", "never", "rarely"],
    correctAnswer: "usually",
    imageUrl: "/assets/routines/Daily routine png-02.png",
  },
  ],
  203: [
       {
    question: {
      en: "She ___ (go) to the cinema last night.",
      es: "Ella ___ al cine anoche.",
    },
    options: ["goed", "went", "goes"],
    correctAnswer: "went",
  },
  {
    question: {
      en: "They ___ (play) football in the park.",
      es: "Ellos ___ fútbol en el parque.",
    },
    options: ["played", "plays", "play"],
    correctAnswer: "played",
  },
  {
    question: {
      en: "I ___ (eat) a big pizza for dinner.",
      es: "Yo ___ una pizza grande para cenar.",
    },
    options: ["ate", "eated", "eats"],
    correctAnswer: "ate",
  },
  {
    question: {
      en: "We ___ (watch) TV all evening.",
      es: "Nosotros ___ televisión toda la tarde.",
    },
    options: ["watch", "watched", "watches"],
    correctAnswer: "watched",
  },
  {
    question: {
      en: "He ___ (buy) a new car last week.",
      es: "Él ___ un auto nuevo la semana pasada.",
    },
    options: ["buyed", "bought", "buys"],
    correctAnswer: "bought",
  },
  {
    question: {
      en: "She ___ (say) something funny.",
      es: "Ella ___ algo divertido.",
    },
    options: ["says", "said", "sayed"],
    correctAnswer: "said",
  },
  {
    question: {
      en: "We ___ (take) a lot of pictures.",
      es: "Nosotros ___ muchas fotos.",
    },
    options: ["took", "take", "taken"],
    correctAnswer: "took",
  },
  {
    question: {
      en: "He ___ (think) it was easy.",
      es: "Él ___ que era fácil.",
    },
    options: ["thought", "thinked", "thinks"],
    correctAnswer: "thought",
  },
  {
    question: {
      en: "They ___ (arrive) late to the party.",
      es: "Ellos ___ tarde a la fiesta.",
    },
    options: ["arrive", "arrived", "arrives"],
    correctAnswer: "arrived",
  },
  {
    question: {
      en: "I ___ (want) to see the movie.",
      es: "Yo ___ ver la película.",
    },
    options: ["wanted", "want", "wants"],
    correctAnswer: "wanted",
  } 
  ],
  204: [
       {
    question: {
      en: "Look at those clouds! It ___ rain soon.",
      es: "¡Mira esas nubes! ___ llover pronto.",
    },
    options: ["will", "is going to"],
    correctAnswer: "is going to",
  },
  {
    question: {
      en: "I'm so tired. I ___ go to bed early tonight.",
      es: "Estoy muy cansado. ___ acostarme temprano esta noche.",
    },
    options: ["will", "am going to"],
    correctAnswer: "am going to",
  },
  {
    question: {
      en: "Don't worry, I ___ help you with your homework.",
      es: "No te preocupes, ___ ayudarte con tu tarea.",
    },
    options: ["will", "am going to"],
    correctAnswer: "will",
  },
  {
    question: {
      en: "He ___ study medicine at university next year. He has already applied.",
      es: "Él ___ estudiar medicina en la universidad el próximo año. Ya se ha postulado.",
    },
    options: ["is going to", "will"],
    correctAnswer: "is going to",
  },
  {
    question: {
      en: "They ___ get married in June. Everything is planned.",
      es: "Ellos ___ casarse en junio. Todo está planeado.",
    },
    options: ["are going to", "will"],
    correctAnswer: "are going to",
  },
  {
    question: {
      en: "I think it ___ snow tomorrow.",
      es: "Creo que ___ nevar mañana.",
    },
    options: ["will", "is going to"],
    correctAnswer: "will",
  },
  {
    question: {
      en: "Watch out! You ___ drop that glass.",
      es: "¡Cuidado! ___ dejar caer ese vaso.",
    },
    options: ["will", "are going to"],
    correctAnswer: "are going to",
  },
  {
    question: {
      en: "I’m sure he ___ pass the exam. He studied a lot.",
      es: "Estoy seguro de que él ___ pasar el examen. Estudió mucho.",
    },
    options: ["will", "is going to"],
    correctAnswer: "will",
  },
  {
    question: {
      en: "She ___ call you later. She told me already.",
      es: "Ella ___ llamarte más tarde. Ya me lo dijo.",
    },
    options: ["will", "is going to"],
    correctAnswer: "is going to",
  },
  {
    question: {
      en: "I think we ___ travel to Japan next year.",
      es: "Creo que nosotros ___ viajar a Japón el próximo año.",
    },
    options: ["will", "are going to"],
    correctAnswer: "will",
  }, 
  ],
  205: [
      {
    question: {
      en: "What does this traffic light mean?",
      es: "¿Qué significa este semáforo?",
    },
    imageUrl: "/assets/img/traffic-light-stop.png",
    options: ["go", "stop", "slow down"],
    correctAnswer: "stop",
  },
  {
    question: {
      en: "What should you do at this sign?",
      es: "¿Qué deberías hacer en esta señal?",
    },
    imageUrl: "/assets/img/go-straight.png",
    options: ["turn right", "go straight", "on the left"],
    correctAnswer: "go straight",
  },
  {
    question: {
      en: "What direction is this arrow showing?",
      es: "¿Qué dirección muestra esta flecha?",
    },
    imageUrl: "/assets/img/turn-left.png",
    options: ["turn right", "go straight", "turn left"],
    correctAnswer: "turn left",
  },
  {
    question: {
      en: "Where should you go according to this sign?",
      es: "¿A dónde deberías ir según esta señal?",
    },
    imageUrl: "/assets/img/turn-right.png",
    options: ["stop", "turn right", "slow down"],
    correctAnswer: "turn right",
  },
  {
    question: {
      en: "Where is the store located?",
      es: "¿Dónde está ubicada la tienda?",
    },
    imageUrl: "/assets/img/on-the-left.png",
    options: ["on the left", "on the right", "opposite"],
    correctAnswer: "on the left",
  },
  {
    question: {
      en: "What direction should you take?",
      es: "¿Qué dirección deberías tomar?",
    },
    imageUrl: "/assets/img/take-second-left.png",
    options: [
      "take the first turning to the right",
      "take the second turning on the left",
      "go straight",
    ],
    correctAnswer: "take the second turning on the left",
  }
  ],
  206: [
      {
    question: {
      en: "What expression means 'me gusta'?",
      es: "¿Qué expresión significa 'me gusta'?",
    },
    options: ["I think", "I like", "I prefer", "In my opinion"],
    correctAnswer: "I like",
  },
  {
    question: {
      en: "Which of these shows a strong preference?",
      es: "¿Cuál de estas muestra una fuerte preferencia?",
    },
    options: ["I like", "I prefer", "I love", "I think"],
    correctAnswer: "I love",
  },
  {
    question: {
      en: "Choose the best way to express an opinion.",
      es: "Elige la mejor manera de expresar una opinión.",
    },
    options: ["I think pizza.", "I like pasta.", "In my opinion, tea is better.", "I love movie."],
    correctAnswer: "In my opinion, tea is better.",
  },
  {
    question: {
      en: "What do you prefer: coffee or tea?",
      es: "¿Qué prefieres: café o té?",
    },
    options: ["I love", "I think", "I prefer coffee", "In my opinion"],
    correctAnswer: "I prefer coffee",
  },
  {
    question: {
      en: "Translate: 'Creo que esta película es genial.'",
      es: "Traduce: 'Creo que esta película es genial.'",
    },
    options: [
      "I like this movie.",
      "I love this movie.",
      "I think this movie is great.",
      "I prefer this movie.",
    ],
    correctAnswer: "I think this movie is great.",
  },
  {
    question: {
      en: "Complete the sentence: ___, both are great!",
      es: "Completa la frase: ___, ambos son geniales.",
    },
    options: ["I love", "I like", "In my opinion", "I think"],
    correctAnswer: "In my opinion",
  },
  {
    question: {
      en: "She prefers ___ to tea.",
      es: "Ella prefiere ___ al té.",
    },
    options: ["coffee", "juice", "soda", "milk"],
    correctAnswer: "coffee",
  },
  {
    question: {
      en: "What is a good question to ask about preferences?",
      es: "¿Cuál es una buena pregunta sobre preferencias?",
    },
    options: [
      "Do you like reading?",
      "What time is it?",
      "Where are you from?",
      "How old are you?",
    ],
    correctAnswer: "Do you like reading?",
  },
  {
    question: {
      en: "In your opinion, what is the best day of the week?",
      es: "En tu opinión, ¿cuál es el mejor día de la semana?",
    },
    options: [
      "I think it's Saturday.",
      "I love pizza.",
      "I prefer books.",
      "Do you like English?",
    ],
    correctAnswer: "I think it's Saturday.",
  },
  {
    question: {
      en: "Choose the correct response: 'Do you like watching TV?'",
      es: "Elige la respuesta correcta: '¿Te gusta ver televisión?'",
    },
    options: [
      "Yes, I like it.",
      "Yes, I do. I think it's fun.",
      "No, I am not.",
      "I prefer breakfast.",
    ],
    correctAnswer: "Yes, I do. I think it's fun.",
  },
  ],
  207: [
       {
    question: {
      en: "She ___ (visit) London many times.",
      es: "Ella ___ (visitar) Londres muchas veces.",
    },
    options: ["has visited", "visited", "have visited"],
    correctAnswer: "has visited",
  },
  {
    question: {
      en: "I ___ (never / eat) sushi before.",
      es: "Yo ___ (nunca / comer) sushi antes.",
    },
    options: ["have never eaten", "never ate", "has never eaten"],
    correctAnswer: "have never eaten",
  },
  {
    question: {
      en: "___ you ___ (finish) your homework yet?",
      es: "¿___ tú ___ (terminar) tu tarea ya?",
    },
    options: ["Have / finished", "Did / finish", "Has / finished"],
    correctAnswer: "Have / finished",
  },
  {
    question: {
      en: "He ___ (not / see) that movie.",
      es: "Él ___ (no / ver) esa película.",
    },
    options: ["has not seen", "did not see", "have not seen"],
    correctAnswer: "has not seen",
  },
  {
    question: {
      en: "They ___ (be) to Paris twice.",
      es: "Ellos ___ (estar) en París dos veces.",
    },
    options: ["have been", "was", "has been"],
    correctAnswer: "have been",
  },
  {
    question: {
      en: "We ___ (not / do) the project yet.",
      es: "Nosotros ___ (no / hacer) el proyecto aún.",
    },
    options: ["have not done", "did not do", "has not done"],
    correctAnswer: "have not done",
  },
  {
    question: {
      en: "___ she ever ___ (try) Indian food?",
      es: "¿___ ella alguna vez ___ (probar) comida india?",
    },
    options: ["Has / tried", "Did / tried", "Have / tried"],
    correctAnswer: "Has / tried",
  },
  {
    question: {
      en: "I ___ (lose) my keys!",
      es: "¡He ___ (perder) mis llaves!",
    },
    options: ["have lost", "lost", "has lost"],
    correctAnswer: "have lost",
  },
  {
    question: {
      en: "They ___ (live) here since 2015.",
      es: "Ellos ___ (vivir) aquí desde 2015.",
    },
    options: ["have lived", "lived", "has lived"],
    correctAnswer: "have lived",
  },
  {
    question: {
      en: "He ___ (never / play) tennis before.",
      es: "Él ___ (nunca / jugar) tenis antes.",
    },
    options: ["has never played", "never played", "have never played"],
    correctAnswer: "has never played",
  },
  ],
  208: [
       {
    question: {
      en: "The previous movie was good, but this one is ___",
      es: "La película anterior era buena, pero esta es ___",
    },
    options: ["better", "best", "worse", "badder"],
    correctAnswer: "better",
    imageUrl: "/assets/comparatives/good.png",
    audioUrl: "/assets/audio/better.mp3",
  },
  {
    question: {
      en: "Today is ___ than yesterday. I need my jacket.",
      es: "Hoy está ___ que ayer. Necesito mi chaqueta.",
    },
    options: ["colder", "hotter", "warmer", "nicer"],
    correctAnswer: "colder",
    imageUrl: "/assets/comparatives/cold.png",
    audioUrl: "/assets/audio/colder.mp3",
  },
  {
    question: {
      en: "This sofa is ___ than the old one.",
      es: "Este sofá es ___ que el anterior.",
    },
    options: ["more comfortable", "comfortabler", "comfortablest", "most comfortable"],
    correctAnswer: "more comfortable",
  },
  {
    question: {
      en: "My house is ___ than yours.",
      es: "Mi casa es ___ que la tuya.",
    },
    options: ["bigger", "biggest", "big", "more big"],
    correctAnswer: "bigger",
    imageUrl: "/assets/comparatives/big.png",
    audioUrl: "/assets/audio/bigger.mp3",
  },
  {
    question: {
      en: "This phone is ___ than the old model.",
      es: "Este teléfono es ___ que el modelo anterior.",
    },
    options: ["more expensive", "expensiver", "expensive", "most expensive"],
    correctAnswer: "more expensive",
    imageUrl: "/assets/comparatives/expensive.png",
    audioUrl: "/assets/audio/more-expensive.mp3",
  },
  {
    question: {
      en: "He is ___ than his brother.",
      es: "Él es ___ que su hermano.",
    },
    options: ["taller", "tallest", "more tall", "tall"],
    correctAnswer: "taller",
    imageUrl: "/assets/comparatives/tall.png",
    audioUrl: "/assets/audio/taller.mp3",
  },
  {
    question: {
      en: "This book is ___ than the last one.",
      es: "Este libro es ___ que el anterior.",
    },
    options: ["more interesting", "interestinger", "interestingest", "most interesting"],
    correctAnswer: "more interesting",
  },
  {
    question: {
      en: "This bag is ___ than that one.",
      es: "Esta bolsa es ___ que esa.",
    },
    options: ["lighter", "more light", "lightest", "light"],
    correctAnswer: "lighter",
  },
  {
    question: {
      en: "He is ___ person I know.",
      es: "Él es la persona más ___ que conozco.",
    },
    options: ["kindest", "more kind", "kinder", "kind"],
    correctAnswer: "kindest",
  },
  {
    question: {
      en: "Math is ___ than art for me.",
      es: "Las matemáticas son ___ que arte para mí.",
    },
    options: ["more difficult", "difficultest", "difficulter", "most difficult"],
    correctAnswer: "more difficult",
  },
  ],
  209: [
      {
    question: {
      en: "Can you ___ the radio? I want to hear the news.",
      es: "¿Puedes ___ la radio? Quiero escuchar las noticias.",
    },
    options: ["turn on", "take off", "give up", "call back"],
    correctAnswer: "turn on",
    audioUrl: "/assets/audio/turn-on.mp3",
  },
  {
    question: {
      en: "Please ___ your shoes before entering.",
      es: "Por favor, ___ los zapatos antes de entrar.",
    },
    options: ["take off", "turn up", "get up", "wake up"],
    correctAnswer: "take off",
    audioUrl: "/assets/audio/take-off.mp3",
  },
  {
    question: {
      en: "He ___ smoking last year.",
      es: "Él ___ de fumar el año pasado.",
    },
    options: ["gave up", "picked up", "turned off", "wrote down"],
    correctAnswer: "gave up",
    audioUrl: "/assets/audio/give-up.mp3",
  },
  {
    question: {
      en: "I’m ___ my wallet. Have you seen it?",
      es: "Estoy ___ mi billetera. ¿La has visto?",
    },
    options: ["looking for", "calling back", "getting up", "putting on"],
    correctAnswer: "looking for",
    audioUrl: "/assets/audio/look-for.mp3",
  },
  {
    question: {
      en: "We ___ at the hotel around noon.",
      es: "Nosotros ___ en el hotel cerca del mediodía.",
    },
    options: ["checked in", "checked out", "ran out of", "hung up"],
    correctAnswer: "checked in",
    audioUrl: "/assets/audio/check-in.mp3",
  },
  {
    question: {
      en: "She ___ the phone before I could answer.",
      es: "Ella ___ el teléfono antes de que pudiera contestar.",
    },
    options: ["hung up", "called back", "turned on", "gave up"],
    correctAnswer: "hung up",
    audioUrl: "/assets/audio/hang-up.mp3",
  },
  {
    question: {
      en: "We ___ of milk. Can you buy more?",
      es: "Nos ___ la leche. ¿Puedes comprar más?",
    },
    options: ["ran out", "gave up", "picked up", "turned down"],
    correctAnswer: "ran out",
    audioUrl: "/assets/audio/run-out-of.mp3",
  },
  {
    question: {
      en: "I need to ___ your address.",
      es: "Necesito ___ tu dirección.",
    },
    options: ["write down", "take off", "wake up", "check in"],
    correctAnswer: "write down",
    audioUrl: "/assets/audio/write-down.mp3",
  },
  {
    question: {
      en: "She always ___ early to go jogging.",
      es: "Ella siempre ___ temprano para salir a correr.",
    },
    options: ["gets up", "wakes up", "turns on", "takes off"],
    correctAnswer: "gets up",
    audioUrl: "/assets/audio/get-up.mp3",
  },
  {
    question: {
      en: "You should ___ the music a bit. It's too loud.",
      es: "Deberías ___ un poco la música. Está muy alta.",
    },
    options: ["turn down", "turn off", "turn up", "look for"],
    correctAnswer: "turn down",
    audioUrl: "/assets/audio/turn-down.mp3",
  },
  ],
  210: [
     {
      question: {
        en: "What is she doing?",
        es: "¿Qué está haciendo ella?",
      },
      options: [
        "She reads a book.",
        "She is reading a book.",
        "She read a book."
      ],
      correctAnswer: "She is reading a book.",
      imageUrl: "/assets/scenes/Flat-creativity-concept-illustration-3.png"
    },
    {
      question: {
        en: "What are the boys doing?",
        es: "¿Qué están haciendo los niños?",
      },
      options: [
        "They play soccer.",
        "They are playing soccer.",
        "They played soccer."
      ],
      correctAnswer: "They are playing soccer.",
      imageUrl: "/assets/scenes/Sports activity.png"
    },
    {
      question: {
        en: "Choose the correct form of the verb 'run'.",
        es: "Elige la forma correcta del verbo 'run'.",
      },
      options: ["runnning", "running", "runing"],
      correctAnswer: "running"
    },
    {
      question: {
        en: "Complete the sentence: She ___ (watch) TV.",
        es: "Completa la oración: Ella ___ (ver) TV.",
      },
      options: ["is watching", "watch", "watches"],
      correctAnswer: "is watching",
      imageUrl: "/assets/scenes/Flat-creativity-concept-illustration-22.png"
    },
    {
      question: {
        en: "What is the artist doing?",
        es: "¿Qué está haciendo el artista?",
      },
      options: [
        "The artist is sculpting a bust.",
        "The artist paints a wall.",
        "The artist is sleeping."
      ],
      correctAnswer: "The artist is sculpting a bust.",
      imageUrl: "/assets/scenes/Flat-creativity-concept-illustration-2.png"
    },
    {
      question: {
        en: "What are they doing?",
        es: "¿Qué están haciendo ellos?",
      },
      options: [
        "They are shopping together.",
        "They are jumping.",
        "They are watching TV."
      ],
      correctAnswer: "They are shopping together.",
      imageUrl: "/assets/scenes/Father-son-and-daughter-2.png"
    },
    {
      question: {
        en: "Choose the correct spelling: swim",
        es: "Elige la forma correcta en -ing de 'swim'",
      },
      options: ["swiming", "swimming", "swimmin"],
      correctAnswer: "swimming"
    },
    {
      question: {
        en: "Complete: We ___ (study) English at the moment.",
        es: "Completa: Nosotros ___ (estudiar) inglés en este momento.",
      },
      options: ["study", "are studying", "studied"],
      correctAnswer: "are studying"
    }
  ],
  211: [
      {
      question: {
        en: "What is the man doing at the gym?",
        es: "¿Qué está haciendo el hombre en el gimnasio?",
      },
      options: ["He is running", "He is lifting weights", "He is sleeping"],
      correctAnswer: "He is lifting weights",
      imageUrl: "/assets/scenes2/health (1).png",
    },
    {
      question: {
        en: "What are they doing?",
        es: "¿Qué están haciendo ellos?",
      },
      options: ["They are running", "They are cooking", "They are sleeping"],
      correctAnswer: "They are running",
      imageUrl: "/assets/scenes2/health (2).png",
    },
    {
      question: {
        en: "What is the family doing?",
        es: "¿Qué está haciendo la familia?",
      },
      options: ["They are cooking", "They are reading", "They are dancing"],
      correctAnswer: "They are cooking",
      imageUrl: "/assets/scenes2/health (3).png",
    },
    {
      question: {
        en: "What are they doing on the mat?",
        es: "¿Qué están haciendo sobre la colchoneta?",
      },
      options: ["They are eating", "They are meditating", "They are playing tennis"],
      correctAnswer: "They are meditating",
      imageUrl: "/assets/scenes2/health (4).png",
    },
    {
      question: {
        en: "What are they doing?",
        es: "¿Qué están haciendo ellos?",
      },
      options: ["They are walking", "They are cycling", "They are painting"],
      correctAnswer: "They are cycling",
      imageUrl: "/assets/scenes2/health (5).png",
    },
    {
      question: {
        en: "What is the woman doing at the beach?",
        es: "¿Qué está haciendo la mujer en la playa?",
      },
      options: ["She is relaxing at the beach", "She is shopping", "She is hiking"],
      correctAnswer: "She is relaxing at the beach",
      imageUrl: "/assets/scenes2/tour (4).png",
    },
    {
      question: {
        en: "What are the tourists doing?",
        es: "¿Qué están haciendo los turistas?",
      },
      options: ["They are sightseeing", "They are cooking", "They are exercising"],
      correctAnswer: "They are sightseeing",
      imageUrl: "/assets/scenes2/tour (5).png",
    },
    {
      question: {
        en: "What is the woman doing?",
        es: "¿Qué está haciendo la mujer?",
      },
      options: ["She is drinking tea", "She is dancing", "She is painting"],
      correctAnswer: "She is drinking tea",
      imageUrl: "/assets/scenes2/daily (1).png",
    },
    {
      question: {
        en: "What is the man doing?",
        es: "¿Qué está haciendo el hombre?",
      },
      options: ["He is sleeping", "He is reading", "He is exercising"],
      correctAnswer: "He is reading",
      imageUrl: "/assets/scenes2/daily (2).png",
    },
    {
      question: {
        en: "What is she doing?",
        es: "¿Qué está haciendo ella?",
      },
      options: ["She is doing yoga", "She is jumping", "She is washing the dishes"],
      correctAnswer: "She is doing yoga",
      imageUrl: "/assets/scenes2/daily (6).png",
    },
  ],

  301: [
      {
      question: {
        en: "I ___ my homework already.",
        es: "Ya ___ mi tarea.",
      },
      options: ["did", "have done", "was doing"],
      correctAnswer: "have done",
    },
    {
      question: {
        en: "She ___ to the supermarket yesterday.",
        es: "Ella ___ al supermercado ayer.",
      },
      options: ["has gone", "went", "goes"],
      correctAnswer: "went",
    },
    {
      question: {
        en: "They ___ in Paris since 2020.",
        es: "Ellos ___ en París desde 2020.",
      },
      options: ["lived", "have lived", "live"],
      correctAnswer: "have lived",
    },
    {
      question: {
        en: "He ___ a new car last month.",
        es: "Él ___ un coche nuevo el mes pasado.",
      },
      options: ["bought", "has bought", "buys"],
      correctAnswer: "bought",
    },
    {
      question: {
        en: "We ___ already ___ lunch.",
        es: "Nosotros ya ___ ___ el almuerzo.",
      },
      options: ["have / eaten", "ate / have", "eating / have"],
      correctAnswer: "have / eaten",
    },
    {
      question: {
        en: "She ___ her keys this morning.",
        es: "Ella ___ sus llaves esta mañana.",
      },
      options: ["lost", "has lost", "loses"],
      correctAnswer: "has lost",
    },
    {
      question: {
        en: "___ you ever ___ to London?",
        es: "¿Alguna vez ___ ___ a Londres?",
      },
      options: ["Did / go", "Have / been", "Do / go"],
      correctAnswer: "Have / been",
    },
    {
      question: {
        en: "We ___ that movie last weekend.",
        es: "Nosotros ___ esa película el fin de semana pasado.",
      },
      options: ["have seen", "saw", "see"],
      correctAnswer: "saw",
    },
    {
      question: {
        en: "He ___ to bed early last night.",
        es: "Él ___ a la cama temprano anoche.",
      },
      options: ["went", "has gone", "goes"],
      correctAnswer: "went",
    },
    {
      question: {
        en: "They ___ their homework yet.",
        es: "Ellos aún no ___ su tarea.",
      },
      options: ["haven't finished", "didn't finish", "don't finish"],
      correctAnswer: "haven't finished",
    },
  ],
  
  302: [
     {
      question: {
        en: "I ______ visit my grandmother this weekend.",
        es: "Voy a visitar a mi abuela este fin de semana.",
      },
      options: ["will", "am going to"],
      correctAnswer: "am going to",
    },
    {
      question: {
        en: "It's very late! I think I ______ go to bed now.",
        es: "¡Es muy tarde! Creo que me ______ acostar ahora.",
      },
      options: ["will", "am going to"],
      correctAnswer: "will",
    },
    {
      question: {
        en: "Look at those clouds! It ______ rain soon.",
        es: "¡Mira esas nubes! ______ llover pronto.",
      },
      options: ["will", "is going to"],
      correctAnswer: "is going to",
    },
    {
      question: {
        en: "We ______ travel to Japan next summer. We bought the tickets!",
        es: "______ viajar a Japón el próximo verano. ¡Ya compramos los boletos!",
      },
      options: ["will", "are going to"],
      correctAnswer: "are going to",
    },
    {
      question: {
        en: "She’s tired. She ______ take a nap.",
        es: "Está cansada. ______ tomar una siesta.",
      },
      options: ["will", "is going to"],
      correctAnswer: "is going to",
    },
    {
      question: {
        en: "Don’t worry, I ______ help you with your homework.",
        es: "No te preocupes, ______ ayudarte con tu tarea.",
      },
      options: ["will", "am going to"],
      correctAnswer: "will",
    },
    {
      question: {
        en: "They ______ get married next month. The invitations are ready.",
        es: "______ casarse el próximo mes. Las invitaciones están listas.",
      },
      options: ["are going to", "will"],
      correctAnswer: "are going to",
    },
    {
      question: {
        en: "Watch out! You ______ fall!",
        es: "¡Cuidado! ______ caer.",
      },
      options: ["are going to", "will"],
      correctAnswer: "are going to",
    },
    {
      question: {
        en: "Maybe we ______ go to the cinema later.",
        es: "Tal vez ______ vayamos al cine más tarde.",
      },
      options: ["will", "are going to"],
      correctAnswer: "will",
    },
    {
      question: {
        en: "He ______ call you when he arrives.",
        es: "______ llamarte cuando llegue.",
      },
      options: ["will", "is going to"],
      correctAnswer: "will",
    },
  ],

  303: [
      {
      question: {
        en: "It's very tall and made of glass. People work inside and it is in a city.",
        es: "Es muy alto y está hecho de vidrio. La gente trabaja dentro y está en una ciudad.",
      },
      options: ["a tree", "a skyscraper", "a statue"],
      correctAnswer: "a skyscraper",
    },
    {
      question: {
        en: "She has long brown hair, is always smiling and loves to help others.",
        es: "Tiene el cabello largo y castaño, siempre sonríe y le encanta ayudar a los demás.",
      },
      options: ["a teacher", "a doctor", "a friendly girl"],
      correctAnswer: "a friendly girl",
    },
    {
      question: {
        en: "This place has a sofa, a lamp, and pictures on the wall. You relax here.",
        es: "Este lugar tiene un sofá, una lámpara y cuadros en la pared. Aquí te relajas.",
      },
      options: ["a kitchen", "a bedroom", "a living room"],
      correctAnswer: "a living room",
    },
    {
      question: {
        en: "It has four wheels and you can drive it. This one is blue and fast.",
        es: "Tiene cuatro ruedas y puedes conducirlo. Este es azul y rápido.",
      },
      options: ["a bike", "a car", "a bus"],
      correctAnswer: "a car",
    },
    {
      question: {
        en: "Children go here to learn. It has classrooms and a playground.",
        es: "Los niños vienen aquí para aprender. Tiene aulas y un patio de juegos.",
      },
      options: ["a park", "a library", "a school"],
      correctAnswer: "a school",
    },
    {
      question: {
        en: "He is wearing a uniform and helps people travel by air.",
        es: "Lleva uniforme y ayuda a las personas a viajar por aire.",
      },
      options: ["a driver", "a pilot", "a teacher"],
      correctAnswer: "a pilot",
    },
    {
      question: {
        en: "It is small, rectangular, made of leather, and holds your money.",
        es: "Es pequeño, rectangular, hecho de cuero y guarda tu dinero.",
      },
      options: ["a box", "a phone", "a wallet"],
      correctAnswer: "a wallet",
    },
    {
      question: {
        en: "It’s a quiet place in nature, full of trees and fresh air.",
        es: "Es un lugar tranquilo en la naturaleza, lleno de árboles y aire fresco.",
      },
      options: ["a forest", "a street", "a playground"],
      correctAnswer: "a forest",
    },
    {
      question: {
        en: "She is confident, kind, and teaches many students at school.",
        es: "Es segura de sí misma, amable y enseña a muchos estudiantes en la escuela.",
      },
      options: ["a nurse", "a teacher", "a chef"],
      correctAnswer: "a teacher",
    },
    {
      question: {
        en: "It is round, made of metal, and you use it to tell the time.",
        es: "Es redondo, hecho de metal, y lo usas para ver la hora.",
      },
      options: ["a clock", "a cup", "a phone"],
      correctAnswer: "a clock",
    },
  ],

  304: [
      {
      question: {
        en: "What do you think of the new movie?",
        es: "¿Qué opinas de la nueva película?",
      },
      options: [
        "I think it's amazing.",
        "Let's go shopping.",
        "He is my brother.",
      ],
      correctAnswer: "I think it's amazing.",
    },
    {
      question: {
        en: "Do you like living in the city?",
        es: "¿Te gusta vivir en la ciudad?",
      },
      options: [
        "In my opinion, it's too noisy.",
        "Where is the supermarket?",
        "I am eating lunch.",
      ],
      correctAnswer: "In my opinion, it's too noisy.",
    },
    {
      question: {
        en: "How do you feel about studying online?",
        es: "¿Qué piensas sobre estudiar en línea?",
      },
      options: [
        "She studies at night.",
        "I believe it's convenient.",
        "This is my book.",
      ],
      correctAnswer: "I believe it's convenient.",
    },
    {
      question: {
        en: "What do you think about fast food?",
        es: "¿Qué opinas de la comida rápida?",
      },
      options: [
        "He is a doctor.",
        "In my opinion, it's unhealthy.",
        "I go to work by car.",
      ],
      correctAnswer: "In my opinion, it's unhealthy.",
    },
    {
      question: {
        en: "Do you enjoy learning English?",
        es: "¿Disfrutas aprender inglés?",
      },
      options: [
        "I personally love it.",
        "It's raining outside.",
        "He plays football.",
      ],
      correctAnswer: "I personally love it.",
    },
    {
      question: {
        en: "What’s your opinion on social media?",
        es: "¿Cuál es tu opinión sobre las redes sociales?",
      },
      options: [
        "In my opinion, it’s a powerful tool.",
        "She uses Instagram.",
        "He reads a lot of news.",
      ],
      correctAnswer: "In my opinion, it’s a powerful tool.",
    },
    {
      question: {
        en: "How do you feel about working from home?",
        es: "¿Qué piensas sobre trabajar desde casa?",
      },
      options: [
        "I think it’s very flexible.",
        "He walks to the office.",
        "The coffee is ready.",
      ],
      correctAnswer: "I think it’s very flexible.",
    },
    {
      question: {
        en: "You don’t agree with someone’s opinion. What do you say?",
        es: "No estás de acuerdo con la opinión de alguien. ¿Qué dices?",
      },
      options: [
        "You are wrong.",
        "I respect that, but I disagree.",
        "That’s stupid.",
      ],
      correctAnswer: "I respect that, but I disagree.",
    },
    {
      question: {
        en: "She’s right, _____, I still think more research is needed.",
        es: "Tiene razón, _____, aún creo que se necesita más investigación.",
      },
      options: ["so", "because", "however"],
      correctAnswer: "however",
    },
    {
      question: {
        en: "What do you think about online learning?",
        es: "¿Qué opinas sobre el aprendizaje en línea?",
      },
      options: [
        "I prefer it.",
        "I think online learning is more flexible.",
        "I online like it.",
      ],
      correctAnswer: "I think online learning is more flexible.",
    },
  ],

  305: [
       {
      question: {
        en: "You look tired. What should you do?",
        es: "Te ves cansado. ¿Qué deberías hacer?",
      },
      options: ["You should rest.", "You can fly.", "You might dance."],
      correctAnswer: "You should rest.",
    },
    {
      question: {
        en: "It’s very cloudy today.",
        es: "Está muy nublado hoy.",
      },
      options: ["It might rain.", "It must be sunny.", "You should eat."],
      correctAnswer: "It might rain.",
    },
    {
      question: {
        en: "You want to lose weight.",
        es: "Quieres bajar de peso.",
      },
      options: ["You should exercise regularly.", "You might skip breakfast.", "You can eat more chocolate."],
      correctAnswer: "You should exercise regularly.",
    },
    {
      question: {
        en: "You’re not sure where Daniel is.",
        es: "No estás seguro de dónde está Daniel.",
      },
      options: ["He might be stuck in traffic.", "He must be asleep.", "He should eat dinner."],
      correctAnswer: "He might be stuck in traffic.",
    },
    {
      question: {
        en: "You forgot your umbrella and it’s raining.",
        es: "Olvidaste tu paraguas y está lloviendo.",
      },
      options: ["You must take a taxi.", "You could run home.", "You might be asleep."],
      correctAnswer: "You could run home.",
    },
    {
      question: {
        en: "You need to enter a government building.",
        es: "Necesitas entrar a un edificio del gobierno.",
      },
      options: ["You must bring your ID.", "You might run.", "You can sleep now."],
      correctAnswer: "You must bring your ID.",
    },
    {
      question: {
        en: "You are in a restricted area.",
        es: "Estás en una zona restringida.",
      },
      options: ["You can’t go in.", "You might go in.", "You should visit."],
      correctAnswer: "You can’t go in.",
    },
    {
      question: {
        en: "You have a big test tomorrow.",
        es: "Tienes un examen importante mañana.",
      },
      options: ["You should study.", "You might party.", "You must sleep late."],
      correctAnswer: "You should study.",
    },
    {
      question: {
        en: "I have a headache.",
        es: "Tengo dolor de cabeza.",
      },
      options: ["You should take some medicine.", "You could run faster.", "You must sing a song."],
      correctAnswer: "You should take some medicine.",
    },
    {
      question: {
        en: "Do I need a helmet?",
        es: "¿Necesito un casco?",
      },
      options: ["Yes, you must wear one.", "Yes, you could try one.", "No, you might sleep."],
      correctAnswer: "Yes, you must wear one.",
    },
  ],

  306: [
      {
      question: {
        en: "If you heat water to 100°C, it ______.",
        es: "Si calientas el agua a 100°C, ______.",
      },
      options: ["boils", "will boil", "boil"],
      correctAnswer: "boils",
    },
    {
      question: {
        en: "If you study hard, you ______ the test.",
        es: "Si estudias mucho, ______ el examen.",
      },
      options: ["will pass", "pass", "passed"],
      correctAnswer: "will pass",
    },
    {
      question: {
        en: "If I sleep well, I ______ better.",
        es: "Si duermo bien, me ______ mejor.",
      },
      options: ["feel", "will feel", "felt"],
      correctAnswer: "feel",
    },
    {
      question: {
        en: "If it rains tomorrow, we ______ home.",
        es: "Si llueve mañana, ______ en casa.",
      },
      options: ["will stay", "stay", "stayed"],
      correctAnswer: "will stay",
    },
    {
      question: {
        en: "What if I fail the exam?",
        es: "¿Y si repruebo el examen?",
      },
      options: [
        "You will try again.",
        "You try again.",
        "You tried again.",
      ],
      correctAnswer: "You will try again.",
    },
    {
      question: {
        en: "What if he doesn’t answer the phone?",
        es: "¿Y si no contesta el teléfono?",
      },
      options: [
        "I’ll send him a message.",
        "I send a message.",
        "I sending a message.",
      ],
      correctAnswer: "I’ll send him a message.",
    },
    {
      question: {
        en: "If people don’t recycle, the planet ______ worse.",
        es: "Si las personas no reciclan, el planeta ______ peor.",
      },
      options: ["will get", "gets", "would get"],
      correctAnswer: "will get",
    },
    {
      question: {
        en: "Look at those clouds. It ______ rain soon.",
        es: "Mira esas nubes. ______ llover pronto.",
      },
      options: ["is going to", "will", "might"],
      correctAnswer: "is going to",
    },
    {
      question: {
        en: "I think they ______ win the match.",
        es: "Creo que ellos ______ ganarán el partido.",
      },
      options: ["will", "are going to", "going to"],
      correctAnswer: "will",
    },
    {
      question: {
        en: "We ______ have pizza tonight. It's already planned.",
        es: "Nosotros ______ comeremos pizza esta noche. Ya está planeado.",
      },
      options: ["are going to", "will", "might"],
      correctAnswer: "are going to",
    },
  ],


  307: [
  {
      question: {
        en: "I have a sore throat.",
        es: "Tengo dolor de garganta.",
      },
      options: ["Take painkillers", "Drink warm tea and rest your voice"],
      correctAnswer: "Drink warm tea and rest your voice",
    },
    {
      question: {
        en: "You _____ rest and drink fluids.",
        es: "Debes/Deberías descansar y beber líquidos.",
      },
      options: ["must", "should", "can’t"],
      correctAnswer: "should",
    },
    {
      question: {
        en: "My leg hurts. I think I twisted it.",
        es: "Me duele la pierna. Creo que me la torcí.",
      },
      options: ["Keep walking", "You should go to the emergency room"],
      correctAnswer: "You should go to the emergency room",
    },
    {
      question: {
        en: "I feel dizzy.",
        es: "Me siento mareado.",
      },
      options: ["Sit down. I’ll call someone to help you.", "Run around quickly."],
      correctAnswer: "Sit down. I’ll call someone to help you.",
    },
    {
      question: {
        en: "I have a rash.",
        es: "Tengo una erupción.",
      },
      options: [
        "You should see a doctor.",
        "Take an umbrella.",
        "Eat chocolate.",
      ],
      correctAnswer: "You should see a doctor.",
    },
    {
      question: {
        en: "It’s an emergency.",
        es: "Es una emergencia.",
      },
      options: [
        "Can you help me, please?",
        "Call 911 or emergency services.",
        "Take a walk in the park.",
      ],
      correctAnswer: "Call 911 or emergency services.",
    },
    {
      question: {
        en: "You feel chest pain. What should you do?",
        es: "Sientes dolor en el pecho. ¿Qué debes hacer?",
      },
      options: [
        "Wait and see if it gets better.",
        "Call emergency services immediately.",
        "Take a cold shower.",
      ],
      correctAnswer: "Call emergency services immediately.",
    },
    {
      question: {
        en: "Someone fainted. What should you do?",
        es: "Alguien se desmayó. ¿Qué deberías hacer?",
      },
      options: [
        "Give them coffee.",
        "Call emergency services and check their breathing.",
        "Take a picture.",
      ],
      correctAnswer: "Call emergency services and check their breathing.",
    },
    {
      question: {
        en: "I can’t breathe well.",
        es: "No puedo respirar bien.",
      },
      options: ["Stay calm and call for help", "Drink soda", "Start running"],
      correctAnswer: "Stay calm and call for help",
    },
    {
      question: {
        en: "Doctor: What's wrong? / Patient: _____",
        es: "Doctor: ¿Qué sucede? / Paciente: _____",
      },
      options: [
        "I have a stomachache.",
        "Good morning.",
        "What time is it?",
      ],
      correctAnswer: "I have a stomachache.",
    },
  ],

  308: [
      {
      question: {
        en: "You want someone to lower their voice.",
        es: "Quieres que alguien baje la voz.",
      },
      options: ["Be quiet!", "Could you please lower your voice?"],
      correctAnswer: "Could you please lower your voice?",
    },
    {
      question: {
        en: "Someone offers you something, but you don’t want it.",
        es: "Alguien te ofrece algo, pero no lo quieres.",
      },
      options: ["No, thanks. I’m fine.", "I don’t want that!"],
      correctAnswer: "No, thanks. I’m fine.",
    },
    {
      question: {
        en: "You disagree in a meeting.",
        es: "No estás de acuerdo en una reunión.",
      },
      options: [
        "That’s a terrible idea.",
        "I see your point, but I think we could try a different approach.",
      ],
      correctAnswer: "I see your point, but I think we could try a different approach.",
    },
    {
      question: {
        en: "Someone says: 'Would you mind if I opened the window?'",
        es: "Alguien dice: '¿Te importaría si abro la ventana?'",
      },
      options: [
        "Go ahead, that’s fine.",
        "No, I hate windows.",
        "Don’t do it.",
      ],
      correctAnswer: "Go ahead, that’s fine.",
    },
    {
      question: {
        en: "You need help with a task. What do you say?",
        es: "Necesitas ayuda con una tarea. ¿Qué dices?",
      },
      options: [
        "Help me now.",
        "Would you mind helping me with this?",
        "You have to do this.",
      ],
      correctAnswer: "Would you mind helping me with this?",
    },
    {
      question: {
        en: "You can't attend a meeting. How do you respond?",
        es: "No puedes asistir a una reunión. ¿Cómo respondes?",
      },
      options: [
        "I’m afraid I can’t. I’ve already made plans.",
        "I won’t go. Leave me alone.",
        "Why should I care?",
      ],
      correctAnswer: "I’m afraid I can’t. I’ve already made plans.",
    },
    {
      question: {
        en: "Someone disagrees respectfully. What do they say?",
        es: "Alguien no está de acuerdo respetuosamente. ¿Qué dice?",
      },
      options: [
        "You're wrong!",
        "I understand your point, but from my side...",
        "You make no sense.",
      ],
      correctAnswer: "I understand your point, but from my side...",
    },
    {
      question: {
        en: "You want to suggest a compromise.",
        es: "Quieres sugerir un compromiso.",
      },
      options: [
        "Let’s try to find a solution.",
        "I don’t care what you think.",
        "I’m always right.",
      ],
      correctAnswer: "Let’s try to find a solution.",
    },
    {
      question: {
        en: "How do you make a polite request?",
        es: "¿Cómo haces una solicitud educada?",
      },
      options: [
        "Give me that.",
        "Could you please help me with this?",
        "Do it now.",
      ],
      correctAnswer: "Could you please help me with this?",
    },
    {
      question: {
        en: "What is a polite way to decline an offer?",
        es: "¿Cuál es una forma educada de rechazar una oferta?",
      },
      options: [
        "No, thanks. I’m fine.",
        "Why would I want that?",
        "Stop offering things.",
      ],
      correctAnswer: "No, thanks. I’m fine.",
    },
  ],

  309: [
        {
      question: {
        en: "What do people often wear on Halloween?",
        es: "¿Qué suelen usar las personas en Halloween?",
      },
      options: ["Costumes", "Sunglasses", "Uniforms"],
      correctAnswer: "Costumes",
    },
    {
      question: {
        en: "What is common on New Year’s Eve?",
        es: "¿Qué es común en la víspera de Año Nuevo?",
      },
      options: ["Fireworks", "Pumpkins", "Presents"],
      correctAnswer: "Fireworks",
    },
    {
      question: {
        en: "What do families eat during Thanksgiving?",
        es: "¿Qué comen las familias durante el Día de Acción de Gracias?",
      },
      options: ["Turkey", "Pizza", "Hot dogs"],
      correctAnswer: "Turkey",
    },
    {
      question: {
        en: "When is Bonfire Night celebrated in the UK?",
        es: "¿Cuándo se celebra Bonfire Night en el Reino Unido?",
      },
      options: ["November 5th", "July 4th", "December 25th"],
      correctAnswer: "November 5th",
    },
    {
      question: {
        en: "How is Australia Day celebrated?",
        es: "¿Cómo se celebra el Día de Australia?",
      },
      options: ["With barbecues and concerts", "With snowball fights", "With pumpkin carving"],
      correctAnswer: "With barbecues and concerts",
    },
    {
      question: {
        en: "Which word means a special event or party?",
        es: "¿Qué palabra significa un evento o celebración especial?",
      },
      options: ["Festival", "Grocery", "Library"],
      correctAnswer: "Festival",
    },
    {
      question: {
        en: "What do families often do during celebrations?",
        es: "¿Qué suelen hacer las familias durante las celebraciones?",
      },
      options: ["Have a big meal", "Go to school", "Clean the house"],
      correctAnswer: "Have a big meal",
    },
    {
      question: {
        en: "Which celebration is about giving thanks and eating with family?",
        es: "¿Qué celebración trata de dar gracias y comer con la familia?",
      },
      options: ["Thanksgiving", "Easter", "Bonfire Night"],
      correctAnswer: "Thanksgiving",
    },
    {
      question: {
        en: "Which of these is often part of a parade?",
        es: "¿Cuál de estos es parte habitual de un desfile?",
      },
      options: ["Music and floats", "Quiet meditation", "Cooking lessons"],
      correctAnswer: "Music and floats",
    },
    {
      question: {
        en: "Which of these is a common gift-giving celebration in many cultures?",
        es: "¿Cuál de estas es una celebración común para dar regalos en muchas culturas?",
      },
      options: ["Christmas", "Halloween", "Bonfire Night"],
      correctAnswer: "Christmas",
    },
  ],

  310: [
    {
      question: {
        en: "Why did Sarah stay inside in the story 'A Rainy Day'?",
        es: "¿Por qué se quedó Sarah en casa en el cuento 'Un día lluvioso'?",
      },
      options: [
        "Because it was raining.",
        "Because she was sick.",
        "Because she had no book.",
      ],
      correctAnswer: "Because it was raining.",
    },
    {
      question: {
        en: "What did Sarah do when the power went out?",
        es: "¿Qué hizo Sarah cuando se fue la electricidad?",
      },
      options: [
        "She stopped reading.",
        "She went outside.",
        "She lit some candles and continued reading.",
      ],
      correctAnswer: "She lit some candles and continued reading.",
    },
    {
      question: {
        en: "Where was Tom going in the story 'The Lost Wallet'?",
        es: "¿A dónde iba Tom en el cuento 'La billetera perdida'?",
      },
      options: ["To school", "To the park", "To the bank"],
      correctAnswer: "To the park",
    },
    {
      question: {
        en: "How did Tom return the wallet?",
        es: "¿Cómo devolvió Tom la billetera?",
      },
      options: [
        "He took it to the police.",
        "He called the owner.",
        "He left it there.",
      ],
      correctAnswer: "He called the owner.",
    },
    {
      question: {
        en: "How did the man react after receiving the wallet?",
        es: "¿Cómo reaccionó el hombre al recibir la billetera?",
      },
      options: ["He was angry.", "He ignored Tom.", "He thanked Tom."],
      correctAnswer: "He thanked Tom.",
    },
    {
      question: {
        en: "When did the new café open in the story 'The New Café'?",
        es: "¿Cuándo abrió el nuevo café en el cuento 'El nuevo café'?",
      },
      options: ["Last month", "Last week", "Yesterday"],
      correctAnswer: "Last week",
    },
    {
      question: {
        en: "Why did Emily like the new café?",
        es: "¿Por qué le gustó el nuevo café a Emily?",
      },
      options: [
        "Because it was noisy",
        "Because it had good music",
        "Because it was cozy and relaxing",
      ],
      correctAnswer: "Because it was cozy and relaxing",
    },
  ],

  311: [
        {
      question: {
        en: "Which syllable is stressed in the word 'important'?",
        es: "¿Cuál sílaba lleva el acento en la palabra 'important'?",
      },
      options: ["IM-", "-POR-", "-TANT"],
      correctAnswer: "-POR-",
    },
    {
      question: {
        en: "Which of the following is an example of a rising intonation?",
        es: "¿Cuál de las siguientes oraciones tiene entonación ascendente?",
      },
      options: [
        "Do you like pizza?",
        "I love pizza.",
        "Where is the pizza?",
      ],
      correctAnswer: "Do you like pizza?",
    },
    {
      question: {
        en: "How does a Wh- question usually end?",
        es: "¿Cómo termina normalmente una pregunta con Wh-?",
      },
      options: ["With a rising tone", "With a falling tone", "With a flat tone"],
      correctAnswer: "With a falling tone",
    },
    {
      question: {
        en: "What’s the correct stress pattern for the noun 'present'?",
        es: "¿Cuál es el patrón de acento correcto para el sustantivo 'present'?",
      },
      options: ["preSENT", "PREsent", "presENT"],
      correctAnswer: "PREsent",
    },
    {
      question: {
        en: "What kind of intonation is used in lists?",
        es: "¿Qué tipo de entonación se usa en las listas?",
      },
      options: [
        "Rising with each item, falling at the end",
        "Flat throughout",
        "Falling after each item",
      ],
      correctAnswer: "Rising with each item, falling at the end",
    },
    {
      question: {
        en: "In the sentence 'I need to buy a new laptop', which words are stressed?",
        es: "En la oración 'I need to buy a new laptop', ¿cuáles palabras se acentúan?",
      },
      options: [
        "I, to, a",
        "need, buy, laptop",
        "need, to, new",
      ],
      correctAnswer: "need, buy, laptop",
    },
    {
      question: {
        en: "Which sentence shows natural falling intonation in a statement?",
        es: "¿Cuál oración muestra entonación descendente natural en una afirmación?",
      },
      options: [
        "Are you okay?",
        "I like chocolate.",
        "Can you help me?",
      ],
      correctAnswer: "I like chocolate.",
    },
  ],

};

export default questionsData;
