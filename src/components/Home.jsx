import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"
import Data1 from "../files/sample_db_0km.json"
import Data2 from "../files/sample_db_5km.json"
import Data3 from "../files/sample_db_10km.json"
import Data4 from "../files/sample_db_15km.json"
import Data5 from "../files/sample_db_20km.json"
import Data6 from "../files/sample_db_25km.json"

export default function Home({ data, array, setData, setArray }) {
    const navigate = useNavigate()

    const handleDist = async (event) => {
        //event.preventDefault();
        if (event.target.value === "1")
            setData(Data1)
        else if (event.target.value === "2")
            setData(Data2)
        else if (event.target.value === "3")
            setData(Data3)
        else if (event.target.value === "4")
            setData(Data4)
        else if (event.target.value === "5")
            setData(Data5)
        else if (event.target.value === "6")
            setData(Data6)
    }

    const handleMode = (event) => {
        //event.preventDefault()
        var rand = Math.floor(Math.random() * 10) % 2
        if (event.target.value === "Own Car" && rand === 0)
            setArray(["mode_1", "mode_2", "mode_4", "mode_8", "mode_7"])
        else if (event.target.value === "Own Car" && rand === 1)
            setArray(["mode_1", "mode_2", "mode_4", "mode_8", "mode_5"])
        else if (event.target.value === "Own Two-wheeler" && rand === 0)
            setArray(["mode_1", "mode_2", "mode_4", "mode_9", "mode_7"])
        else if (event.target.value === "Own Two-wheeler" && rand === 1)
            setArray(["mode_1", "mode_2", "mode_4", "mode_9", "mode_5"])
        else if (event.target.value === "Auto" && rand === 0)
            setArray(["mode_1", "mode_2", "mode_4", "mode_8", "mode_7"])
        else if (event.target.value === "Auto" && rand === 1)
            setArray(["mode_1", "mode_2", "mode_4", "mode_9", "mode_7"])
        else if (event.target.value === "App based ride" && rand === 0)
            setArray(["mode_1", "mode_2", "mode_4", "mode_8", "mode_5"])
        else if (event.target.value === "App based ride" && rand === 1)
            setArray(["mode_1", "mode_2", "mode_4", "mode_9", "mode_5"])
        else if (event.target.value === "Bus" && rand===0)
            setArray(["mode_1", "mode_2", "mode_4", "mode_9", "mode_7"])
        else if (event.target.value === "Bus" && rand===1)
            setArray(["mode_1", "mode_2", "mode_4", "mode_8", "mode_5"])
        else if (event.target.value === "Metro" && rand===0)
            setArray(["mode_1", "mode_2", "mode_4", "mode_9", "mode_7"])
        else if (event.target.value === "<Metro>" && rand===1)
            setArray(["mode_1", "mode_2", "mode_4", "mode_8", "mode_5"])
        else
        setArray(["mode_1", "mode_2", "mode_4", "mode_9", "mode_5"])
    }

    const ReRoute = () => {
        if(data == !data || array== !array){
            alert("No Information provided");
        }
        else
            navigate("/mode")
    }

    return (
        <div className="main">

            <h1 className="title">Respondent Travel profile</h1>

            <div className="question1" onChange={handleMode}>
                <h3>Q1: What is your most frequently used means of travel from your home to work location?</h3>

                <label><input type="radio" value="Bus" name="mode_t" />   Bus </label> <br />
                <label><input type="radio" value="Metro" name="mode_t" /> Metro </label> <br />
                <label><input type="radio" value="Own Two-wheeler" name="mode_t" /> Own Two-Wheeler</label> <br />
                <label><input type="radio" value="Own Car" name="mode_t" /> Own Car</label> <br />
                <label><input type="radio" value="Walk/Bicycle" name="mode_t" /> Walk/Bicycle</label> <br />
                <label><input type="radio" value="Auto" name="mode_t" /> Auto </label> <br />
                <label><input type="radio" value="App based ride" name="mode_t" /> App based ride hailing cab services including Ola / Uber</label> <br />


            </div>
            <div className="question2" onChange={handleDist}>
                <h3>Q2: What is the total distance between your home and workplace?</h3>

                <label> <input type="radio" name="distance" value="1" /> &lt; 5km </label>   <br />
                <label> <input type="radio" name="distance" value="2" /> 5-10km </label> <br />
                <label> <input type="radio" name="distance" value="3" /> 10-15km </label> <br />
                <label> <input type="radio" name="distance" value="4" /> 15-20km </label> <br />
                <label> <input type="radio" name="distance" value="5" /> 20-25km</label> <br />
                <label> <input type="radio" name="distance" value="6" /> &gt; 25km </label> <br />

            </div>
            <input type="button" onClick={ReRoute} value="Next" className="but"/>
        </div>
    )
}