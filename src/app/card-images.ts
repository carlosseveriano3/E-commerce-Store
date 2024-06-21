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
  id: string,
  src: StaticImageData,
  name: string,
  price: string,
  description: string,
  author: string,
  lauchingData: string,
  publishingCompany: string,
  pages: number
};

const cardImages: CardImages[] = [
  {
    id: "1",
    src: img1,
    name: "Mônica",
    price: '26.50',
    author: "Maurício de Sousa",
    lauchingData: "10/02/2006",
    description: "Mônica Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "2",
    src: img2,
    name: "Cascão",
    price: '12.00',
    author: "Maurício de Sousa",
    lauchingData: "23/10/2009",
    description: "Cascão Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "3",
    src: img3,
    name: "Vade mecum saraiva",
    price: '55.90',
    author: "Editora Saraiva",
    lauchingData: "20/04/2016",
    description: "Vade mecum saraiva Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "4",
    src: img4,
    name: "Tudo é rio",
    price: '32.50',
    author: "Carla Madeira",
    lauchingData: "01/02/2005",
    description: "Tudo é rio Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "5",
    src: img5,
    name: "A biblioteca da meia-noite",
    price: '20.00',
    author: "Matt Haig",
    lauchingData: "16/08/2001",
    description: "A biblioteca da meia-noite Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "6",
    src: img6,
    name: "One piece",
    price: '14.30',
    author: "Elichiro Oda",
    lauchingData: "06/05/1996",
    description: "One piece Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "7",
    src: img7,
    name: "Verity",
    price: '35.60',
    author: "Colleen Hoover",
    lauchingData: "07/08/2018",
    description: "Colleen Hoover Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "8",
    src: img8,
    name: "Mulheres que correm com os lobos",
    price: '55.60',
    author: "Clarissa Pinkola Estés",
    lauchingData: "17/09/2018",
    description: "Mulheres que correm com os lobos Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "9",
    src: img9,
    name: "As aventuras de Mike",
    price: '8.90',
    author: "Gabriel Dearo, Manu Digilio",
    lauchingData: "18/09/2019",
    description: "As aventuras de Mike Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
  {
    id: "10",
    src: img10,
    name: "Diário de um banana",
    price: '21.50',
    author: "Jeff Kinney",
    lauchingData: "19/05/2008",
    description: "Diário de um banana Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    publishingCompany: "Bertrand Brasil",
    pages: 200
  },
]

export default cardImages