'use client';

import {Chart} from 'chart.js/auto';
import { useRef, useEffect } from "react";
import type { IndexChartProps } from "../types/components/interface";
import styles from './IndexChart.module.scss'


export default function IndexChart({data, indice}:IndexChartProps){
    const canvasEl = useRef(null);
    const recentData = data.slice(-30);
    
    function generateLabels(dates:string[]){
        return dates.map((dateStr,index,array) => {
            const currentDate = new Date(dateStr);
            const currentDay = currentDate.getDate();
            const currentMonth = currentDate.getMonth() + 1;

            if(index === 0){
                return `${currentMonth}/${currentDay}`;
            }
            const prevDate = new Date(array[index -1]);
            const prevMonth = prevDate.getMonth() + 1;
            if(currentMonth !== prevMonth){
                return `${currentMonth}/${currentDay}`
            }

            return `${currentDay}`;
        })
    }
    
    useEffect(()=>{
        if (canvasEl.current !== null && recentData.length > 0){
            const ctx = canvasEl.current;
            const labels = generateLabels(recentData.map((entry) => entry.Date));
            const price = recentData.map((entry) => entry.Close);
            let chartData = {
                labels: labels,
                datasets:[{
                    label: indice,
                    data: price,
                    borderColor: 'rgba(0, 0, 0, 0.5)',
                    fill: true,
                    tension: 0.1,
                    borderWidth:2,
                    pointBackgroundColor: 'rgba(256,256,256,1)',
                    pointHitRadius: 10,
                    pointRadius: 0.5
                }]
            };
            const lineChart = new Chart(ctx,{
                type: 'line',
                data: chartData,
                options:{
                    plugins:{
                        legend: {
                            display: false
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            })
            return function cleanup() {
                lineChart.destroy();
              };
        }
    },[recentData])
    return(
        <div className={styles.chart}>
            <canvas ref={canvasEl}></canvas>         
        </div>
    )
}