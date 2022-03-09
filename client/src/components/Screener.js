const companies = [
  { 
    name: 'Snowflake', 
    ticker: 'SNOW',
    revGrowth: 0.95,
    grossMargin: 0.83,
    rule40: 1.78,
    salesEfficiency: 0.92,
    contributionMargin: 0.76 
  },
];

// Metrics to include:
// Revenue Growth, Gross Margins, Rule of 40, Sales Efficiency, Contribution Margin
// GM: (rev - COGS) / rev
// R40: rev growth rate + FCF margin
// SalesEff: (Gross profit 2 - Gross profit 1)/ Sales & Marketing expenses 1
// Contr Margin: (rev - variable costs) / revenue 

export default function Screener() {
  return (
    <div id="screener" className="relative py-16 bg-slate-100 w-full overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-slate-600 font-semibold tracking-wide uppercase">
              Step Two
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Screen Companies
            </span>
          </h1>
          <p className="mt-8 text-xl text-center text-gray-500 leading-8">
            Here we can screen for high-quality companies. Those with growing revenue, strong margins, and other key fundamental metrics.
          </p>
        </div>
        <div className="text-lg w-full md:w-11/12 mx-auto mt-10">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Ticker
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Revenue Growth (%)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Gross Margin (%)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Rule of 40
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Sales Efficiency
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Contribution Margin (%)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {companies.map((company) => (
                        <tr key={company.email}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.ticker}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.revGrowth}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.grossMargin}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.rule40}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.salesEfficiency}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.contributionMargin}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}