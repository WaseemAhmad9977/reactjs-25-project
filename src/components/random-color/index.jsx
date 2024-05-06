import { useEffect, useState } from "react"
import './style.css'

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000');

    useEffect(() => {

        if (typeOfColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()

    }, [typeOfColor])


    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        //   #986786

        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }

        console.log(hexColor);
        setColor(hexColor)


    }

    function handleCreateRandomRgbColor() {

        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);

        console.log(color)

    }

    return (

        <div

            style={{
             

                width: '100vw',
                height: '100vh',
                background: color,
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random color</button>

            <div

                style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    color:'white',
                    fontSize:'16px'
                }} >

                <h1>{typeOfColor}</h1>
                <h3>{color}</h3>
            </div>

        </div>


    )
}