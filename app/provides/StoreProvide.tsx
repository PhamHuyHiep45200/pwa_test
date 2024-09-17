"use client"
import { ProvideChildrenType } from '@/app/models/Provide'
import { store } from '@/app/store/store'
import React from 'react'
import { Provider } from 'react-redux'

function StoreProvide({ children }: ProvideChildrenType) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvide