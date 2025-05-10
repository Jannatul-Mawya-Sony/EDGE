const data = [  
    {"id": 1, "name": "Alice Johnson", "email": "alice@example.com"},
    {"id": 2, "name": "Bob Smith", "email": "bob@example.com"},
    {"id": 3, "name": "Charlie Brown", "email": "charlie@example.com"},
    {"id": 4, "name": "David Wilson", "email": "david@example.com"},
    {"id": 5, "name": "Emma Davis", "email": "emma@example.com"},
    {"id": 6, "name": "Frank Thomas", "email": "frank@example.com"},
    {"id": 7, "name": "Grace Miller", "email": "grace@example.com"},
    {"id": 8, "name": "Henry White", "email": "henry@example.com"},
    {"id": 9, "name": "Isabella Moore", "email": "isabella@example.com"},
    {"id": 10, "name": "Jack Taylor", "email": "jack@example.com"}
];

const examtable = () => {
    const container = document.getElementById("table-container");
    const table = document.createElement("table");
    table.innerHTML = `
        <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr></thead>
        <tbody>
            ${data.map(item => `
                <tr data-id="${item.id}">
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td><button class="delete-btn">Delete</button></td>
                </tr>
            `).join('')}
        </tbody>
    `;
    container.innerHTML = "";
    container.appendChild(table);
};

window.onload = examtable;

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const row = e.target.closest("tr");
        const id = parseInt(row.dataset.id);
        data.splice(data.findIndex(item => item.id === id), 1);
        examtable();
    }
});