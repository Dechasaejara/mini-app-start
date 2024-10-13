'use client'
import { WebApp } from '@twa-dev/types'
import React, { useEffect } from 'react'
declare global {
    interface Window {
        Telegram?: {
            WebApp: WebApp
        }
    }
}

export default function TgWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready()
            console.log({ tg })
            const initialData = tg.initData || {}
            if (initialData) {
                console.log({ initialData })
            }
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}
