import sampleIcon from "../Img/Sampleicon.png";
import {
  BsStar,
  BsStarFill,
  BsCurrencyBitcoin,
  BsFillFileEarmarkMusicFill,
  BsFileCode,
} from "react-icons/bs";
import { FaGamepad, FaHome, FaHotjar } from "react-icons/fa";

export const feeds = [
  {
    name: "Home",
    icon: <FaHome size={20} color="#336699" />,
    path: "/",
  },
  {
    name: "Popular",
    icon: <FaHotjar size={20} color="#336699" />,
    path: "/single",
  },
];

export const favorites = [
  {
    name: "r/gameOfThrones",
    icon: <BsStarFill size={20} color="#336699" />,
    image: sampleIcon,
  },
  {
    name: "r/OutOfTheLoop",
    icon: <BsStar size={20} />,
    image: sampleIcon,
  },
  {
    name: "r/Wizkid",
    icon: <BsStar size={20} />,
    image: sampleIcon,
  },
  {
    name: "r/Davido",
    icon: <BsStar size={20} />,
    image: sampleIcon,
  },
  {
    name: "r/HipHop",
    icon: <BsStar size={20} />,
    image: sampleIcon,
  },
  {
    name: "r/Afrobeats",
    icon: <BsStar size={20} />,
    image: sampleIcon,
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
