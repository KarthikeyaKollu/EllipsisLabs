import { HeroParallax } from "./ui/hero-parallax";
import a from '../assets/1.png'
import b from '../assets/2.png'
import c from '../assets/3.png'
import d from '../assets/4.png'
import e from '../assets/5.png'
import f from '../assets/6.png'

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail: a,
  },
  {
    title: "Cursor",
    link: "",
    thumbnail:
      b,
  },
  {
    title: "Rogue",
    link: "",
    thumbnail:
      c,
  },

  {
    title: "Editorially",
    link: "",
    thumbnail:
      d,
  },
  {
    title: "Editrix AI",
    link: "",
    thumbnail:
      e,
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail:
      f,
  },

  {
    title: "Algochurn",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
