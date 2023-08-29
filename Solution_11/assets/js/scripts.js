'use strict';

let DOMContentLoaded_handle = () => {
    let meme_canvas = document.getElementById('meme_canvas'), meme_image = document.getElementById('meme_image');
    if (meme_canvas && meme_image) {
        let mc_context = meme_canvas.getContext('2d');
        window.addEventListener("load", (event) => {
            meme_canvas.width = meme_image.naturalWidth;
            meme_canvas.height = meme_image.naturalHeight;

            mc_context.drawImage(meme_image, 0, 0);
            // mc_context.drawImage(meme_image, 0, 0, meme_image.width, meme_image.height);
            
            mc_context.font = "26px 'Times New Roman'";
            
            // mc_context.fillStyle = "transparent";
            mc_context.shadowColor = "rgba(81,67,21,0.8)";
            mc_context.shadowBlur = 10;
            mc_context.strokeText("Look son, JS frameworks everywhere!", 100, 25);
            
            mc_context.shadowBlur = 0;
            mc_context.fillStyle = "white";
            mc_context.fillText("Look son, JS frameworks everywhere!", 100, 25);
        });
        // console.log(mc_context);
    }
};
document.addEventListener("DOMContentLoaded", DOMContentLoaded_handle);