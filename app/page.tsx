/* eslint-disable no-console */

import { Noto_Sans_JP, Barlow } from "@next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20  ${notoSansJP.className} ${barlow.className}`}
    ></main>
  );
}
