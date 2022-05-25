export const headerLinks = [
  {
    id: 'main',
    title: 'Главная',
    url: '/',
  },
  {
    id: 'news',
    title: 'Новости',
    url: '/news'
  },
  {
    id: 'help',
    title: 'Помощь',
    url: '/help'
  },
  {
    id: 'tarifs',
    title: 'Тарифы',
    url: '/tariffs'
  },
  {
    id: 'about',
    title: 'О нас',
    url: '/about'
  },
  {
    id: 'billing',
    title: 'Личный кабинет',
    url: '/billing'
  }
]

export const API_URL = "http://localhost:9000"

export const userInfo = [
  {
    label: 'ФИО',  
    data: 'Иванов И.И.',
  },
  {
    label: 'Телефон',  
    data: '+38(072)122-07-11',
  },
  {
    label: 'Адрес',  
    data: 'улица Ленина, дом. 121, кв. 48',
  },
  {
    label: 'Населённый пункт',  
    data: 'Чернухино',
  },
  {
    label: 'Почтовый индекс',  
    data: '94340',
  },
  {
    label: 'Электронная почта',  
    data: 'example@yandex.ru',
  },
]

export const paymentsTypes = [
  "Дилер",
  "Банковское отделение",
  "Карта оплаты",
  'Почтовое отделение',
  "Бонус",
  "Корректировка",
  "Компенсация",
  "Личные средства"
]