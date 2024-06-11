export type FooterItem = {
  title?: string,
  subtitle?: string,
  childrens?: FooterItem[],
  path?: string,
  phoneNumber?: string,
  wppNumber?: string,
  email?: string,
  info?: string
} 

const footerItems: FooterItem[] = [
  {
    title: "informações",
    childrens: [
      {
        subtitle: "Quem somos",
        path: "/quem-somos"
      },
      {
        subtitle: "Segurança",
        path: "/segurança"
      },
      {
        subtitle: "Política de privacidade",
        path: "/politica-de-privacidade"
      },
    ]
  },
  {
    title: "Serviços ao cliente",
    childrens: [
      {
        subtitle: "Fale conosco",
        path: "/fale-conosco"
      },
      {
        subtitle: "Eventos",
        path: "/eventos"
      },
      {
        subtitle: "Trabalhe conosco",
        path: "/trabalhe-conosco"
      },
      {
        subtitle: "Nossas lojas",
        path: "/nossas-lojas"
      }
    ]
  },
  {
    title: "Fale conosco",
    childrens: [
      {
        phoneNumber: "(99) 9999-9999"
      },
      {
        wppNumber: "(99) 9999-9999"
      },
      {
        email: "loremipsum@lorem.com"
      },
      {
        info: "when an unknown printer took a galley of type and scrambled"
      }
    ]
  },
]

export default footerItems;