import React, {useState} from "react"

function TrafficLight (){

    const [ colorRed, setColorRed] = useState(false);
    const [ colorYellow, setColorYellow] = useState(false);
    const [ colorGreen, setColorGreen] = useState(false);
    const [ colorPurple, setColorPurple] = useState(false);
    const [ showPurple, setShowPurple] = useState(false);


        function changeLightRed () {
            setColorRed(true )
            setColorYellow(false)
            setColorGreen(false)
            setColorPurple (false )
        }
        let lightTrafficRed = !colorRed ? "red": "redOn";
        
        function changeLightYellow () {
            setColorRed(false )
            setColorYellow(true)
            setColorGreen(false)
            setColorPurple (false )
        }
        let lightTrafficYellow = !colorYellow ? "yellow": "yellowOn";
        

           function changeLightGreen () {
            setColorRed(false )
            setColorYellow(false)
            setColorGreen(true)
            setColorPurple (false )
        }
        let lightTrafficGreen = !colorGreen ? "green": "greenOn";

        function changeLightPurple () {
            setColorRed(false )
            setColorPurple(true )
            setColorYellow(false)
            setColorGreen(false)
        }
        let lightTrafficPurple = !colorPurple ? "purple": "purpleOn";
        
        let showPurpleLight = showPurple ? '': "purpleHide"; 

        function showLight () {
            setShowPurple(!showPurple) 
        }

        let buttonText = showPurple ? "Hide Purple Light" : "Show Purple Light";
        
    return(
        <div id="trafficTop">
            <div className="post" />
            <div className="container">
                <div className={lightTrafficRed} onClick={changeLightRed}></div>
                <div className={lightTrafficYellow} onClick={changeLightYellow}></div>
                <div className={lightTrafficGreen} onClick={changeLightGreen}></div>
                <div className={`${lightTrafficPurple} ${showPurpleLight}`} onClick={changeLightPurple}></div>
            </div>
            <button onClick={showLight}>{buttonText}</button>
        </div>
    )

}

export default TrafficLight