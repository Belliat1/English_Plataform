import { Level } from "./types"; // Ajusta esta ruta según tu estructura

const levels  = [
    {
      id: 1,
      title: "Principiante",
      subtitle: "(Starters) A1",
      progress: 100,
      modules: [
        {
            id: 101,
            title: "Getting Started: The English Alphabet and Numbers",
            status: "completed",
            description: "Aprende las bases del alfabeto inglés y números básicos para construir tu vocabulario.",
            subtitle: "Aprende las bases del alfabeto inglés y números básicos para construir tu vocabulario.",
            videoUrl: "https://vimeo.com/1102844251",
            extraText: {
              downloads: [
                {
                  label: "Descargar Abecedario",
                  url: "/downloads/abecedario.pdf"
                },
                {
                  label: "Guía de Números",
                  url: "/downloads/numeros.pdf"
                }
              ]
            },
            resources: [
              {
                id: 1,
                name: "Ejercicio del Alfabeto",
                path: "/resources/1",
                component: "AlphabetExercise",
                description:"Escucha y escribe la Letra",
                image: "/assets/img/ejercicio-alfabeto.png"
                
              },
              {
                id: 2,
                name: "Práctica de Números",
                path: "/resources/2",
                component: "NumbersPractice",
                description:"Escucha y escribe el Número",
                image: "/assets/img/practica-numeros.png",
              },
              {
                id: 3,
                name: "Práctica de Números: Match",
                path: "/resources/3",
                component: "NumberMatchingExercise",
                description:"Haz Match entre la imagen y el texto",
                image: "/assets/img/NumberMatchingExercise.png",
              },
            ]
            
          },
          {
            id: 102,
            title: "Greetings and Basic Politeness",
            status: "completed",
            description: "Domina las frases comunes y cómo interactuar de manera cortés.",
            subtitle: "Domina las frases comunes y cómo interactuar de manera cortés.",
            videoUrl: "/assets/video/Modulo 2.mp4",
            resources: [
              {
                id: 4,
                name: "Vocabulario: Greetings",
                path: "/resources/4",
                component: "GreetingsFlashcards",
                description:"Aprende Vocabulario",
                image: "/assets/img/GreetingsFlashcards.png",
              },
              {
                id:5,
                name: "Quiz: Greetings and Politeness",
                path: "/resources/5",
                component: "GreetingsQuizForm",
                description: "Pon a prueba lo que sabes sobre saludos, despedidas y expresiones básicas de cortesía.",
                image: "/assets/img/GreetingsQuizForm.png",
              },
              {
                id: 6,
                name: "Flashcards: Times of the Day",
                path: "/resources/6",
                component: "TimeFlashcards",
                description: "Aprende los momentos del día en inglés con ilustraciones y audio interactivo para mejorar tu vocabulario.",
                image: "/assets/img/TimeFlashcards.png"
              }

            ],
          },
          {
            id: 103,
            title: "Introducing Yourself and Others",
            status: "completed",
            description: "Aprende cómo presentarte y presentar a otros de manera efectiva.",
            subtitle: "Aprende cómo presentarte y presentar a otros de manera efectiva.",
            videoUrl: "/assets/video/Modulo 3.mp4",
            resources: [
              {
                id: 7,
                name: "Flashcards: Countries and Nationalities",
                path: "/resources/7",
                component: "CountryFlashcards",
                description: "Aprende los nombres de países y nacionalidades en inglés con imágenes y sonido.",
                image: "/assets/img/CountryFlashcards.png"
              },
              {
                id: 8,
                name: "Question Board: Personal Information",
                path: "/resources/8",
                component: "NumberedBoard",
                description: "Haz clic en los números para descubrir preguntas básicas en inglés sobre información personal.",
                image: "/assets/img/NumberedBoard.png"
              }
            
            ],
          },
          {
            id: 104,
            title: "The Verb to Be in Depth",
            status: "completed",
            description: "Explora las múltiples formas y usos del verbo 'to be' en inglés.",
            subtitle: "Explora las múltiples formas y usos del verbo 'to be' en inglés.",
            videoUrl: "/assets/video/Modulo 4.mp4",
            resources: [
              {
                id: 9,
                name: "Flashcards: Subject Pronouns",
                path: "/resources/9",
                component: "SubjectFlashcards",
                description: "Aprende los pronombres personales en inglés con imágenes y sonido interactivo.",
                image: "/assets/img/SubjectFlashcards.png"
              },
              {
                id: 10,
                name: "Quiz: Subject Pronouns",
                path: "/resources/10",
                component: "SubjectPronounsQuiz",
                description: "Practica los pronombres personales en inglés completando frases con la opción correcta.",
                image: "/assets/img/SubjectPronounsQuiz.png"
              },
              {
                id: 11,
                name: "Flashcards: Professions",
                path: "/resources/11",
                component: "ProfessionFlashcards",
                description: "Aprende vocabulario sobre profesiones en inglés con tarjetas ilustradas y audio.",
                image: "/assets/img/ProfessionFlashcards.png"
              },
              {
                id: 12,
                name: "Quiz: Verb To Be + Professions",
                path: "/resources/12",
                component: "ToBeProfessionsExercise",
                description: "Practica el uso correcto del verbo to be completando frases con profesiones y pronombres personales en inglés.",
                image: "/assets/img/ToBeProfessions.png"
              }
            ],
          },
          {
            id: 105,
            title: "Everyday Objects and Basic Adjectives",
            status: "completed",
            description: "Aprende cómo describir objetos cotidianos usando adjetivos básicos.",
            subtitle: "Aprende cómo describir objetos cotidianos usando adjetivos básicos.",
            videoUrl: "/assets/video/Modulo 5.mp4",
            resources: [
              {
                id: 13,
                name: "Flashcards: Clothes",
                path: "/resources/13",
                component: "clothesFlashcards",
                description: "Aprende las prendas de vestir en inglés con imágenes llamativas y audio interactivo.",
                image: "/assets/img/ClothesFlashcards.png"
              },
              {
                id: 14,
                name: "Flashcards: Bathroom Objects",
                path: "/resources/14",
                component: "BathroomFlashcards",
                description: "Aprende los objetos del baño en inglés con imágenes ilustrativas y audio interactivo.",
                image: "/assets/img/BathroomFlashcards.png" 
              },
              {
                id: 15,
                name: "Flashcards: Technology Devices",
                path: "/resources/15",
                component: "TechFlashcards",
                description: "Aprende dispositivos tecnológicos en inglés con tarjetas visuales y sonido interactivo.",
                image: "/assets/img/TechFlashcards.png"
              },
              {
                id: 16,
                name: "Flashcards: In the Kitchen",
                path: "/resources/16",
                component: "KitchenFlashcards",
                description: "Aprende los nombres de utensilios y electrodomésticos de cocina en inglés con imágenes y audio interactivo.",
                image: "/assets/img/KitchenFlashcards.png"
              },
              {
                id: 17,
                name: "Flashcards: School Objects",
                path: "/resources/17",
                component: "SchoolFlashcards",
                description: "Aprende vocabulario de objetos escolares con imágenes ilustrativas y audio interactivo.",
                image: "/assets/img/SchoolFlashcards.png"
              },
              {
                id: 18, // ✅ Usa un ID único y consecutivo según tu estructura
                name: "Flashcards: Furniture",
                path: "/resources/18",
                component: "FurnitureFlashcards",
                description: "Aprende el vocabulario esencial de muebles en inglés con tarjetas ilustradas y audio.",
                image: "/assets/furniture/Bookshelf.png" // ✅ Puedes elegir otro ítem destacado
              },
              {
                id: 19,
                name: "Flashcards: Insects",
                path: "/resources/19",
                component: "InsectFlashcards",
                description: "Aprende nombres de insectos en inglés con ilustraciones divertidas y traducción al español.",
                image: "/assets/img/InsectFlashcards.png"
              }


              
            ],
          },
          {
            id: 106,
            title: "Talking About Places and Directions",
            status: "completed",
            description: "Practica cómo describir lugares y dar direcciones.",
            subtitle: "Practica cómo describir lugares y dar direcciones",
            videoUrl: "/assets/video/Modulo 6.mp4",
            resources: [
              {
                id: 20,
                name: "Flashcards: Prepositions of Place",
                path: "/resources/20",
                component: "PrepositionsFlashcards",
                description: "Aprende las preposiciones de lugar en inglés con imágenes ilustrativas y audio interactivo.",
                image: "/assets/img/PrepositionsFlashcards.png"
              },
              {
                id: 21,
                name: "Directions: True or False",
                path: "/resources/21",
                component: "DirectionsExercise",
                description: "Practica las direcciones en inglés con un ejercicio interactivo tipo verdadero o falso, basado en un mapa de ciudad.",
                image: "/assets/img/DirectionsExercise.png"
              },
              {
                id: 22,
                name: "Flashcards: City Buildings",
                path: "/resources/22",
                component: "BuildingsFlashcards",
                description: "Aprende los nombres de edificios comunes en inglés con imágenes llamativas y audio interactivo.",
                image: "/assets/img/BuildingsFlashcards.png"
              },
              {
                id: 23,
                name: "Quiz: Prepositions of Place",
                path: "/resources/23",
                component: "PrepositionsQuiz",
                description: "Selecciona la preposición correcta para describir la posición de la rana con respecto a la caja.",
                image: "/assets/img/PrepositionsQuiz.png"
              }


            ],
          },
          {
            id: 107,
            title: "Colors, Numbers (21-100), and Dates",
            status: "completed",
            description: "Aprende a describir colores, números y fechas con fluidez.",
            subtitle: "Aprende a describir colores, números y fechas con fluidez.",
            videoUrl: "/assets/video/Modulo 7.mp4",
            resources: [
              {
                id: 24,
                name: "Flashcards: Colors",
                path: "/resources/24",
                component: "ColorFlashcards",
                description: "Aprende los colores en inglés con tarjetas ilustradas y sonido interactivo.",
                image: "/assets/img/ColorFlashcards.png"
              },
              {
                id: 25,
                name: "Flashcards: Months of the Year",
                path: "/resources/25",
                component: "MonthsFlashcards",
                description: "Aprende los meses del año en inglés con imágenes y pronunciación interactiva.",
                image: "/assets/img/MonthsFlashcards.png"
              },
              {
                id: 26,
                name: "Flashcards: Days of the Week",
                path: "/resources/26",
                component: "WeekdaysFlashcards",
                description: "Aprende los días de la semana en inglés con imágenes llamativas y audio interactivo.",
                image: "/assets/img/WeekdaysFlashcards.png"
              },
              {
                id: 27,
                name: "Quiz: Numbers 21 to 100",
                path: "/resources/27",
                component: "NumberMatchingExercise21to100",
                description: "Empareja los números del 21 al 100 con su nombre en inglés usando imágenes y botones interactivos.",
                image: "/assets/img/NumberMatching21-100.png"
              },
              {
                id: 28,
                name: "Quiz: Write the Colors",
                path: "/resources/28",
                component: "ColorWritingExercise",
                description: "Escribe el nombre de cada color en inglés observando la imagen. Luego revisa tus respuestas.",
                image: "/assets/img/ColorWritingQuiz.png"
              }



            ],
          },
          {
            id: 108,
            title: "Describing People and Things",
            status: "completed",
            description: "Desarrolla habilidades para describir personas y objetos en detalle.",
            subtitle: "Desarrolla habilidades para describir personas y objetos en detalle.",
            videoUrl: "/assets/video/Modulo 8.mp4",
            resources: [
              {
                id: 29,
                name: "Categorize: Describing People (with images)",
                path: "/resources/29",
                component: "DescribingPeopleCategorizeWithImages",
                description: "Clasifica las palabras con imagen en la categoría correcta para describir personas. Traducción incluida para tipo de cuerpo.",
                image: "/assets/img/DescribingPeopleCategorizeWithImages.png"
              },
              {
                id: 30,
                name: "Match: Describing Avatars",
                path: "/resources/30",
                component: "MatchAvatarDescriptions",
                description: "Empareja los avatares con sus descripciones físicas en inglés.",
                image: "/assets/img/MatchAvatarDescriptions.png"
              },
              {
                id: 31,
                name: "Flashcards: Adjectives",
                path: "/resources/31",
                component: "AdjectiveFlashcards",
                description: "Aprende adjetivos en inglés organizados por categorías como colores, tamaño, personalidad y más, con imágenes y audio interactivo.",
                image: "/assets/img/AdjectiveFlashcards.png"
              }




            ],
          },
          {
            id: 109,
            title: "Talking About Your Routine",
            status: "completed",
            description: "Domina cómo describir tus actividades diarias.",
            subtitle: "Domina cómo describir tus actividades diarias.",
            videoUrl: "/assets/video/Modulo 9.mp4",
            resources: [
              {
                id: 32,
                name: "Daily Routine: Drag & Drop",
                path: "/resources/32",
                component: "DailyRoutineDragDrop",
                description: "Arrastra cada imagen a la parte del día correspondiente: mañana, tarde o noche.",
                image: "/assets/img/DailyRoutineDragDrop.png"
              },
              {
                id: 33,
                name: "Flashcards: Daily Routines",
                path: "/resources/33",
                component: "DailyRoutineFlashcards",
                description: "Aprende frases en inglés sobre rutinas diarias con imágenes y audio interactivo.",
                image: "/assets/img/DailyRoutineFlashcards.png"
              }

            ],
          },
          {
            id: 110,
            title: "Practical Phrases: Shopping and Ordering Food",
            status: "completed",
            description: "Aprende frases útiles para ir de compras y ordenar comida.",
            subtitle: "Aprende frases útiles para ir de compras y ordenar comida.",
            videoUrl: "/assets/video/Modulo 10.mp4",
            resources: [
              {
                id: 34,
                name: "Flashcards: Types of Shops",
                path: "/resources/34",
                component: "ShopFlashcards",
                description: "Aprende diferentes tipos de tiendas en inglés con imágenes y traducción al español.",
                image: "/assets/img/ShopFlashcards.png"
              },
              {
                id: 35,
                name: "Match: Shops with Images",
                path: "/resources/35",
                component: "MatchShopItems",
                description: "Empareja cada tienda con su imagen correspondiente.",
                image: "/assets/img/MatchShopItems.png"
              },
              {
                id: 36,
                name: "Complete: Sentences with Shops",
                path: "/resources/36",
                component: "ShopSentenceCompletion",
                description: "Completa las oraciones seleccionando el tipo de tienda adecuado.",
                image: "/assets/img/ShopSentenceCompletion.png"
              },
              {
                id: 37,
                name: "Flashcards: Practical Phrases (Shopping)",
                path: "/resources/37",
                component: "ShoppingPhrasesFlashcards",
                description: "Aprende frases comunes en inglés para comprar y ordenar comida con imágenes y audio.",
                image: "/assets/img/ShoppingPhrasesFlashcards.png"
              },
              {
                id: 38,
                name: "Flashcards: Food & Drinks",
                path: "/resources/38",
                component: "FoodFlashcards",
                description: "Aprende vocabulario sobre alimentos y bebidas en inglés con imágenes y audio interactivo.",
                image: "/assets/img/FoodFlashcards.png"
              }





            ],
          },
          {
            id: 111,
            title: "Common Questions and Responses",
            status: "completed",
            description: "Domina preguntas y respuestas frecuentes en inglés.",
            subtitle: "Domina preguntas y respuestas frecuentes en inglés.",
             videoUrl: "/assets/video/Modulo 11.mp4",
            resources: [
              {
                id: 51,
                name: "Match: Questions & Answers",
                path: "/resources/51",
                component: "MatchQuestions",
                description: "Empareja cada dato con la pregunta que corresponde en inglés.",
                image: "/assets/img/MatchQuestions.png"
              }

            ],
          },
          {
            id: 112,
            title: "Final Practice: Real-Life Scenarios",
            status: "completed",
            description: "Pon en práctica todo lo aprendido en escenarios reales.",
            subtitle: "Pon en práctica todo lo aprendido en escenarios reales.",
            videoUrl: "/assets/video/Modulo12.mp4",
            resources: [
            ],
          },
      ],
    },
    {
      id: 2,
      title: "Intermedio",
      subtitle: "(Improvers) A2 - B1",
      progress: 0,
      modules: [
        {
            id: 201,
            title: "Building Longer Sentences",
            status: "locked",
            description: "Aprende a construir oraciones más largas y complejas para expresarte mejor.",
            subtitle: "Aprende a construir oraciones más largas y complejas para expresarte mejor.",
            videoUrl: "/assets/video/Modulo 2.1.mp4",
            resources: [
              {
                id: 52,
                name: "Flashcards: Connectors",
                path: "/resources/52",
                component: "ConnectorsFlashcards",
                description: "Aprende conectores clave para construir oraciones más largas y complejas.",
                image: "/assets/img/onnectors-flashcards.png"
              },

              {
                id: 53,
                name: "Quiz: Connectors in English",
                path: "/resources/53",
                component: "ConnectorsQuiz",
                description: "Practica conectores como although, but, because, so, etc. completando frases en inglés.",
                image: "/assets/img/ConnectorsQuiz.png"
              },
              {
                id: 54,
                name: "Connectors: Conversation Exercise",
                path: "/resources/54",
                component: "ConnectorsDialogueExercise",
                description: "Completa los conectores en una conversación realista. Arrastra las palabras correctas al espacio en blanco.",
                image: "/assets/img/connectors-conversation.png"
              }


            ],
          },
          {
            id: 202,
            title: "Describing Daily Routines and Habits",
            status: "locked",
            description: "Domina cómo describir rutinas diarias y hábitos en detalle.",
            subtitle: "Domina cómo describir rutinas diarias y hábitos en detalle.",
            videoUrl: "/assets/video/Modulo 2.2.mp4",
            resources: [
              {
                  id: 55, // Usa un ID único y consecutivo
                  name: "Frequency Quiz: Adverbs of Frequency",
                  path: "/resources/55", // Ajusta el path si usas otro sistema de rutas
                  component: "FrequencyQuiz",
                  description: "Selecciona el adverbio de frecuencia correcto basado en la imagen y la pista visual.",
                  image: "/assets/img/frequency-quiz-cover.png" // Asegúrate de tener esta imagen de portada
                }

            ],
          },
          {
            id: 203,
            title: "Talking About the Past: Past Simple",
            status: "locked",
            description: "Aprende a hablar sobre eventos pasados usando el tiempo pasado simple.",
            subtitle: "Aprende a hablar sobre eventos pasados usando el tiempo pasado simple.",
            videoUrl: "/assets/video/Modulo 2.3.mp4",
            resources: [
              {
                id: 56,
                name: "Flashcards: Irregular Verbs",
                path: "/resources/56",
                component: "IrregularVerbsFlashcards",
                description: "Practica los verbos irregulares en inglés con imágenes, pronunciación y traducción.",
                image: "/assets/img/irregular-verbs.png"
              },
              {
                id: 57,
                name: "Exercise: Past Simple Irregular Verbs",
                path: "/resources/57",
                component: "PastSimpleQuiz",
                description: "Completa las oraciones eligiendo la forma correcta de los verbos irregulares en pasado.",
                image: "/assets/img/past-simple-irregular.png"
              },
              {
                id: 58,
                name: "Past Simple Fill-in-the-Blanks",
                path: "/resources/58",
                component: "PastSimpleFillExercise",
                description: "Completa los espacios con el pasado de los verbos dados.",
                image: "/assets/img/past-simple-fill.png"
              }



            ],
          },
          {
            id: 204,
            title: "Expressing Plans and Intentions: Going to and Will",
            status: "locked",
            description: "Domina cómo expresar planes e intenciones futuras usando 'going to' y 'will'.",
            subtitle: "Domina cómo expresar planes e intenciones futuras usando 'going to' y 'will'.",
            videoUrl: "/assets/video/Modulo 2.4.mp4",
            resources: [
              {
                id: 59,
                name: "Will vs Be Going To (10 preguntas)",
                path: "/resources/59",
                component: "WillVsGoingToExercise",
                description: "Ejercicio interactivo para practicar el uso de 'will' y 'be going to'.",
                image: "/assets/img/will-goingto-quiz.png"
              },
              {
              id: 60,
              name: "Vocabulario para planes y predicciones",
              path: "/resources/60",
              component: "FutureVocabularyFlashcards",
              description: "Flashcards de verbos y frases útiles para hablar del futuro.",
              image: "/assets/img/future-vocab-flashcards.png"
            },
            


            ],
          },
          {
            id: 205,
            title: "Giving Directions and Talking About Places",
            status: "locked",
            description: "Aprende a dar direcciones claras y hablar sobre lugares específicos.",
            subtitle: "Aprende a dar direcciones claras y hablar sobre lugares específicos.",
            videoUrl: "/assets/video/Modulo 2.5.mp4",
            resources: [
              {
              id: 61,
              name: "Traffic Signs & Directions",
              path: "/resources/61",
              component: "TrafficSignsQuiz",
              description: "Practica vocabulario y comprensión con señales de tránsito y direcciones comunes.",
              image: "/assets/img/traffic-signs-cover.png",
            }
            ],
          },
          {
            id: 206,
            title: "Talking About Preferences and Opinions",
            status: "locked",
            description: "Domina cómo expresar tus preferencias y opiniones en inglés.",
            subtitle: "Domina cómo expresar tus preferencias y opiniones en inglés.",
            videoUrl: "/assets/video/Modulo 2.6.mp4",
            resources: [
              {
                id: 63,
                name: "Speaking: Giving Your Opinion",
                path: "/resources/63",
                component: "GivingOpinionLesson",
                description: "Lee un diálogo, responde preguntas de comprensión y practica cómo dar tu opinión.",
                image: "/assets/img/giving-opinion.png"
              }

            ],
          },
          {
            id: 207,
            title: "Introduction to Present Perfect",
            status: "locked",
            description: "Familiarízate con el presente perfecto y cómo usarlo en tus conversaciones.",
            subtitle: "Familiarízate con el presente perfecto y cómo usarlo en tus conversaciones.",
            videoUrl: "/assets/video/Modulo 2.7.mp4",
            resources: [
              {
                id: 64,
                name: "Flashcards: Verbos Irregulares",
                path: "/resources/64",
                component: "IrregularVerbsFullFlashcards",
                description: "Aprende los verbos irregulares en inglés con sus tres formas: infinitivo, pasado y participio.",
                image: "/assets/img/irregular-verbs-flashcards.png"
              },
              {
                id: 65,
                name: "Ejercicio: Present Perfect",
                path: "/resources/65",
                component: "PresentPerfectQuiz",
                description: "Practica el uso del present perfect con oraciones completas y opciones múltiples.",
                image: "/assets/img/present-perfect-quiz.png"
              },
              {
                id: 66,
                name: "Quiz: Verbos irregulares",
                path: "/resources/66",
                component: "IrregularVerbQuiz",
                description: "Practica las formas del pasado y participio de verbos irregulares.",
                image: "/assets/img/irregular-verbs-quiz.png"
              }


            ],
          },
          {
            id: 208,
            title: "Making Comparisons",
            status: "locked",
            description: "Aprende a hacer comparaciones usando adjetivos y estructuras comunes.",
            subtitle: "Aprende a hacer comparaciones usando adjetivos y estructuras comunes.",
            videoUrl: "/assets/video/Modulo 2.8.mp4",
            resources: [
              
              {
                id: 68,
                name: "Flashcards: Comparativos y Superlativos",
                path: "/resources/68",
                component: "ComparativesAndSuperlativesFlashcards",
                description: "Aprende a formar y usar los comparativos y superlativos en inglés con tarjetas interactivas.",
                image: "/assets/img/comparatives-flashcards.png"
              },
              {
                id: 67,
                name: "Comparatives: Opposites Exercise",
                path: "/resources/67",
                component: "ComparativeOppositesExercise",
                description: "Practica los adjetivos comparativos escribiendo el opuesto correcto.",
                image: "/assets/img/comparatives-opposites.png"
              },

              

            ],
          },
          {
            id: 209,
            title: "Phrasal Verbs for Daily Life",
            status: "locked",
            description: "Domina los phrasal verbs más comunes para la vida diaria.",
            subtitle: "Domina los phrasal verbs más comunes para la vida diaria.",
            videoUrl: "/assets/video/Modulo 2.9.mp4",
            resources: [
              {
                id: 69,
                name: "Flashcards: Phrasal Verbs",
                path: "/resources/69",
                component: "PhrasalVerbsFlashcards",
                description: "Aprende phrasal verbs comunes con definiciones y ejemplos.",
                image: "/assets/img/phrasal-flashcards.png"
              },
              {
                id: 70,
                name: "Frases con Phrasal Verbs",
                path: "/resources/70",
                component: "PhrasalVerbSentenceExercise",
                description: "Completa las frases con el phrasal verb correcto.",
                image: "/assets/img/phrasal-sentences.png"
              },
              {
                id: 71,
                name: "Conversaciones con Phrasal Verbs",
                path: "/resources/71",
                component: "PhrasalConversationPractice",
                description: "Elige el phrasal verb adecuado según el diálogo.",
                image: "/assets/img/phrasal-dialogue.png"
              },
              {
                id: 72,
                name: "Match: Phrasal Verbs y Significados",
                path: "/resources/72",
                component: "PhrasalVerbMatchExercise",
                description: "Empareja cada phrasal verb con su significado correcto.",
                image: "/assets/img/phrasal-match.png"
              },
            ],
          },
          {
            id: 210,
            title: "Present Continuous",
            status: "locked",
            description: "Aprende a usar el presente continuo para hablar de acciones que están ocurriendo en este momento.",
            subtitle: "Refuerza tu comprensión del presente continuo con actividades interactivas.",
            videoUrl: "/assets/video/Modulo 2.10.mp4",
            resources: [
              {
                id: 73,
                name: "Ejercicio de Verbos en -ing",
                path: "/resources/73",
                component: "PresentContinuousVerbEndingsExercise",
                description: "Practica la forma correcta de los verbos en presente continuo agregando la terminación -ing.",
                image: "/assets/img/verb-ing-exercise.png",
              },

              {
                id: 74,
                name: "Actividad de Completar Oraciones",
                path: "/resources/74",
                component: "PresentContinuousFillInTheBlanks",
                description: "Completa oraciones con la forma correcta del presente continuo.",
                image: "/assets/img/fill-in-blanks.png",
              },

              {
                id: 75,
                name: "Juego de Escenas con Verbos",
                path: "/resources/75",
                component: "PresentContinuousSceneGame",
                description: "Observa la escena y selecciona el verbo en presente continuo que describe la acción.",
                image: "/assets/img/scene-game.png",
              },

              {
                id: 76,
                name: "Práctica de Escritura: ¿Qué están haciendo?",
                path: "/resources/76",
                component: "PresentContinuousWritingActivity",
                description: "Escribe frases en presente continuo a partir de imágenes o descripciones.",
                image: "/assets/img/writing-activity.png",
              }

            ],
          }
          ,
          {
            id: 211,
            title: "Handling Real-Life Scenarios",
            status: "locked",
            description: "Practica cómo manejar situaciones reales en inglés.",
            subtitle: "Practica cómo manejar situaciones reales en inglés.",
            videoUrl: "/assets/video/Modulo 2.11.mp4",
            resources: [
              {
                id: 111,
                name: "Ejercicio de Escenarios Reales",
                path: "/resources/111",
                component: "RealLifeScenesExercise",
                description: "Observa situaciones cotidianas y elige la frase correcta para describirlas.",
                image: "/assets/img/real-life-scenes.png"
              },
      
              {
                id: 113,
                name: "Práctica de Conversaciones",
                path: "/resources/113",
                component: "RealConversationPractice",
                description: "Simula conversaciones reales usando presente continuo.",
                image: "/assets/img/conversation-practice.png"
              },
              {
                id: 114,
                name: "Juego de Roles",
                path: "/resources/114",
                component: "RolePlayGame",
                description: "Actúa con un compañero diferentes escenarios usando verbos en presente continuo.",
                image: "/assets/img/roleplay.png"
              },
              {
                id: 115,
                name: "Actividad de Escritura",
                path: "/resources/115",
                component: "WritingRealScenesActivity",
                description: "Escribe descripciones sobre lo que las personas están haciendo en distintos escenarios.",
                image: "/assets/img/writing-real-scenes.png"
              }

            ],
          },
          {
            id: 212,
            title: "Final Review: Integration and Practice",
            status: "locked",
            description: "Integra todo lo aprendido en una revisión final y práctica intensiva.",
            subtitle: "Integra todo lo aprendido en una revisión final y práctica intensiva.",
            videoUrl: "/assets/video/Modulo 2.12.mp4",
            resources: [
            ],
          },
      ],
    },
    {
      id: 3,
      title: "Intermedio - Avanzado",
      subtitle: "(Explorers) B1 – B1+",
      progress: 0,
      modules: [
        {
            id: 301,
            title: "Mastering Past Tenses: Past Simple vs. Present Perfect",
            status: "locked",
            description: "Aprende la diferencia entre el pasado simple y el presente perfecto y cuándo usarlos.",
            subtitle: "Aprende la diferencia entre el pasado simple y el presente perfecto y cuándo usarlos.",
            videoUrl: "/assets/video/Modulo 3.1.mp4",
            resources: [
              {
                id: 121,
                name: "Ejercicios de Pasado Simple y Presente Perfecto",
                path: "/resources/121",
                component: "PastVsPresentPerfectExercise",
                description: "Practica la diferencia entre el pasado simple y el presente perfecto.",
                image: "/assets/img/past-vs-present.png",
              },
              {
                id: 123,
                name: "Práctica de Conversaciones",
                path: "/resources/123",
                component: "TenseConversationPractice",
                description: "Participa en conversaciones usando correctamente los tiempos verbales.",
                image: "/assets/img/conversation-tense-practice.png",
              },
              {
                id: 124,
                name: "Juego de Diferencias",
                path: "/resources/124",
                component: "TenseDifferenceGame",
                description: "Identifica las diferencias en el uso de pasado simple y presente perfecto.",
                image: "/assets/img/difference-game.png",
              },
              {
                id: 125,
                name: "Actividad de Escritura",
                path: "/resources/125",
                component: "TenseWritingActivity",
                description: "Escribe oraciones o párrafos usando correctamente los tiempos verbales.",
                image: "/assets/img/writing-activity-tense.png",
              }
            ],
          },
          {
            id: 302,
            title: "Talking About Future Plans: Future Simple and Going to",
            status: "locked",
            description: "Domina cómo hablar de planes futuros con 'will' y 'going to'.",
            subtitle: "Domina cómo hablar de planes futuros con 'will' y 'going to'.",
            videoUrl: "/assets/video/Modulo 3.2.mp4",
            resources: [
              {
                id: 126,
                name: "Ejercicio de Planes Futuros",
                path: "/resources/126",
                component: "FuturePlansExercise",
                description: "Practica cómo hablar de planes futuros usando 'will' y 'going to'.",
                image: "/assets/img/future-plans-exercise.png"
              },
              {
                id: 127,
                name: "Práctica de Conversaciones",
                path: "/resources/127",
                component: "FutureConversationPractice",
                description: "Escucha y completa conversaciones sobre el futuro.",
                image: "/assets/img/future-conversations.png"
              },
              {
                id: 130,
                name: "Actividad de Escritura",
                path: "/resources/130",
                component: "FutureWritingActivity",
                description: "Escribe sobre tus planes y predicciones futuras.",
                image: "/assets/img/future-writing.png"
              }

            ],
          },
          {
            id: 303,
            title: "Expanding Vocabulary: Describing People, Places, and Things",
            status: "locked",
            description: "Enriquece tu vocabulario con palabras para describir personas, lugares y objetos.",
            subtitle: "Enriquece tu vocabulario con palabras para describir personas, lugares y objetos.",
            videoUrl: "/assets/video/Modulo 3.3.mp4",
            resources: [
            {
              id: 131,
              name: "Guía de Descripción Avanzada",
              path: "/resources/131",
              component: "AdvancedDescriptionGuide",
              description: "Aprende estructuras y vocabulario avanzado para describir personas, lugares y situaciones.",
              image: "/assets/img/advanced-description-guide.png"
            },
            {
              id: 132,
              name: "Ejercicios de Expresión",
              path: "/resources/132",
              component: "DescriptionExpressionExercises",
              description: "Practica cómo usar adjetivos, conectores y detalles para expresar ideas complejas.",
              image: "/assets/img/expression-exercises.png"
            },
            {
              id: 133,
              name: "Juego de Descripciones",
              path: "/resources/133",
              component: "DescriptionGame",
              description: "Adivina personajes o escenas a partir de descripciones y mejora tu comprensión.",
              image: "/assets/img/description-game.png"
            },
            {
              id: 134,
              name: "Práctica de Escritura",
              path: "/resources/134",
              component: "DescriptionWritingActivity",
              description: "Redacta descripciones detalladas aplicando todo lo aprendido en esta unidad.",
              image: "/assets/img/writing-description.png"
            },
            {
              id: 219,
              name: "Flashcards de Deportes",
              path: "/resources/219",
              component: "SportsFlashcards",
              description: "Aprende vocabulario de deportes con tarjetas interactivas que incluyen imagen, audio y traducción.",
              image: "/assets/img/flashcards-sports.png"
            }


            ],
          },
          {
            id: 304,
            title: "Expressing Opinions and Preferences",
            status: "locked",
            description: "Aprende cómo dar opiniones y expresar preferencias con mayor fluidez.",
            subtitle: "Aprende cómo dar opiniones y expresar preferencias con mayor fluidez",
            videoUrl: "/assets/video/Modulo 3.4.mp4",
            resources: [
                {
                  id: 136,
                  name: "Ejercicio de Opiniones",
                  path: "/resources/136",
                  component: "OpinionExpressionExercise",
                  description: "Practica expresar tus opiniones con frases útiles y situaciones comunes.",
                  image: "/assets/img/opinion-exercise.png",
                },
                {
                  id: 138,
                  name: "Actividad de Debate",
                  path: "/resources/138",
                  component: "DebateActivity",
                  description: "Participa en actividades de debate donde puedes comparar diferentes puntos de vista.",
                  image: "/assets/img/debate-activity.png",
                },
                {
                  id: 139,
                  name: "Juego de Opiniones",
                  path: "/resources/139",
                  component: "OpinionGame",
                  description: "Un juego interactivo para practicar cómo dar y argumentar opiniones.",
                  image: "/assets/img/opinion-game.png",
                },
                {
                  id: 140,
                  name: "Práctica de Conversaciones",
                  path: "/resources/140",
                  component: "OpinionConversationPractice",
                  description: "Conversaciones guiadas para expresar tus pensamientos y sentimientos de forma natural.",
                  image: "/assets/img/opinion-conversation.png",
                },
            ],
          },
          {
            id: 305,
            title: "Handling Uncertainty: Modal Verbs for Possibility and Advice",
            status: "locked",
            description: "Descubre cómo usar los verbos modales para expresar posibilidad y dar consejos.",
            subtitle: "Descubre cómo usar los verbos modales para expresar posibilidad y dar consejos.",
            videoUrl: "/assets/video/Modulo 3.5.mp4",
            resources: [
              {
                id: 141,
                name: "Guía de Verbos Modales",
                path: "/resources/141",
                component: "ModalVerbsGuide",
                description: "Aprende a usar 'may', 'might', 'should' y otros modales para expresar posibilidad y dar consejos.",
                image: "/assets/img/modal-verbs-guide.png",
              },
              {
                id: 142,
                name: "Ejercicio de Consejos",
                path: "/resources/142",
                component: "ModalAdviceExercise",
                description: "Pon a prueba tu capacidad para dar consejos usando verbos modales.",
                image: "/assets/img/modal-advice-exercise.png",
              },
              {
                id: 144,
                name: "Práctica de Escenarios",
                path: "/resources/144",
                component: "ModalScenariosPractice",
                description: "Aplica el uso de modales en contextos reales con escenarios interactivos.",
                image: "/assets/img/modal-scenarios-practice.png",
              },
              {
                id: 145,
                name: "Juego de Frases Modales",
                path: "/resources/145",
                component: "ModalVerbsSentenceGame",
                description: "Diviértete mientras practicas frases con verbos modales.",
                image: "/assets/img/modal-verbs-game.png",
              },
            ],
          },
          {
            id: 306,
            title: "Speculation and Hypotheticals: What If...?",
            subtitle: "Explora posibilidades futuras y situaciones hipotéticas usando el Future Simple y Going to.",
            description:
              "Aprende a especular sobre el futuro y hablar de escenarios hipotéticos con estructuras como 'will', 'going to' y 'what if...'. Este módulo te ayudará a formular predicciones, expresar intenciones y manejar situaciones imaginarias.",
            status: "locked",
            videoUrl: "/assets/video/Modulo 3.6.mp4",
            resources: [
              {
                id: 201,
                name: "Explorando el Futuro",
                path: "/resources/201",
                component: "FuturePredictionExercise",
                description: "Practica cómo hacer predicciones usando 'will' y 'going to'.",
                image: "/assets/img/future-prediction.png",
              },
              {
                id: 202,
                name: "¿Qué pasaría si...?",
                path: "/resources/202",
                component: "WhatIfScenarios",
                description: "Responde a escenarios hipotéticos usando expresiones condicionales y modales.",
                image: "/assets/img/what-if-scenarios.png",
              },
              {
                id: 203,
                name: "Juego de Especulación",
                path: "/resources/203",
                component: "SpeculationGame",
                description: "Diviértete adivinando futuros posibles con frases creativas.",
                image: "/assets/img/speculation-game.png",
              },
              {
                id: 204,
                name: "Conversaciones Futuras en Pareja",
                path: "/resources/204",
                component: "FuturePairActivity",
                description: "Trabaja en pareja para imaginar y discutir eventos posibles o probables.",
                image: "/assets/img/future-pair.png",
              },
            ],
          },

          {
            id: 307,
            title: "Talking About Health and Emergencies",
            status: "locked",
            description: "Aprende el vocabulario y frases necesarias para hablar de salud y emergencias.",
            subtitle: "Aprende el vocabulario y frases necesarias para hablar de salud y emergencias.",
            videoUrl: "/assets/video/Modulo 3.7.mp4",
            resources: [
               {
                  id: 205,
                  name: "Síntomas y Recomendaciones",
                  path: "/resources/205",
                  component: "HealthAdviceFlashcards",
                  description: "Relaciona síntomas comunes con consejos adecuados usando verbos modales.",
                  image: "/assets/img/health-advice.png",
                },
                {
                  id: 206,
                  name: "Emergencias: ¿Qué hacer?",
                  path: "/resources/206",
                  component: "EmergencySituations",
                  description: "Responde a emergencias simuladas con acciones apropiadas en inglés.",
                  image: "/assets/img/emergency-actions.png",
                },
                {
                  id: 207,
                  name: "Juego de Diálogos Médicos",
                  path: "/resources/207",
                  component: "MedicalDialogueGame",
                  description: "Completa diálogos entre pacientes y doctores con frases correctas.",
                  image: "/assets/img/medical-dialogue.png",
                },
                {
                  id: 208,
                  name: "Práctica de Roleplay: En la clínica",
                  path: "/resources/208",
                  component: "ClinicRoleplayPractice",
                  description: "Simula conversaciones en una clínica médica o emergencia.",
                  image: "/assets/img/clinic-roleplay.png",
                },
            ],
          },
          {
            id: 308,
            title: "Polite Negotiation and Conflict Resolution",
            status: "locked",
            description: "Aprende a negociar con cortesía y resolver conflictos en inglés utilizando frases útiles como 'Would you mind...?', 'I'm afraid...', y 'Let's find a solution'. Este módulo se enfoca en el uso adecuado de expresiones educadas para mantener una comunicación respetuosa y efectiva.",
            subtitle: "Would you mind…? / I’m afraid… / Let’s find a solution.",
            videoUrl: "/assets/video/Modulo 3.8.mp4",
            resources: [
               {
                id: 216,
                name: "Empareja respuestas educadas",
                path: "/resources/216",
                component: "PoliteNegotiationMatch",
                description: "Relaciona cada frase de conflicto con una respuesta apropiada y respetuosa.",
                image: "/assets/img/polite-negotiation-match.png",
              },

              {
                id: 217,
                name: "Clasifica Frases: Polite & Conflict",
                path: "/resources/217",
                component: "PoliteConflictDragDrop",
                description: "Arrastra cada frase a su categoría: una solicitud educada o una frase para resolver un conflicto.",
                image: "/assets/img/polite-conflict-drag.png",
              }

            ],
          },
          {
            id: 309,
            title: "Cultural Insights: Talking About Traditions and Celebrations",
            status: "locked",
            description: "Aprende sobre las festividades y tradiciones en países de habla inglesa.",
            subtitle: "Aprende sobre las festividades y tradiciones en países de habla inglesa.",
            videoUrl: "/assets/video/Modulo 3.9.mp4",
            resources: [
            ],
          },
          {
            id: 310,
            title: "Reading Comprehension and Discussion: Articles and Short Stories",
            status: "locked",
            description: "Mejora tu comprensión lectora con artículos y relatos cortos.",
            subtitle: "Mejora tu comprensión lectora con artículos y relatos cortos.",
            videoUrl: "/assets/video/Modulo 3.10.mp4",
            resources: [
              {
                id: 218,
                name: "Lectura y Comprensión",
                path: "/resources/218",
                component: "ReadingComprehension",
                description: "Lee artículos o historias cortas y responde preguntas de comprensión.",
                image: "/assets/img/reading-comprehension.png",
              }
            ],
          },
          {
            id: 311,
            title: "Advanced Pronunciation: Intonation and Stress",
            status: "locked",
            description: "Perfecciona tu pronunciación con técnicas avanzadas de entonación y acento.",
            subtitle: "Perfecciona tu pronunciación con técnicas avanzadas de entonación y acento.",
            videoUrl: "/assets/video/Modulo 3.11.mp4",
            resources: [
            ],
          },
          {
            id: 312,
            title: "Final Review and Practice: Mixed Scenarios",
            status: "locked",
            description: "Pon a prueba tu nivel con ejercicios integrados y escenarios combinados.",
            subtitle: "Pon a prueba tu nivel con ejercicios integrados y escenarios combinados.",
            videoUrl: "/assets/video/Modulo 3.12.mp4",
            resources: [
            ],
          },
        // Agregar los módulos restantes de Intermedio-Avanzado...
      ],
    },
  ];
  
  export default levels;
  