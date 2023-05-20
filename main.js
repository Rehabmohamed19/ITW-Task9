
let productDetails;
let total;
let count = 0;

$.getJSON("https://raw.githubusercontent.com/Rehabmohamed19/ITW-Task9/master/data.json", function (result) {
    productDetails = result[0];

})

$(".sub-total").text(0);


const modal = document.createElement("section");
modal.className = "modal hidden";
modal.innerHTML = `
<div class="container-fluid flex">
        <a href="./index.html" class="x-btn">
            <p class="mt-4 ms-2 close"> X</p>
        </a>
        <div class="row mx-auto mt-4 ms-3">
                <div class="col-4">WOMEN</div>
                <div class="col-4">MAN</div>
                <div class="col-4">KIDS</div>
        </div>
            <hr>


            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            New
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            Apparel
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <h5 class="options">Outer</h5>
                            <h5 class="options">Dress</h5>
                            <h5 class="options">Blouse</h5>
                            <h5 class="options">T-shirt</h5>
                            <h5 class="options">Knitwear</h5>
                            <h5 class="options">Skirt</h5>
                            <h5 class="options">Pants</h5>
                            <h5 class="options">Denim</h5>
                            <h5 class="options">Kids</h5>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Bag
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Shoe
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is
                            intended to
                            demonstrate the <code>.accordion-flush</code> class. This is the first item's
                            accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive" aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            Beauty
                        </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSix" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Accessories
                        </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="d-flex">
                <i class="fa-solid fa-phone-flip me-3" style="color: #050505;"></i>
                <div>(786) 713-8616</div>
            </div>
            </div>
            <div class="row mt-4">
                <div class="d-flex">
                <i class="fa-solid fa-location-dot me-3" style="color: #0d0d0d;"></i>
                <div>Store locator</div>
            </div>
            </div>

            <div class="row mt-5">
               <div class="d-flex justify-content-center">
                <i class="fa-brands fa-twitter px-3" style="color: #555555;"></i>
                <i class="fa-brands fa-instagram px-3" style="color: #555555;"></i>
                <i class="fa-brands fa-youtube px-3" style="color: #555555;"></i>
               </div>
            </div>
    </div>
`;

document.body.append(modal);

const overlay = document.createElement("div");
overlay.className = "overlay hidden";
document.body.append(overlay);

const closebtn = document.querySelector(".modal .close");

const openModal = function (e) {

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden"

};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.style.overflow = "scroll"

};
const cardbtn = document.querySelector(".cardbtn");

closebtn.addEventListener("click", closeModal);
cardbtn.addEventListener("click", openModal);



$(function () {

    addToBasket = function () {

        $(".counter").text(count);
        count++;
        // console.log(count)
        $(".counter").text(count);


        if (count >= 0) {
            // console.log(count)
            $(".shown-items").css("display", "none")
            $(".hidden-items").css("display", "block")
        }
        else {
            // console.log(count)
            $(".hidden-items").css("display", "none")
            $(".shown-items").css("display", "block")
        }

        let selectedItem = Object.assign({}, productDetails);
        delete selectedItem.colors;
        delete selectedItem.sizes;
        selectedItem.selectedColor = $(".color-selector.selected").data("title");
        selectedItem.selectedSize = $(".size-selector.selected").data("title");
        selectedItem.count = count;
        // console.log(selectedItem);

        localStorage.setItem("selectedItem", JSON.stringify(selectedItem));
        

        console.log(total);
    };

    removeFromBasket = function () {
        count--;
        $(".counter").text(count);
    };


    colorSelector = function (elm) {
        $(".color-selector").removeClass("selected");
        $(elm).addClass("selected");

    };

    sizeSelector = function (elm) {
        $(".size-selector").removeClass("selected");
        $(elm).addClass("selected");

    };
})