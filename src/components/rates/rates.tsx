import { BitcoinIcon, DollarIcon, ExpandIcon, HighIcon, LowIcon, TimerIcon } from "../../assets/icons"
import "./rates.css"


export const Rates = () => {
    return (
        <div className="rates">
            <div className="rates__conversion">
                <div className="rates__conversion--data">
                    <div className="">
                        <BitcoinIcon />
                        <DollarIcon />
                    </div>
                    <div className="text-white">BTC/USDT</div>
                    <ExpandIcon />
                </div>
                <h3 className="rate text-green">$20,634</h3>
            </div>
            <div className="rates__changes">
                <div className="rates__changes--info">
                    <div className="">
                        <TimerIcon />
                        <span>24h change</span>

                    </div>
                    <div className="">
                        <h4>520.80</h4>
                        <span>+1.25%</span>
                    </div>
                </div>
                <div className="rates__changes--info">
                    <div className="">
                        <HighIcon />
                        <span>24h change</span>
                    </div>

                    <div className="">
                        <h4>520.80</h4>
                        <span>+1.25%</span>
                    </div>
                </div>
                <div className="rates__changes--info">
                    <div className="">
                        <LowIcon />
                        <span>24h change</span>

                    </div>
                    <div className="">
                        <h4>520.80</h4>
                        <span>+1.25%</span>
                    </div>
                </div>

            </div>



        </div>
    )
}

