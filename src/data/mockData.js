import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    email: "ahmed@intellibiz.ae",
    age: 35,
    phone: "(+971) 50-123-4567",
    access: "admin",
  },
  {
    id: 2,
    name: "Sara Al Hashimi",
    email: "sara@intellibiz.ae",
    age: 42,
    phone: "(+971) 54-234-5678",
    access: "manager",
  },
  {
    id: 3,
    name: "Mohammed Al Qasimi",
    email: "mohammed@intellibiz.ae",
    age: 45,
    phone: "(+971) 55-345-6789",
    access: "user",
  },
  {
    id: 4,
    name: "Fatima Al Nuaimi",
    email: "fatima@intellibiz.ae",
    age: 29,
    phone: "(+971) 56-456-7890",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Al Raha Trading LLC",
    email: "contact@alraha.ae",
    age: 35,
    phone: "(+971) 2-123-4567",
    address: "Sheikh Zayed Road, Dubai",
    city: "Dubai",
    zipCode: "12345",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Emirates Solutions FZ",
    email: "info@emiratessolutions.ae",
    age: 42,
    phone: "(+971) 4-234-5678",
    address: "Corniche Road, Abu Dhabi",
    city: "Abu Dhabi",
    zipCode: "54321",
    registrarId: 123512,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Al Falah Enterprises",
    email: "accounts@alfalah.ae",
    cost: "21,750 AED",
    phone: "(+971) 2-987-6543",
    date: "03/12/2024",
  },
  {
    id: 2,
    name: "Dubai Tech Solutions",
    email: "finance@dubaitech.ae",
    cost: "15,890 AED",
    phone: "(+971) 4-876-5432",
    date: "06/15/2024",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "Al Manara Electronics",
    date: "2024-03-01",
    cost: "43,950 AED",
  },
  {
    txId: "0315dsaa",
    user: "Falcon Smart Devices",
    date: "2024-03-02",
    cost: "133,450 AED",
  },
  {
    txId: "01e4dsa",
    user: "Desert Rose Perfumes",
    date: "2024-03-03",
    cost: "43,950 AED",
  },
  {
    txId: "51034szv",
    user: "Al Raha Textiles",
    date: "2024-03-04",
    cost: "200,950 AED",
  },
  {
    txId: "0a123sb",
    user: "Emirates Gold",
    date: "2024-03-05",
    cost: "513,550 AED",
  },
];

export const mockBarData = [
  {
    region: "Abu Dhabi",
    "Electronics": 137,
    "ElectronicsColor": "hsl(229, 70%, 50%)",
    "Perfumes": 96,
    "PerfumesColor": "hsl(296, 70%, 50%)",
    "Textiles": 72,
    "TextilesColor": "hsl(97, 70%, 50%)",
    "Gold": 140,
    "GoldColor": "hsl(340, 70%, 50%)",
  },
  {
    region: "Dubai",
    "Electronics": 155,
    "ElectronicsColor": "hsl(307, 70%, 50%)",
    "Perfumes": 128,
    "PerfumesColor": "hsl(111, 70%, 50%)",
    "Textiles": 158,
    "TextilesColor": "hsl(273, 70%, 50%)",
    "Gold": 129,
    "GoldColor": "hsl(275, 70%, 50%)",
  },
  {
    region: "Sharjah",
    "Electronics": 104,
    "ElectronicsColor": "hsl(72, 70%, 50%)",
    "Perfumes": 87,
    "PerfumesColor": "hsl(96, 70%, 50%)",
    "Textiles": 101,
    "TextilesColor": "hsl(106, 70%, 50%)",
    "Gold": 85,
    "GoldColor": "hsl(256, 70%, 50%)",
  },
  {
    region: "Ajman",
    "Electronics": 55,
    "ElectronicsColor": "hsl(257, 70%, 50%)",
    "Perfumes": 60,
    "PerfumesColor": "hsl(326, 70%, 50%)",
    "Textiles": 45,
    "TextilesColor": "hsl(110, 70%, 50%)",
    "Gold": 52,
    "GoldColor": "hsl(9, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "Electronics",
    label: "Electronics & Smart Devices",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "Perfumes",
    label: "Perfumes & Cosmetics",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "Textiles",
    label: "Textiles & Fashion",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "Gold",
    label: "Gold & Jewelry",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "Services",
    label: "Business Services",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Abu Dhabi",
    color: tokens("dark").greenAccent[500],
    data: [
      { x: "Jan", y: 147 },
      { x: "Feb", y: 125 },
      { x: "Mar", y: 156 },
      { x: "Apr", y: 165 },
      { x: "May", y: 153 },
      { x: "Jun", y: 172 },
      { x: "Jul", y: 168 },
      { x: "Aug", y: 182 },
      { x: "Sep", y: 191 },
      { x: "Oct", y: 181 },
      { x: "Nov", y: 185 },
      { x: "Dec", y: 194 },
    ],
  },
  {
    id: "Dubai",
    color: tokens("dark").blueAccent[300],
    data: [
      { x: "Jan", y: 158 },
      { x: "Feb", y: 162 },
      { x: "Mar", y: 170 },
      { x: "Apr", y: 179 },
      { x: "May", y: 175 },
      { x: "Jun", y: 185 },
      { x: "Jul", y: 183 },
      { x: "Aug", y: 189 },
      { x: "Sep", y: 197 },
      { x: "Oct", y: 187 },
      { x: "Nov", y: 199 },
      { x: "Dec", y: 201 },
    ],
  },
  {
    id: "Sharjah",
    color: tokens("dark").redAccent[200],
    data: [
      { x: "Jan", y: 92 },
      { x: "Feb", y: 85 },
      { x: "Mar", y: 96 },
      { x: "Apr", y: 105 },
      { x: "May", y: 103 },
      { x: "Jun", y: 112 },
      { x: "Jul", y: 108 },
      { x: "Aug", y: 122 },
      { x: "Sep", y: 131 },
      { x: "Oct", y: 121 },
      { x: "Nov", y: 125 },
      { x: "Dec", y: 134 },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "ABD",
    value: 520,
    label: "Abu Dhabi"
  },
  {
    id: "DXB",
    value: 580,
    label: "Dubai"
  },
  {
    id: "SHJ",
    value: 310,
    label: "Sharjah"
  },
  {
    id: "AJM",
    value: 200,
    label: "Ajman"
  },
  {
    id: "RAK",
    value: 280,
    label: "Ras Al Khaimah"
  },
  {
    id: "FUJ",
    value: 160,
    label: "Fujairah"
  },
  {
    id: "UAQ",
    value: 140,
    label: "Umm Al Quwain"
  }
]; 