$(document).ready(() => {
    $.getJSON("./pets.json")
        .done(data => {
            const { pets } = data;

            let petHtml = ``;
            console.log("data loaded");
            console.log(pets);

            pets.forEach((pet, idx) => {
                petHtml += `
                    <div class="pet-card">
                        <h3>${idx + 1}. ${pet.name}</h3>
                        <p> Weight: ${pet.weight}kgs </p>
                        <p> Height:  ${pet.height}cms </p>
                        <p>Likings<br>${pet.like}</p>
                    </div>
                `;
            });
            $(".pet-gallery").first().append(petHtml);
        })
        .fail(() => console.log("Some error occured"))
        .always(() => console.log("Request Done"));
});
