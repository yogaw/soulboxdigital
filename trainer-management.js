document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const addTrainerBtn = document.getElementById('addTrainerBtn');
    const trainerDetailModal = document.getElementById('trainerDetailModal');
    const trainerFormModal = document.getElementById('trainerFormModal');
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn, .modal-close-action-btn');
    const viewTrainerBtns = document.querySelectorAll('.view-btn');
    const editTrainerBtns = document.querySelectorAll('.edit-btn');
    const scheduleTrainerBtns = document.querySelectorAll('.schedule-btn');
    const profileTabs = document.querySelectorAll('.profile-tab');
    const saveTrainerBtn = document.getElementById('saveTrainerBtn');
    const addCertificationBtn = document.getElementById('addCertificationBtn');
    const certificationsContainer = document.getElementById('certificationsContainer');
    const specialtyFilter = document.getElementById('specialtyFilter');
    const statusFilter = document.getElementById('statusFilter');
    const filterBtn = document.querySelector('.filter-btn');
    
    // Add New Trainer
    addTrainerBtn.addEventListener('click', function() {
        document.getElementById('trainerFormTitle').textContent = 'Add New Trainer';
        document.getElementById('trainerForm').reset();
        openModal(trainerFormModal);
    });
    
    // View Trainer Details
    viewTrainerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const trainerId = this.getAttribute('data-trainer');
            // In a real application, you would fetch trainer details from the server
            // For demo purposes, we'll just open the modal with sample data
            openModal(trainerDetailModal);
        });
    });
    
    // Edit Trainer
    editTrainerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const trainerId = this.getAttribute('data-trainer');
            // In a real application, you would fetch trainer details from the server
            // and populate the form
            document.getElementById('trainerFormTitle').textContent = 'Edit Trainer';
            openModal(trainerFormModal);
        });
    });
    
    // Schedule Trainer
    scheduleTrainerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const trainerId = this.getAttribute('data-trainer');
            // In a real application, you would navigate to the scheduling page
            // or open a scheduling modal
            alert('This would open the scheduling interface for this trainer.');
        });
    });
    
    // Close Modals
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Profile Tabs
    profileTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            profileTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab content
            document.querySelectorAll('.profile-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected tab content
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });
    
    // Save Trainer
    saveTrainerBtn.addEventListener('click', function() {
        // In a real application, you would validate the form and submit it to the server
        // For demo purposes, we'll just close the modal and show a success message
        alert('Trainer saved successfully!');
        closeModal(trainerFormModal);
    });
    
    // Add Certification
    addCertificationBtn.addEventListener('click', function() {
        const certEntry = document.createElement('div');
        certEntry.className = 'certification-entry';
        certEntry.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Certification Name</label>
                    <input type="text" name="certName[]">
                </div>
                <div class="form-group">
                    <label>Issuing Organization</label>
                    <input type="text" name="certOrg[]">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Issue Date</label>
                    <input type="date" name="certIssueDate[]">
                </div>
                <div class="form-group">
                    <label>Expiry Date</label>
                    <input type="date" name="certExpiryDate[]">
                </div>
                <div class="form-group cert-actions">
                    <button type="button" class="remove-cert-btn">Remove</button>
                </div>
            </div>
        `;
        certificationsContainer.appendChild(certEntry);
        
        // Add event listener to the new remove button
        certEntry.querySelector('.remove-cert-btn').addEventListener('click', function() {
            certificationsContainer.removeChild(certEntry);
        });
    });
    
    // Remove Certification
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('remove-cert-btn')) {
            const certEntry = e.target.closest('.certification-entry');
            certificationsContainer.removeChild(certEntry);
        }
    });
    
    // Filter Trainers
    filterBtn.addEventListener('click', function() {
        const specialty = specialtyFilter.value;
        const status = statusFilter.value;
        
        // In a real application, you would filter the trainers based on the selected values
        // For demo purposes, we'll just log the filter values
        console.log('Filter by specialty:', specialty);
        console.log('Filter by status:', status);
        
        // Simulate filtering by showing/hiding trainer cards
        const trainerCards = document.querySelectorAll('.trainer-card');
        trainerCards.forEach(card => {
            let showCard = true;
            
            // Filter by specialty
            if (specialty && !card.querySelector('.trainer-specialties').textContent.toLowerCase().includes(specialty.toLowerCase())) {
                showCard = false;
            }
            
            // Filter by status
            if (status && !card.querySelector('.trainer-status').textContent.toLowerCase().includes(status.toLowerCase())) {
                showCard = false;
            }
            
            // Show/hide card
            card.style.display = showCard ? 'block' : 'none';
        });
    });
    
    // Helper Functions
    function openModal(modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
});