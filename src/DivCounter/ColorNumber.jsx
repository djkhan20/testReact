import React, {useEffect, useState} from 'react'

export default function ColorNumber() {
    let elements = [];

    const randomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    const createRandomElements = () => {
       
        let obj ={}
        for ( let x = 0; x <=100; x++){
            let color = randomColor()
            obj.number = x;
            obj.color = color;
            elements.push(obj)
        }
    }

    useEffect(() => {
        createRandomElements();
    }, [])
    
    return (
        <div>
            {elements.map((element) =>{
                return(
                    <div>
                        {element.number}
                    </div>
                )
            })
            }
        </div>
    )
}
