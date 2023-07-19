import React from 'react';
import VideoPlayer from './VideoPlayer';

const App = () => {
    return (
        <div>
            <div className='container flex justify-center my-[10px] mt-[90px]'>
                <div className='px-[10px]'>
                    {/* <VideoPlayer src="https://drive.google.com/file/d/1WFXliGQmAmve1CfECMnb8sCUlcoNNrYs/view?usp=sharing" /> */}
                </div>
                <div>
                    <VideoPlayer src="/Reels/Reel2.mp4" />
                </div>
            </div>

            <div className='container flex justify-center my-[10px] '>
                <div className='px-[10px]'>
                    {/* <VideoPlayer src="/Reels/Reel3.mp4" /> */}
                </div>
                <div>
                    {/* <VideoPlayer src="/Reels/Reel4.mp4" /> */}
                </div>
            </div>

            <div className='container flex justify-center my-[10px] '>
                <div className='px-[10px]'>
                    {/* <VideoPlayer src="/Reels/Reel5.mp4" /> */}
                </div>
                <div>
                    {/* <VideoPlayer src="/Reels/Reel6.mp4" /> */}
                </div>
            </div>

            <div className='container flex justify-center my-[10px] '>
                <div className='px-[10px]'>
                    {/* <VideoPlayer src="/Reels/Reel7.mp4" /> */}
                </div>
                <div>
                    {/* <VideoPlayer src="/Reels/Reel8.mp4" /> */}
                </div>
            </div>

            <div className='container flex justify-center my-[10px] '>
                <div className='px-[10px]'>
                    {/* <VideoPlayer src="/Reels/Reel9.mp4" /> */}
                </div>
                {/* <div>
                    <VideoPlayer src="/Reels/Reel10.mp4" />
                </div> */}
            </div>




        </div>
    );
};

export default App;


