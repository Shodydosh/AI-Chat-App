import Link from 'next/link';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => (
    <Layout title="Home | AI Chat App">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            AI Chat App
        </h1>
        <h2 className="mb-4 mt-4 text-center text-xl leading-none tracking-tight text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
            <Link href="/chat">
                <FontAwesomeIcon className="animate-pulse" icon={faArrowRight} /> Chat
            </Link>
        </h2>
        <div className="h-96"></div>
    </Layout>
);

export default IndexPage;
