import React from 'react'

function ChartBar(props) {
    let barFillHeight = '0%';

    if(props.maxx > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
  return (
    <div className='chart-bar'>
        <div className="chart-bar_inner">
            <div className="chart-bar_fill" style={{height: barFillHeight}}></div>
        </div>
        <div className="chart-bar_label">{props.label}</div>
    </div>
  )
}

export default ChartBar