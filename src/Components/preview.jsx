// eslint-disable-next-line no-unused-vars
import React from 'react';

function Preview() {
    const paralaxImg = document.getElementById('paralax--img')
    const paralaxText = document.getElementById('preview')

    document.addEventListener('mousemove', function (e) {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight

        paralaxImg.style.transition = 'transform 0.1s ease'
        paralaxText.style.transition = 'transform 0.1s ease'

        paralaxImg.style.transform = `translate(-${x * 40}px, -${y * 40}px)`
        paralaxText.style.transform = `translate(-${x * 20}px, -${y * 20}px)`
    })
    document.addEventListener('mouseleave', function () {
        paralaxImg.style.transition = 'none'
        paralaxText.style.transition = 'none'
    })

    return (
        <div className="preview" id="preview">
            <div className="paralax-text">
                <div className="paralax--img" id="paralax--img">
                    <div className="paralax-ice">
                    </div>
                </div>
                <p className="Write">Write</p>
                <p className="Learn">Learn</p>
                <p className="Share">Share</p>
            </div>
        </div>
    );
}

export default Preview;