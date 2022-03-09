export default function Hedge() {
  return (
    <div id="hedge" className="relative mt-16 pt-16 bg-white w-full overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-slate-600 font-semibold tracking-wide uppercase">
              Step Three
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hedging
            </span>
          </h1>
          <p className="mt-8 text-xl text-center text-gray-500 leading-8">
            Using this framework, a hedge entails selling a benchmark-based ETF short. In this case, the Ark Funds' Innovation ETF, ARKK. We want to short this benchmark when:
          </p>
          <ol role="list" className="list-decimal list-inside text-base text-center mt-4">
            <li className="my-2">The price is under the 50D EMA (shaded yellow region) AND</li>
            <li className="my-2">The 5D EMA (dark blue line) is under the 7D EMA (orange line)</li>
          </ol>
        </div>
        <div className="w-full md:w-11/12 mx-auto mt-10"> 
          <iframe 
            className="w-full h-96 my-10"
            src="https://app.koyfin.com/share/43d1bbd766/simple"
            frameBorder="0">
          </iframe>
        </div>
      </div>
    </div>
  )
}
