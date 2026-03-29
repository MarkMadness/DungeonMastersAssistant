function switchTab(tab) {
    document.getElementById("dialogue-tab").classList.remove("active");
    document.getElementById("stores-tab").classList.remove("active");

    document.getElementById(tab + "-tab").classList.add("active");
}

function openStoreById(storeID) {
    const store = stores.find(s => s.id === storeID);
    if (!store) return;

    switchTab("stores"); // switch tab automatically

    document.getElementById("store-name").innerText = store.name;

    let table = document.getElementById("store-items");
    table.innerHTML = `
        <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Properties</th>
        </tr>
    `;

    store.items.forEach(item => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}g</td>
                <td>${item.props}</td>
            </tr>
        `;
    });

    document.getElementById("store-modal").classList.remove("hidden");
}

function renderDialogue(options) {
    let container = document.getElementById("dialogue-tab");
    container.innerHTML = "";

    options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt.text;

        btn.onclick = () => {
            if (opt.storeID) {
                openStoreById(opt.storeID); // 🔥 THIS IS THE MAGIC
            }
        };

        container.appendChild(btn);
    });
}

function closeStoreModal() {
    document.getElementById("store-modal").classList.add("hidden");
}