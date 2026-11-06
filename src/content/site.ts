/**
 * All visitor-facing copy, shop data, and links live in this file.
 * Replace the sample words, prices, and empty image frames with Chloe's own.
 */

export const site = {
  name: "Chloe",
  title: "Chloe Art",
  description:
    "Studio website template for Chloe: paintings, prints, classes, and news. Swap the sample copy for your own.",
  year: 2026,
  currencySymbol: "€",
  imageLabel: "Your image",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/shop", label: "Shop" },
    { href: "/classes", label: "Classes" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ],
  contact: {
    address: ["Your studio address", "Your city"],
    hours: "Add your opening hours",
    phone: "Add your phone number",
    email: "hello@example.com",
  },
  social: [
    { label: "Instagram", href: "" },
    { label: "Facebook", href: "" },
    { label: "Pinterest", href: "" },
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
    text: "Occasional notes when new work or class dates are ready. This form does not send email until you connect one.",
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
      "Sample works and stand-in prices. Edit them in src/content/site.ts before you share the shop.",
    contactSuccess:
      "This form stays on your device. Connect an email service when you want messages to arrive.",
    send: "Send message",
    required: "Required",
  },
  home: {
    aboutKicker: "About",
    aboutHeading: "Meet Chloe",
    aboutText:
      "Colour comes first. Chloe builds a picture in layers until a window, a chair, or a bowl of ordinary fruit feels awake. The studio also makes small editions, paper goods, and a few cloth pieces.",
    shopKicker: "Shop now",
    shopHeading: "Shop the collection",
    shopText:
      "Four groups of work, from one-off canvases to things that can be posted in an envelope.",
    learnKicker: "Classes",
    learnHeading: "Time in the studio",
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
      title: "Original paintings",
      text: "Each canvas leaves the studio once. The colour is mixed for that picture, then it is finished.",
      href: "/shop/originals",
      cta: "Shop original paintings",
    },
    {
      title: "Print editions",
      text: "Short runs of studio images, sized for a wall that does not need a one-off canvas.",
      href: "/shop/prints",
      cta: "Browse prints",
    },
    {
      title: "Cards and small gifts",
      text: "Folded notes and little paper sets for someone who would rather receive colour than a long letter.",
      href: "/shop/cards",
      cta: "View cards and gifts",
    },
    {
      title: "Cloth for the home",
      text: "Tea towels and cushion covers cut from the same palette as the paintings.",
      href: "/shop/textiles",
      cta: "Explore home pieces",
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
      "Pictures for people who live with them, classes for people who want a table and a few hours, and the odd commission when a room needs something made for it.",
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
      title: "Original paintings",
      summary: "One-off canvases. When one is sold, that is the end of it.",
    },
    {
      slug: "prints",
      title: "Limited edition prints",
      summary: "Numbered runs taken from studio images. The count is on each piece.",
    },
    {
      slug: "cards",
      title: "Cards and gifts",
      summary: "Folded notes and small paper sets, packed flat.",
    },
    {
      slug: "textiles",
      title: "Home textiles",
      summary: "Cloth pieces for a kitchen or a chair, in the studio palette.",
    },
  ],
  products: [
    {
      slug: "north-light",
      title: "North light",
      category: "originals",
      price: 240,
      sku: "CH-100",
      available: true,
      summary: "A vertical canvas about a jug on a north-facing sill.",
      description: [
        "Sample painting. The surface is described here so a buyer knows the scale and the material.",
        "Replace this text, the price, and the empty frame with the real work.",
      ],
      details: [
        { label: "Medium", value: "Acrylic on canvas" },
        { label: "Size", value: "40 × 50 cm" },
      ],
      tags: ["canvas", "still life"],
    },
    {
      slug: "red-chair",
      title: "Red chair",
      category: "originals",
      price: 310,
      sku: "CH-101",
      available: true,
      summary: "A chair pulled up to a window, built from a few loud reds.",
      description: [
        "Sample painting for the shop grid. Give the frame type and hanging hardware in this space.",
      ],
      details: [
        { label: "Medium", value: "Acrylic on canvas" },
        { label: "Size", value: "60 × 60 cm" },
      ],
      tags: ["canvas", "interior"],
    },
    {
      slug: "after-rain",
      title: "After rain",
      category: "originals",
      price: 275,
      sku: "CH-102",
      available: true,
      summary: "A wet path and a pale sky, kept simple.",
      description: [
        "Sample landscape. Say whether it is framed and whether the price includes delivery.",
      ],
      details: [
        { label: "Medium", value: "Acrylic on canvas" },
        { label: "Size", value: "50 × 70 cm" },
      ],
      tags: ["canvas", "landscape"],
    },
    {
      slug: "market-fruit",
      title: "Market fruit",
      category: "originals",
      price: 190,
      sku: "CH-103",
      available: false,
      summary: "A small fruit picture, marked sold so the shop can show that state.",
      description: [
        "This sample is unavailable on purpose. Delete it or turn availability back on.",
      ],
      details: [
        { label: "Medium", value: "Acrylic on board" },
        { label: "Size", value: "25 × 25 cm" },
      ],
      tags: ["board", "still life"],
    },
    {
      slug: "north-light-edition",
      title: "North light, edition",
      category: "prints",
      price: 65,
      sku: "CH-200",
      available: true,
      summary: "A numbered print of the window picture. Edition of 40.",
      description: [
        "Sample print. Name the paper and whether it ships flat or rolled.",
      ],
      details: [
        { label: "Edition", value: "40" },
        { label: "Paper size", value: "30 × 40 cm" },
      ],
      tags: ["print", "edition"],
    },
    {
      slug: "red-chair-study",
      title: "Red chair, study",
      category: "prints",
      price: 48,
      sku: "CH-201",
      available: true,
      summary: "A smaller study of the red chair, on warm paper.",
      description: [
        "Sample print. Add the print method you use, such as giclée or lithograph.",
      ],
      details: [
        { label: "Edition", value: "25" },
        { label: "Paper size", value: "21 × 21 cm" },
      ],
      tags: ["print", "edition"],
    },
    {
      slug: "after-rain-edition",
      title: "After rain, edition",
      category: "prints",
      price: 65,
      sku: "CH-202",
      available: true,
      summary: "The wet-path image as a short edition.",
      description: ["Sample print. Say if a frame is optional."],
      details: [
        { label: "Edition", value: "40" },
        { label: "Paper size", value: "30 × 42 cm" },
      ],
      tags: ["print", "edition"],
    },
    {
      slug: "eight-folded-notes",
      title: "Eight folded notes",
      category: "cards",
      price: 22,
      sku: "CH-300",
      available: true,
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
      summary: "Six postcards drawn from the studio palette.",
      description: ["Sample set. Say if they are blank on the back."],
      details: [
        { label: "Count", value: "6 cards" },
        { label: "Size", value: "A6" },
      ],
      tags: ["paper", "gift"],
    },
    {
      slug: "stripe-tea-towel",
      title: "Stripe tea towel",
      category: "textiles",
      price: 28,
      sku: "CH-400",
      available: true,
      summary: "A linen towel with uneven studio stripes.",
      description: [
        "Sample textile. Add fibre content and washing instructions before you sell it.",
      ],
      details: [
        { label: "Cloth", value: "Linen, sample spec" },
        { label: "Size", value: "50 × 70 cm" },
      ],
      tags: ["linen", "home"],
    },
    {
      slug: "square-cushion-cover",
      title: "Square cushion cover",
      category: "textiles",
      price: 42,
      sku: "CH-401",
      available: true,
      summary: "A cover only. The pad is not included.",
      description: [
        "Sample home piece. Note the closure, such as a envelope back or a zip.",
      ],
      details: [
        { label: "Cloth", value: "Cotton, sample spec" },
        { label: "Size", value: "45 × 45 cm" },
      ],
      tags: ["cotton", "home"],
    },
  ],
  classes: [
    {
      slug: "mentoring",
      title: "One-to-one mentoring",
      meta: "One hour, by appointment",
      summary:
        "A studio hour to talk through a body of work, a fair table, or a next step.",
      paragraphs: [
        "Bring what you are stuck on. The hour is a conversation, not a critique in front of a group.",
        "Booking is not wired up. Use the contact form and write the week you have in mind.",
      ],
    },
    {
      slug: "sketchbook",
      title: "Sketchbook session",
      meta: "Small evening group",
      summary:
        "A short evening for people who already keep a book and want company while they use it.",
      paragraphs: [
        "Publish the date, the headcount, and what to bring. This template does not take a place or a fee.",
      ],
    },
    {
      slug: "workshop",
      title: "Workshop day",
      meta: "One day, one subject",
      summary:
        "A single day on something specific, such as mixing colour or setting up a still life.",
      paragraphs: [
        "When a date exists, put it on the news page and point people to the contact form.",
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
export type ClassOffering = (typeof site.classes)[number];

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

export function getClassOffering(slug: string) {
  return site.classes.find((offering) => offering.slug === slug);
}
