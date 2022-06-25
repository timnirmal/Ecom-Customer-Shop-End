import "@fortawesome/fontawesome-free/css/all.min.css";
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import React from 'react'
import type, {AppProps} from 'next/app'
import Head from 'next/head'
import {DefaultSeo} from 'next-seo'

import SEO from '../next-seo.config'
import {MessageProvider} from '../lib/message'
import {AuthProvider} from "../lib/auth";
import {SupabaseProvider} from "../lib/supabase";

function MyApp({Component, pageProps}: AppProps) {
    const pageMeta = (Component as any)?.defaultProps?.meta || {}
    const pageSEO = {...SEO, ...pageMeta}

    return (
        <React.Fragment>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
            </Head>
            <DefaultSeo {...pageSEO} />
            <MessageProvider>
                <AuthProvider>
                    <SupabaseProvider>
                    <Component {...pageProps} />
                    </SupabaseProvider>
                </AuthProvider>
            </MessageProvider>
        </React.Fragment>
    )
}

export default MyApp
