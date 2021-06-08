import Head from 'next/head'

const Spinner = () => (
    <svg viewBox="0 0 38 38" className="w-28 mx-auto my-6 text-blue-600">
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stopColor="currentColor" stopOpacity="0" offset="0%" />
          <stop stopColor="currentColor" stopOpacity=".631" offset="63.146%" />
          <stop stopColor="currentColor" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
          <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1.2s"
                repeatCount="indefinite"
            />
          </path>

          <circle cx="36" cy="18" r="1">
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1.2s"
                repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
);

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.js
            </code>
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
          <p className="max-w-screen-md mx-auto my-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam quod rem sed unde. Dicta itaque
            laborum molestias nulla quaerat. Enim exercitationem rem soluta voluptatum. Aut, quisquam voluptas. Corporis
            error eveniet fugiat labore laboriosam molestias provident qui voluptas. Ad adipisci aliquid aspernatur
            consectetur distinctio dolor dolorem eligendi excepturi fugit illo impedit maiores molestias nesciunt nisi,
            non officia perferendis quia quibusdam quis quos, suscipit unde veniam vero vitae voluptatum. Aspernatur
            beatae dicta distinctio dolores explicabo maxime modi quasi quo rerum! Aliquid, aperiam voluptatum. A
            accusamus consequatur dolorem et excepturi in recusandae sit vero? Atque aut commodi, consequuntur distinctio,
            dolores ea error et exercitationem molestias neque non nostrum quasi repellendus sequi soluta tenetur voluptas
            voluptatum! Asperiores, autem cupiditate eos illo in itaque laborum provident quaerat, quos ratione, repellat
            soluta voluptatibus. Ab accusamus animi autem cum dolorum esse, facere harum illum iste officiis quis ratione
            repudiandae, sint sit vel veniam veritatis voluptatum! Accusamus alias architecto asperiores autem
            consequuntur, ducimus eaque eveniet ex, harum hic id in incidunt ipsa labore laborum maiores maxime, obcaecati
            omnis optio pariatur provident quaerat quasi quibusdam quisquam soluta temporibus unde ut velit voluptate
            voluptatibus. Ducimus eius, ex facilis hic illum inventore iste nemo provident quod repellat saepe, suscipit
            voluptatem, voluptatum. Alias dolorum ipsa ipsam minus officia pariatur, quia repellendus voluptatibus! Autem
            ea fuga, laborum quisquam quo repudiandae unde velit. Aliquid cum explicabo iste, molestiae natus quas
            quibusdam similique? Cupiditate esse excepturi facilis impedit ipsam nam natus quos. Ab at explicabo harum
            maxime minima nemo quasi qui quo voluptatem! Ad assumenda distinctio dolorum ducimus est hic id nihil nisi
            nostrum, odit pariatur, possimus tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            alias consequatur deserunt doloribus ea earum eveniet maxime minima minus nemo nisi nobis, perferendis qui quo
            rem sit voluptatibus voluptatum. Atque cum debitis officiis ullam. Eos esse fuga minima officiis quidem, ut.
            Ea exercitationem, itaque iusto laborum modi natus ullam vero? A animi atque dicta doloribus ex facilis
            fugiat, fugit natus officiis, placeat quisquam rerum! Aspernatur consequuntur eius in officiis. Ad architecto,
            assumenda commodi corporis cumque eius esse est eum eveniet excepturi fugit in ipsam iste laudantium maiores
            maxime minima neque nostrum possimus quaerat quam quo ratione sequi, sint sit soluta veritatis voluptatum!
            Debitis inventore laborum libero nulla praesentium quod rem rerum, veniam veritatis voluptatibus. Accusantium
            at culpa inventore itaque nemo omnis provident quia quibusdam repudiandae voluptatibus. Accusantium alias
            architecto atque blanditiis commodi consequuntur cupiditate dignissimos dolor doloremque earum expedita harum
            id in itaque iure laudantium, libero magni minima nihil officia placeat quis ratione reprehenderit sunt
            temporibus ut vel velit veniam voluptas voluptatem! A aliquam architecto cupiditate, dicta error placeat
            possimus qui quibusdam quisquam repellat repellendus repudiandae sequi similique tempora ullam velit voluptas.
            Aliquam commodi consequatur, ipsum laudantium obcaecati quaerat quam quos sed sunt tempore. Iusto nulla omnis
            tempore veniam voluptates?
          </p>
          <Spinner />
        </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
