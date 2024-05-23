import { GridIcon1, GridIcon2, GridIcon3 } from "../../assets/icons";
import "./order-book.css";

export const OrderBook = () => {
  return (
    <div className="order-book">
      <div className="order-book__filter">
        <div className="">
          <GridIcon1 />
          <GridIcon2 />
          <GridIcon3 />
        </div>
        <select id="10">
          <option value="10">10</option>
          <option value="10">32</option>
          <option value="10">All</option>
        </select>
      </div>

      <table className="order-book-table">
        <thead>
          <th className="text-white">Price (USDT)</th>
          <th className="text-white">Amounts(BTC)</th>
          <th className="text-white">Total</th>
        </thead>
        <tbody>
          <tr>
            <td className="text-red">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
          <tr>
            <td className="text-red">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
          <tr>
            <td className="text-red">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
          <tr>
            <td className="text-red">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
          <tr>
            <td className="text-red">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
        </tbody>
     

        <tr>
          
        </tr>
        <tbody>
          <tr>
            <td className="text-green-secondary">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
          <tr>
            <td className="text-green-secondary">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
          <tr>
            <td className="text-green-secondary">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
          <tr>
            <td className="text-green-secondary">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
          <tr>
            <td className="text-green-secondary">36920.12</td>
            <td className="text-white">0.758965</td>
            <td className="text-white">28,020.98</td>
          </tr>
        </tbody>
      </table>


    </div>)
};



