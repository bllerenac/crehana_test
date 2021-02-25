const STORE = {
  courses: [
      {
          id: 1,
          course_name: "Facebook Ads: Domina estrategias avanzadas",
          category: "Marketing Digital",
          sub_category: "Marketing Digital",
          level: "Avanzado",
          real_price: "65",
          price: "19",
          discount: "71",
          score: "5",
          users: "429",
          comments: [
            {
              username: "laia.cardona",
              comment: "",
            }
          ],
      },
      {
          id: 2,
          course_name: "Corte y confección: Diseña tu primera prenda",
          category: "Manualidades",
          sub_category: "Bordado y costura",
          level: "Introductorio",
          username: "lucilagam",
          real_price: "49.97",
          price: "14.99",
          discount: "70",
          score: "3.98",
          users: "1299"
      },
      {
          id: 3,
          course_name: "Técnicas completas de ilustración Kawaii",
          category: "Ilustración y Dibujo",
          sub_category: "Ilustración Digital",
          level: "Introductorio",
          username: "paula.bugueno",
          real_price: "53",
          price: "14",
          discount: "74",
          score: "4.9",
          users: "795"
      },
      {
          id: 4,
          course_name: "Nutrición saludable: Alimenta una vida mejor",
          category: "Lifestyle",
          sub_category: "Lifestyle",
          level: "Completo",
          username: "adriana.puente",
          real_price: "49",
          price: "14.99",
          discount: "70",
          score: "5",
          users: "2889"
      },
      {
          id: 5,
          course_name: "Facebook e Instagram Ads: Campañas desde cero",
          category: "Marketing Digital",
          sub_category: "Marketing Digital",
          level: "Completo",
          username: "javier.arronte",
          real_price: "49.98",
          price: "19.99",
          discount: "60",
          score: "5",
          users: "3900"
      },
      {
          id: 6,
          course_name: "Guión y Dirección para Cine",
          category: "Video",
          sub_category: "Producción",
          level: "Intermedio",
          username: "delfinajzo",
          real_price: "31",
          price: "14",
          discount: "56",
          score: "3.6",
          users: "849"
      },
      {
          id: 7,
          course_name: "Doblaje de personajes cartoon con Luis Carreño",
          category: "Video",
          sub_category: "Locución",
          level: "Intermedio",
          username: "luiscarreno1",
          real_price: "65.52",
          price: "19",
          discount: "71",
          score: "5",
          users: "142"
      },
      {
          id: 8,
          course_name: "Trendhunting: Tendencias para la innovación",
          category: "Negocios",
          sub_category: "Innovación",
          level: "Introductorio",
          username: "catalinamarin",
          real_price: "55.88",
          price: "19",
          discount: "66",
          score: "4.7",
          users: "504"
      },
      {
          id: 9,
          course_name: "Mindfulness y bienestar: Revoluciona tu empresa",
          category: "Negocios",
          sub_category: "Liderazgo",
          level: "Completo",
          username: "martinreynoso998",
          real_price: "58",
          price: "17",
          discount: "71",
          score: "5",
          users: "239"
      },
      {
          id: 10,
          course_name: "Fotografía de producto y técnicas de iluminación",
          category: "Fotografía",
          sub_category: "Fundamentos de fotografía",
          level: "Intermedio",
          username: "matias.posti",
          real_price: "49",
          price: "14.99",
          discount: "70",
          score: "5",
          users: "2818"
      },
      {
          id: 11,
          course_name: "Actúa con tu voz: doblaje para personajes",
          category: "Video",
          sub_category: "Locución",
          level: "Introductorio",
          username: "pattyazan",
          real_price: "65.52",
          price: "19",
          discount: "71",
          score: "5",
          users: "7997"
      },
      {
          id: 12,
          course_name: "Power Manager: Alcanza tus objetivos",
          category: "Negocios",
          sub_category: "Liderazgo",
          level: "Introductorio",
          username: "miguel.castuera",
          real_price: "55.88",
          price: "19",
          discount: "66",
          score: "3.8",
          users: "388"
      },
      {
          id: 13,
          course_name: "Ideación y creatividad desde cero",
          category: "Marketing Digital",
          sub_category: "Publicidad",
          level: "Intermedio",
          username: "mauro-azua",
          real_price: "55.88",
          price: "19",
          discount: "66",
          score: "5",
          users: "501"
      },
      {
          id: 14,
          course_name: "Introducción a las metodologías de innovación",
          category: "Negocios",
          sub_category: "Innovación",
          level: "Introductorio",
          username: "priscila-williams",
          real_price: "63",
          price: "14",
          discount: "78",
          score: "5",
          users: "2340"
      },
      {
          id: 15,
          course_name: "Edición, postproducción y montaje audiovisual",
          category: "Video",
          sub_category: "Postproducción",
          level: "Completo",
          username: "antonio.gomez",
          real_price: "59",
          price: "14.99",
          discount: "75",
          score: "4.53",
          users: "1093"
      },
      {
          id: 16,
          course_name: "Dirección de Fotografía Avanzada para Cine",
          category: "Video",
          sub_category: "Producción",
          level: "Avanzado",
          username: "mourino-santiago",
          real_price: "49",
          price: "19.99",
          discount: "60",
          score: "5",
          users: "348"
      },
      {
          id: 17,
          course_name: "Dibujo y pintura: Técnicas contemporáneas",
          category: "Ilustración y Dibujo",
          sub_category: "Dibujo",
          level: "Intermedio",
          username: "ricardocelma",
          real_price: "49",
          price: "14.99",
          discount: "70",
          score: "5",
          users: "1235"
      },
      {
          id: 18,
          course_name: "Branding e identidad visual para startups",
          category: "Diseño",
          sub_category: "Branding",
          level: "Intermedio",
          username: "ceciliarodriguezv",
          real_price: "56",
          price: "14",
          discount: "75",
          score: "5",
          users: "1588"
      },
      {
          id: 19,
          course_name: "Postproducción Fine Art avanzada",
          category: "Fotografía",
          sub_category: "Retoque Fotográfico",
          level: "Avanzado",
          username: "aminadonskaya776",
          real_price: "49",
          price: "14.99",
          discount: "70",
          score: "4.5",
          users: "458"
      },
      {
          id: 20,
          course_name: "Doblaje y actuación de voz con Mario Arvizu",
          category: "Video",
          sub_category: "Locución",
          level: "Introductorio",
          username: "marvizu",
          real_price: "59",
          price: "14.99",
          discount: "75",
          score: "5",
          users: "3948"
      },
      {
          id: 21,
          course_name: "El arte de la escritura con Majo Moirón",
          category: "Escritura",
          sub_category: "Escritura",
          level: "Introductorio",
          username: "majomoiron",
          real_price: "59",
          price: "14.99",
          discount: "75",
          score: "3.1",
          users: "4859"
      },
      {
          id: 22,
          course_name: "Excel avanzado para expertos",
          category: "Negocios",
          sub_category: "Data",
          level: "Avanzado",
          username: "vrodriguez24",
          real_price: "49",
          price: "14.99",
          discount: "70",
          score: "5",
          users: "988"
      },
      {
          id: 23,
          course_name: "Taller de técnicas de negociación",
          category: "Negocios",
          sub_category: "Ventas",
          level: "Introductorio",
          username: "anabelen.perdigones",
          real_price: "56",
          price: "9",
          discount: "84",
          score: "5",
          users: "341"
      },
      {
          id: 24,
          course_name: "Redacción creativa publicitaria",
          category: "Marketing Digital",
          sub_category: "Publicidad",
          level: "Introductorio",
          username: "roberto.guerrero",
          real_price: "49",
          price: "19.99",
          discount: "60",
          score: "5",
          users: "241"
      },
      {
          id: 25,
          course_name: "Animação Frame a Frame no Adobe Animate",
          category: "Animación & 3D",
          sub_category: "Animación 2D",
          level: "Intermedio",
          username: "juliassimas",
          real_price: "53",
          price: "14",
          discount: "74",
          score: "5",
          users: "415"
      }
  ]
}