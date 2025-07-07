import React from 'react'

function Post() {
  return (
    <>
        <div className='h-30 w-2xs text-green-800'>
            <div><img src="https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg" alt="job" /></div>
            <div className='flex'>
                <div>role</div>
                <div>duration</div>
            </div>
            <div>
                Job Title
            </div>
            <div>
                Job Description
            </div>
            <div className='flex'>
                <div><img src="https://imageio.forbes.com/specials-images/imageserve/66c3b9c5b69e4e9fcffc9ca6/Successful-mature-businessman-looking-at-camera-with-confidence/960x0.jpg?format=jpg&width=960" alt="" /></div>
                <div>Stipend</div>
            </div>
        </div>
    </>
  )
}

export default Post