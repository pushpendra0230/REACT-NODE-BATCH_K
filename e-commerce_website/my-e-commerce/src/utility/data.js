const products = [
  {
    id: 1,
    name: "Apple Laptop",
    price: 120000,
    productDesc:
      "A sleek, high-performance laptop perfect for work, gaming, and media.",
    image:
      "https://th.bing.com/th?id=OIP.27Bk7A7H_KfWrbrD6TA2FQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 2,
    name: "Dell Laptop",
    price: 85000,
    productDesc:
      "A powerful laptop designed for gaming, good work, and creativity.",
    image:
      "https://th.bing.com/th?id=OIP.zZ4RPIhFjAPw04krOP9-tQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 3,
    name: "HP Laptop",
    price: 88000,
    productDesc:
      "A stylish laptop offering reliable nice performance for all your needs.",
    image:
      "https://th.bing.com/th?id=OIP.Qpvh-5chQCxWmnmjHNkIKAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 4,
    name: "Lenovo Laptop",
    price: 75000,
    productDesc:
      "A versatile laptop built for work, gaming, and fine and good entertainment.",
    image:
      "https://th.bing.com/th?id=OIP.HEujSh2wwF5HlJZd6Uk1pwAAAA&w=304&h=205&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 5,
    name: "Watch Apple",
    price: 40000,
    productDesc:
      "A premium smartwatch for tracking fitness,notifications, and managing health metrics.",
    image:
      "https://th.bing.com/th?id=OIP.aH6wNvCzrWxYoRaXX6MeNwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 6,
    name: "Watch Samsung",
    price: 35000,
    productDesc:
      "A high-performance smartwatch with a sleek design, offering fitness tracking and connectivity.",
    image:
      "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNhbXN1bmclMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Watch Fire-Boltt",
    price: 8000,
    productDesc:
      "A budget-friendly smartwatch offering fitness tracking features and smart notifications.",
    image:
      "https://th.bing.com/th?id=OIP.F9yGce1L1aEbAyM2WOuoRQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 8,
    name: "Watch Noise",
    price: 5000,
    productDesc:
      "An affordable smartwatch for tracking and daily notifications with long battery life.",
    image:
      "https://media.istockphoto.com/id/1286099765/photo/close-up-of-hand-touching-smartwatch-with-health-app-on-the-screen-gadget-for-fitness-active.webp?a=1&b=1&s=612x612&w=0&k=20&c=c3TVUScqALUZzYJ6UTkVsGs_ko9UH3EWR-5kxI9T_i0=",
  },
  {
    id: 9,
    name: "Apple Headphones",
    price: 40000,
    productDesc:
      "Premium wireless headphones top-notch sound quality with noise-canceling features and ergonomic design for comfort.",
    image:
      "https://th.bing.com/th?id=OIP.G_rJpK3mxsLmcGNls2CosgHaGk&w=265&h=235&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 10,
    name: "Sony Headphones",
    price: 22000,
    productDesc:
      "High-quality headphones with industry-leading noise technology and a comfortable for long listening sessions.",
    image:
      "https://th.bing.com/th?id=OIP.VZAi-xGdK6ECIgZsgwhD1gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 11,
    name: "JBL Headphones",
    price: 12000,
    productDesc:
      "Wireless headphones delivering rich sound quality and advanced noise-canceling features for an immersive audio experience.",
    image:
      "https://th.bing.com/th?id=OIP.WTTBak95Vwfg7BoyThYRKQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 12,
    name: "Boat Headphones",
    price: 5000,
    productDesc:
      "Affordable wireless headphones offering great sound and noise-canceling technology, designed everyday listening and comfort.",
    image:
      "https://th.bing.com/th?id=OIP.cJ2bOEYU_B5F5_w3eeusQAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 13,
    name: "Earbuds Apple",
    price: 13500,
    productDesc:
      "Compact and comfortable Bluetooth earbuds offering clear sound and a sleek design, perfect for an active lifestyle.",
    image:
      "https://th.bing.com/th?id=OIP.tHjeC90YLxTNwf-r1InoHAHaGV&w=270&h=231&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 14,
    name: "Earbuds JBL",
    price: 7500,
    productDesc:
      "Bluetooth earbuds with exceptional sound clarity, designed for comfort and perfect for those on the go.",
    image:
      "https://th.bing.com/th?id=OIP.QarG0WZaHyXNWaiQdAkhBwHaJS&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 15,
    name: "Earbuds Noise",
    price: 4500,
    productDesc:
      "Comfortable and compact Bluetooth earbuds that deliver clear, high-quality sound, ideal for an active lifestyle.",
    image:
      "https://th.bing.com/th?id=OIP.LhjNCm6iVoF-b4DpM8K5SwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 16,
    name: "Earbuds Boat",
    price: 3500,
    productDesc:
      "Bluetooth earbuds offering great and good sound and comfort, designed for easy portability and active users.",
    image:
      "https://th.bing.com/th?id=OIP.i_0MyUcCXVZpY78Gw8PDwgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 17,
    name: "Samsung TV",
    price: 40000,
    productDesc:
      "Immerse yourself in vibrant 4K Ultra HD picture quality and premium sound for an unparalleled viewing experience.",
    image:
      "https://th.bing.com/th?id=OIP.-SmbJmx3GaW-dIurwdDguQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 18,
    name: "LG TV",
    price: 30000,
    productDesc:
      "Enjoy stunning 4K Ultra HD resolution and rich sound, designed for an immersive and cinematic viewing experience.",
    image:
      "https://th.bing.com/th?id=OIP.tATpPujGNI1Q_oJNwFBfWgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 19,
    name: "Sony TV",
    price: 44000,
    productDesc:
      "Get a superior viewingwith vibrant 4K Ultra HD picture and clear immersive sound for the ultimate home entertainment.",
    image:
      "https://th.bing.com/th?id=OIP.HH1kBWFHiDKiEgykfcgaYwHaIj&w=232&h=268&c=8&rs=1&qlt=90&o=6&dpr=2.5&pid=3.1&rm=2",
  },
  {
    id: 20,
    name: "TCL TV",
    price: 38000,
    productDesc:
      "Experience sharp 4K Ultra HD visuals and sound with this high-performance TV, ideal for a cinematic home experience.",
    image:
      "https://th.bing.com/th?id=OIP.SN28pSZd9HgJTuGcrO73twHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=2.5&pid=3.1&rm=2",
  },
  {
    id: 21,
    name: "Canon Camera",
    price: 153000,
    productDesc:
      "Capture stunning action shots with this durable and waterproof camera, perfect for extreme sports and outdoor adventures.",
    image:
      "https://th.bing.com/th?id=OIP.Xi962bqmGdgPMWZeEycYkgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 22,
    name: "Sony Camera",
    price: 150000,
    productDesc:
      "Durable and waterproof,action camera is ideal for capturing yoursports and adventure moments in high-quality detail.",
    image:
      "https://th.bing.com/th?id=OIP.cNNN6s21rpXkkK7TsCzxGwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 23,
    name: "Nikon Camera",
    price: 158000,
    productDesc:
      "Capture thrilling action and adventure with this waterproof and rugged camera, built to withstand the elements.",
    image:
      "https://th.bing.com/th?id=OIP.E3VS8mEhimx02Z3QWpyEPQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 24,
    name: "Lumix Camera",
    price: 100000,
    productDesc:
      "Perfect for sports and outdoor activities, thisaction camera delivers clear and detailed shots in challenging environments.",
    image:
      "https://th.bing.com/th?id=OIP.P771z0YpYdAmLpqEKXiN3wHaGk&w=265&h=235&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 25,
    name: "Bose Speaker",
    price: 5000,
    productDesc:
      "Experience high-quality sound with this portable Bluetooth speaker, delivering rich bass and clear audio wherever you go.",
    image:
      "https://images.unsplash.com/photo-1567593179124-7835e19fe1e2?w=500&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWNrZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 26,
    name: "JBL Speaker",
    price: 15000,
    productDesc:
      "Enjoy your favorite tunes on the go with this portable speaker powerful bass and sound quality for all your music needs.",
    image:
      "https://th.bing.com/th?id=OIP.gAJR_yliLUtTFVu5FHUSpwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 27,
    name: "Sony Speaker",
    price: 55000,
    productDesc:
      "This portable speaker brings your music to life with its rich bass and crystal-clear sound, making for any environment.",
    image:
      "https://th.bing.com/th?id=OIP.zULWPwzu_5CSXD3-m4xh3gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 28,
    name: "Marshall Speaker",
    price: 115000,
    productDesc:
      "Elevate your music experience with this portable speaker, offering premium bass and sound quality in a stylish design.",
    image:
      "https://th.bing.com/th?id=OIP.sctZfZPIdWwO1tBsJMcN6gHaFV&w=294&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
];
export default products;