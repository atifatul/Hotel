const destinations = [
  {
    id: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    image: "/assets/img/innerpages/destination-details-img.png",
    description:
      "Jammu and Kashmir is a region administered by India as a union territory and consisting of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947, and between India and China since 1962.",
    gallery: [
      "/assets/img/innerpages/customer-gallery-img1.png",
      "/assets/img/innerpages/customer-gallery-img2.png",
      "/assets/img/innerpages/customer-gallery-img3.png",
      "/assets/img/innerpages/customer-gallery-img4.png",
      "/assets/video/destination-details-video.mp4",
      "/assets/img/innerpages/customer-gallery-img6.png",
      "/assets/img/innerpages/customer-gallery-img7.png",
    ],
    seasons: [
      {
        title: "Spring (March–May)",
        weather: "12–20°C / 53–68°F",
        image: "/assets/img/innerpages/travel-season-img1.jpg",
        highlights: [
          "Cherry blossoms, café culture.",
          "Moderate crowds.",
          "Ideal for outdoor walks & photo spots.",
        ],
        perfectFor: "First-time travelers, couples, light packers",
      },
      {
        title: "Summer (June–August)",
        weather: "20–30°C / 68–86°F",
        image: "/assets/img/innerpages/travel-season-img2.jpg",
        highlights: [
          "Long daylight hours.",
          "Open-air cinema, festivals.",
          "High tourist volume & prices.",
        ],
        perfectFor: "Festival lovers, families, nightlife explorers",
      },
      {
        title: "Autumn (Sep to Nov)",
        weather: "0–18°C / 50–64°F",
        image: "/assets/img/innerpages/travel-season-img3.jpg",
        highlights: [
          "Golden parks, wine season.",
          "Fewer tourists, great photos.",
          "Fashion Week buzz.",
        ],
        perfectFor: "Photographers, solo travelers, wine lovers",
      },
      {
        title: "Winter (Dec to Feb)",
        weather: "3–8°C / 37–46°F",
        image: "/assets/img/innerpages/travel-season-img4.jpg",
        highlights: [
          "Christmas markets, cozy cafés.",
          "Fewer crowds, better deals.",
          "Occasional snow = pure magic.",
        ],
        perfectFor: "Budget travelers, romantics, festive moods",
      },
    ],
    faq: [
      {
        question: "What Services Does Your Travel Agency Provide?",
        answer:
          "A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience. As like- <span>Hotel booking, Flight Booking, Visa & Customized Travel Pakcge etc.</span>",
      },
      {
        question: "Do You Offer Customized Travel Packages?",
        answer:
          "Absolutely! We offer fully customized travel packages based on your interests, budget, and schedule. Whether you're planning <span>a solo adventure, a family vacation, a romantic getaway, or a group tour</span>, our team will tailor every detail to create a personalized travel experience just for you.",
      },
      {
        question: "Can I Book Flights, Hotels, and Tours Separately?",
        answer:
          "Yes, you can! We provide the flexibility to book <span>flights, hotels, and tours separately</span> based on your specific needs. Whether you need just a flight, only accommodation, or want to add a tour later — we’re here to help you plan each part of your trip your way.",
      },
      {
        question: "Do You Provide Visa Assistance?",
        answer:
          "Yes, we do! Our team offers complete <span>visa assistance services</span> to help you navigate the application process smoothly. From providing guidance on required documents to scheduling appointments and submitting applications, we're here to support you every step of the way.",
      },
      {
        question: "What Payment Methods Do You Accept?",
        answer:
          "We accept a variety of <span>payment methods</span> to make your booking process easy and convenient. These include <span>cash, bank transfers, mobile payments (such as bKash, Nagad), and major debit/credit cards</span>. If you have a preferred payment option, feel free to let us know!",
      },
    ],
    tours: [
      {
        name: "Mystic Mountains Retreat",
        images: [
          "/assets/img/home1/tour-package-img2.jpg",
          "/assets/img/home1/tour-package-img10.jpg",
          "/assets/img/home1/tour-package-img11.jpg",
        ],
        location: "Montmartre",
        duration: "07 Days",
        price: 599,
        detailsUrl: "travel-package-details.html",
      },
      // Add more tours as needed
    ],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    image: "/assets/img/innerpages/destination-details-img-rajasthan.png",
    description:
      "Rajasthan, known as the 'Land of Kings', is India's largest state by area. It is located on the northwestern side of the country, where it comprises most of the wide and inhospitable Thar Desert. It is famous for its majestic forts, vibrant culture, and colorful festivals.",
    gallery: [
      "/assets/img/innerpages/customer-gallery-rajasthan1.png",
      "/assets/img/innerpages/customer-gallery-rajasthan2.png",
      "/assets/img/innerpages/customer-gallery-rajasthan3.png",
      "/assets/img/innerpages/customer-gallery-rajasthan4.png",
      "/assets/video/destination-details-video.mp4",
      "/assets/img/innerpages/customer-gallery-rajasthan5.png",
      "/assets/img/innerpages/customer-gallery-rajasthan6.png",
    ],
    seasons: [
      {
        title: "Winter (October–March)",
        weather: "10–27°C / 50–81°F",
        image: "/assets/img/innerpages/travel-season-rajasthan1.jpg",
        highlights: [
          "Pleasant weather for sightseeing.",
          "Desert festivals like Pushkar Fair.",
          "Ideal for exploring forts and palaces.",
        ],
        perfectFor: "Cultural enthusiasts, photographers, families",
      },
      {
        title: "Summer (April–June)",
        weather: "24–45°C / 75–113°F",
        image: "/assets/img/innerpages/travel-season-rajasthan2.jpg",
        highlights: [
          "Fewer crowds, better hotel deals.",
          "Mount Abu offers a cooler retreat.",
          "Very hot during the day.",
        ],
        perfectFor: "Budget travelers, those seeking solitude",
      },
    ],
    faq: [
      {
        question: "What Services Does Your Travel Agency Provide?",
        answer:
          "A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience. As like- <span>Hotel booking, Flight Booking, Visa & Customized Travel Pakcge etc.</span>",
      },
      {
        question: "Do You Offer Customized Travel Packages?",
        answer:
          "Absolutely! We offer fully customized travel packages based on your interests, budget, and schedule. Whether you're planning <span>a solo adventure, a family vacation, a romantic getaway, or a group tour</span>, our team will tailor every detail to create a personalized travel experience just for you.",
      },
    ],
    tours: [
      {
        name: "Royal Rajasthan Tour",
        images: [
          "/assets/img/home1/tour-package-img3.jpg",
          "/assets/img/home1/tour-package-img8.jpg",
          "/assets/img/home1/tour-package-img9.jpg",
        ],
        location: "Jaipur, Udaipur",
        duration: "08 Days",
        price: 799,
        detailsUrl: "travel-package-details.html",
      },
    ],
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    image: "/assets/img/innerpages/destination-details-img-himachal.png",
    description:
      "Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts such as Dalhousie. Host to the Dalai Lama, Himachal Pradesh has a strong Tibetan presence, reflected in its Buddhist temples and monasteries.",
    gallery: [
      "/assets/img/innerpages/customer-gallery-himachal1.png",
      "/assets/img/innerpages/customer-gallery-himachal2.png",
      "/assets/video/destination-details-video.mp4",
      "/assets/img/innerpages/customer-gallery-himachal3.png",
      "/assets/img/innerpages/customer-gallery-himachal4.png",
    ],
    seasons: [
      {
        title: "Summer (March–June)",
        weather: "15–30°C / 59–86°F",
        image: "/assets/img/innerpages/travel-season-himachal1.jpg",
        highlights: [
          "Trekking, paragliding, and rafting.",
          "Pleasant weather in Shimla, Manali.",
          "Blooming flowers and lush greenery.",
        ],
        perfectFor: "Adventure seekers, nature lovers, families",
      },
      {
        title: "Winter (October–February)",
        weather: "-5–15°C / 23–59°F",
        image: "/assets/img/innerpages/travel-season-himachal2.jpg",
        highlights: [
          "Snowfall in popular destinations.",
          "Skiing and snowboarding.",
          "Cozy atmosphere and winter festivals.",
        ],
        perfectFor: "Honeymooners, snow lovers, winter sports enthusiasts",
      },
    ],
    faq: [
      {
        question: "What Services Does Your Travel Agency Provide?",
        answer:
          "A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience. As like- <span>Hotel booking, Flight Booking, Visa & Customized Travel Pakcge etc.</span>",
      },
    ],
    tours: [
      {
        name: "Himalayan Adventure",
        images: [
          "/assets/img/home1/tour-package-img4.jpg",
          "/assets/img/home1/tour-package-img5.jpg",
        ],
        location: "Shimla, Manali",
        duration: "06 Days",
        price: 650,
        detailsUrl: "travel-package-details.html",
      },
    ],
  },
  {
    id: "kerala",
    name: "Kerala",
    image: "/assets/img/innerpages/destination-details-img-kerala.png",
    description:
      "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife.",
    gallery: [
      "/assets/img/innerpages/customer-gallery-kerala1.png",
      "/assets/img/innerpages/customer-gallery-kerala2.png",
      "/assets/img/innerpages/customer-gallery-kerala3.png",
    ],
    seasons: [
      {
        title: "Winter (September–March)",
        weather: "22–32°C / 72–90°F",
        image: "/assets/img/innerpages/travel-season-kerala1.jpg",
        highlights: [
          "Pleasant weather for backwaters and beaches.",
          "Houseboat cruises in Alleppey.",
          "Cultural festivals like Theyyam.",
        ],
        perfectFor: "Honeymooners, families, nature lovers",
      },
      {
        title: "Summer (April–May)",
        weather: "25–35°C / 77–95°F",
        image: "/assets/img/innerpages/travel-season-kerala2.jpg",
        highlights: [
          "Less crowded, good for budget travel.",
          "Hill stations like Munnar and Wayanad are cooler.",
          "Hot and humid in coastal areas.",
        ],
        perfectFor: "Budget travelers, hill station enthusiasts",
      },
    ],
    faq: [
      {
        question: "What is the best time to visit the backwaters?",
        answer:
          "The best time to visit the Kerala backwaters is from September to March when the weather is cool and pleasant, making it ideal for houseboat stays and exploring the serene canals.",
      },
    ],
    tours: [
      {
        name: "Kerala Backwater Bliss",
        images: [
          "/assets/img/home1/tour-package-img5.jpg",
          "/assets/img/home1/tour-package-img6.jpg",
        ],
        location: "Alleppey, Munnar",
        duration: "05 Days",
        price: 550,
        detailsUrl: "travel-package-details.html",
      },
    ],
  },
  {
    id: "goa",
    name: "Goa",
    image: "/assets/img/innerpages/destination-details-img-goa.png",
    description:
      "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    gallery: [
      "/assets/img/innerpages/customer-gallery-goa1.png",
      "/assets/img/innerpages/customer-gallery-goa2.png",
    ],
    seasons: [
      {
        title: "Winter (November–February)",
        weather: "20–30°C / 68–86°F",
        image: "/assets/img/innerpages/travel-season-goa1.jpg",
        highlights: [
          "Peak tourist season with perfect beach weather.",
          "Vibrant nightlife and Christmas/New Year parties.",
          "Water sports and outdoor activities.",
        ],
        perfectFor: "Party-goers, beach lovers, international tourists",
      },
      {
        title: "Monsoon (June–October)",
        weather: "24–28°C / 75–82°F",
        image: "/assets/img/innerpages/travel-season-goa2.jpg",
        highlights: [
          "Lush green landscapes.",
          "Fewer crowds and lower prices.",
          "Ideal for a peaceful, relaxing getaway.",
        ],
        perfectFor: "Nature lovers, budget travelers, couples",
      },
    ],
    faq: [
      {
        question: "Which part of Goa is better, North or South?",
        answer:
          "It depends on your preference. <span>North Goa</span> is known for its bustling nightlife, flea markets, and popular beaches like Baga and Calangute. <span>South Goa</span> is quieter, with serene beaches like Palolem and Agonda, perfect for a relaxing vacation.",
      },
    ],
    tours: [
      {
        name: "Goa Beach Paradise",
        images: ["/assets/img/home1/tour-package-img7.jpg"],
        location: "North & South Goa",
        duration: "04 Days",
        price: 400,
        detailsUrl: "travel-package-details.html",
      },
    ],
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    image: "/assets/img/innerpages/destination-details-img-up.png",
    description:
      "Uttar Pradesh is a state in northern India. With over 200 million inhabitants, it is the most populated state in India as well as the most populous country subdivision in the world. It is rich in history and culture, home to iconic landmarks like the Taj Mahal in Agra and the holy city of Varanasi on the banks of the Ganges.",
    gallery: [
      "/assets/img/innerpages/customer-gallery-up1.png",
      "/assets/img/innerpages/customer-gallery-up2.png",
    ],
    seasons: [
      {
        title: "Winter (October–March)",
        weather: "8–25°C / 46–77°F",
        image: "/assets/img/innerpages/travel-season-up1.jpg",
        highlights: [
          "Best time for sightseeing, especially Taj Mahal.",
          "Pleasant weather for exploring cities.",
          "Festivals like Diwali and Holi are celebrated grandly.",
        ],
        perfectFor: "History buffs, spiritual seekers, photographers",
      },
      {
        title: "Summer (April–June)",
        weather: "28–45°C / 82–113°F",
        image: "/assets/img/innerpages/travel-season-up2.jpg",
        highlights: [
          "Extremely hot, not ideal for outdoor activities.",
          "Fewer tourists.",
          "Good for indoor attractions like museums.",
        ],
        perfectFor: "Those who can bear the heat, budget travelers",
      },
    ],
    faq: [
      {
        question: "Is it safe to travel to Uttar Pradesh?",
        answer:
          "Yes, it is generally safe for tourists. However, like any other place, it's advisable to take standard precautions, especially in crowded areas. Major tourist spots like Agra and Varanasi have good security arrangements.",
      },
    ],
    tours: [
      {
        name: "Heritage & Spirituality Tour",
        images: [
          "/assets/img/home1/tour-package-img1.jpg",
          "/assets/img/home1/tour-package-img12.jpg",
        ],
        location: "Agra, Varanasi",
        duration: "05 Days",
        price: 450,
        detailsUrl: "travel-package-details.html",
      },
    ],
  },
];

export default destinations;
