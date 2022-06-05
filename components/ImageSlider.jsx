import React, { useState } from 'react'
import ImageData from '../data/ImageData'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa"

const ImageSlider = () => {
    const [current,setCurrent] = useState(0)

    const downCurrent = () =>{
        if(current>0){
            setCurrent(current-1)
        } else {
            setCurrent(ImageData.length-1)
        }
        //current === 0 ? setCurrent(ImageData.length-1) : setCurrent(current-1)
    }
    const upCurrent = () =>{
        if(current<ImageData.length-1){
            setCurrent(current+1)
        } else {
            setCurrent(0)
        } 
        //current === ImageData.length-1 ? setCurrent(0) : setCurrent(current+1)
    }

    
    return (
        <div>
            <section className='slider'>
                <FaArrowLeft className='leftArrow' onClick={downCurrent}/>
                    {ImageData.map((data,i)=>{
                        return (
                            <div className={i === current ? 'slide active' : 'slide'} key={i}>
                                {i === current && (
                                    <div>
                                        <img className='image' src={data.image} alt={data.title} />
                                    </div>
                                )}
                            </div>    
                        )
                    })}
                <FaArrowRight className='rightArrow'onClick={upCurrent}/>
                <div className='count'>
                    {current+1}/{ImageData.length}
                </div>
            </section>
            
        </div>
        
        
    )
}

export default ImageSlider