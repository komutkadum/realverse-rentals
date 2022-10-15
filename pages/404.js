import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Coming soon</title>
      </Head>
      <div className="w-full fixed top-0 text-xl sm:text-2xl md:text-4xl lg:text-7xl font-semibold font-header bg-slate-900 text-white grid place-items-center overflow-hidden h-screen">
        COMING SOON 😋
      </div>
    </>
  );
}
