import { StaticImageData } from "next/image";
import img1 from "../../public/card-images/1.jpg";
import img2 from "../../public/card-images/2.jpg";
import img3 from "../../public/card-images/3.jpg";
import img4 from "../../public/card-images/4.jpg";
import img5 from "../../public/card-images/5.jpg";
import img6 from "../../public/card-images/6.jpg";
import img7 from "../../public/card-images/7.jpg";
import img8 from "../../public/card-images/8.jpg";
import img9 from "../../public/card-images/9.jpg";
import img10 from "../../public/card-images/10.jpg";

export type CardImages = {
  src: StaticImageData,
  name: string,
  price: number
};

const cardImages: CardImages[] = [
  {
    src: img1,
    name: "Mônica",
    price: 26.50
  },
  {
    src: img2,
    name: "Cascão",
    price: 12.00
  },
  {
    src: img3,
    name: "Vade mecum saraiva",
    price: 55.90
  },
  {
    src: img4,
    name: "Tudo é rio",
    price: 32.50
  },
  {
    src: img5,
    name: "A biblioteca da meia-noite",
    price: 20.00
  },
  {
    src: img6,
    name: "One piece",
    price: 14.30
  },
  {
    src: img7,
    name: "Verity",
    price: 35.60
  },
  {
    src: img8,
    name: "Mulheres que correm com os lobos",
    price: 55.60
  },
  {
    src: img9,
    name: "As aventuras de Mike",
    price: 8.90
  },
  {
    src: img10,
    name: "Diário de um banana",
    price: 21.50
  },
]

export default cardImages