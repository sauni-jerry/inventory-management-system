document.getElementById('logout').addEventListener('click', function() {
    alert('Logged out!');
});

document.getElementById('home').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Daily Sales</h2>
        <canvas id="salesChart" width="400" height="200"></canvas>
    `;
    displaySalesChart();
});

document.getElementById('addUser').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Add User</h2>
        <form id="addUserForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Add User</button>
        </form>
    `;

    document.getElementById('addUserForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        alert(`User added: ${username}, ${email}`);
        // Here you would typically send the data to the server
    });
});



document.getElementById('deleteUser').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h2>Delete User</h2><p>Form to delete user...</p>';
});

document.getElementById('addProduct').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h2>Add Product</h2><p>Form to add product...</p>';
});

document.getElementById('deleteProduct').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h2>Delete Product</h2><p>Form to delete product...</p>';
});

document.getElementById('editProduct').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h2>Edit Product</h2><p>Form to edit product...</p>';
});

document.getElementById('viewSales').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h2>Sales Report</h2><p>Sales report details...</p>';
});

function displaySalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Daily Sales',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'line',
        data: salesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
