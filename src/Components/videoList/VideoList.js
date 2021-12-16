import React from 'react'

export default function VideosList({des ,date ,writer ,title}) {
    return (
        <div className="video_card">
            <video src="https://youtu.be/ScMzIvxBSi4" controls></video>
            <h4>{title}</h4>
            <p className='author'>{writer}</p>
            <p className='date'>{date}</p>
            <p>{des}</p>

        </div>
    )
}
