import { useEffect, useRef } from "react";
import "./chart.css";
import {
  SciChartSurface,
  NumericAxis,
  XyDataSeries,
  FastCandlestickRenderableSeries,
  NumberRange,
  EAutoRange,
  ENumericFormat,
  EAxisType,
} from 'scichart';



export const Chart = () => {
  const sciChartSurfaceRef = useRef(null);
  useEffect(() => {
    const drawChart = async () => {
      // Create a SciChartSurface
      const { sciChartSurface, wasmContext } = await SciChartSurface.create('scichart-root');

      // Store reference to SciChartSurface for cleanup
      sciChartSurfaceRef.current = sciChartSurface;

      // Create X and Y Axis
      const xAxis = new NumericAxis(wasmContext, {
        autoRange: EAutoRange.Always,
        drawMajorGridLines: false,
        drawMinorGridLines: false,
        drawMajorTickLines: false,
        drawMinorTickLines: false,
        labelProvider: {
          numericFormat: ENumericFormat.Decimal,
        },
      });
      const yAxis = new NumericAxis(wasmContext, {
        growBy: new NumberRange(0.1, 0.1),
      });

      sciChartSurface.xAxes.add(xAxis);
      sciChartSurface.yAxes.add(yAxis);

      // Create some sample data
      const xValues = [1, 2, 3, 4, 5];
      const openValues = [1.2, 1.3, 1.4, 1.5, 1.6];
      const highValues = [1.3, 1.4, 1.5, 1.6, 1.7];
      const lowValues = [1.1, 1.2, 1.3, 1.4, 1.5];
      const closeValues = [1.2, 1.3, 1.4, 1.5, 1.6];

      const dataSeries = new XyDataSeries(wasmContext, {
        xValues,
        openValues,
        highValues,
        lowValues,
        closeValues,
      });

      // Create the candlestick series
      const candlestickSeries = new FastCandlestickRenderableSeries(wasmContext, {
        dataSeries,
        strokeThickness: 2,
        dataPointWidth: 0.7,
        upBodyBrush: 'rgba(0, 255, 0, 0.7)',
        upWickBrush: 'rgba(0, 255, 0, 1)',
        downBodyBrush: 'rgba(255, 0, 0, 0.7)',
        downWickBrush: 'rgba(255, 0, 0, 1)',
      });

      sciChartSurface.renderableSeries.add(candlestickSeries);

      // Cleanup function
      return () => {
        sciChartSurfaceRef.current?.delete();
      };
    };
    console.log("frfrf")

    drawChart();

    return () => {
      sciChartSurfaceRef.current?.delete();
    };
  }, []);
  return (
    <div id="scichart-root" style={{ width: '100%', height: '100%' }}>

    </div>
  )
}

