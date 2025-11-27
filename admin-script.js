document.addEventListener('DOMContentLoaded', function() {
    // Chart filters
    const chartFilters = document.querySelectorAll('.chart-filter');
    chartFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class from all filters
            chartFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            filter.classList.add('active');
            
            // Here you would update the chart data based on the selected filter
            // For demo purposes, we'll just log the selected filter
            console.log('Chart filter selected:', filter.textContent);
        });
    });
    
    // Alert action buttons
    const alertActionBtns = document.querySelectorAll('.alert-action-btn');
    alertActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const alertItem = this.closest('.alert-item');
            const action = this.textContent.trim();
            const alertTitle = alertItem.querySelector('.alert-title').textContent;
            
            // For demo purposes, we'll just log the action
            console.log(`${action} clicked for alert: ${alertTitle}`);
            
            // In a real application, you would handle the action accordingly
            // For demo, we'll just remove the alert
            alertItem.style.opacity = '0';
            setTimeout(() => {
                alertItem.style.display = 'none';
            }, 300);
        });
    });
    
    // Quick action buttons
    const quickActionBtns = document.querySelectorAll('.quick-action-btn');
    quickActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.querySelector('span').textContent;
            
            // For demo purposes, we'll just log the action
            console.log(`Quick action clicked: ${action}`);
            
            // In a real application, you would navigate to the appropriate page or open a modal
            alert(`Action: ${action} - This would open the corresponding page or modal in a real application.`);
        });
    });
    
    // View all buttons
    const viewAllBtns = document.querySelectorAll('.view-all-btn');
    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.closest('div').querySelector('h2').textContent;
            
            // For demo purposes, we'll just log the action
            console.log(`View all clicked for: ${section}`);
            
            // In a real application, you would navigate to the appropriate page
            alert(`Viewing all for: ${section} - This would navigate to the corresponding page in a real application.`);
        });
    });
});