document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const scheduleTabs = document.querySelectorAll('.schedule-tab');
    
    scheduleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            scheduleTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Handle tab content switching logic
            const tabType = this.getAttribute('data-tab');
            if (tabType === 'personal') {
                // Show only personal training sessions
                document.querySelectorAll('.class-item:not(.pt)').forEach(item => {
                    item.style.display = 'none';
                });
                document.querySelectorAll('.class-item.pt').forEach(item => {
                    item.style.display = 'flex';
                });
            } else {
                // Show all classes except personal training
                document.querySelectorAll('.class-item:not(.pt)').forEach(item => {
                    item.style.display = 'flex';
                });
                document.querySelectorAll('.class-item.pt').forEach(item => {
                    item.style.display = 'none';
                });
            }
        });
    });
    
    // Calendar navigation
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const todayBtn = document.querySelector('.calendar-today-btn');
    const calendarTitle = document.querySelector('.calendar-title');
    
    let currentDate = new Date();
    let currentWeekStart = getWeekStart(currentDate);
    
    updateCalendarTitle();
    
    prevBtn.addEventListener('click', function() {
        currentWeekStart.setDate(currentWeekStart.getDate() - 7);
        updateCalendarTitle();
    });
    
    nextBtn.addEventListener('click', function() {
        currentWeekStart.setDate(currentWeekStart.getDate() + 7);
        updateCalendarTitle();
    });
    
    todayBtn.addEventListener('click', function() {
        currentDate = new Date();
        currentWeekStart = getWeekStart(currentDate);
        updateCalendarTitle();
    });
    
    function getWeekStart(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Sunday
        return new Date(d.setDate(diff));
    }
    
    function updateCalendarTitle() {
        const weekEnd = new Date(currentWeekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
            
        if (currentWeekStart.getMonth() === weekEnd.getMonth()) {
            calendarTitle.textContent = `${monthNames[currentWeekStart.getMonth()]} ${currentWeekStart.getDate()} - ${weekEnd.getDate()}, ${currentWeekStart.getFullYear()}`;
        } else {
            calendarTitle.textContent = `${monthNames[currentWeekStart.getMonth()]} ${currentWeekStart.getDate()} - ${monthNames[weekEnd.getMonth()]} ${weekEnd.getDate()}, ${weekEnd.getFullYear()}`;
        }
    }
    
    // Class type selection in modal
    const classTypeSelect = document.getElementById('class-type');
    const capacityGroup = document.getElementById('capacity-group');
    const clientGroup = document.getElementById('client-group');
    const priceHint = document.getElementById('price-hint');
    
    classTypeSelect.addEventListener('change', function() {
        if (this.value === 'personal') {
            capacityGroup.style.display = 'none';
            clientGroup.style.display = 'block';
            priceHint.textContent = 'Total price for personal training session';
        } else {
            capacityGroup.style.display = 'block';
            clientGroup.style.display = 'none';
            priceHint.textContent = 'Per person for group classes';
        }
    });
    
    // Modal handling
    const addClassBtn = document.querySelector('.primary-action-btn');
    const modal = document.getElementById('add-class-modal');
    const closeModalBtn = modal.querySelector('.modal-close');
    const cancelBtn = modal.querySelector('.modal-btn.cancel');
    
    addClassBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    cancelBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Class item click handling
    const classItems = document.querySelectorAll('.class-item');
    
    classItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a real application, this would open a modal with class details
            // or redirect to a class detail page
            console.log('Class clicked:', this.querySelector('.class-name').textContent);
        });
    });
    
    // Filter handling
    const filterBtn = document.querySelector('.filter-btn');
    
    filterBtn.addEventListener('click', function() {
        const viewType = document.getElementById('view-select').value;
        const spaceFilter = document.getElementById('space-select').value;
        const trainerFilter = document.getElementById('trainer-select').value;
        
        console.log('Filtering with:', { viewType, spaceFilter, trainerFilter });
        
        // In a real application, this would update the calendar view based on filters
        // For this demo, we'll just log the filter values
    });
    
    // Chart filters
    const chartFilters = document.querySelectorAll('.chart-filter');
    
    chartFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters in this group
            this.parentElement.querySelectorAll('.chart-filter').forEach(f => {
                f.classList.remove('active');
            });
            
            // Add active class to clicked filter
            this.classList.add('active');
            
            // In a real application, this would update the chart data
            console.log('Chart filter changed:', this.textContent);
        });
    });
});