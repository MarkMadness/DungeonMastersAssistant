const stores = [
    {
        id: 1234,
        name: "Cabbage Man's Cart",
        owner: "Cabbage Man",
        city: "Silvershire",
        country: "Eldoria",
        type: "Food",
        items: [
            { name: "Cabbage", price: 2, props: "Fresh" },
            { name: "Rotten Cabbage", price: 1, props: "Smelly" }
        ]
    },
    {
        id: 2345,
        name: "Ironforge Armory",
        owner: "Borin",
        country: "Azeroth",
        city: "Ironforge",
        type: "Blacksmith",
        items: [
            { name: "Longsword", price: 50, properties: "1d8 slashing" },
            { name: "Shield", price: 40, properties: "+2 AC" }
        ]
    },
    {
        id: 3456,
        name: "Elven Trinkets",
        owner: "Lia",
        country: "Azeroth",
        city: "Darnassus",
        type: "Magic Shop",
        items: [
            { name: "Ring of Light", price: 120, properties: "Glows in darkness" }
        ]
    }
];

const searchInput = document.getElementById("searchInput");
const resultsBody = document.querySelector("#resultsTable tbody");
const modal = document.getElementById("storeModal");

function populateFilters() {
    const countries = [...new Set(stores.map(s => s.country))];
    fillSelect("countryFilter", countries);

    const types = [...new Set(stores.map(s => s.type))];
    fillSelect("typeFilter", types);
}

function fillSelect(id, values) {
    const select = document.getElementById(id);
    values.forEach(v => {
        const opt = document.createElement("option");
        opt.value = v;
        opt.textContent = v;
        select.appendChild(opt);
    });
}

function updateCityFilter() {
    const country = document.getElementById("countryFilter").value;
    const citySelect = document.getElementById("cityFilter");

    citySelect.innerHTML = '<option value="">Select City</option>';

    if (!country) {
        citySelect.disabled = true;
        return;
    }

    citySelect.disabled = false;

    const cities = [...new Set(stores.filter(s => s.country === country).map(s => s.city))];
    fillSelect("cityFilter", cities);
}

function renderResults() {
    const term = searchInput.value.toLowerCase();
    const country = document.getElementById("countryFilter").value;
    const city = document.getElementById("cityFilter").value;
    const type = document.getElementById("typeFilter").value;

    resultsBody.innerHTML = "";

    stores
        .filter(s =>
            (!term || s.name.toLowerCase().includes(term) || s.owner.toLowerCase().includes(term)) &&
            (!country || s.country === country) &&
            (!city || s.city === city) &&
            (!type || s.type === type)
        )
        .forEach(store => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${store.name}</td>
                <td>${store.owner}</td>
                <td>${store.city}</td>
                <td>${store.type}</td>
            `;

            row.onclick = () => openModal(store);
            resultsBody.appendChild(row);
        });
}

function openModal(store) {
    document.getElementById("storeName").textContent = store.name;
    document.getElementById("storeDetails").textContent = `${store.owner} • ${store.city}, ${store.country}`;

    const itemsBody = document.querySelector("#itemsTable tbody");
    itemsBody.innerHTML = "";

    store.items.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.properties}</td>
        `;
        itemsBody.appendChild(row);
    });

    modal.classList.remove("hidden");
}

searchInput.addEventListener("input", renderResults);
document.getElementById("countryFilter").addEventListener("change", () => {
    updateCityFilter();
    renderResults();
});
document.getElementById("cityFilter").addEventListener("change", renderResults);
document.getElementById("typeFilter").addEventListener("change", renderResults);

document.getElementById("closeModal").onclick = () => modal.classList.add("hidden");

document.getElementById("clearBtn").addEventListener("click", () => {
    searchInput.value = "";
    document.getElementById("countryFilter").value = "";
    document.getElementById("cityFilter").innerHTML = '<option value="">Select City</option>';
    document.getElementById("cityFilter").disabled = true;
    document.getElementById("typeFilter").value = "";
    renderResults();
});

populateFilters();
renderResults();
