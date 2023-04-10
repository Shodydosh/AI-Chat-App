import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Hello Next.js from AI-chat-app 👋
        </h1>
        <p>
            <Link href="/about">About</Link>
        </p>
    </Layout>
);

export default IndexPage;
