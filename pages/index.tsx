import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout title="Home | AI Chat App">
        <h1 className="mb-4 mt-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            AI Chat App
        </h1>
        <h2 className="mb-4 mt-4 text-center text-xl leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <Link href="/chat">Chat</Link>
        </h2>
        <div className="h-80"></div>
    </Layout>
);

export async function gett() {
    console.log('123 ' + process.env.OPENAI_API_KEY);
    return {};
}

export default IndexPage;
