document.addEventListener('DOMContentLoaded', function() {
    // Add Client Modal
    const addClientBtn = document.getElementById('add-client-btn');
    const clientModal = document.getElementById('client-modal');
    const closeClientModalBtns = clientModal.querySelectorAll('.modal-close, .modal-btn.cancel');
    
    addClientBtn.addEventListener('click', function() {
        clientModal.style.display = 'flex';
    });
    
    closeClientModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            clientModal.style.display = 'none';
        });
    });
    
    // Book Class Modal
    const bookBtns = document.querySelectorAll('.book-btn');
    const bookClassModal = document.getElementById('book-class-modal');
    const closeBookModalBtns = bookClassModal.querySelectorAll('.modal-close, .modal-btn.cancel');
    
    bookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, we would populate the modal with the client's info
            bookClassModal.style.display = 'flex';
        });
    });
    
    closeBookModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            bookClassModal.style.display = 'none';
        });
    });
    
    // View Client Modal
    const viewBtns = document.querySelectorAll('.view-btn');
    const viewClientModal = document.getElementById('view-client-modal');
    const closeViewModalBtns = viewClientModal.querySelectorAll('.modal-close, .modal-btn.close');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, we would fetch client details and populate the modal
            const clientCard = this.closest('.client-card');
            const clientName = clientCard.querySelector('.client-name').textContent;
            const clientEmail = clientCard.querySelector('.client-email').textContent;
            
            // Update modal with client info
            document.getElementById('view-client-name').textContent = clientName;
            document.getElementById('view-client-email').textContent = clientEmail;
            
            viewClientModal.style.display = 'flex';
        });
    });
    
    closeViewModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewClientModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === clientModal) {
            clientModal.style.display = 'none';
        }
        if (event.target === bookClassModal) {
            bookClassModal.style.display = 'none';
        }
        if (event.target === viewClientModal) {
            viewClientModal.style.display = 'none';
        }
    });
    
    // Client Search Functionality
    const searchInput = document.getElementById('client-search');
    const clientCards = document.querySelectorAll('.client-card');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        clientCards.forEach(card => {
            const clientName = card.querySelector('.client-name').textContent.toLowerCase();
            const clientEmail = card.querySelector('.client-email').textContent.toLowerCase();
            const clientPhone = card.querySelector('.client-phone')?.textContent.toLowerCase() || '';
            
            if (clientName.includes(searchTerm) || 
                clientEmail.includes(searchTerm) || 
                clientPhone.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Client Filter Functionality
    const statusFilter = document.getElementById('status-filter');
    const membershipFilter = document.getElementById('membership-filter');
    const filterBtn = document.querySelector('.filter-btn');
    
    filterBtn.addEventListener('click', function() {
        const statusValue = statusFilter.value;
        const membershipValue = membershipFilter.value;
        
        clientCards.forEach(card => {
            const clientStatus = card.getAttribute('data-status');
            const clientMembership = card.getAttribute('data-membership');
            
            let statusMatch = statusValue === 'all' || clientStatus === statusValue;
            let membershipMatch = membershipValue === 'all' || clientMembership === membershipValue;
            
            if (statusMatch && membershipMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Client Form Validation
    const addClientForm = document.getElementById('add-client-form');
    
    addClientForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('client-name');
        const emailInput = document.getElementById('client-email');
        const phoneInput = document.getElementById('client-phone');
        
        let isValid = true;
        
        // Simple validation
        if (!nameInput.value.trim()) {
            markInvalid(nameInput, 'Name is required');
            isValid = false;
        } else {
            markValid(nameInput);
        }
        
        if (!emailInput.value.trim()) {
            markInvalid(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            markInvalid(emailInput, 'Please enter a valid email');
            isValid = false;
        } else {
            markValid(emailInput);
        }
        
        if (phoneInput.value.trim() && !isValidPhone(phoneInput.value)) {
            markInvalid(phoneInput, 'Please enter a valid phone number');
            isValid = false;
        } else {
            markValid(phoneInput);
        }
        
        if (isValid) {
            // In a real app, we would save the client data
            alert('Client added successfully!');
            clientModal.style.display = 'none';
            addClientForm.reset();
        }
    });
    
    function markInvalid(input, message) {
        input.classList.add('invalid');
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        } else {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = message;
            input.parentNode.insertBefore(error, input.nextSibling);
        }
    }
    
    function markValid(input) {
        input.classList.remove('invalid');
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.style.display = 'none';
        }
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function isValidPhone(phone) {
        const re = /^[\d\s\+\-\(\)]{10,15}$/;
        return re.test(phone);
    }
    
    // Tab switching for client details
    const clientTabs = document.querySelectorAll('.client-tab');
    const clientTabContents = document.querySelectorAll('.client-tab-content');
    
    clientTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            clientTabs.forEach(t => t.classList.remove('active'));
            clientTabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current tab and content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Membership upgrade/downgrade functionality
    const membershipBtns = document.querySelectorAll('.membership-btn');
    
    membershipBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const clientId = this.closest('.client-details').getAttribute('data-client-id');
            
            // In a real app, we would update the membership
            alert(`Client ${clientId} membership ${action}d successfully!`);
        });
    });
});