import Head from 'next/head';

export default function Layout(props) {
  const { children, title, desc } = props;

  return (
    <>
      <Head >
        <title>
          {title} &#8211; Decorunic Furniture Hemat Ruang Minimalis Space Saving
        </title>
        <meta name="keywords" content="Linktree Decorunic, Kumpulan Linktree, Shortlink, Pohon Link" />
        <meta name="description" content={desc} />
        <meta name="publisher" content="Decorunic Author" />
        <meta name="author" content="Decorunic Author" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <link rel="canonical" href="https://decorunic.id" />
        <link rel="mask-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FB6107" />
        <meta name="msapplication-TileColor" content="#FB6107" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://decorunic.id/" />
        <meta property="og:image" content="/img/android-icon-192x192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/android-icon-192x192.png" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />

        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>

      <main>
        {children}
      </main>

      <footer>
      </footer>
    </>
  );
}