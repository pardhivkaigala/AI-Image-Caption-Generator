const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const generateBtn = document.getElementById("generateBtn");
const captionText = document.getElementById("captionText");
const loading = document.getElementById("loading");

imageInput.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){
            preview.src = e.target.result;
            preview.style.display = "block";
        }

        reader.readAsDataURL(file);
    }
});

generateBtn.addEventListener("click", () => {

    if(preview.src === ""){
        alert("Please upload an image first.");
        return;
    }

    loading.style.display = "block";

    setTimeout(() => {

        loading.style.display = "none";

        const captions = [
            "A dog running happily in a green field.",
            "A beautiful sunset over the mountains.",
            "A group of people enjoying a picnic.",
            "A cute cat sitting near a window.",
            "A scenic landscape with trees and a lake.",
            "A person walking through a busy street.",
            "A colorful bird perched on a branch."
        ];

        const randomCaption =
            captions[Math.floor(Math.random() * captions.length)];

        captionText.innerText = randomCaption;

    }, 2000);

});
