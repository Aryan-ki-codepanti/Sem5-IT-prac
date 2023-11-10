const petForm = document.querySelector(".pet-form");
const petName = document.querySelector("#pet-name");
const petHeight = document.querySelector("#pet-height");
const petWeight = document.querySelector("#pet-weight");
const petBreed = document.querySelector("#pet-breed");
const petLike = document.querySelector("#pet-like");

const errorBox = document.querySelector(".error-box");

const onSubmitHandler = e => {
    e.preventDefault();

    let pname = petName.value;
    let pht = petHeight.value;
    let pwt = petWeight.value;
    let pbreed = petBreed.value;
    let plike = petLike.value;

    if (!pname || !pht || !pwt || !pbreed || !plike) {
        errorBox.innerText = "Fill the form properly, you pet lover";
        return;
    }
    errorBox.innerText = "See console";

    const petObj = {
        name: pname,
        height: pht,
        weight: pwt,
        breed: pbreed,
        like: plike
    };
    const petJson = JSON.stringify(petObj);
    console.log(`PetJson : ${petJson}`);
    console.log(`PetObject: ${petObj}`);
};

petForm.addEventListener("submit", onSubmitHandler);
