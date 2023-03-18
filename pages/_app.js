import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/myAvatar.png" />
                <title>Rolando Quispe - Full Stack Developer</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp