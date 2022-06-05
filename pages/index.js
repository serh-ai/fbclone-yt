import Head from 'next/head'
import {Header} from "../components/Header";
import {getSession, useSession} from "next-auth/react";
import {Login} from "../components/Login";
import {Sidebar} from "../components/Sidebar";

export default function Home(props) {
    const { data: session } = useSession()
    if(!session) return <Login/>

    return (
        <div className='h-screen bg-gray-100 overflow-hidden'>
            <Head>
                <title>Facebook</title>
            </Head>
            <Header/>
            <main className='flex'>
                {/*    Sidebar  */}
                <Sidebar/>
                {/*    Feed  */}
                {/*    Widgets   */}

            </main>
        </div>
    )
}


