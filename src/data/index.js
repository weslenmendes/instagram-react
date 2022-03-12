export const stories = [
  { 
    id: 1, 
    avatar: "assets/img/9gag.svg", 
    username: "9gag" 
  },
  { 
    id: 2, 
    avatar: "assets/img/meowed.svg", 
    username: "meowed" 
  },
  { id: 3, 
    avatar: "assets/img/barked.svg", 
    username: "9gag" 
  },
  {
    id: 4,
    avatar: "assets/img/nathanwpylestrangeplanet.svg",
    username: "nathanwpylestrangeplanet",
  },
  { id: 5, 
    avatar: "assets/img/wawawicomics.svg", 
    username: "wawawicomics" 
  },
  { id: 6, 
    avatar: "assets/img/respondeai.svg", 
    username: "respondeai" 
  },
  { id: 7, 
    avatar: "assets/img/filomoderna.svg", 
    username: "filomoderna" 
  },
  {
    id: 8,
    avatar: "assets/img/memeriagourmet.svg",
    username: "memeriagourmet",
  },
];

export const posts = [
  {
    id: 1,
    user: {
      avatar: "assets/img/meowed.svg",
      username: "meowed",
    },
    content: {
      type: "image",
      url: "assets/img/gato-telefone.svg",
    },
    lastUserLike: {
      avatar: "assets/img/respondeai.svg",
      username: "respondeai",
    },
    numberOfLikes: "101.523",
  },
  {
    id: 2,
    user: {
      avatar: "assets/img/barked.svg",
      username: "barked",
    },
    content: {
      type: "image",
      url: "assets/img/dog.svg",
    },
    lastUserLike: {
      avatar: "assets/img/adorable_animals.svg",
      username: "adorable_animals",
    },
    numberOfLikes: "99.159",
  },
  {
    id: 3,
    user: {
      avatar: "assets/img/barked.svg",
      username: "barked",
    },
    content: {
      type: "video",
      url: ["assets/video/video.mp4", "assets/video/video.ogv"],
    },
    lastUserLike: {
      avatar: "assets/img/adorable_animals.svg",
      username: "adorable_animals",
    },
    numberOfLikes: "99.159",
  },
];

export const suggestions = [
  {
    id: 1,
    avatar: "assets/img/bad.vibes.memes.svg",
    username: "bad.vibes.memes",
    followYou: true,
  },
  {
    id: 2,
    avatar: "assets/img/chibirdart.svg",
    username: "chibirdart",
    followYou: false,
  },
  {
    id: 3,
    avatar: "assets/img/chibirdart.svg",
    username: "chibirdart",
    followYou: false,
  },
  {
    id: 4,
    avatar: "assets/img/razoesparaacreditar.svg",
    username: "razoesparaacreditar",
    followYou: false,
  },
  {
    id: 5,
    avatar: "assets/img/adorable_animals.svg",
    username: "adorable_animals",
    followYou: true,
  },
  {
    id: 6,
    avatar: "assets/img/smallcutecats.svg",
    username: "smallcutecats",
    followYou: true,
  },
];
