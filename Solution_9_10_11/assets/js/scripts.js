'use strict';

document.addEventListener("DOMContentLoaded", function (event) {
    const media = document.querySelector("video");

    const more_backward_interval = 10;
    const backward_interval = 3;
    const forward_interval = 3;
    const more_forward_interval = 10;

    const controls = ["time_bar", "current_time", "full_time", "play", "stop", "more_backward", "backward", "forward", "more_forward", "volume_bar", "mute", "speed_bar"];
    let controls_json = Object.fromEntries(controls.map(control => [control, document.getElementById(control)]));
    let last_media_volume = controls_json.volume_bar.value / 100;

    let seconds_to_minutes = seconds => Math.floor(seconds / 60).toString().padStart(2, '0');
    let seconds_to_seconds = seconds => Math.floor(seconds % 60).toString().padStart(2, '0');
    let media_metadata_loaded = () => {
        controls_json.full_time.innerHTML = seconds_to_minutes(media.duration) + ":" + seconds_to_seconds(media.duration);
        controls_json.current_time.innerHTML = seconds_to_minutes(media.currentTime) + ":" + seconds_to_seconds(media.currentTime);
        controls_json.time_bar.setAttribute("max", Math.floor(media.duration));
        controls_json.time_bar.value = media.currentTime;
        controls_json.speed_bar.value = media.playbackRate;
    };
    media.addEventListener("loadedmetadata", media_metadata_loaded);

    let media_time_update = () => {
        controls_json.time_bar.value = media.currentTime;
        controls_json.current_time.innerHTML = seconds_to_minutes(media.currentTime) + ":" + seconds_to_seconds(media.currentTime);
    };
    media.addEventListener("timeupdate", media_time_update);

    let update_media_time = () => {
        media.currentTime = controls_json.time_bar.value;
    };
    controls_json.time_bar.addEventListener("input", update_media_time)

    let play_pause_media = () => {
        if (media.paused) {
            controls_json.play.value = "Pause";
            media.play();
        } else {
            controls_json.play.value = "Play";
            media.pause();
        }
    };
    controls_json.play.addEventListener("click", play_pause_media);

    let stop_media = () => {
        media.pause();
        media.currentTime = 0;
        controls_json.play.value = "Play";
    };
    controls_json.stop.addEventListener("click", stop_media);
    media.addEventListener("ended", stop_media);

    let backward_media = (interval) => {
        if (interval > media.currentTime) stop_media();
        else media.currentTime -= interval;
    };
    controls_json.more_backward.addEventListener("click", () => backward_media(more_backward_interval));
    controls_json.backward.addEventListener("click", () => backward_media(backward_interval));
    let forward_media = (interval) => {
        if (interval < (media.duration - media.currentTime)) media.currentTime += interval;
    };
    controls_json.forward.addEventListener("click", () => forward_media(forward_interval));
    controls_json.more_forward.addEventListener("click", () => forward_media(more_forward_interval));

    let set_media_volume = (volume) => media.volume = last_media_volume = volume;
    let media_volume_change = (event) => media.volume = set_media_volume(event.currentTarget.value / 100);
    controls_json.volume_bar.addEventListener("input", media_volume_change);

    let toggle_media_mute = () => {
        if (media.volume > 0) {
            media.volume = 0;
            controls_json.volume_bar.disabled = true;
            controls_json.mute.value = "Unmute";
        } else {
            media.volume = last_media_volume;
            controls_json.volume_bar.disabled = false;
            controls_json.mute.value = "Mute";
        }
    };
    controls_json.mute.addEventListener("click", toggle_media_mute);

    let change_media_rate = () => {
        media.playbackRate = controls_json.speed_bar.value;
    };
    controls_json.speed_bar.addEventListener("input", change_media_rate);


    let style_color_to_rgb = style_color => style_color.substring(4, style_color.length - 1).replace(/ /g, '').split(',');
    let rgb_to_style_color = rgb => `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    
    let colored_heading = document.getElementById("colored_heading");
    let [r, g, b] = style_color_to_rgb(getComputedStyle(colored_heading).color);

    let red_color_bar = document.getElementById('red_color_bar');
    let green_color_bar = document.getElementById('green_color_bar');
    let blue_color_bar = document.getElementById('blue_color_bar');

    red_color_bar.value = r;
    green_color_bar.value = g;
    blue_color_bar.value = b;
    
    let color_bar_changed = () => colored_heading.style.color = rgb_to_style_color({r:red_color_bar.value, g:green_color_bar.value, b:blue_color_bar.value, });
    [red_color_bar, green_color_bar, blue_color_bar].forEach(color_bar => color_bar.addEventListener("input", color_bar_changed))
});