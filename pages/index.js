import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="mx-auto mt-8 w-full max-w-5xl px-4">
      <header className="relative flex h-10 items-center justify-between">
        <div className="flex items-center space-x-7">
          <Bars3Icon className="h-5 w-5" />
          <MagnifyingGlassIcon className="h-5 w-5" />
        </div>
        <div className="absolute inset-x-0 flex justify-center">
          <svg
            width={65}
            height={40}
            viewBox="0 0 65 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={20.5}
              cy={20}
              r={20}
              fill="#38BDF8"
              style={{
                mixBlendMode: "multiply",
              }}
            />
            <circle
              cx={44.5}
              cy={20}
              r={20}
              fill="#6EE7B7"
              style={{
                mixBlendMode: "multiply",
              }}
            />
          </svg>
        </div>
        <p className="text-sm font-semibold">Sign in</p>
      </header>

      <nav className="mx-auto mt-4 flex justify-between border-y py-5 text-sm font-semibold">
        <p>Business</p>
        <p>Design</p>
        <p>Culture</p>
        <p>Affairs</p>
        <p>Art</p>
        <p>Science</p>
        <p>Culture</p>
        <p>Sports</p>
      </nav>

      <main className="pb-32">
        <div className="mt-16 grid grid-cols-2 gap-8">
          <div className="aspect-square rounded-2xl bg-gray-200" />
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-600">
                {article.date}
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">
                {article.title}
              </p>
              <p className="mt-3 text-xl leading-8 text-gray-600">
                {article.summary}
              </p>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200"></div>
              <div className="pl-5">
                <p className="text-sm font-semibold">{article.author.name}</p>
                <p className="text-sm text-gray-600">{article.author.title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-8">
          {[...Array(3).keys()].map((i) => (
            <div key={i}>
              <div className="aspect-[3/2] rounded-2xl bg-gray-200"></div>
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-600">
                  {article.date}
                </p>
                <p className="mt-2 text-xl font-semibold">{article.title}</p>
                <p className="mt-3 leading-7 text-gray-600">
                  {article.summary}
                </p>
                <div className="mt-5 flex items-center">
                  <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                  <span className="ml-3 text-sm font-semibold">
                    {article.author.name}
                  </span>
                  <span className="px-1.5 text-sm text-gray-600">&middot;</span>
                  <span className="text-sm text-gray-600">
                    {article.author.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8">
          {[...Array(2).keys()].map((i) => (
            <div key={i}>
              <div className="aspect-[3/2] rounded-2xl bg-gray-200"></div>
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-600">
                  {article.date}
                </p>
                <p className="mt-2 text-2xl font-semibold leading-9 tracking-tight">
                  {article.title}
                </p>
                <p className="mt-3 leading-7 text-gray-600">
                  {article.summary}
                </p>
                <div className="mt-5 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold leading-6">
                      {article.author.name}
                    </p>
                    <p className="text-sm leading-6 text-gray-600">
                      {article.author.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

let article = {
  date: "October 13, 2022",
  title: "T-Mobile: Giving Voice to Employees With a Mobile Podcasting App",
  summary:
    "Discover how a small—but mighty—team from T-Mobile Human Resources was able to build on an existing content management platform and create an app that feels native to mobile devices.",
  author: {
    name: "Bob Lincoln",
    title: "Market Strategy",
  },
};

function Card() {
  return (
    <div className="@container">
      <div className="@md:flex">
        <div className="flex-none @md:w-2/3">
          <div className="aspect-video bg-gray-200"></div>
        </div>
        <div className="@md:pl-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vero
          mollitia fugit ut molestiae architecto!
        </div>
      </div>
    </div>
  );
}
