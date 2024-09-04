"use client"
import { decrement, increment } from "@/store/counter/counterSlice";
import { RootState } from "@/store/store";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex space-x-4 items-center">
        <Button danger onClick={() => dispatch(decrement())}>
          minus
        </Button>
        <span className="flex justify-center">{count}</span>
        <Button onClick={() => dispatch(increment())}>
          plus
        </Button>
      </div>
    </main>
  );
}
