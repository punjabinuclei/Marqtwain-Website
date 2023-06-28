// import React, { useRef } from 'react';

// interface Props {
//     src: string;
// }


// const VideoPlayer = ({ src }:Props) => {
//     const videoRef = useRef(null);

//     const handleMouseOver = () => {
//         videoRef.current.play();
//     };

//     const handleMouseOut = () => {
//         videoRef.current.pause();
//         videoRef.current.currentTime = 0;
//     };

//     return (
//         <div
//             onMouseOver={handleMouseOver}
//             onMouseOut={handleMouseOut}
//         >
//             <video ref={videoRef} style={{ width: '400px' }}>
//                 <source src={src} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     );
// };

// export default VideoPlayer;


import React from 'react'

const VideoPlayer = () => {
    return (
        <div>VideoPlayer</div>
    )
}

export default VideoPlayer