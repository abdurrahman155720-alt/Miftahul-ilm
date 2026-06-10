// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.onclick = () => {
    navMenu.classList.toggle("active");
};

// Hero slider
let slides = document.querySelectorAll(".slides");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 5000);
const sectionSelect = document.getElementById("section");
const classSelect = document.getElementById("class");

const classes = {
    Islamiyya: [
        "Rauda",
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "Class 6",
        "Advanced Class"
    ],
    Tahfiz: [
        "Rauda",
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "Class 6",
        "Advanced Class"
    ],
    Nursery: [
        "Nursery 1",
        "Nursery 2"
    ],
    Primary: [
        "Primary 1",
        "Primary 2",
        "Primary 3",
        "Primary 4",
        "Primary 5"
    ],
    Secondary: [
        "JSS 1",
        "JSS 2",
        "JSS 3",
        "SS 1",
        "SS 2",
        "SS 3"
    ]
};

sectionSelect.addEventListener("change", function () {
    const selectedSection = this.value;

    // Clear previous options
    classSelect.innerHTML = '<option value="">-- Select Class --</option>';

    if (selectedSection && classes[selectedSection]) {
        classes[selectedSection].forEach(cls => {
            const option = document.createElement("option");
            option.value = cls;
            option.textContent = cls;
            classSelect.appendChild(option);
        });
    }
});
