import '../styles/globals.css'
import {getSession, SessionProvider} from 'next-auth/react'

function MyApp(props) {
    const {
        Component,
        pageProps,
    } = props
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

// export async function getServerSideProps(context) {
//     const session = await getSession(context)
//
//     return {
//         props: {
//             session
//         }
//     }
// }

export default MyApp
