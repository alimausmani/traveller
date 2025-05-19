const tourData = [
    {
      title: "North India Tours",
      description: "📍 Forts & Palaces, Culture, Hills, Desert",
      image: "https://www.specialholidays.com/new_img/north.jpg"
    },
    {
      title: "Delhi Tours",
      description: "📍 Capital - City of Monuments",
      image: "https://www.specialholidays.com/new_img/delhi.jpg"
    },
    {
      title: "Golden Triangle",
      description: "📍 Delhi, Agra, Jaipur with 100+ options",
      image: "https://images.pexels.com/photos/13062114/pexels-photo-13062114.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Rajasthan Tours",
      description: "📍 Visit, Royal Fort & Palaces",
      image: "https://www.specialholidays.com/new_img/rajasthan.jpg"
    },
    {
      title: "Kerala Tours",
      description: "📍 The God's own Country",
      image: "https://www.specialholidays.com/new_img/kerala.jpg"
    },
    {
      title: "South India Tours",
      description: "📍 The Historical Temples",
      image: "https://www.specialholidays.com/new_img/madurai.jpg"
    },
    {
      title: "Mumbai Tours",
      description: "📍 The Bollywood City",
      image: "https://www.specialholidays.com/new_img/mumbai.jpg"
    },
    {
      title: "Goa Tours",
      description: "📍 Best Beach Holidays",
      image: "https://www.specialholidays.com/new_img/goa.jpg"
    },
    {
      title: "Andaman Tours",
      description: "📍 Pristine Beaches & Coral Reefs",
      image: "https://www.specialholidays.com/new_img/andaman1.jpg"
    },
    {
      title: "Kashmir Tours",
      description: "📍 Beautiful Gardens & Lakes",
      image: "https://www.specialholidays.com/new_img/kashmir-tour-package.jpg"
    },
    {
      title: "Sikkim Tours",
      description: "📍 The Himalayan Beauty",
      image: "https://www.specialholidays.com/new_img/sikkim.jpg"
    },
    {
      title: "Uttarakhand Tours",
      description: "📍 Nature, Temples, and Adventure",
      image: "https://www.specialholidays.com/new_img/uttarakhand.jpg"
    },
    {
      title: "Mysore Tours",
      description: "📍 Royal Palaces & Heritage Sites",
      image: "https://dynamic-media.tacdn.com/media/photo-o/2f/18/b3/3b/caption.jpg?w=800&h=800&s=1"
    },
    {
      title: "Tamil Nadu Tours",
      description: "📍 Temples, Hills, and Culture",
      image: "https://www.specialholidays.com/new_img/tamilnadu.jpg"
    },
    {
      title: "Himachal Pradesh Tours",
      description: "📍 Adventure & Serenity",
      image: "https://www.specialholidays.com/new_img/himachal-tour-package.jpg"
    },
    {
      title: "Bengaluru Tours",
      description: "📍 The Silicon Valley of India",
      image: "https://images.pexels.com/photos/31949314/pexels-photo-31949314/free-photo-of-majestic-catholic-church-in-nam-d-nh-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Agra Tours",
      description: "📍 Home of the Taj Mahal",
      image: "https://www.specialholidays.com/new_img/agra.jpg"
    },
    {
      title: "Jaipur Tours",
      description: "📍 The Pink City & Royal Palaces",
      image: "https://www.myrajasthantrip.com/wp-content/uploads/2023/03/1605595532_shutterstock_780490738-1.jpg-1.jpg"
    },
    {
      title: "Pune Tours",
      description: "📍 A Hub of Culture & History",
      image: "https://funatpuno.com/wp-content/uploads/2025/01/Shaniwar-Wada.png"
    },
    {
      title: "Darjeeling Tours",
      description: "📍 The Queen of Hills",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/29/ed/79/caption.jpg?w=500&h=400&s=1"
    },
    {
      title: "Lucknow Tours",
      description: "📍 City of Nawabs and Heritage",
      image: "https://www.solethreads.com/cdn/shop/articles/Featured_-_Top_10_places_to_visit_in_lucknow.jpg?v=1639743302"
    },
    {
      title: "Kochi Tours",
      description: "📍 The Queen of the Arabian Sea",
      image: "https://powertraveller.com/wp-content/uploads/2024/10/kochi-private-tour-backwater-cruise-in-aleppey.jpg"
    },
    {
      title: "Madhya Pradesh Tours",
      description: "📍 Temples & Ancient Forts",
      image: "https://www.mptourism.com/web/image/catalog/itineraries/maheshwar-fort.webp"
    },
    {
      title: "Chandigarh Tours",
      description: "📍 The City Beautiful",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/20/09/bc.jpg"
    },
    {
      title: "Nashik Tours",
      description: "📍 Vineyards and Temples",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/cb/36/ae/caption.jpg?w=500&h=400&s=1"
    },
    {
      title: "Khajuraho Tours",
      description: "📍 Famous for Temples with Erotic Sculptures",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/5f/63/6a/caption.jpg?w=500&h=400&s=1"
    },
    {
      title: "Bhopal Tours",
      description: "📍 History and Nature Combined",
      image: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0f/9e/20/bb/sanchi-stupa.jpg"
    },
    {
      title: "Guwahati Tours",
      description: "📍 Gateway to North East India",
      image: "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_17/498077/406759.jpg"
    },
    {
      title: "Patna Tours",
      description: "📍 A Land of Historical Significance",
      image: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/patna/sabhyata-dwar/sabhayata-dwar-patna.png/jcr:content/renditions/cq5dam.web.480.480.jpeg"
    },
    {
      title: "Shillong Tours",
      description: "📍 Scotland of the East",
      image: "https://travenjo.com/wp-content/uploads/2022/06/Seven-Sisters-Falls-1-gaimg.jpg?x58748"
    },
    {
      title: "Jodhpur Tours",
      description: "📍 The Blue City & Forts",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/5a/a3/caption.jpg?w=500&h=400&s=1"
    },
    {
      title: "Alwar Tours",
      description: "📍 Historical Forts & Lakes",
      image: "https://static.toiimg.com/photo/msid-59142997,width-96,height-65.cms"
    },
    {
      title: "Ajmer Tours",
      description: "📍 Ajmer Sharif Dargah",
      image: "https://www.ajmertours.com/images/taj_mahal_india.jpg"
    },
    {
      title: "Vishakhapatnam Tours",
      description: "📍 Coastal Beauty & Hill Stations",
      image: "https://media2.thrillophilia.com/images/photos/000/194/225/original/1582825354_visakhapatnam-dolphins-nose-1486672824-orijgp.jpg?width=1600&height=775"
    },
    {
      title: "Bhuj Tours",
      description: "📍 Great Rann of Kutch",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/8d/a4/caption.jpg?w=500&h=400&s=1"
    },
    {
      title: "Jaisalmer Tours",
      description: "📍 The Golden City",
      image: "https://www.tourpackagejaisalmer.com/images/package-jaisalmer.jpg"
    }
  ];
  
  export default tourData;
  