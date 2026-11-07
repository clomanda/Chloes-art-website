/**
 * All visitor-facing copy, shop data, and links live in this file.
 * Replace the sample words, prices, and empty image frames with Chloe's own.
 */

export const site = {
  name: "Chloe Meehan",
  title: "Chloe Meehan Artwork",
  description:
    "Prints of finished drawings, and handmade makeup bags and tote bags, from Chloe Meehan.",
  year: 2026,
  currencySymbol: "€",
  imageLabel: "Your image",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/shop", label: "Shop" },
    { href: "/shop/textiles", label: "Textiles" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ],
  contact: {
    address: ["Dingle, County Kerry, Ireland"],
    hours: "Monday to Friday, 9am to 5pm",
    email: "chloemeehan1@live.com",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/chloemehanart/" },
    { label: "Facebook", href: "https://www.facebook.com/chloemeehanart/" },
  ],
  footerLinks: [
    { href: "/policies/stockists", label: "Become a stockist" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/policies/returns", label: "Returns and exchanges" },
    { href: "/policies/shipping", label: "Shipping info" },
    { href: "/policies/privacy", label: "Privacy statement" },
    { href: "/policies/cookies", label: "Cookie policy" },
    { href: "/contact", label: "Contact" },
  ],
  mailingList: {
    heading: "Notes by email",
    text: "Occasional notes when new work is ready. This form does not send email until you connect one.",
    placeholder: "Email",
    button: "Join the mailing list +",
    success: "Noted in this browser only. Connect a mailing service before you launch.",
  },
  ui: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "Back to top",
    readStory: "Read my story",
    viewWork: "View the work",
    enquire: "Enquire",
    requestCommission: "Request a commission",
    addToCart: "Add to cart",
    added: "Added",
    soldOut: "Sold",
    basket: "Basket",
    emptyBasket: "Your basket is empty.",
    continueShopping: "Continue shopping",
    remove: "Remove",
    quantity: "Quantity",
    subtotal: "Subtotal",
    paymentNote:
      "This basket is saved in this browser only. The site does not take payment.",
    askAboutOrder: "Ask about this order",
    related: "More from this group",
    sampleShopNote:
      "Preview works and stand-in prices. Images and details can be updated later.",
    contactSuccess:
      "This form stays on your device. Connect an email service when you want messages to arrive.",
    send: "Send message",
    required: "Required",
  },
  home: {
    aboutKicker: "About",
    aboutHeading: "Meet Chloe",
    aboutText:
      "Colour comes first. Chloe builds a picture in layers until a window, a chair, or a bowl of ordinary fruit feels awake. The studio also makes prints, paper goods, and handmade bags.",
    shopKicker: "Shop now",
    shopHeading: "Shop the collection",
    shopText:
      "Four groups of work, from prints of finished drawings to handmade bags.",
    practiceKicker: "Studio practice",
    practiceHeading: "Made at the bench",
    practiceText:
      "Use this band to say how the work is made. The lines below are prompts, not claims.",
    practicePoints: [
      "Name the materials you actually use",
      "Describe how a painting or print is packed",
      "Say which editions are numbered and which stay open",
    ],
    practiceLink: "Browse the shop",
    commissionKicker: "Commissions",
    commissionHeading: "A picture for a particular room",
    commissionText:
      "Send the size, the light in the room, and a few words about the mood. Chloe replies by email. This website does not take a fee.",
    notesKicker: "Studio notes",
    notesHeading: "From the bench",
    notesText:
      "Short updates live on the news page. Add a social feed later if you want one. These cards are placeholders.",
  },
  slides: [
    {
      title: "Original drawings",
      text: "Original drawings are not listed yet.",
      href: "/shop/originals",
      cta: "View original drawings",
      image: "",
      alt: "",
    },
    {
      title: "Prints",
      text: "Prints taken from finished coloured pencil drawings. The prices here are stand-ins.",
      href: "/shop/prints",
      cta: "Browse prints",
      image: "/artworks/03-toy-story-finished-drawing.jpg",
      alt: "Finished coloured pencil drawing of Toy Story characters",
    },
    {
      title: "Cards and small gifts",
      text: "Folded notes and little paper sets for someone who would rather receive colour than a long letter.",
      href: "/shop/cards",
      cta: "View cards and gifts",
      image: "",
      alt: "",
    },
    {
      title: "Textiles",
      text: "Handmade makeup bags and a toile tote bag are in the shop.",
      href: "/shop/textiles",
      cta: "View textiles",
      image: "/textiles/toile-tote-hanging-front.jpg",
      alt: "Handmade blue-and-white toile tote bag hanging on a wall, with heart charms on the ties",
    },
  ],
  about: {
    heading: "Colour, then the subject",
    storyTitle: "The story",
    story: [
      "Chloe works from looking, not from a house style. A picture usually begins with a colour that will not sit quietly, then a simple subject is chosen to hold it.",
      "The studio keeps the range small on purpose: paintings, prints, paper, and cloth. That makes the shop easy to tend and the work easy to recognise.",
      "Replace these paragraphs with Chloe's own account. Nothing here is a biography.",
    ],
    visionTitle: "What the studio is for",
    vision: [
      "Pictures for people who live with them, and the odd commission when a room needs something made for it.",
    ],
    studioTitle: "The studio",
    studio: [
      "Visits are by appointment until you publish real hours. Write how to find the door, where to wait, and whether children or dogs are welcome.",
    ],
    showsTitle: "Shows and fairs",
    showsNote: "Sample entries. Replace every line with a show you actually did.",
    shows: [
      {
        when: "March 2026",
        title: "Open studio afternoon",
        detail: "Your address. Add the hours when you know them.",
      },
      {
        when: "November 2025",
        title: "Group wall",
        detail: "A shared room with other makers. Name the venue here.",
      },
      {
        when: "June 2025",
        title: "Print table at a local fair",
        detail: "A one-day table. Add the fair name if you take part.",
      },
    ],
  },
  categories: [
    {
      slug: "originals",
      title: "Original drawings",
      summary: "Original drawings are not listed yet.",
      image: "",
      alt: "",
    },
    {
      slug: "prints",
      title: "Prints",
      summary: "Prints of finished coloured pencil drawings. Preview images and stand-in prices.",
      image: "/artworks/03-toy-story-finished-drawing.jpg",
      alt: "Finished coloured pencil drawing of Toy Story characters",
    },
    {
      slug: "cards",
      title: "Cards and gifts",
      summary: "Folded notes and small paper sets, packed flat.",
      image: "",
      alt: "",
    },
    {
      slug: "textiles",
      title: "Textiles",
      summary: "Handmade makeup bags and a toile tote bag.",
      image: "/textiles/toile-tote-hanging-front.jpg",
      alt: "Handmade blue-and-white toile tote bag hanging on a wall, with heart charms on the ties",
    },
  ],
  products: [
    {
      slug: "dua-lipa",
      title: "Dua Lipa",
      category: "prints",
      price: 25,
      sku: "CH-110",
      available: true,
      image: "/artworks/01-dua-lipa-portrait.jpg",
      alt: "Finished coloured pencil portrait of Dua Lipa with a snake on her cheek against a crocodile-skin background",
      summary:
        "Finished coloured pencil portrait, June 2020. Blonde hair, a snake on the cheek, and a crocodile-skin background.",
      description: [
        "Finished coloured pencil portrait from June 2020.",
        "Preview image from Chloe's public Facebook page. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
        { label: "Date", value: "June 2020" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "pink-hair",
      title: "Pink hair",
      category: "prints",
      price: 25,
      sku: "CH-111",
      available: true,
      image: "/artworks/02-pink-hair-portrait.jpg",
      alt: "Finished coloured pencil portrait with pink hair, a pearl crown, and constellations",
      summary:
        "Completed coloured pencil portrait, March 2020. Pink hair, a pearl crown, and constellations.",
      description: [
        "Completed coloured pencil portrait from March 2020.",
        "Preview image from Chloe's public Facebook page. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
        { label: "Date", value: "March 2020" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "toy-story",
      title: "Toy Story",
      category: "prints",
      price: 25,
      sku: "CH-112",
      available: true,
      image: "/artworks/03-toy-story-finished-drawing.jpg",
      alt: "Finished coloured pencil drawing of Toy Story characters",
      summary: "Finished coloured pencil drawing, July 2019.",
      description: [
        "Finished coloured pencil drawing from July 2019.",
        "Preview image from Chloe's public Facebook page. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
        {
          label: "Materials",
          value: "Faber-Castell Polychromos, Daler Rowney paper, and a Posca white paint pen",
        },
        { label: "Date", value: "July 2019" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "cersei-lannister",
      title: "Cersei Lannister",
      category: "prints",
      price: 25,
      sku: "CH-113",
      available: true,
      image: "/artworks/04-cersei-lannister-drawing.jpg",
      alt: "Finished coloured pencil portrait of Cersei Lannister in front of the Lannister sigil",
      summary: "Completed coloured pencil portrait with the Lannister sigil, May 2019.",
      description: [
        "Completed coloured pencil portrait from May 2019.",
        "Preview image from Chloe's public Facebook page. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
        { label: "Date", value: "May 2019" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "daenerys-targaryen",
      title: "Daenerys Targaryen",
      category: "prints",
      price: 25,
      sku: "CH-114",
      available: true,
      image: "/artworks/05-daenerys-targaryen-drawing.jpg",
      alt: "Finished coloured pencil portrait of Daenerys Targaryen in profile",
      summary: "Finished coloured pencil portrait, April 2019.",
      description: [
        "Finished coloured pencil portrait from April 2019.",
        "Preview image from Chloe's public Facebook page. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
        {
          label: "Materials",
          value: "Faber-Castell Polychromos and a Posca paint marker on Strathmore paper",
        },
        { label: "Date", value: "April 2019" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "nyane",
      title: "Nyane",
      category: "prints",
      price: 25,
      sku: "CH-115",
      available: true,
      image: "/artworks/06-nyane-portrait-march-10.jpg",
      alt: "Finished coloured pencil portrait of Nyane with purple hair in two buns",
      summary: "Finished coloured pencil portrait, March 2019.",
      description: [
        "Finished coloured pencil portrait from March 2019.",
        "Preview image from Chloe's public Facebook page. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
        { label: "Materials", value: "Faber-Castell Polychromos on Daler Rowney paper" },
        { label: "Date", value: "March 2019" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "the-nun",
      title: "The Nun",
      category: "prints",
      price: 25,
      sku: "CH-116",
      available: true,
      image: "/artworks/07-the-nun-finished-drawing.jpg",
      alt: "Finished coloured pencil drawing of a nun, photographed with a pencil and rosary nearby",
      summary: "Finished coloured pencil drawing, February 2019.",
      description: [
        "Finished coloured pencil drawing from February 2019.",
        "Preview image from Chloe's public Facebook page. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
        { label: "Date", value: "February 2019" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "dua-lipa-profile",
      title: "Dua Lipa, profile",
      category: "prints",
      price: 25,
      sku: "CH-117",
      available: true,
      image: "/artworks/08-dua-lipa-finished-2019.jpg",
      alt: "Finished coloured pencil profile portrait of Dua Lipa in a blue dress",
      summary: "Finished coloured pencil profile in a blue dress, January 2019.",
      description: [
        "Finished coloured pencil profile from January 2019. This is a separate drawing from the later Dua Lipa portrait.",
        "Preview image from Chloe's public Facebook page. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
        { label: "Materials", value: "Faber-Castell Polychromos on Strathmore paper" },
        { label: "Date", value: "January 2019" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "god-is-a-woman",
      title: "God is a Woman",
      category: "prints",
      price: 25,
      sku: "CH-119",
      available: true,
      image: "/artworks/10-water-braid-portrait.jpg",
      alt: "Finished coloured pencil drawing of Ariana Grande, from the God is a Woman cover",
      summary: "Finished coloured pencil drawing of Ariana Grande, from the God is a Woman cover.",
      description: [
        "Finished coloured pencil drawing of Ariana Grande, from the God is a Woman cover.",
        "Preview image from Chloe's gallery. The price is a stand-in and does not mean this drawing is official merchandise or licensed.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "rapunzel-lanterns",
      title: "Rapunzel, lanterns",
      category: "prints",
      price: 25,
      sku: "CH-120",
      available: true,
      image: "/artworks/11-rapunzel-tangled.jpg",
      alt: "Coloured pencil drawing of Rapunzel among floating lanterns",
      summary: "Finished coloured pencil drawing of Rapunzel and lanterns.",
      description: [
        "Finished coloured pencil drawing of Rapunzel and lanterns.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "james-charles",
      title: "James Charles",
      category: "prints",
      price: 25,
      sku: "CH-121",
      available: true,
      image: "/artworks/12-melting-makeup-portrait.jpg",
      alt: "Finished coloured pencil portrait of James Charles",
      summary: "Finished coloured pencil portrait of James Charles.",
      description: [
        "Finished coloured pencil portrait of James Charles.",
        "Preview image from Chloe's gallery. The price is a stand-in and does not mean this drawing is official merchandise or licensed.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "no-tears-left-to-cry",
      title: "No Tears Left to Cry",
      category: "prints",
      price: 25,
      sku: "CH-122",
      available: true,
      image: "/artworks/13-rainbow-profile.jpg",
      alt: "Finished coloured pencil drawing of Ariana Grande, from No Tears Left to Cry",
      summary: "Finished coloured pencil drawing of Ariana Grande, from No Tears Left to Cry.",
      description: [
        "Finished coloured pencil drawing of Ariana Grande, from No Tears Left to Cry.",
        "Preview image from Chloe's gallery. The price is a stand-in and does not mean this drawing is official merchandise or licensed.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "keilidh",
      title: "Keilidh",
      category: "prints",
      price: 25,
      sku: "CH-123",
      available: true,
      image: "/artworks/14-bw-rose-portrait.jpg",
      alt: "Finished graphite portrait of Keilidh, an Irish makeup artist",
      summary: "Finished graphite portrait of Keilidh, an Irish makeup artist.",
      description: [
        "Finished graphite portrait of Keilidh, an Irish makeup artist.",
        "Preview image from Chloe's gallery. The price is a stand-in and does not mean this drawing is official merchandise or licensed.",
      ],
      details: [
        { label: "Medium", value: "Graphite" },
      ],
      tags: ["graphite", "portrait"],
    },
    {
      slug: "john-muldoon",
      title: "John Muldoon",
      category: "prints",
      price: 25,
      sku: "CH-125",
      available: true,
      image: "/artworks/16-green-jersey-portrait.jpg",
      alt: "Finished coloured pencil portrait of John Muldoon, former Connacht Rugby player",
      summary: "Finished coloured pencil portrait of John Muldoon, former Connacht Rugby player.",
      description: [
        "Finished coloured pencil portrait of John Muldoon, former Connacht Rugby player.",
        "Preview image from Chloe's gallery. The price is a stand-in and does not mean this drawing is official merchandise or licensed.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "denim-portrait",
      title: "Denim portrait",
      category: "prints",
      price: 25,
      sku: "CH-126",
      available: true,
      image: "/artworks/17-bw-denim-portrait.jpg",
      alt: "Graphite portrait of a woman in a denim jacket",
      summary: "Finished graphite portrait.",
      description: [
        "Finished graphite portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Graphite" },
      ],
      tags: ["graphite", "portrait"],
    },
    {
      slug: "flower-crown",
      title: "Flower crown",
      category: "prints",
      price: 25,
      sku: "CH-127",
      available: true,
      image: "/artworks/18-flower-crown-portrait.jpg",
      alt: "Coloured pencil portrait of a woman wearing a flower crown",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "pennywise",
      title: "Pennywise",
      category: "prints",
      price: 25,
      sku: "CH-128",
      available: true,
      image: "/artworks/19-pennywise.jpg",
      alt: "Coloured pencil drawing of Pennywise",
      summary: "Finished coloured pencil drawing.",
      description: [
        "Finished coloured pencil drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "game-of-thrones",
      title: "Game of Thrones",
      category: "prints",
      price: 25,
      sku: "CH-129",
      available: true,
      image: "/artworks/20-game-of-thrones.jpg",
      alt: "Coloured pencil group drawing of Game of Thrones characters",
      summary: "Finished coloured pencil drawing.",
      description: [
        "Finished coloured pencil drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "looking-down",
      title: "Looking down",
      category: "prints",
      price: 25,
      sku: "CH-130",
      available: true,
      image: "/artworks/21-bw-looking-down.jpg",
      alt: "Graphite portrait of a woman looking downward",
      summary: "Finished graphite portrait.",
      description: [
        "Finished graphite portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Graphite" },
      ],
      tags: ["graphite", "portrait"],
    },
    {
      slug: "shawn-mendes",
      title: "Shawn Mendes",
      category: "prints",
      price: 25,
      sku: "CH-132",
      available: true,
      image: "/artworks/23-bw-guitar-portrait.jpg",
      alt: "Finished graphite portrait of Shawn Mendes with a guitar",
      summary: "Finished graphite portrait of Shawn Mendes.",
      description: [
        "Finished graphite portrait of Shawn Mendes.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Graphite" },
      ],
      tags: ["graphite", "portrait"],
    },
    {
      slug: "hoodie-and-crown",
      title: "Hoodie and crown",
      category: "prints",
      price: 25,
      sku: "CH-133",
      available: true,
      image: "/artworks/24-hoodie-crown-portrait.jpg",
      alt: "Coloured pencil portrait of a woman in a grey hoodie wearing a gold crown",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "thirteen-reasons-why",
      title: "13 Reasons Why",
      category: "prints",
      price: 25,
      sku: "CH-134",
      available: true,
      image: "/artworks/25-13-reasons-why.jpg",
      alt: "Coloured pencil drawing of two figures with cassette-tape labels over their eyes",
      summary: "Finished coloured pencil drawing.",
      description: [
        "Finished coloured pencil drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "tiara",
      title: "Tiara",
      category: "prints",
      price: 25,
      sku: "CH-135",
      available: true,
      image: "/artworks/26-tiara-smile-portrait.jpg",
      alt: "Coloured pencil portrait of a smiling woman wearing a tiara",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "ian-somerhalder",
      title: "Ian Somerhalder",
      category: "prints",
      price: 25,
      sku: "CH-136",
      available: true,
      image: "/artworks/27-dark-haired-man-portrait.jpg",
      alt: "Coloured pencil portrait of Ian Somerhalder",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "moana",
      title: "Moana",
      category: "prints",
      price: 25,
      sku: "CH-137",
      available: true,
      image: "/artworks/28-moana.jpg",
      alt: "Coloured pencil drawing of Moana in a circle of coloured pencils",
      summary: "Finished coloured pencil drawing.",
      description: [
        "Finished coloured pencil drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "beauty-and-the-beast",
      title: "Beauty and the Beast",
      category: "prints",
      price: 25,
      sku: "CH-138",
      available: true,
      image: "/artworks/29-beauty-and-the-beast.jpg",
      alt: "Coloured pencil drawing of Beauty and the Beast dancing, with a red rose",
      summary: "Finished coloured pencil drawing.",
      description: [
        "Finished coloured pencil drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "portrait-in-shadow",
      title: "Portrait in shadow",
      category: "prints",
      price: 25,
      sku: "CH-139",
      available: true,
      image: "/artworks/30-man-black-background.jpg",
      alt: "Coloured pencil portrait of a man against a black background",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "bruno-mars",
      title: "Bruno Mars",
      category: "prints",
      price: 25,
      sku: "CH-140",
      available: true,
      image: "/artworks/31-xxiv-cap-portrait.jpg",
      alt: "Coloured pencil portrait of Bruno Mars in a colourful jacket and XXIV cap",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "cosmic-portrait",
      title: "Cosmic portrait",
      category: "prints",
      price: 25,
      sku: "CH-141",
      available: true,
      image: "/artworks/34-cosmic-portrait.jpg",
      alt: "Coloured pencil drawing of a figure and an older face against a starry nebula",
      summary: "Finished coloured pencil drawing.",
      description: [
        "Finished coloured pencil drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "the-joker",
      title: "The Joker",
      category: "prints",
      price: 25,
      sku: "CH-142",
      available: true,
      image: "/artworks/33-joker.jpg",
      alt: "Coloured pencil portrait of the Joker with tattoos and green-purple hair",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "red-split-portrait",
      title: "Red split portrait",
      category: "prints",
      price: 25,
      sku: "CH-143",
      available: true,
      image: "/artworks/35-red-split-portrait.jpg",
      alt: "Coloured pencil portrait split between natural skin and bright red",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "smiling-portrait",
      title: "Smiling portrait",
      category: "prints",
      price: 25,
      sku: "CH-144",
      available: true,
      image: "/artworks/36-smiling-bw-man.jpg",
      alt: "Graphite portrait of a smiling man",
      summary: "Finished graphite portrait.",
      description: [
        "Finished graphite portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Graphite" },
      ],
      tags: ["graphite", "portrait"],
    },
    {
      slug: "double-portrait",
      title: "Double portrait",
      category: "prints",
      price: 25,
      sku: "CH-145",
      available: true,
      image: "/artworks/37-two-women-portrait.jpg",
      alt: "Coloured pencil double portrait of two young women",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "jon-snow",
      title: "Jon Snow",
      category: "prints",
      price: 25,
      sku: "CH-146",
      available: true,
      image: "/artworks/38-jon-snow.jpg",
      alt: "Coloured pencil portrait of Jon Snow",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "ariana-grande",
      title: "Ariana Grande",
      category: "prints",
      price: 25,
      sku: "CH-147",
      available: true,
      image: "/artworks/39-ariana-bunny.jpg",
      alt: "Coloured pencil portrait of Ariana Grande wearing black bunny ears",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "the-kiss",
      title: "The kiss",
      category: "prints",
      price: 25,
      sku: "CH-148",
      available: true,
      image: "/artworks/40-couple-kiss.jpg",
      alt: "Coloured pencil portrait of a couple kissing in profile",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "rapunzel-and-pascal",
      title: "Rapunzel and Pascal",
      category: "prints",
      price: 25,
      sku: "CH-149",
      available: true,
      image: "/artworks/41-rapunzel-pascal.jpg",
      alt: "Coloured pencil drawing of Rapunzel with Pascal on her shoulder",
      summary: "Finished coloured pencil drawing. This is a separate piece from the lantern drawing.",
      description: [
        "Finished coloured pencil drawing. This is a separate piece from the lantern drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "justin-bieber",
      title: "Justin Bieber",
      category: "prints",
      price: 25,
      sku: "CH-150",
      available: true,
      image: "/artworks/42-justin-bieber-color.jpg",
      alt: "Coloured pencil portrait of Justin Bieber with blonde hair",
      summary: "Finished coloured pencil portrait. This is a separate drawing from the graphite guitar portrait.",
      description: [
        "Finished coloured pencil portrait. This is a separate drawing from the graphite guitar portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "rainbow-hair",
      title: "Rainbow hair",
      category: "prints",
      price: 25,
      sku: "CH-151",
      available: true,
      image: "/artworks/43-rainbow-hair-portrait.jpg",
      alt: "Coloured pencil portrait of a woman with rainbow-coloured hair",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "conor-mcgregor",
      title: "Conor McGregor",
      category: "prints",
      price: 25,
      sku: "CH-152",
      available: true,
      image: "/artworks/44-irish-flag-portrait.jpg",
      alt: "Coloured pencil portrait of Conor McGregor with an Irish flag motif",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "mayo-jersey",
      title: "Mayo jersey",
      category: "prints",
      price: 25,
      sku: "CH-153",
      available: true,
      image: "/artworks/46-gaa-everys.jpg",
      alt: "Coloured pencil portrait of a smiling GAA player in a green Mayo Everys jersey, number 11",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "maleficent",
      title: "Maleficent",
      category: "prints",
      price: 25,
      sku: "CH-154",
      available: true,
      image: "/artworks/47-maleficent.jpg",
      alt: "Coloured pencil drawing of Maleficent with black horns against green leaves",
      summary: "Finished coloured pencil drawing.",
      description: [
        "Finished coloured pencil drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "iron-man",
      title: "Iron Man",
      category: "prints",
      price: 25,
      sku: "CH-155",
      available: true,
      image: "/artworks/48-iron-man.jpg",
      alt: "Coloured pencil drawing of Iron Man in red and gold armour",
      summary: "Finished coloured pencil drawing.",
      description: [
        "Finished coloured pencil drawing.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "drawing"],
    },
    {
      slug: "ed-sheeran",
      title: "Ed Sheeran",
      category: "prints",
      price: 25,
      sku: "CH-156",
      available: true,
      image: "/artworks/49-ed-sheeran.jpg",
      alt: "Coloured pencil portrait of Ed Sheeran with a guitar and an orange paw-print background",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "taylor-swift",
      title: "Taylor Swift",
      category: "prints",
      price: 25,
      sku: "CH-157",
      available: true,
      image: "/artworks/50-taylor-swift-circle.jpg",
      alt: "Coloured pencil portrait of Taylor Swift in a circular blue patterned frame",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "daenerys-graphite",
      title: "Daenerys Targaryen, graphite",
      category: "prints",
      price: 25,
      sku: "CH-158",
      available: true,
      image: "/artworks/51-daenerys-bw.jpg",
      alt: "Graphite profile portrait of Daenerys Targaryen",
      summary: "Finished graphite portrait. This is a separate drawing from the coloured Daenerys portrait already in the shop.",
      description: [
        "Finished graphite portrait. This is a separate drawing from the coloured Daenerys portrait already in the shop.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Graphite" },
      ],
      tags: ["graphite", "portrait"],
    },
    {
      slug: "geometric-headpiece",
      title: "Geometric headpiece",
      category: "prints",
      price: 25,
      sku: "CH-159",
      available: true,
      image: "/artworks/52-geometric-headpiece.jpg",
      alt: "Coloured pencil portrait of a woman with a geometric gold headpiece and a blunt fringe",
      summary: "Finished coloured pencil portrait.",
      description: [
        "Finished coloured pencil portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Coloured pencil" },
      ],
      tags: ["coloured pencil", "portrait"],
    },
    {
      slug: "feather-headdress",
      title: "Feather headdress",
      category: "prints",
      price: 25,
      sku: "CH-160",
      available: true,
      image: "/artworks/53-feather-headdress.jpg",
      alt: "Portrait of a woman wearing a feather headdress",
      summary: "Finished portrait.",
      description: [
        "Finished portrait.",
        "Preview image from Chloe's gallery. A higher-resolution file can replace it later. The price is a stand-in and does not mean this drawing is official merchandise or currently for sale.",
      ],
      details: [
        { label: "Medium", value: "Graphite and coloured pencil" },
      ],
      tags: ["graphite and coloured pencil", "portrait"],
    },
    {
      slug: "eight-folded-notes",
      title: "Eight folded notes",
      category: "cards",
      price: 22,
      sku: "CH-300",
      available: true,
      image: "",
      alt: "",
      summary: "A set of eight blank notes in a paper band.",
      description: [
        "Sample stationery. List the card size and whether envelopes are included.",
      ],
      details: [
        { label: "Count", value: "8 cards" },
        { label: "Card size", value: "A6" },
      ],
      tags: ["paper", "gift"],
    },
    {
      slug: "postcard-set",
      title: "Postcard set",
      category: "cards",
      price: 14,
      sku: "CH-301",
      available: true,
      image: "",
      alt: "",
      summary: "Six postcards drawn from the studio palette.",
      description: ["Sample set. Say if they are blank on the back."],
      details: [
        { label: "Count", value: "6 cards" },
        { label: "Size", value: "A6" },
      ],
      tags: ["paper", "gift"],
    },
    {
      slug: "toile-tote-bag",
      title: "Toile tote bag",
      category: "textiles",
      price: 45,
      sku: "CH-161",
      available: true,
      image: "/textiles/toile-tote-hanging-front.jpg",
      alt: "Handmade blue-and-white toile tote bag hanging on a wall, with heart charms on the ties",
      summary:
        "Handmade tote in a blue-and-white toile print of dogs and landscape, with a tie closure and heart charms.",
      description: [
        "A handmade tote with a blue-and-white toile print, a navy lining, and a tie closure finished with small heart charms. The sewn-in label reads Chloe's Creations.",
        "The price is a stand-in. This bag is Chloe's own handmade work.",
      ],
      details: [{ label: "Kind", value: "Handmade tote bag" }],
      tags: ["handmade", "tote"],
      gallery: [
        {
          src: "/textiles/toile-tote-beach.jpg",
          alt: "The toile tote bag sitting on a sandy beach",
        },
        {
          src: "/textiles/toile-tote-hanging-angle.jpg",
          alt: "Angled view of the hanging toile tote bag",
        },
        {
          src: "/textiles/toile-tote-label.jpg",
          alt: "Close-up of the Chloe's Creations label and heart charms on the tote ties",
        },
      ],
    },
    {
      slug: "toile-makeup-bag",
      title: "Toile makeup bag",
      category: "textiles",
      price: 28,
      sku: "CH-162",
      available: true,
      image: "/textiles/toile-makeup-angle.jpg",
      alt: "Quilted blue-and-white toile makeup bag on a white table, with lace along the zip",
      summary:
        "Handmade quilted makeup bag in a matching blue-and-white toile print, with lace along the zip.",
      description: [
        "A handmade quilted makeup bag in the same blue-and-white toile print, with a blue zip and white lace along the opening.",
        "The price is a stand-in. This bag is Chloe's own handmade work.",
      ],
      details: [{ label: "Kind", value: "Handmade makeup bag" }],
      tags: ["handmade", "makeup bag"],
      gallery: [
        {
          src: "/textiles/toile-makeup-with-label.jpg",
          alt: "Toile makeup bag showing the Chloe's Creations label",
        },
        {
          src: "/textiles/toile-makeup-three-quarter.jpg",
          alt: "Three-quarter view of the quilted toile makeup bag",
        },
        {
          src: "/textiles/toile-makeup-side-charm.jpg",
          alt: "Side view of the toile makeup bag with the zip charm",
        },
        {
          src: "/textiles/toile-makeup-top.jpg",
          alt: "Top-down view of the toile makeup bag",
        },
      ],
    },
    {
      slug: "scottie-makeup-bag",
      title: "Scottie makeup bag",
      category: "textiles",
      price: 28,
      sku: "CH-163",
      available: true,
      image: "/textiles/scottie-makeup-styled.jpg",
      alt: "Handmade cream makeup bag printed with small dogs and red and yellow dots, with a blue bow and a Chloe's Creations label",
      summary:
        "Handmade makeup bag in cream fabric printed with small dogs and red and yellow dots, finished with a blue bow.",
      description: [
        "A handmade makeup bag printed with small white dogs and red and yellow dots, finished with a blue satin bow. The sewn-in label reads Chloe's Creations.",
        "The price is a stand-in. This bag is Chloe's own handmade work.",
      ],
      details: [{ label: "Kind", value: "Handmade makeup bag" }],
      tags: ["handmade", "makeup bag"],
      gallery: [
        {
          src: "/textiles/scottie-makeup-angle.jpg",
          alt: "Angled view of the Scottie makeup bag",
        },
        {
          src: "/textiles/scottie-makeup-angle-2.jpg",
          alt: "Another angled view of the Scottie makeup bag",
        },
        {
          src: "/textiles/scottie-makeup-zipper.jpg",
          alt: "Close-up of the Scottie makeup bag zip and charm",
        },
        {
          src: "/textiles/scottie-makeup-fabric.jpg",
          alt: "Close-up of the dog-and-dot print on the Scottie makeup bag",
        },
      ],
    },
  ],
  news: [
    {
      slug: "cards-on-the-rack",
      title: "New cards on the drying rack",
      date: "2 March 2026",
      excerpt: "A sample note about paper goods, so the news list is not empty.",
      paragraphs: [
        "The card sets on this site are placeholders. When real stock exists, say what is new and when it can be posted.",
        "Delete this entry if you would rather start with an empty news list.",
      ],
    },
    {
      slug: "underpainting-week",
      title: "A quiet week of underpainting",
      date: "18 February 2026",
      excerpt: "A sample studio note with no claim about a real exhibition.",
      paragraphs: [
        "Use news for process, fairs, and days the studio is open. Keep each post short enough to edit in one sitting.",
      ],
    },
    {
      slug: "open-afternoon",
      title: "Open afternoon, sample date",
      date: "4 February 2026",
      excerpt: "A sample open-studio announcement with the date left obvious.",
      paragraphs: [
        "Replace the date, the address, and the hours. Until you do, treat this post as a layout sample.",
      ],
    },
    {
      slug: "cushion-cloth",
      title: "The cushion cloth arrived",
      date: "20 January 2026",
      excerpt: "A sample post for a home piece, before any real fabric is named.",
      paragraphs: [
        "When you know the fibre and the wash care, put that on the product and link it from the post.",
      ],
    },
  ],
  policies: [
    {
      slug: "shipping",
      title: "Shipping information",
      intro: "Placeholder shipping notes. Replace them with the service you actually use.",
      sections: [
        {
          heading: "Posted work",
          paragraphs: [
            "Say which countries you post to, how a painting is packed, and how long the parcel usually takes.",
            "Prints and paper can travel flat. Cloth can travel folded. Write the difference here.",
          ],
        },
        {
          heading: "Local collection",
          paragraphs: [
            "If people can collect, say which days and how they should book a time. Do not publish a private home address until you mean to.",
          ],
        },
      ],
    },
    {
      slug: "returns",
      title: "Returns and exchanges",
      intro: "Placeholder returns wording. Check it against the rules where you sell.",
      sections: [
        {
          heading: "If something arrives damaged",
          paragraphs: [
            "Ask the buyer to write within a set number of days and to keep the packing. Say who pays for a return.",
          ],
        },
        {
          heading: "Change of mind",
          paragraphs: [
            "Original paintings are often final sale. Paper and cloth may be different. Write the rule you will keep.",
          ],
        },
      ],
    },
    {
      slug: "privacy",
      title: "Privacy statement",
      intro: "A plain account of what this template stores. Update it when you add real services.",
      sections: [
        {
          heading: "Messages",
          paragraphs: [
            "The contact form does not send mail and does not store the message on a server. It only confirms on the page.",
            "When you connect a form provider, name that provider and say how long messages are kept.",
          ],
        },
        {
          heading: "Basket",
          paragraphs: [
            "The basket is kept in the browser's local storage on that device. It is not an account and it is not sent to a shop system.",
          ],
        },
        {
          heading: "Mailing list",
          paragraphs: [
            "The mailing form does not pass the address to a list service yet. When it does, link the service's own notice.",
          ],
        },
      ],
    },
    {
      slug: "cookies",
      title: "Cookie policy",
      intro: "This template does not set analytics or advertising cookies.",
      sections: [
        {
          heading: "What is stored",
          paragraphs: [
            "A basket, if you add something, is stored with local storage rather than a tracking cookie.",
            "The mailing form remembers only that you pressed the button, in this browser, so it can show a confirmation.",
          ],
        },
        {
          heading: "If you add tools later",
          paragraphs: [
            "List any analytics, embedded feeds, or payment tools here, and say how a visitor can refuse them.",
          ],
        },
      ],
    },
    {
      slug: "stockists",
      title: "Become a stockist",
      intro: "A placeholder page for shops that might carry the work.",
      sections: [
        {
          heading: "How to ask",
          paragraphs: [
            "There is no trade application in this template. Use the contact form and include the shop name, the city, and the kind of work you want.",
          ],
        },
      ],
    },
  ],
  wholesale: {
    title: "Wholesale",
    intro:
      "Trade login is not part of this template. There is no account to sign in to.",
    paragraphs: [
      "When you are ready for shops, write the minimum order, the lead time, and the discount you actually offer.",
      "Until then, send people to the contact form and keep this page as a place marker.",
    ],
  },
} as const;

export type Category = (typeof site.categories)[number];
export type Product = (typeof site.products)[number];
export type NewsPost = (typeof site.news)[number];
export type Policy = (typeof site.policies)[number];

export function formatPrice(amount: number) {
  return `${site.currencySymbol}${amount}`;
}

export function cartLabel(count: number) {
  return `${count} ${count === 1 ? "Item" : "Items"}`;
}

export function getCategory(slug: string) {
  return site.categories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return site.products.find((product) => product.slug === slug);
}

export function productsInCategory(slug: string) {
  return site.products.filter((product) => product.category === slug);
}

export function getPost(slug: string) {
  return site.news.find((post) => post.slug === slug);
}

export function getPolicy(slug: string) {
  return site.policies.find((policy) => policy.slug === slug);
}
