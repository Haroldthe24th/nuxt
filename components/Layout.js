import Head from "next/head";
import Navbar from "./Navbar";


const layout = ({ children} ) => (
    <>
    <Head>
        <title>Note App</title>
    </Head>

    <Navbar/>
    {children}
    </>
)

export default layout;
