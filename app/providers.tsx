'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Header } from './components/header'

export const Providers = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <NextUIProvider>
        <Header/>
           {children}
        </NextUIProvider>
    )
}
