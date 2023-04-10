import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout title="Home | AI Chat App">
        <h1 className="mb-4 mt-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            AI-chat-app 👋
        </h1>
        <p className="dark:text-white">
            <Link href="/about">About</Link>
        </p>
    </Layout>
);

export default IndexPage;
