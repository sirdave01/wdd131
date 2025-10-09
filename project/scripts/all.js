//creating the donation as a Global variable

let donations = []; //global array for donation history

//creating a helper function (load and save) for donation (get and set) with arrays, objects and localStorage

function loadDonations() {

    const stored = localStorage.getItem(`donations`);

    if (stored) {

        try {

            donations = JSON.parse(stored); //conditional + objects/arrays

        } catch (e) {

            console.error(`Error loading donations:`, e);

            donations = [];
        }
    }
}

function saveDonations() {
    localStorage.setItem(`donations`, JSON.stringify(donations));
}


// dynamically creating the header nav elements to be unique across all pages as a Global variable

//mark the active nav element/tag
const currentPage = window.location.pathname.split(`/`).pop() || `index.html`;
const pageName = currentPage.replace(`.html`, ``);

//finding the nav elements that is active with if statements

let activeLink;

if (pageName === `index`) {

    activeLink = document.querySelector(`nav a[href="index.html"]`);

} else {

    activeLink = document.querySelector(`nav a[href="${currentPage}"]`);

}

// adding active class if the page exists
if (activeLink) {
    activeLink.classList.add(`active`);
} else {
    console.warn(`No nav link found for ${currentPage}`)
}

// hamburgerMenu design

const hamburger = document.querySelector(`.menu`);
const navigate = document.querySelector(`.navigation`);

hamburger.addEventListener(`click`, () => {
    navigate.classList.toggle(`open`);
    hamburger.classList.toggle(`open`);
});



// writing a script code to dynamically populate the footer area of all the webpages

document.addEventListener(`DOMContentLoaded`, function () {

    //for the current year
    const theYearElement = document.querySelector(`#year`);

    if (theYearElement) {
        theYearElement.textContent = new Date().getFullYear();
    }


    // for the last modified

    const timeModifiedElement = document.querySelector(`#modified`);
    if (timeModifiedElement) {
        timeModifiedElement.textContent = `Last Modified: ${new Date().toLocaleString()}`
    }

});

// populating the donation page with script to dynamically work on the form and donation page

if (window.location.pathname.endsWith(`donation.html`)) {
    window.addEventListener(`load`, function () {
        const form = document.querySelector(`#donation-form`);

        if (!form) {

            console.warn(`Donation form not found!`); //debug log
            return;
        }

        console.log(`Donation form loaded`) // debug log-remove later

        form.addEventListener(`submit`, function (event) {
            event.preventDefault();

            //validation (conditional branching and checking radio selection)

            const fullName = document.querySelector(`#fullName`).value.trim();
            const amount = parseFloat(document.querySelector(`#amount`).value);
            const selectedCardType = document.querySelector(`input[name="card-type"]:checked`);
            const cardType = selectedCardType ? selectedCardType.value : ``;
            const cardNumber = document.querySelector(`#card-number`).value.replace(/\s/g, ``);
            const expiry = document.querySelector(`#expiry`).value;
            const cvv = document.querySelector(`#cvv`).value;

            // check if the informations are entered correctly using an if statement condition

            if (!fullName || amount <= 0 || !cardType || cardNumber.length !== 16 || !expiry || cvv.length !== 3) {
                alert(`Please fill all fields correctly (select one card type, e.g., Visa).`);
                return;
            }

            // popup confirmation including the card type saved in confirmMsg variable

            const confirmMsg = `Confirm $${amount} donation with ${cardType.toUpperCase()} card, ${fullName}? (Demo)`;

            // checking if the user confirms the donation with an if statement conditions

            if (confirm(confirmMsg)) {
                // Save donation (objects, arrays, localStorage - add cardType)
                loadDonations();
                donations.push({
                    fullName,
                    amount,
                    cardType,
                    cardNumber: cardNumber.substring(0, 4) + `**** **** ****` + cardNumber.slice(-4),
                    date: new Date().toISOString()
                });

                saveDonations();

                window.location.href = `thanks.html`; //redirect to thanks page
            }

        });
    });
}

//dynamically designing the thanks.html page to show gratitude, donation history, count and card type/name

if (window.location.pathname.endsWith(`thanks.html`)) {

    window.addEventListener(`load`, function () {
        loadDonations(); //loads from the global variable

        //creating the container and dynamically populating the container on the HTML with script

        const container = document.querySelector(`#gratitude`);

        // check if there's a container

        if (!container) {
            console.warn('Gratitude container not found!');  // Debug log
            return;
        }

        console.log('Thanks page loaded, donations count:', donations.length);  // Debug: Check total saved

        // checking donations with if conditional statements

        if (donations.length === 0) {
            //create a p tag to hold the gratitude
            container.innerHTML = `<p>No donation history yet. Thank you for your first gift!</p>`
        } else {
            // Filter by fullName (array method; adjust 'Demo User' to match form input if needed)
            const userDonations = donations;
            const count = userDonations.length;

            //create a h2 tag that thanks and shows how many times the user donated

            let historyHtml = `<h2> Thank You! You've donated ${count} time(s). </h2>`;

            //use the coditional statement and create an unordered list for the number of times the user(s) donated

            if (count > 0) {
                historyHtml += `<ul>`;

                //use a foreach loop to iterate how many times the user donated

                userDonations.forEach(donation => {

                    const html = `
                    <li>$${donation.amount} with ${donation.cardType.toUpperCase()} on ${new Date(donation.date).toLocaleString()}</li>`;

                    historyHtml += html; //template literals, array methods (forEach, filter)
                });

                historyHtml += `</ul>`;
            }

            container.innerHTML = historyHtml;
        }
    });
}

// dynamically creating the contact.html, media.html and gallery.html pages with script will be next

// // Gallery page: Pictures only with Add/Search + WebP Conversion/Lazy Loading (dynamic + pre-populate)

if (window.location.pathname.endsWith(`gallery.html`)) {
    window.addEventListener(`load`, function () {
        // prepolutating the gallery with existing images
        const prePopulateImages = [
            { src: `images/dp.webp`, alt: `Display Picture`, caption: `My Display Picture` },
            { src: `images/hero.webp`, alt: `Hero Image`, caption: `Hero Image` },
            { src: `images/mine.webp`, alt: `Mine Image`, caption: `Mine Image` },
            { src: `images/worshippers.webp`, alt: `Worshippers Image`, caption: `Worshippers Image` },
        ];

        // start with the pre populated images

        let images = [...prePopulateImages];

        // loading from local Storage and merging with pre populated images

        const storedImages = localStorage.getItem(`galleryImages`);
        if (storedImages) {
            try {
                const stored = JSON.parse(storedImages);
                // merge prepoluated images with the stored images array
                images = [...images, ...stored];
            } catch (e) {
                console.error(`Error loading images:`, e);
            }
        }

        // create image save function to save only user adds and no duplicated
        function saveImages() {
            localStorage.setItem(`galleryImages`, JSON.stringify(images.filter(img => !prePopulateImages.some(pre => pre.src === img.src))));
        }

        // Function to convert image to WebP (async, using Canvas) with src, alt and caption parameters

        async function convertToWebP(src, alt, caption) {
            return new Promise((resolve) => {
                const img = new Image();
                img.crossOrigin = `Anonymous`; // Handle CORS if needed and external URLS
                img.onload = function () {
                    const canvas = document.createElement(`canvas`);
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext(`2d`);
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob((blob) => {
                        const webpUrl = URL.createObjectURL(blob); //blob URL for WebP image
                        resolve({ src, alt, caption, webpSrc: webpUrl }); //return as a webP image
                    }, `image/webp`, 0.7); //70% quality

                };
                img.onerror = () => resolve({ src, alt, caption, webpSrc: null }); //on error, return original
                img.src = src;
            });
        }

        // Populate gallery (arrays, template literals, DOM, lazy loading + WebP fallback on pre-pop too)
        // creating populate gallery function with filtered images = images as parameter

        async function populateGallery(filteredImages = images) {
            const galleryContainer = document.querySelector(`#gallery-container`);
            if (!galleryContainer) {
                console.warn(`Gallery container not found!`);
                return;
            }

            galleryContainer.innerHTML = ``; //clear existing content

            // checking if there are no images/filtered images with an if statement condition

            if (filteredImages.length === 0) {
                galleryContainer.innerHTML = `<p>No images found.</p>`;
                return;

            } else {
                //use a foreach loop to iterate through the filtered images
                for (const image of filteredImages) { // Use for...of for async
                    // Convert if no webpSrc yet (applies to pre-pop on first load)
                    if (!image.webpSrc) {
                        const converted = await convertToWebP(image.src, image.alt, image.caption);
                        const index = images.findIndex(img => img.src === image.src);
                        if (index > -1) images[index] = converted; //update the image with webpSrc

                        saveImages(); //save the updated images array
                    }

                    const imgSrc = image.webpSrc || image.src; //use webpSrc if available

                    //adding a delete button for user added images only (not prepopulated ones)
                    const deleteBtn = !prePopulateImages.some(pre => pre.src === image.src) ? `<button class="delete-btn" data-src="${image.src}">X</button>` : ``;
                    //template literals for each image
                    const html = `
                    <figure>
                    <img src="${imgSrc}" alt="${image.alt}"loading="lazy">
                    ${deleteBtn}
                    <figcaption>${image.caption}</figcaption>
                    </figure>
                    `;

                    galleryContainer.innerHTML += html; //append each image - lazyloading on all images (preloaded and user added)
                }

            }
        }

        // Add image function (events, conditional, async conversion)

        async function addImage() {
            // creating a prompt to get the image details from the user while he/she adds from file input

            const fileInput = document.querySelector(`#file-input`);
            const addBtn = document.querySelector(`#add-gallery-btn`);

            //trigger the hidden file input click

            fileInput.click();

            fileInput.onchange = async function () {
                const files = Array.from(fileInput.files); //get selected files as an array
                // check if any files selected
                if (files.length === 0) {
                    alert(`No files selected.`);
                    return;
                }
                // check if files are selected loop through each file
                for (const file of files) {
                    if (!file.type.startsWith(`image/`)) {
                        alert(`File ${file.name} is not an image and will be skipped.`);
                        continue; //skip non-image files
                    }

                    //reading files as data URL
                    const reader = new FileReader();
                    reader.onload = async function (e) {

                        const dataUrl = e.target.result; //data URL from file

                        const alt = prompt(`Enter alt text for ${file.name}:`).trim();

                        const caption = prompt(`Enter caption for ${file.name}:`).trim();

                        // check if the inputs are valid with an if statement condition

                        if (alt && caption) {
                            const newImage = await convertToWebP(dataUrl, alt, caption);
                            images.push(newImage); //appends to prepopulated
                            saveImages();
                            populateGallery(); //refresh gallery

                        } else {
                            alert(`skipped ${file.name} due to missing alt or caption.`);
                        }
                    };
                    reader.onerror = () => {
                        alert(`Error reading file ${file.name}.`);
                    };
                    reader.readAsDataURL(file); //read the file
                }

                fileInput.value = ``; //reset file input
            };
        }

        // Filter function (array methods) with searchTerm parameter

        function filterImages(searchTerm) {
            const filtered = images.filter(img =>
                img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                img.caption.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return filtered; //return the filtered array

        }

        //adding a delete button for user added images incase they want to remove any image (event delegation)
        const galleryContainer = document.querySelector(`#gallery-container`);
        if (galleryContainer) {
            galleryContainer.addEventListener(`click`, function (event) {
                if (event.target.classList.contains(`delete-btn`)) {
                    const imgSrc = event.target.dataset.src;
                    const index = images.findIndex(img => img.src === imgSrc);

                    // check if image is not prepopulated image with an if statement condition and ask for
                    // confimation before deleting user added images
                    if (index > -1 && !prePopulateImages.some(pre => pre.src === imgSrc)) {
                        if (confirm(`Are you sure you want to delete this image?`)) {
                            images.splice(index, 1); //remove from array
                            saveImages();
                            populateGallery(); //refresh gallery
                        }

                    } else if (index === -1) {
                        alert(`Image not found for deletion: ${imgSrc}.`);
                    }
                }
            });

        }

        populateGallery(); //initial population

        // Event listeners for Add and Search buttons
        const addBtn = document.querySelector(`#add-gallery-btn`);
        if (addBtn)
            addBtn.addEventListener(`click`, addImage);

        const searchBtn = document.querySelector(`#search-btn`);
        const searchInput = document.querySelector(`#search-input`);
        if (searchBtn && searchInput) {
            searchBtn.addEventListener(`click`, () => {
                const filtered = filterImages(searchInput.value);
                populateGallery(filtered);
            });
        }


    });
}

//media.html script is next
//calling the if statement to check if the current page is media.html

if (window.location.pathname.endsWith(`media.html`)) {

    // add an event listener to load the media page

    window.addEventListener(`load`, function () {

        //the media.html page will run as a mini social media app that will have a prepoulated media and allow users to add their own media posts

        const prePopulatedMedia = [
            {
                type: `audio`,
                src: `media/OdumoduBlvck-Ft-Tobe-Nwigwe-JeriQ-and-Phyno-Hallelujah-(TrendyBeatz.com).mp3`,
                title: `Hallelujah`,
                description: `by Odumodu Blvck ft. Tobe Nwigwe, JeriQ and Phyno`
            },
            {
                type: `audio`,
                src: `media/Adazion_Ij_-_Zam.mp3`,
                title: `Zam`,
                description: `by Adazion Ij`
            },
            {
                type: `video`,
                src: `media/ironBreaker.mp4`,
                title: `Iron Breaker`,
                description: `BrainJotter Skit`
            }
        ];

        let mediaPosts = [...prePopulatedMedia]; //merging prepopulated media with user added media posts

        //loading from localStorage and merging with prepopulated media posts
        const storedMedia = localStorage.getItem(`mediaPosts`);
        if (storedMedia) {
            try {
                const stored = JSON.parse(storedMedia);
                mediaPosts = [...mediaPosts, ...stored];
            } catch (e) {
                console.error(`Error loading media posts:`, e);
            }
        }
        //create a function to save media posts to localStorage
        function saveMediaPosts() {
            localStorage.setItem(`mediaPosts`, JSON.stringify(mediaPosts.filter(post => !prePopulatedMedia.some(pre => pre.src === post.src))));
        }
        //function to populate media posts (arrays, template literals, DOM)
        function populateMedia(posts = mediaPosts) {
            const mediaContainer = document.querySelector(`#media-container`);
            if (!mediaContainer) {
                console.warn(`Media container not found!`);
                return;
            }
            mediaContainer.innerHTML = ``; //clear existing content

            //checking if there are no media posts with an if statement condition
            if (posts.length === 0) {
                mediaContainer.innerHTML = `<p>No media posts found.</p>`;
                return;
            } else {
                //use a foreach loop to iterate through the media posts
                posts.forEach(post => {
                    let mediaHtml = ``;
                    if (post.type === `audio`) {
                        mediaHtml = `<audio controls src="${post.src}">Your browser does not support the audio element.</audio>`;
                    } else if (post.type === `video`) {
                        mediaHtml = `<video controls src="${post.src}">Your browser does not support the video element.</video>`;
                    }
                    //adding a delete button for user added media posts only (not prepopulated ones)
                    const deleteBtn = !prePopulatedMedia.some(pre => pre.src === post.src) ? `<button class="delete-btn" data-src="${post.src}">X</button>` : ``;
                    //template literals for each media post
                    const html = `
                    <div class="media-post">
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    ${mediaHtml}
                    ${deleteBtn}
                    </div>
                    `;
                    mediaContainer.innerHTML += html; //append each media post
                });
            }
        }

        //function to add media post by users from files (events, conditional)
        function addMediaPost() {
            //create file input first that accepts video/audio files
            const fileInput = document.createElement(`input`);
            fileInput.type = `file`;
            fileInput.accept = `audio/*,video/*`;
            fileInput.onchange = function (e) {
                const file = e.target.files[0];
                if (!file) {
                    alert(`No file selected.Media Post not added.`);
                    return;
                }
                //auto detect type from file NIME
                let detectedType = ``;
                if (file.type.startsWith(`audio/`)) {
                    detectedType = `audio`;
                } else if (file.type.startsWith(`video/`)) {
                    detectedType = `video`;
                } else {
                    alert(`Unsupported file type: ${file.type}. Please select an audio or video file.`);
                    return;
                }

                //auto generate title from file name (strip extension)
                const fileName = file.name.replace(/\.[^/.]+$/, ``);//remove extension

                const title = prompt(`Enter Media title (default: ${fileName}):`, fileName).trim();

                if (!title) {
                    alert(`Title is required. Media Post not added.`);
                    return;
                }

                //create a prompt to get the description from the user
                const description = prompt(`Enter Media description(optional):`, ``).trim();

                //read the file as a data URL
                const reader = new FileReader();
                reader.onload = function (loadEvent) {
                    const src = loadEvent.target.result; //data URL from file

                    //create a new media post object and add to the mediaPosts array
                    mediaPosts.push({ type: detectedType, src, title, description });
                    saveMediaPosts();
                    populateMedia(); //refresh media posts
                };
                reader.onerror = () => {
                    alert(`Error reading file ${file.name}. Media Post not added.`);
                };
                reader.readAsDataURL(file); //read the file
            };
            fileInput.click(); //trigger the file input click
        }

        //function to filter media posts (array methods) with searchTerm parameter
        function filterMedia(searchTerm) {
            const filtered = mediaPosts.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            return filtered; //return the filtered array
        }
        //adding a delete button for user added media posts incase they want to remove any post (event delegation)
        const mediaContainer = document.querySelector(`#media-container`);
        if (mediaContainer) {
            mediaContainer.addEventListener(`click`, function (event) {
                if (event.target.classList.contains(`delete-btn`)) {
                    const src = event.target.dataset.src;
                    const index = mediaPosts.findIndex(post => post.src === src);
                    //check if media post is not prepopulated with an if statement condition and ask for confirmation before deleting user added media posts
                    if (index > -1 && !prePopulatedMedia.some(pre => pre.src === src)) {
                        if (confirm(`Are you sure you want to delete this media post?`)) {
                            mediaPosts.splice(index, 1); //remove from array
                            saveMediaPosts();
                            populateMedia(); //refresh media posts
                        }
                    } else if (index === -1) {
                        alert(`Media post not found for deletion: ${src}.`);
                    }
                }
            });
        }
        populateMedia(); //initial population

        //event listeners for Add and Search buttons
        const addBtn = document.querySelector(`#add-media-btn`);
        if (addBtn)
            addBtn.addEventListener(`click`, addMediaPost);
        const searchBtn = document.querySelector(`#search-media-btn`);
        const searchInput = document.querySelector(`#search-media-input`);
        if (searchBtn && searchInput) {
            searchBtn.addEventListener(`click`, () => {
                const filtered = filterMedia(searchInput.value);
                populateMedia(filtered);
            });
        }
    });
}
