import React, { useEffect } from "react";
import "./mode.css"
import Bus from "../svgs/Bus.png"
import Metro from "../svgs/Metro.png"
import Own_Car from "../svgs/Own Car.png"
import Own_Two_wheeler from "../svgs/Own Two-wheeler.png"
import WalkBicycle from "../svgs/WalkBicycle.png"
import App_based_ride from "../svgs/App based ride.png"

export default function Mode({data, array}) {
    useEffect(() => {
        console.log(array[0])
        console.log(data.Data[0])
        console.log(array)
    }, [])

    //if(data.Data[0][array[0]+".crowd"] == 1)
    return(
        <div className="tablehead">
            <h1 className="title">Mode Choice</h1>
            <table>
                <tr className="datarow">
                    <td className="dataset" style={{backgroundColor: "pink"}}>{data.Data[0][array[0]]}</td>
                    <td className="dataset" style={{backgroundColor: "yellow"}}>{data.Data[0][array[1]]}</td>
                    <td className="dataset" style={{backgroundColor: "lightgreen"}}>{data.Data[0][array[2]]}</td>
                    <td className="dataset" style={{backgroundColor: "violet"}}>{data.Data[0][array[3]]}</td>
                    <td className="dataset" style={{backgroundColor: "skyblue"}}>{data.Data[0][array[4]]}</td>
                </tr>
                <tr><th className="single" colSpan={5}>Total travel time spent while inside the vehicle(s)</th></tr>
                <tr className="datarow">
                    <td className="dataset" style={{backgroundColor: "pink"}}>{data.Data[0][array[0]+".ivtt"]} min</td>
                    <td className="dataset" style={{backgroundColor: "yellow"}}>{data.Data[0][array[1]+".ivtt"]} min</td>
                    <td className="dataset" style={{backgroundColor: "lightgreen"}}>{data.Data[0][array[2]+".ivtt"]} min</td>
                    <td className="dataset" style={{backgroundColor: "violet"}}>{data.Data[0][array[3]+".ivtt"]} min</td>
                    <td className="dataset" style={{backgroundColor: "skyblue"}}>{data.Data[0][array[4]+".ivtt"]} min</td>
                </tr>
                <tr><th className="single" colSpan={5}>Total travel time spent outside vehicle(s)</th></tr>
                <tr className="datarow">
                    <td className="dataset" style={{backgroundColor: "pink"}}>{data.Data[0][array[0]+".waittime"] + data.Data[0][array[0]+".walktime"]} min</td>
                    <td className="dataset" style={{backgroundColor: "yellow"}}>{data.Data[0][array[1]+".waittime"] + data.Data[0][array[1]+".walktime"]} min</td>
                    <td className="dataset" style={{backgroundColor: "lightgreen"}}>{data.Data[0][array[2]+".waittime"] + data.Data[0][array[2]+".walktime"]} min</td>
                    <td className="dataset" style={{backgroundColor: "violet"}}>{data.Data[0][array[3]+".waittime"] + data.Data[0][array[3]+".walktime"]} min</td>
                    <td className="dataset" style={{backgroundColor: "skyblue"}}>{data.Data[0][array[4]+".waittime"] + data.Data[0][array[4]+".walktime"]} min</td>
                </tr>
                <tr><th className="single" colSpan={5}>Possible delay due to traffic congestion or other uncertainties</th></tr>
                <tr className="datarow">
                    <td className="dataset" style={{backgroundColor: "pink"}}>...upto {data.Data[0][array[0]+".tvariab"]} min more</td>
                    <td className="dataset" style={{backgroundColor: "yellow"}}>...upto {data.Data[0][array[1]+".tvariab"]} min more</td>
                    <td className="dataset" style={{backgroundColor: "lightgreen"}}>...upto {data.Data[0][array[2]+".tvariab"]} min more</td>
                    <td className="dataset" style={{backgroundColor: "violet"}}>...upto {data.Data[0][array[3]+".tvariab"]} min more</td>
                    <td className="dataset" style={{backgroundColor: "skyblue"}}>...upto {data.Data[0][array[4]+".tvariab"]} min more</td>
                </tr>
                <tr><th className="single" colSpan={5}>Total one-way cost of travel</th></tr>
                <tr className="datarow">
                    <td className="dataset" style={{backgroundColor: "pink"}}>Rs. {data.Data[0][array[0]+".tcost"]}</td>
                    <td className="dataset" style={{backgroundColor: "yellow"}}>Rs. {data.Data[0][array[1]+".tcost"]}</td>
                    <td className="dataset" style={{backgroundColor: "lightgreen"}}>Rs. {data.Data[0][array[2]+".tcost"]}</td>
                    <td className="dataset" style={{backgroundColor: "violet"}}>Rs. {data.Data[0][array[3]+".tcost"]}</td>
                    <td className="dataset" style={{backgroundColor: "skyblue"}}>Rs. {data.Data[0][array[4]+".tcost"]}</td>
                </tr>
                <tr><th className="single" colSpan={5}>Extent of crowding in the vehicle</th></tr>
                <tr className="datarow">
                    {data.Data[0][array[0]+".crowd"] == 1 && <td className="dataset" style={{backgroundColor: "pink"}}> Many seats Available </td>}
                    {data.Data[0][array[0]+".crowd"] == 2 && <td className="dataset" style={{backgroundColor: "pink"}}> Some seats available </td>}
                    {data.Data[0][array[0]+".crowd"] == 3 && <td className="dataset" style={{backgroundColor: "pink"}}> All seats occupied </td>}
                    {data.Data[0][array[1]+".crowd"] == 1 && <td className="dataset" style={{backgroundColor: "yellow"}}> Many seats Available </td>}
                    {data.Data[0][array[1]+".crowd"] == 2 && <td className="dataset" style={{backgroundColor: "yellow"}}> Some seats available </td>}
                    {data.Data[0][array[1]+".crowd"] == 3 && <td className="dataset" style={{backgroundColor: "yellow"}}> All seats occupied </td>}
                    {data.Data[0][array[2]+".crowd"] == 1 && <td className="dataset" style={{backgroundColor: "lightgreen"}}> Many seats Available </td>}
                    {data.Data[0][array[2]+".crowd"] == 2 && <td className="dataset" style={{backgroundColor: "lightgreen"}}> Some seats available </td>}
                    {data.Data[0][array[2]+".crowd"] == 3 && <td className="dataset" style={{backgroundColor: "lightgreen"}}> All seats occupied </td>}
                </tr>
                <tr><th className="single" colSpan={5}>Service type</th></tr>
                <tr className="datarow">
                    {data.Data[0][array[0]+".serv"] == 1 && <td className="dataset" style={{backgroundColor: "pink"}}> Ordinary </td>}
                    {data.Data[0][array[0]+".serv"] == 2 && <td className="dataset" style={{backgroundColor: "pink"}}> Express Non-AC </td>}
                    {data.Data[0][array[0]+".serv"] == 3 && <td className="dataset" style={{backgroundColor: "pink"}}> Express AC </td>}
                    {data.Data[0][array[1]+".serv"] == 1 && <td className="dataset" style={{backgroundColor: "yellow"}}> Ordinary </td>}
                    {data.Data[0][array[1]+".serv"] == 2 && <td className="dataset" style={{backgroundColor: "yellow"}}> Express Non-AC </td>}
                    {data.Data[0][array[1]+".serv"] == 3 && <td className="dataset" style={{backgroundColor: "yellow"}}> Express AC </td>}
                </tr>
            </table>
        </div>
    )
}