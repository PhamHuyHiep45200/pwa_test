/* eslint-disable no-console */
import Test from "@/components/Test";
import { getData } from "@/requests/test";

export default async function Home() {
  try {
    const res = await getData()
    console.log("res", res);

  } catch (error) {
    console.log("error", error);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Test />
    </main>
  );
}
