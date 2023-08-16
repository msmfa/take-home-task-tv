import { generateRandomNumber } from "./util";

export const MOCK_API_RESPONSE = [
  {
    id: "88922002020209340",
    icon: "./src/assets/tesla.svg",
    heading: "Tesla, Inc",
    subheading: { value: generateRandomNumber(0, 200), currency: "USD" },
    change: generateRandomNumber(0, 100),
  },
  {
    id: "88922002020209341",
    icon: "./src/assets/amazon.svg",
    heading: "Amazon Com Inc",
    subheading: { value: generateRandomNumber(0, 200), currency: "USD" },
    change: generateRandomNumber(10, 20),
  },
  {
    id: "88922002020209342",
    icon: "./src/assets/apple.svg",
    heading: "Apple",
    subheading: { value: generateRandomNumber(0, 200), currency: "USD" },
    change: generateRandomNumber(-10, -5),
  },
  {
    id: "88922002020209343",
    icon: "./src/assets/advanced-micro.svg",
    heading: "Advanced Micro Devices",
    subheading: { value: generateRandomNumber(0, 200), currency: "USD" },
    change: generateRandomNumber(-10, -5),
  },
  {
    id: "88922002020209344",
    icon: "./src/assets/ambev.svg",
    heading: "Ambev S.A",
    subheading: { value: generateRandomNumber(0, 200), currency: "USD" },
    change: generateRandomNumber(-10, -5),
  },
  {
    id: "88922002020209345",
    icon: "./src/assets/nvidia.svg",
    heading: "Nvidia",
    subheading: { value: generateRandomNumber(0, 200), currency: "USD" },
    change: generateRandomNumber(-10, -5),
  },
  {
    id: "88922002020209346",
    icon: "./src/assets/tesla.svg",
    heading: "Coca Cola, Inc",
    subheading: { value: generateRandomNumber(0, 200), currency: "USD" },
    change: generateRandomNumber(-10, -5),
  },
];
