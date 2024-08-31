// function toggleVideo(){
//     const trailer = document.querySelector('.trailer');
//     const video = document.querySelector('video');
//     video.pause();
//     trailer.classList.toggle('active');
// }

// function changeBg(bg, contentClass){
//     const banner = document.querySelector('.banner');
//     const contents = document.querySelectorAll('.content');
//     banner.style.background=`url("/images/movies/${bg}")`;
//     banner.style.backgroundSize = 'cover';
//     banner.style.backgroundPosition = 'center';

//     contents.forEach(content => {
//         content.classList.remove('active');
//         if(content.classList.contains(contentClass)){
//             content.classList.add('active');
//         }
//     });
// }


// function toggleVideo() {
//     const trailer = document.querySelector('.trailer');
//     const video = document.querySelector('video');
    
//     video.pause();
//     trailer.classList.toggle('active');
// }

// function toggleVideo() {
//     console.log('Close button clicked');
//     console.log('Toggle Video called');  // Debugging line
//     const trailer = document.querySelector('.trailer');
//     const video = document.querySelector('video');

//     trailer.classList.toggle('active');
//     console.log('Trailer active state:', trailer.classList.contains('active'));  // Debugging line
    
//     if (trailer.classList.contains('active')) {
//         video.play();
//         console.log('Video playing');  // Debugging line
//     } else {
//         video.pause();
//         video.currentTime = 0;
//         console.log('Video paused and reset');  // Debugging line
//     }
// }
// document.querySelector('.close').addEventListener('click', toggleVideo);


// function toggleVideo() {
//     const trailer = document.querySelector('.trailer');
//     const video = document.querySelector('video');
    
//     console.log('Trailer Element:', trailer);
//     console.log('Video Element:', video);
//     trailer.classList.toggle('active');
//     console.log('Trailer active state:', trailer.classList.contains('active'));
    
//     if (trailer.classList.contains('active')) {
//         video.play();
//         console.log('Video is playing');
//     } else {
//         video.pause();
//         video.currentTime = 0;
//         console.log('Video is paused and reset');
//     }
// }


// let isTrailerOpen = false;  // Track the state of the trailer

// function toggleVideo() {
//     const trailer = document.querySelector('.trailer');
//     const video = document.querySelector('video');

//     if (isTrailerOpen) {
//         trailer.classList.remove('active');  // Ensure it only removes the class
//         video.pause();
//         video.currentTime = 0;
//         isTrailerOpen = false;  // Update state
//         console.log('Video closed');
//     } else {
//         trailer.classList.add('active');  // Ensure it only adds the class
//         video.play();
//         isTrailerOpen = true;  // Update state
//         console.log('Video opened');
//     }
// }





function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');  // Ensure this selects all content elements
    
    // Update the background of the banner
    banner.style.backgroundImage = `url("/images/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // Debug: Check if the contentClass matches the correct element
    console.log(`Changing content to: ${title}`);

    let found = false;  // Flag to check if the contentClass is found

    // Loop through all content elements and manage the 'active' class
    contents.forEach(content => {
        content.classList.remove('active');
        console.log(content.classList);  // Debug: Check which classes are applied
        if (content.classList.contains(title)) {
            content.classList.add('active');
            found = true;
        }
    });

    // Debug: Check if the contentClass was found
    if (!found) {
        console.warn(`No content found with class: ${contentClass}`);
    }
}




  