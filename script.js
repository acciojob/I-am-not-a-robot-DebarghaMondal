//your code here
document.addEventListener("DOMContentLoaded", ()=>{
const imageContainer = document.getElementById("image-container");
	const resetButton = document.getElementById("reset");
	const verifyButton = document.getElementById("verify");
	const para = document.getElementById("para");

	let selectedImages = [];
	let clickedCount = 0;

	function getRandomInt(min, max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function shuffleArray(array){
		for(let i = array.length - 1; i > 0; i--){
			const j = getRanomInt(0, 1);
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
function createImages() {
	const imageClasses = ["img1", "img2", "img3", "img4", "img5"];

	imageClasses.push(imageClasses[getRandomInt(0, 4)]);

	shuffleArray(imageClasses);

	imageClasses.forEach((imgClass) =>{
		const img = document.createElement("img");
		img.className = imgClass;
		img.src = `https://source-url-for-images.com/${imgClass}.jpg`;

		img.addEventListner("click", () =>{
			if (selectedImages.length < 2 && !selectedImages.includes(imgClass)) {
				selectedImages.push(imgClass);
				img.classList.add("selected");
				clickedcount++;
			}
			if (clickedcount === 2) {
				verifyButton.style.display = "block"
			}
		});
		imageContainer.appendChild(img);
	});
}

	function resetGame() {
        selectedImages = [];
        clickedCount = 0;

        // Hide the buttons and remove the "selected" class from images
        verifyButton.style.display = "none";
        resetButton.style.display = "none";
        const selectedImagesElements = document.querySelectorAll(".selected");
        selectedImagesElements.forEach((img) => img.classList.remove("selected"));
        para.textContent = "";
    }

    // Function to check if the selected images are identical
    function areImagesIdentical() {
        return selectedImages[0] === selectedImages[1];
    }

    // Event listener for the reset button
    resetButton.addEventListener("click", resetGame);

    // Event listener for the verify button
    verifyButton.addEventListener("click", () => {
        if (areImagesIdentical()) {
            para.textContent = "You are a human. Congratulations!";
        } else {
            para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
        }

        verifyButton.style.display = "none";
        resetButton.style.display = "block";
    });

    // Initial setup: Create and render images
    createImages();
});
	








	
	
})