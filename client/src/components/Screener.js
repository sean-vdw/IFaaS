import { useState } from "react";
import axios from "axios";
import Loader from '../assets/loader.svg';

// IEX Cloud Base Url & API Key
const BASE_URL = 'https://financialmodelingprep.com';
const API_KEY = process.env.REACT_APP_API_KEY;

// Stock tickers of interest
const tickers = ['SPT', 'TENB', 'API', 'QLYS', 'TWOU', 'SQ', 'WDAY', 'NCNO', 'APPF', 'VMEO', 'BOX', 'ZEN', 'PLAN', 'CXM', 'FROG', 'CRM', 'ZI', 'PCTY', 'NOW', 'ADBE', 'XM', 'SQSP', 'AVLR', 'CRWD', 'CWAN', 'PYPL', 'DH', 'DOCN', 'WIX', 'BL', 'COUP', 'OKTA', 'PAYC', 'QTWO', 'AI', 'NEWR', 'DOMO', 'ESTC', 'NET', 'WK', 'RSKD', 'LAW', 'DBX', 'VTEX', 'PD', 'ENFN', 'SUMO', 'SMAR', 'ZUO', 'DDOG', 'FRSH', 'PCOR', 'TEAM', 'HUBS', 'DOCU', 'AMPL', 'VEEV', 'SHOP', 'TWLO', 'ZM', 'BILL', 'BLND', 'PATH', 'S', 'BIGC', 'ZS', 'OLO', 'FSLY', 'EVBG', 'RNG', 'SNOW', 'YEXT', 'ASAN', 'MNDY', 'CFLT', 'GTLB', 'TSLA', 'ROKU', 'TDOC', 'COIN', 'ZM', 'U', 'SE', 'AAPL', 'AMZN', 'GOOGL', 'FB', 'MSFT'];

// Companies and metrics to be displayed in screener table
const companies = [];

export default function Screener() {
  const [loading, setLoading] = useState(false);

  // delay function to accommodate API rate limits
  const delay = async (ms = 875) => new Promise(resolve => setTimeout(resolve, ms));

  // Handle get company financials
  const handleGetFinancials = async () => {
    setLoading(true);
    try {
      for (let i = 0; i < tickers.length; i++) {
        const resp = await axios.get(`${BASE_URL}/api/v3/financial-growth/${tickers[i]}?apikey=${API_KEY}&limit=1`)
        if (resp.data[0].revenueGrowth > 0.30 && resp.data[0].freeCashFlowGrowth > 0.10 && resp.data[0].epsgrowth > 0 && resp.data[0].ebitgrowth > 0) {
          companies.push(resp.data[0]);
        }
        await delay();
      }
    } catch (err) {
      console.log(err)
    }
    setLoading(false);
  }

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
          <div className="flex justify-start align-middle mb-4">
            <button
              type="button"
              onClick={handleGetFinancials}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Run Screener
            </button>
            { loading ? <img src={Loader} className='ml-2 my-2 h-7 w-7 animate-spin'></img> : null }
          </div>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className = {`min-w-full divide-y divide-gray-200 ${loading ? 'animate-pulse' : null}`}>
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Symbol
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
                          FCF Growth (%)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Gross Profit Growth (%)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          EBIT Growth (%)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          EPS Growth (%)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {companies.map((company) => (
                        <tr key={company.symbol}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.symbol}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{(company.revenueGrowth * 100).toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{(company.freeCashFlowGrowth * 100).toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{(company.grossProfitGrowth * 100).toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{(company.ebitgrowth * 100).toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{(company.epsgrowth * 100).toFixed(2)}</td>
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