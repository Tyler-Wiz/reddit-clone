import sampleIcon from "../Img/Sampleicon.png";
import outofLoop from "../Img/outofloop.png";
import relationship from "../Img/relationship.png";
import nba from "../Img/nba.jpeg";
import ask from "../Img/ask.jpeg";
import game from "../Img/game.png";
import movies from "../Img/movies.jpeg";

import {
  BsStar,
  BsStarFill,
  BsCurrencyBitcoin,
  BsFillFileEarmarkMusicFill,
  BsFileCode,
} from "react-icons/bs";
import {
  FaGamepad,
  FaHotjar,
  FaClock,
  FaRocket,
  FaAward,
} from "react-icons/fa";

export const feeds = [
  {
    name: "Popular",
    icon: <FaHotjar size={20} color="#336699" />,
    path: "/",
  },
];

export const favorites = [
  {
    name: "r/gameOfThrones",
    icon: <BsStarFill size={20} color="#336699" />,
    image: "/Img/game.png",
    path: "gameofthrones",
  },
  {
    name: "r/Movies",
    icon: <BsStar size={20} />,
    image: "/Img/movies.jpeg",
    path: "movies",
  },
  {
    name: "r/Ask",
    icon: <BsStar size={20} />,
    image: "/Img/ask.jpeg",
    path: "ask",
  },
  {
    name: "r/NBA2k",
    icon: <BsStar size={20} />,
    image: "/Img/nba.jpeg",
    path: "nba2k",
  },
  {
    name: "r/Relationship_Advice",
    icon: <BsStar size={20} />,
    image: "/Img/relationship.png",
    path: "relationship_advice",
  },
  {
    name: "r/OutOfTheLoop",
    icon: <BsStar size={20} />,
    image: "/Img/outofloop.png",
    path: "OutOfTheLoop",
  },
];

export const multis = [
  {
    name: "Cryptocurrency",
    icon: <BsCurrencyBitcoin size={22} color="#336699" />,
  },
  {
    name: "Gaming",
    icon: <FaGamepad size={22} color="#336699" />,
  },
  {
    name: "Music",
    icon: <BsFillFileEarmarkMusicFill size={22} color="#336699" />,
  },
  {
    name: "Programming",
    icon: <BsFileCode size={22} color="#336699" />,
  },
];

export const subheader = [
  { name: "hot", icon: <FaHotjar />, label: "hot-button" },
  { name: "new", icon: <FaClock />, label: "new-button" },
  { name: "top", icon: <FaAward />, label: "top-button" },
  { name: "best", icon: <FaRocket />, label: "best-button" },
  { name: "rising", icon: <FaRocket />, label: "rising-button" },
];
