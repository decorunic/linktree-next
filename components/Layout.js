import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Partials/Navbar';

export default function Layout(props) {
  const { children, title, desc, back } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta name="keywords" content="Decorunic Linktree,  Kumpulan Linktree, Shortlink, Pohon Link" />
        <meta name="description" content={desc} />
        <meta name="publisher" content="Decorunic Author" />
        <meta name="author" content="Decorunic Author" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <link rel="canonical" href="https://decorunic.id" />
        <link rel="mask-icon" href="/linktree/favicon.ico" />
        <link rel="icon" href="/linktree/favicon.ico" />
        <meta name="theme-color" content="#FB6107" />
        <meta name="msapplication-TileColor" content="#FB6107" />
        <link rel="manifest" href="/linktree/manifest.json" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://decorunic.id/" />
        <meta property="og:image" content="/linktree/img/android-icon-192x192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/linktree/img/android-icon-192x192.png" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <script async defer data-website-id="33c0c443-6d61-40eb-b4a5-420f7d423fbf" src="https://decoruniclinktree.up.railway.app/umami.js"></script>
      </Head>

      {router.pathname !== '/' && <Navbar back={back} />}
      {children}
    </>
  );
}