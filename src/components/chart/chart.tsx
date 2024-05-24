
import "./chart.css";


export const Chart = () => {
  const candleStickData = []
  var stockChart = new ej.charts.StockChart({
    primaryYAxis: {
      title: 'Stock Prices'
    },
    primaryXAxis: {
      title: 'Months'
    },
    enableSelector: false,
    series: [
      {
        dataSource: candleStickData,
        type: "Candle"
      }
    ]
  });
  stockChart.appendTo("#container");
  return (
    <div id="container" style={{ width: '100%', height: '100%' }}>
      pppp
    </div>
  )
}

