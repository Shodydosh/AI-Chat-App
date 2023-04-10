import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <div className="bg-black">
            <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                About
            </h1>
            <p>This is the about page</p>
            <p>
                <Link href="/">Go home</Link>
            </p>
        </div>
    </Layout>
);

export default AboutPage;
