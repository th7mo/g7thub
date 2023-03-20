import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>g7thub</title>
        <meta
          name="description"
          content="A Github clone using the Github API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}
