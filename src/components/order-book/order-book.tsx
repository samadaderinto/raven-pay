import { GridIcon1, GridIcon2, GridIcon3 } from "../../assets/icons";
import "./order-book.css";

export const OrderBook = () => {
  return (<div className="order-book">
    <div className="order-book__filter">
      <div className="">
        <GridIcon1 />
        <GridIcon2 />
        <GridIcon3 />
      </div>
      <select id="10">
        <option value="10">10</option>
      </select>
    </div>

    <table>
      <thead>
        <th>
          <td>Price (USDT)</td>
        </th>
        <th>
          <td>Amounts(BTC)</td>
        </th>
        <th>
        <td>Total</td>
          </th>
      </thead>

      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </table>
  </div>);
};
