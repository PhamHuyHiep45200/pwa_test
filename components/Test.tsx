"use client"
import { decrement, increment } from "@/store/counter/counterSlice";
import { RootState } from "@/store/store";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import style from "@/styles/test.module.scss"

function Test() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="flex space-x-4 items-center">
      <Button danger onClick={() => dispatch(decrement())}>
        minus
      </Button>
      <span className={style.name}>{count}</span>
      <Button onClick={() => dispatch(increment())}>
        plus
      </Button>
    </div>
  )
}

export default Test