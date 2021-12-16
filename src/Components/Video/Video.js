import React,{useState, useEffect} from 'react'
import Videositem from '../videoList/VideoList'


export default function Videos() {


    const [videos, setVideos] =  useState([])

    

    async function fetchVideos() {
        const response = await fetch('https://api.sampleapis.com/futurama/episodes',{method:'GET'})
        const datas = await response.json() 
        
        setVideos(datas)
          
    }

    useEffect(() => {
        if(videos.length === 0){
            fetchVideos()
        }
        console.log(videos[0])
       }, [videos])

    return (
        <div className="videos">
            <h1>VIDEOS</h1>

            {videos.map( (i,index)=> (

                        <Videositem key={index} title={i.title} writer={i.writers}  date={i.originalAirDate} des={i.desc} />
                        // <MovieItem key={index} image={i['poster-image']} name={i.name} />
                 ))}
        </div>
    )
}