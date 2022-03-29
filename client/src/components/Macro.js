export default function Macro() {
  return (
    <div id="macro" className="relative py-16 bg-white w-full overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-slate-600 font-semibold tracking-wide uppercase">
              Step One
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Macro Indicators
            </span>
          </h1>
          <p className="mt-8 text-xl text-center text-gray-500 leading-8">
            Use market-implied indicators to gauge the liklihood of a recession. Below, we see that any time the 2-year US Treasury yield has exceeded the 10-year (<em>greater than 1.0%</em>), we have experienced a recession thereafter.
          </p>
        </div>
        <div className="w-full md:w-11/12 mx-auto my-10">
          <iframe 
            height="425"
            className="w-full my-10"
            src="https://app.koyfin.com/share/b74c000ab3/simple"
            frameBorder="0">
          </iframe>
        </div>
        <div className="w-full md:w-11/12 mx-auto my-10">
          <p className="max-w-prose mt-8 mx-auto text-xl text-center text-gray-500 leading-8">
            Additionally, the widening of high-yield spreads (blue line) has coincided with stock market pullbacks - especially in small cap stocks (orange line).
          </p>
          <iframe
            height="425" 
            className="w-full my-10"
            src="https://app.koyfin.com/share/7c899f8b83/simple" 
            frameBorder="0">
          </iframe>
        </div>
      </div>
    </div>
  )
}
