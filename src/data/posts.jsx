// Blog and news posts (English). NEW POSTS GO FIRST in the array (prepend, index 0).
//
// Fields:
//   id        internal key, unaccented, used for internal links and the page slug
//   titolo    title (visible, accents allowed)
//   data      publication date YYYY-MM-DD
//   categoria "Blog" or "Nieuws"
//   sommario  2-3 sentence summary (visible under the title; fallback meta description)
//   metaTitolo       optional full <title> of the static page, max 60 characters (fallback: titolo + brand)
//   metaDescrizione  optional meta description, max 160 characters (fallback: sommario)
//   contenuto array of blocks:
//     { tipo: "paragrafo", testo }            paragraph; use [[label|post-id]] for an internal link
//     { tipo: "titoletto", testo }            sub heading
//     { tipo: "immagine", testo: "/assets/images/x.webp", etichetta: "alt text and caption" }
//     { tipo: "emblema", testo: "/assets/images/x.png", etichetta: "alt text" }   transparent crest/emblem, centred, no chip
//     { tipo: "logo", testo: "/assets/images/x.png", etichetta: "alt text" }   small brand logo on a light chip, no caption
//     { tipo: "link", testo: "https://...", etichetta: "button label" }
//   attivo    true to publish, false to hide (build removes its static page)
//
// This file must contain plain JavaScript objects only (no JSX): the build scripts import it as an ES module.
// "Read also" blocks are added automatically (the 2 most recent other posts); do not write them by hand.

export const posts = [
  {
    id: "colossi-frames-advice-nijkerk",
    metaTitolo: "Colossi handmade frames in Nijkerk | S40 Fietsservice",
    metaDescrizione: "Colossi builds handmade Dutch bicycle frames to your size and wishes. S40 Fietsservice in Nijkerk helps you choose a frame and build the bike around it.",
    titolo: "Colossi handmade frames: advice and assembly at S40 Fietsservice in Nijkerk",
    data: "2026-11-06",
    categoria: "Blog",
    sommario:
      "Colossi builds handmade Dutch bicycle frames to the rider's size and wishes. S40 Fietsservice in Nijkerk works with Colossi and can help you choose a frame and build the complete bike around it.",
    contenuto: [
      { tipo: "paragrafo", testo: "Not every bike comes off a production line. Some frames are built by hand, to the rider's size and wishes. Colossi builds them that way in the Netherlands, and the team at S40 Fietsservice knows the builders well." },
      { tipo: "emblema", testo: "/assets/images/colossi-logo.png", etichetta: "The Colossi crest with the year 1982 and the motto Luctor et Emergo" },
      { tipo: "titoletto", testo: "Who is Colossi?" },
      { tipo: "paragrafo", testo: "Colossi makes handmade Dutch bicycle frames. Its founder, Jan Kole, raced as a professional in Europe in the 1970s and 1980s, for teams including Solahart-Herca and Femis Bank. After racing he built custom frames for bike shops in the Netherlands, Belgium, Denmark and the UK. The crest in the Colossi logo carries the year 1982 and the motto Luctor et Emergo, which is also the motto of Zeeland." },
      { tipo: "paragrafo", testo: "After a spell with a workshop in Shenzhen from 2005, Colossi has worked from Zeeland again since 2017. Jan builds the custom frames there by hand, together with his son Sander." },
      { tipo: "titoletto", testo: "What sets a Colossi apart" },
      { tipo: "paragrafo", testo: "You choose the geometry and the tubing yourself. Frames can be lugged, fillet brazed or TIG welded, and steel is the builders' favourite material. Colossi says it holds one of the largest stocks of Columbus tubes and that it can build almost anything you can imagine." },
      { tipo: "paragrafo", testo: "The collection on the Colossi website includes the CRIT, STAB, Low Pro, LINER, Mondial Road, Mondial Track, Rambler Road, Rambler Track and Rambler CX, two gravel frames (Gravel 1 and Gravel 2) and a 29'er." },
      { tipo: "titoletto", testo: "Choosing and building together" },
      { tipo: "paragrafo", testo: "Every Colossi is individual, so Colossi asks you to get in touch first and says it replies within 24 hours. S40 Fietsservice and Colossi work together and are friends. If you are thinking about a Colossi frame, you can come to S40 for advice on choosing it: type, size, geometry and tubing, based on how you ride. Once the frame is ready, we can build the complete bike for you." },
      { tipo: "titoletto", testo: "From frame to finished bike" },
      { tipo: "paragrafo", testo: "A frame is not yet a bike. S40 Fietsservice builds custom bikes and assembles bikes to order, new and used. Getting the size right comes first, and a bike fit is how you do that. Read more about [[what a bike fit is|bike-fit-nijkerk]]." },
      { tipo: "titoletto", testo: "Drop in or book an appointment" },
      { tipo: "paragrafo", testo: "Walk in during opening hours: Tuesday to Friday from 10:00 to 18:00, Saturday from 10:00 to 16:00. For a proper talk about a frame, an appointment helps, via service@s40.nl or +31 6 26980438. Prices are on request." },
      { tipo: "link", testo: "https://www.colossiv5.com/", etichetta: "See the frames at colossiv5.com" },
    ],
    attivo: true,
  },
  {
    id: "yoonit-cargo-bikes-nijkerk",
    metaTitolo: "YOONIT cargo bikes in Nijkerk | S40 Fietsservice",
    metaDescrizione: "YOONIT builds compact cargo bikes in Hamburg. S40 Fietsservice in Nijkerk is an official dealer: look at several models and take them for a ride.",
    titolo: "YOONIT cargo bikes in Nijkerk: see and ride them at S40 Fietsservice",
    data: "2026-11-05",
    categoria: "Blog",
    sommario:
      "YOONIT builds compact cargo bikes in Hamburg for families, daily errands and work. S40 Fietsservice in Nijkerk is an official dealer, so you can look at several models and take them for a ride.",
    contenuto: [
      { tipo: "paragrafo", testo: "A full-size box bike is a lot of bike to store, park and steer through town. If all you need is room for the kids, the dog or the weekly shop, a more compact cargo bike can make more sense. That is the idea behind YOONIT, and you can see it for yourself at S40 Fietsservice in Nijkerk." },
      { tipo: "logo", testo: "/assets/images/yoonit-logo.png", etichetta: "YOONIT" },
      { tipo: "titoletto", testo: "Who is YOONIT?" },
      { tipo: "paragrafo", testo: "YOONIT is a company from Hamburg that designs compact cargo and urban bikes and assembles them there, using European components. It describes its bikes as compact and modular. S40 Fietsservice, at Singel 40 in Nijkerk, is an official YOONIT dealer." },
      { tipo: "titoletto", testo: "The models" },
      { tipo: "paragrafo", testo: "The Mini Cargobike is YOONIT's ultra-compact cargo bike for family life and everyday riding: kids, a dog, the shopping. YOONIT says it is light, agile and as easy to ride as an ordinary bike." },
      { tipo: "paragrafo", testo: "The Micro Utility Bike goes smaller still. YOONIT calls it the tiniest bike with big cargo vibes, with interchangeable crates and baskets. The PRO Business Bike is aimed at trades, craft businesses and community projects." },
      { tipo: "titoletto", testo: "Pick the set-up that fits your life" },
      { tipo: "paragrafo", testo: "The Mini Cargobike comes in three use cases: Family Up for the family, Daily Basket and Dog Seat for errands and the dog, and Job Carrier for work. The bikes are fully configurable, so you build the one that suits how you will actually use it." },
      { tipo: "titoletto", testo: "Baskets, crates and extras" },
      { tipo: "paragrafo", testo: "The Micro Utility Bike works with interchangeable crates and baskets, and the Mini Cargobike is available in a version with a basket and a dog seat. Exactly which models, set-ups and accessories are in the shop changes over time, so just ask." },
      { tipo: "titoletto", testo: "Electric drive is an option" },
      { tipo: "paragrafo", testo: "YOONIT offers electric drive, the Mini Cargobike among them. Ask in the shop what is possible." },
      { tipo: "titoletto", testo: "See and ride them in Nijkerk" },
      { tipo: "paragrafo", testo: "At S40 Fietsservice you can look at several YOONIT models and try them. S40 is a workshop of cyclists for cyclists, and the care that goes into setting up a race bike goes into the bike you ride every day too. To see what else we do, read [[where to go in Nijkerk as a road cyclist|road-bike-specialist-nijkerk]]." },
      { tipo: "titoletto", testo: "Drop in or book an appointment" },
      { tipo: "paragrafo", testo: "Walk in during opening hours: Tuesday to Friday from 10:00 to 18:00, Saturday from 10:00 to 16:00. To be sure a model is in the shop, book via service@s40.nl or +31 6 26980438. Prices are on request." },
      { tipo: "link", testo: "https://minicargobike.com/en/", etichetta: "See the models at minicargobike.com" },
    ],
    attivo: true,
  },
  {
    id: "news-suela-schouten",
    metaTitolo: "BMX racer Suéla Schouten from Nijkerk | S40 Fietsservice",
    metaDescrizione: "Suéla Schouten from Nijkerk became BMX world champion (Women 30-39) in 2025. S40 Fietsservice sponsors her and keeps her bike race-ready.",
    titolo: "S40 Fietsservice sponsors BMX racer Suéla Schouten from Nijkerk",
    data: "2026-11-03",
    categoria: "News",
    sommario:
      "Suéla Schouten from Nijkerk became BMX world champion in the Women 30-39 class in 2025. S40 Fietsservice is proud to sponsor her and to keep her bike race-ready.",
    contenuto: [
      { tipo: "paragrafo", testo: "BMX racer Suéla Schouten comes from Nijkerk and rides championships in the BMX Women and Cruiser classes. S40 Fietsservice is proud to sponsor her, and her BMX comes to our workshop for maintenance and set-up." },
      { tipo: "immagine", testo: "/assets/images/suela-schouten-bmx.webp", etichetta: "Suéla Schouten with her BMX, plate number 12, in front of a green wall" },
      { tipo: "titoletto", testo: "World champion in Copenhagen" },
      { tipo: "paragrafo", testo: "In the summer of 2025, Suéla became BMX world champion in the Women 30-39 class at the World Championships in Copenhagen. According to local news, she won all the motos and the finals there." },
      { tipo: "titoletto", testo: "European and Dutch success too" },
      { tipo: "paragrafo", testo: "In 2024, Suéla became European champion in the Cruiser Women 30-39 class, with the final in Verona, Italy. She also won several Dutch titles in the Women 17+ and Cruiser classes, including in 2022 in Uithoorn." },
      { tipo: "titoletto", testo: "What we do for her" },
      { tipo: "paragrafo", testo: "BMX racing asks a lot of a bike, brakes included. For Suéla we solved the typical BMX brake problem. Servicing and setting up race BMX bikes is part of the work in our workshop, alongside road bikes, gravel bikes and track bikes." },
      { tipo: "paragrafo", testo: "Want to know what else we do? Read [[where to go in Nijkerk as a road cyclist|road-bike-specialist-nijkerk]]." },
      { tipo: "link", testo: "https://www.instagram.com/suelaschouten/", etichetta: "Follow Suéla on Instagram" },
    ],
    attivo: true,
  },
  {
    id: "bike-fit-nijkerk",
    metaTitolo: "What is a bike fit near Nijkerk? | S40 Fietsservice",
    metaDescrizione: "A bike fit sets your bike up for your body and your goals. Read what it is, when it makes sense and where to go near Nijkerk.",
    titolo: "What is a bike fit and where can you get one near Nijkerk?",
    data: "2026-11-03",
    categoria: "Blog",
    sommario:
      "A bike fit sets your bike up for your body, your way of riding and your goals. Read what it is, when it makes sense, what to prepare and where to go near Nijkerk.",
    contenuto: [
      { tipo: "paragrafo", testo: "Two cyclists on the same frame never sit exactly the same. Differences in height, flexibility, riding style and goals mean a bike that feels perfect for one rider causes pain or discomfort for another. A bike fit solves that by adapting the bike to you, rather than the other way around." },
      { tipo: "titoletto", testo: "What is a bike fit?" },
      { tipo: "paragrafo", testo: "A bike fit, also called a set-up, is the process of adjusting your bike to your body, your way of riding and your goals. The aim is to ride comfortably, efficiently and without pain or discomfort. It covers, among other things, the places where you touch the bike: the saddle, the handlebars and the pedals." },
      { tipo: "titoletto", testo: "When do you need a bike fit?" },
      { tipo: "paragrafo", testo: "Your bike is probably not set up well if you have pain or discomfort in your knees, back, neck, shoulders or wrists during or after riding, if your hands or feet go numb, or if you keep sliding forward on your saddle. A bike fit also makes sense with a new or second-hand bike, after a long break or when your body or goals change, and when you prepare for a race or a long ride. If complaints persist, also consult a doctor or physiotherapist." },
      { tipo: "titoletto", testo: "If you are buying a new or second-hand bike" },
      { tipo: "paragrafo", testo: "When buying a bike, people often look at size and price. But a frame size on paper says little about how the bike fits your body. If you are considering a new or second-hand bike, you benefit most from someone who looks at the position and the parts that go with it, before you ride many kilometres on it." },
      { tipo: "paragrafo", testo: "At S40 Fietsservice, Singel 40 in Nijkerk, set-up and bike fit are part of the daily work. The team sets bikes up for your body and your goals, advises on buying a new bike and builds new or second-hand bikes to your wishes. The mechanics are cyclists themselves and do not stop when something works, but when it works in every position." },
      { tipo: "immagine", testo: "/assets/images/crankset-install.webp", etichetta: "Mechanic fitting a crankset in the workshop" },
      { tipo: "titoletto", testo: "What can you bring?" },
      { tipo: "paragrafo", testo: "Bring your own bike, the shoes you ride in and clothing you feel comfortable in. Think beforehand about what complaints you have, how often and how long you ride and what your goal is. Also say whether you have a race or long ride planned. The clearer your question, the more targeted the set-up." },
      { tipo: "titoletto", testo: "For road bike and gravel too" },
      { tipo: "paragrafo", testo: "A good set-up matters as much on a road bike as on a gravel bike. Also read [[what to expect from a road bike specialist|road-bike-specialist-nijkerk]] and [[how to get a gravel bike serviced in Nijkerk|gravel-bike-service-nijkerk]]." },
      { tipo: "titoletto", testo: "Booking an appointment" },
      { tipo: "paragrafo", testo: "You book via service@s40.nl, by phone on +31 6 26980438 or with the form on the website. Walking in without an appointment is possible too: the workshop is open Tuesday to Friday from 10:00 to 18:00 and on Saturday from 10:00 to 16:00. Prices are on request." },
    ],
    attivo: true,
  },
  {
    id: "gravel-bike-service-nijkerk",
    metaTitolo: "Gravel bike service in Nijkerk | S40 Fietsservice",
    metaDescrizione: "A gravel bike sees more dirt, sand and water than a road bike. Read what to look out for and where to go in Nijkerk for maintenance and repair.",
    titolo: "Servicing or repairing a gravel bike in Nijkerk: what you need to know",
    data: "2026-11-03",
    categoria: "Blog",
    sommario:
      "A gravel bike sees more dirt, sand and water than a road bike. Read what to look out for when servicing it and where to go in Nijkerk for maintenance and repair.",
    contenuto: [
      { tipo: "paragrafo", testo: "On a gravel bike you ride asphalt, gravel, sand and forest paths, sometimes all in one ride. That makes it versatile, but also more prone to wear than a bike that mostly rides on dry asphalt. If you look after your gravel bike well, you enjoy it for longer and stand still less often far from home." },
      { tipo: "titoletto", testo: "Where does a gravel bike wear faster?" },
      { tipo: "paragrafo", testo: "Sand and mud work their way into the chain, the cogs and the bearings. Water and dirt also load the brakes. If you ride tubeless, the sealant in the tyres dries up over time and must be replaced. The more varied the surface, the more important it is to check regularly instead of waiting for something to go wrong." },
      { tipo: "titoletto", testo: "A small routine between services" },
      { tipo: "paragrafo", testo: "After a wet or sandy ride, carefully rinse off the worst dirt, without a pressure washer on the bearings, and dry the bike. Clean the chain and lubricate it again. Check the tyre pressure and listen for new noises from the bottom bracket or the head tube. A chain that stays clean and lubricated lasts longer and shifts better." },
      { tipo: "immagine", testo: "/assets/images/chain-cleaning-cyclon.webp", etichetta: "A bike chain in the CyclOn cleaning machine" },
      { tipo: "titoletto", testo: "For those who ride long days off-road" },
      { tipo: "paragrafo", testo: "If you ride long tours on varied terrain or start gravel races, you need a bike that does not let you down far from home. You want a workshop that understands what such a day asks of your bike and that takes a strange noise seriously, not only what is on the list." },
      { tipo: "paragrafo", testo: "At S40 Fietsservice, Singel 40 in Nijkerk, cyclists service and repair gravel bikes, just like road bikes, track bikes, BMX bikes and triathlon bikes. The team looks at the whole bike and also takes on jobs that other workshops turn down. For chains, S40 stocks Izumi and is a dealer of CyclOn, known for bike care. The usual turnaround is 24 hours." },
      { tipo: "titoletto", testo: "Maintenance, repair or something special" },
      { tipo: "paragrafo", testo: "You can go to S40 Fietsservice for all work: maintenance, repair, parts and accessories, and a custom build. A good set-up also helps on long days: read [[what a bike fit is and when you need one|bike-fit-nijkerk]]. Do you also ride on the road? Then this [[road bike specialist in Nijkerk|road-bike-specialist-nijkerk]] is the place for your road bike too." },
      { tipo: "titoletto", testo: "Dropping by or booking an appointment" },
      { tipo: "paragrafo", testo: "Walk in during opening hours: Tuesday to Friday from 10:00 to 18:00, Saturday from 10:00 to 16:00. For a bigger job an appointment helps, via service@s40.nl or +31 6 26980438. Prices are on request, because every bike and every job is different." },
    ],
    attivo: true,
  },
  {
    id: "road-bike-specialist-nijkerk",
    metaTitolo: "Road bike specialist in Nijkerk | S40 Fietsservice",
    metaDescrizione: "Own a road bike in or around Nijkerk? This is what to expect from a road bike specialist who races himself and has worked in UCI teams.",
    titolo: "Road bike specialist in Nijkerk: where your bike is in good hands",
    data: "2026-11-03",
    categoria: "Blog",
    sommario:
      "If you own a road bike in or around Nijkerk, you want a workshop that understands what you ask of your bike. This is what to expect from a road bike specialist who races himself and has worked in UCI teams.",
    contenuto: [
      { tipo: "paragrafo", testo: "A road bike is not an ordinary bike. A gear that does not quite shift in one position, a saddle a fraction too high or a cable that does not run freely: you feel it on every ride, and in a race it can make the difference. That is why many cyclists in Nijkerk and the surrounding area look not just for a bike shop, but for a road bike specialist." },
      { tipo: "immagine", testo: "/assets/images/tool-wall.webp", etichetta: "The tool wall in the workshop at Singel 40" },
      { tipo: "titoletto", testo: "What makes a road bike specialist different?" },
      { tipo: "paragrafo", testo: "A good road bike specialist does not only look at what is broken, but at how the bike works as a whole: drivetrain, brakes, wheels, position and the way you ride. The difference lies in experience with exactly this kind of bike and in the will to keep going until it is right." },
      { tipo: "titoletto", testo: "For those who train or race seriously" },
      { tipo: "paragrafo", testo: "If you ride kilometres every week, ride with a club or start races, you want your bike to do the same thing every time. You do not want to find out in the middle of a descent that something is wrong, and you want a workshop that understands you have a date for a race." },
      { tipo: "paragrafo", testo: "At S40 Fietsservice, Singel 40, that is daily practice. The cyclists behind the workbench have more than twenty years of experience in Europe, from amateur to professional, worked as mechanics in UCI teams and prepare bikes to UCI rules. They do not stop when the gears shift, but when they work perfectly in every position. And because they ride themselves, they understand why your bike has to be ready on time." },
      { tipo: "titoletto", testo: "A problem nobody solves?" },
      { tipo: "paragrafo", testo: "Sometimes a bike has a problem that several workshops fail to solve. S40 Fietsservice takes on such jobs. The time the team spends investigating the problem and looking for the best solution is not charged. In a Google review, a customer writes that other shops could not fix it and that at S40 it was repaired straight away and fast." },
      { tipo: "titoletto", testo: "What can you have done?" },
      { tipo: "paragrafo", testo: "You can go to S40 Fietsservice for maintenance and repair, race preparation, parts and accessories, and a custom bike, new or second-hand. Set-up and bike fit are part of it too: read [[what a bike fit is|bike-fit-nijkerk]]. Besides road bikes, the team works on gravel bikes, track bikes, BMX bikes and triathlon bikes. For gravel bike maintenance, [[read on here|gravel-bike-service-nijkerk]]. The usual turnaround is 24 hours." },
      { tipo: "titoletto", testo: "With or without an appointment" },
      { tipo: "paragrafo", testo: "You can walk in without an appointment: the workshop is open Tuesday to Friday from 10:00 to 18:00 and on Saturday from 10:00 to 16:00. For a bigger job or a race coming up, an appointment helps. Email service@s40.nl, call +31 6 26980438 or use the form on the website. Prices are on request." },
    ],
    attivo: true,
  },
];
