import Home from "@/public/icons/home";
import Items from "@/public/icons/items";
import Other from "@/public/icons/other";
import QrCode from "@/public/icons/qrcode";

export const TAB_NAVBAR_KEY = {
  HOME: "HomePage",
  ITEMS: "ListItemPage",
  QR: "qr",
  SEND_NFT: "SendReceivePage",
} as const;

type NavbarKey = (typeof TAB_NAVBAR_KEY)[keyof typeof TAB_NAVBAR_KEY];

interface NavbarItem {
  key: NavbarKey;
  title: string;
  icon: React.ComponentType;
  url: string;
}

export const navbarItem: NavbarItem[] = [
  {
    key: TAB_NAVBAR_KEY.HOME,
    title: "ホーム",
    icon: Home,
    url: "#view-homescreen",
  },
  {
    key: TAB_NAVBAR_KEY.ITEMS,
    title: "アイテム一覧",
    icon: Items,
    url: "#items-list",
  },
  {
    key: TAB_NAVBAR_KEY.QR,
    title: "QR読み取り",
    icon: QrCode,
    url: "#qr-code",
  },
  {
    key: TAB_NAVBAR_KEY.SEND_NFT,
    title: "送る・受け取る",
    icon: Other,
    url: "#send-receive-nft",
  },
];
