document.addEventListener('DOMContentLoaded', function() {
    // ==========================================
    // MODAL HANDLING
    // ==========================================

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
            viewClientModal.style.display = 'flex';
        });
    });

    closeViewModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewClientModal.style.display = 'none';
        });
    });

    // Manage Package Modal
    const packageBtns = document.querySelectorAll('.package-btn');
    const managePackageModal = document.getElementById('manage-package-modal');
    const closePackageModalBtns = managePackageModal.querySelectorAll('.modal-close, .modal-btn.cancel');

    packageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            managePackageModal.style.display = 'flex';
        });
    });

    closePackageModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            managePackageModal.style.display = 'none';
        });
    });

    // Package Action Tabs
    const packageActionTabs = document.querySelectorAll('.package-action-tab');
    const packageActionContents = document.querySelectorAll('.package-action-content');

    packageActionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const action = this.getAttribute('data-action');

            packageActionTabs.forEach(t => t.classList.remove('active'));
            packageActionContents.forEach(c => c.style.display = 'none');

            this.classList.add('active');
            document.getElementById(action + '-content').style.display = 'block';
        });
    });

    // Import Clients Modal
    const importBtn = document.getElementById('import-btn');
    const importModal = document.getElementById('import-clients-modal');
    const closeImportModalBtns = importModal.querySelectorAll('.modal-close, .modal-btn.cancel');
    let currentImportStep = 1;

    if (importBtn) {
        importBtn.addEventListener('click', function() {
            importModal.style.display = 'flex';
            currentImportStep = 1;
            updateImportStep();
        });
    }

    closeImportModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            importModal.style.display = 'none';
        });
    });

    // Import Next/Back buttons
    const importNextBtn = document.getElementById('import-next');
    const importBackBtn = document.getElementById('import-back');

    if (importNextBtn) {
        importNextBtn.addEventListener('click', function() {
            if (currentImportStep < 4) {
                currentImportStep++;
                updateImportStep();
            } else {
                // Final step - complete import
                alert('Import completed successfully!');
                importModal.style.display = 'none';
                currentImportStep = 1;
                updateImportStep();
            }
        });
    }

    if (importBackBtn) {
        importBackBtn.addEventListener('click', function() {
            if (currentImportStep > 1) {
                currentImportStep--;
                updateImportStep();
            }
        });
    }

    function updateImportStep() {
        const steps = document.querySelectorAll('.import-step');
        const contents = document.querySelectorAll('.import-content');

        steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index + 1 < currentImportStep) {
                step.classList.add('completed');
            } else if (index + 1 === currentImportStep) {
                step.classList.add('active');
            }
        });

        contents.forEach((content, index) => {
            content.style.display = index + 1 === currentImportStep ? 'block' : 'none';
        });

        // Show/hide back button
        if (importBackBtn) {
            importBackBtn.style.display = currentImportStep > 1 ? 'inline-block' : 'none';
        }

        // Update next button text
        if (importNextBtn) {
            importNextBtn.textContent = currentImportStep === 4 ? 'Complete Import' : 'Next';
        }
    }

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
        if (event.target === managePackageModal) {
            managePackageModal.style.display = 'none';
        }
        if (event.target === importModal) {
            importModal.style.display = 'none';
        }
    });

    // ==========================================
    // BULK ACTIONS
    // ==========================================

    const selectAllCheckbox = document.getElementById('select-all-clients');
    const clientCheckboxes = document.querySelectorAll('.client-checkbox');
    const bulkActionsBar = document.getElementById('bulk-actions-bar');
    const selectedCountSpan = document.getElementById('selected-count');
    const dismissBulkBtn = document.getElementById('dismiss-bulk');

    // Select all functionality
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            clientCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
            updateBulkActionsBar();
        });
    }

    // Individual checkbox change
    clientCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateBulkActionsBar);
    });

    // Dismiss bulk actions bar
    if (dismissBulkBtn) {
        dismissBulkBtn.addEventListener('click', function() {
            clientCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = false;
            }
            updateBulkActionsBar();
        });
    }

    function updateBulkActionsBar() {
        const checkedCount = document.querySelectorAll('.client-checkbox:checked').length;

        if (checkedCount > 0) {
            bulkActionsBar.classList.add('visible');
            selectedCountSpan.textContent = checkedCount;
        } else {
            bulkActionsBar.classList.remove('visible');
        }

        // Update select all checkbox state
        if (selectAllCheckbox) {
            selectAllCheckbox.checked = checkedCount === clientCheckboxes.length;
            selectAllCheckbox.indeterminate = checkedCount > 0 && checkedCount < clientCheckboxes.length;
        }
    }

    // Bulk action buttons
    const bulkEmailBtn = document.getElementById('bulk-email-btn');
    const bulkSmsBtn = document.getElementById('bulk-sms-btn');
    const bulkStatusBtn = document.getElementById('bulk-status-btn');
    const bulkPackageBtn = document.getElementById('bulk-package-btn');
    const bulkTagBtn = document.getElementById('bulk-tag-btn');

    if (bulkEmailBtn) {
        bulkEmailBtn.addEventListener('click', function() {
            const count = document.querySelectorAll('.client-checkbox:checked').length;
            alert(`Opening email composer for ${count} clients...`);
        });
    }

    if (bulkSmsBtn) {
        bulkSmsBtn.addEventListener('click', function() {
            const count = document.querySelectorAll('.client-checkbox:checked').length;
            alert(`Opening SMS composer for ${count} clients...`);
        });
    }

    if (bulkStatusBtn) {
        bulkStatusBtn.addEventListener('click', function() {
            const count = document.querySelectorAll('.client-checkbox:checked').length;
            const newStatus = prompt(`Change status for ${count} clients to: (active/inactive/pending/suspended)`);
            if (newStatus) {
                alert(`Status changed to "${newStatus}" for ${count} clients.`);
            }
        });
    }

    if (bulkPackageBtn) {
        bulkPackageBtn.addEventListener('click', function() {
            managePackageModal.style.display = 'flex';
        });
    }

    if (bulkTagBtn) {
        bulkTagBtn.addEventListener('click', function() {
            const count = document.querySelectorAll('.client-checkbox:checked').length;
            const tags = prompt(`Add tags for ${count} clients (comma-separated):`);
            if (tags) {
                alert(`Tags "${tags}" added to ${count} clients.`);
            }
        });
    }

    // ==========================================
    // BOOKING CLASS TYPE TOGGLE
    // ==========================================

    const bookingClassType = document.getElementById('booking-class-type');
    const groupClassOptions = document.getElementById('group-class-options');
    const personalTrainingOptions = document.getElementById('personal-training-options');

    if (bookingClassType) {
        bookingClassType.addEventListener('change', function() {
            if (this.value === 'group') {
                groupClassOptions.style.display = 'block';
                personalTrainingOptions.style.display = 'none';
            } else if (this.value === 'personal') {
                groupClassOptions.style.display = 'none';
                personalTrainingOptions.style.display = 'block';
            } else {
                groupClassOptions.style.display = 'none';
                personalTrainingOptions.style.display = 'none';
            }
        });
    }

    // ==========================================
    // CLIENT TABS IN VIEW MODAL
    // ==========================================

    const clientTabs = document.querySelectorAll('.client-tab');
    const clientTabContents = document.querySelectorAll('.client-tab-content');

    clientTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            clientTabs.forEach(t => t.classList.remove('active'));
            clientTabContents.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });

            this.classList.add('active');
            const activeContent = document.getElementById(tabId + '-tab');
            if (activeContent) {
                activeContent.classList.add('active');
                activeContent.style.display = 'block';
            }
        });
    });

    // ==========================================
    // COMMUNICATION TAB - FOLLOW-UP TOGGLE
    // ==========================================

    const commFollowup = document.getElementById('comm-followup');
    const followupDateGroup = document.getElementById('followup-date-group');

    if (commFollowup && followupDateGroup) {
        commFollowup.addEventListener('change', function() {
            if (this.value === 'yes') {
                followupDateGroup.style.display = 'block';
            } else {
                followupDateGroup.style.display = 'none';
            }
        });
    }

    // Add Communication Log Button
    const addCommBtn = document.querySelector('.add-communication .primary-action-btn');
    if (addCommBtn) {
        addCommBtn.addEventListener('click', function() {
            const type = document.getElementById('comm-type');
            const summary = document.getElementById('comm-summary');

            if (summary && !summary.value.trim()) {
                alert('Please enter a summary of the communication.');
                return;
            }

            // In a real app, this would save to database
            alert('Communication logged successfully!');
            if (type) type.value = 'call';
            if (summary) summary.value = '';
            if (commFollowup) commFollowup.value = 'no';
            if (followupDateGroup) followupDateGroup.style.display = 'none';
        });
    }

    // ==========================================
    // PT SESSIONS TAB - CREATE SESSION
    // ==========================================

    const createPtBtn = document.querySelector('.create-pt-form .primary-action-btn');
    if (createPtBtn) {
        createPtBtn.addEventListener('click', function() {
            // In a real app, this would create the PT session
            alert('PT Session created successfully!');
        });
    }

    // Collapse/Expand Create PT Section
    const collapseBtn = document.querySelector('.collapse-btn');
    const createPtForm = document.querySelector('.create-pt-form');

    if (collapseBtn && createPtForm) {
        collapseBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');

            if (createPtForm.style.display === 'none') {
                createPtForm.style.display = 'flex';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                createPtForm.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    }

    // ==========================================
    // PACKAGE ACTIONS
    // ==========================================

    const packageActionBtns = document.querySelectorAll('.package-action-btn');
    packageActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();

            if (action.includes('Add Sessions')) {
                const sessions = prompt('Enter number of sessions to add:');
                if (sessions && !isNaN(sessions)) {
                    alert(`${sessions} sessions added successfully!`);
                }
            } else if (action.includes('Extend')) {
                const date = prompt('Enter new expiry date (YYYY-MM-DD):');
                if (date) {
                    alert(`Expiry extended to ${date}!`);
                }
            } else if (action.includes('History')) {
                // Scroll to history section
                const historyTable = document.querySelector('#packages-tab .bookings-table');
                if (historyTable) {
                    historyTable.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ==========================================
    // ACTIVITY TIMELINE INTERACTION
    // ==========================================

    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            // In a real app, this would show more details
            this.classList.toggle('expanded');
        });
    });

    // ==========================================
    // TIMELINE ITEM INTERACTION
    // ==========================================

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.cursor = 'pointer';
        const content = item.querySelector('.timeline-content');
        if (content) {
            content.addEventListener('click', function() {
                // Toggle expanded view
                const body = this.querySelector('.timeline-body');
                if (body) {
                    if (body.style.maxHeight) {
                        body.style.maxHeight = null;
                    } else {
                        body.style.maxHeight = body.scrollHeight + 'px';
                    }
                }
            });
        }
    });

    // ==========================================
    // SEND EMAIL MODAL
    // ==========================================

    const sendEmailModal = document.getElementById('send-email-modal');
    const emailSchedule = document.getElementById('email-schedule');
    const emailScheduleDatetime = document.getElementById('email-schedule-datetime');
    const emailSubject = document.getElementById('email-subject');
    const emailBody = document.getElementById('email-body');
    const previewSubject = document.getElementById('preview-subject');
    const previewBody = document.getElementById('preview-body');
    const sendEmailBtn = document.getElementById('send-email-btn');

    // Open email modal from bulk action
    if (bulkEmailBtn && sendEmailModal) {
        bulkEmailBtn.addEventListener('click', function() {
            sendEmailModal.style.display = 'flex';
        });
    }

    // Close email modal
    if (sendEmailModal) {
        const closeBtns = sendEmailModal.querySelectorAll('.modal-close, .modal-btn.cancel');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                sendEmailModal.style.display = 'none';
            });
        });
    }

    // Schedule toggle
    if (emailSchedule && emailScheduleDatetime) {
        emailSchedule.addEventListener('change', function() {
            emailScheduleDatetime.style.display = this.value === 'schedule' ? 'block' : 'none';
        });
    }

    // Live preview
    if (emailSubject && previewSubject) {
        emailSubject.addEventListener('input', function() {
            previewSubject.textContent = this.value || '[Your subject here]';
        });
    }

    if (emailBody && previewBody) {
        emailBody.addEventListener('input', function() {
            previewBody.textContent = this.value || '[Your message will appear here]';
        });
    }

    // Send email
    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', function() {
            if (!emailSubject.value.trim()) {
                alert('Please enter an email subject.');
                return;
            }
            if (!emailBody.value.trim()) {
                alert('Please enter an email message.');
                return;
            }

            alert('Email sent successfully to 3 clients!');
            sendEmailModal.style.display = 'none';
            emailSubject.value = '';
            emailBody.value = '';
            previewSubject.textContent = '[Your subject here]';
            previewBody.textContent = '[Your message will appear here]';
        });
    }

    // ==========================================
    // SEND SMS MODAL
    // ==========================================

    const sendSmsModal = document.getElementById('send-sms-modal');
    const smsBody = document.getElementById('sms-body');
    const smsCharCount = document.getElementById('sms-char-count');
    const smsSegments = document.getElementById('sms-segments');
    const smsSchedule = document.getElementById('sms-schedule');
    const smsScheduleDatetime = document.getElementById('sms-schedule-datetime');
    const sendSmsBtn = document.getElementById('send-sms-btn');

    // Open SMS modal from bulk action
    if (bulkSmsBtn && sendSmsModal) {
        bulkSmsBtn.addEventListener('click', function() {
            sendSmsModal.style.display = 'flex';
        });
    }

    // Close SMS modal
    if (sendSmsModal) {
        const closeBtns = sendSmsModal.querySelectorAll('.modal-close, .modal-btn.cancel');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                sendSmsModal.style.display = 'none';
            });
        });
    }

    // Schedule toggle
    if (smsSchedule && smsScheduleDatetime) {
        smsSchedule.addEventListener('change', function() {
            smsScheduleDatetime.style.display = this.value === 'schedule' ? 'block' : 'none';
        });
    }

    // Character counter
    if (smsBody && smsCharCount && smsSegments) {
        smsBody.addEventListener('input', function() {
            const length = this.value.length;
            smsCharCount.textContent = length;

            // SMS segments (160 chars per segment)
            const segments = Math.ceil(length / 160) || 1;
            smsSegments.textContent = segments;

            // Color coding
            if (length > 280) {
                smsCharCount.style.color = '#e74c3c';
            } else if (length > 200) {
                smsCharCount.style.color = '#f39c12';
            } else {
                smsCharCount.style.color = '#999';
            }
        });
    }

    // Send SMS
    if (sendSmsBtn) {
        sendSmsBtn.addEventListener('click', function() {
            if (!smsBody.value.trim()) {
                alert('Please enter a message.');
                return;
            }

            alert('SMS/WhatsApp sent successfully to 3 clients!');
            sendSmsModal.style.display = 'none';
            smsBody.value = '';
            smsCharCount.textContent = '0';
        });
    }

    // ==========================================
    // CHANGE STATUS MODAL
    // ==========================================

    const changeStatusModal = document.getElementById('change-status-modal');

    // Open status modal from bulk action
    if (bulkStatusBtn && changeStatusModal) {
        bulkStatusBtn.addEventListener('click', function() {
            changeStatusModal.style.display = 'flex';
        });
    }

    // Close status modal
    if (changeStatusModal) {
        const closeBtns = changeStatusModal.querySelectorAll('.modal-close, .modal-btn.cancel');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                changeStatusModal.style.display = 'none';
            });
        });

        const confirmBtn = changeStatusModal.querySelector('.modal-btn.confirm');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function() {
                const newStatus = document.getElementById('new-status');
                alert(`Status changed to "${newStatus.options[newStatus.selectedIndex].text}" for 3 clients!`);
                changeStatusModal.style.display = 'none';
            });
        }
    }

    // ==========================================
    // ASSIGN TAGS MODAL
    // ==========================================

    const assignTagsModal = document.getElementById('assign-tags-modal');

    // Open tags modal from bulk action
    if (bulkTagBtn && assignTagsModal) {
        bulkTagBtn.addEventListener('click', function() {
            assignTagsModal.style.display = 'flex';
        });
    }

    // Close tags modal
    if (assignTagsModal) {
        const closeBtns = assignTagsModal.querySelectorAll('.modal-close, .modal-btn.cancel');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                assignTagsModal.style.display = 'none';
            });
        });

        // Tag selection
        const tagOptions = assignTagsModal.querySelectorAll('.tag-option');
        tagOptions.forEach(option => {
            option.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });

        const confirmBtn = assignTagsModal.querySelector('.modal-btn.confirm');
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function() {
                const selectedTags = assignTagsModal.querySelectorAll('.tag-option.selected');
                const tagNames = Array.from(selectedTags).map(t => t.textContent);
                alert(`Tags "${tagNames.join(', ')}" applied to 3 clients!`);
                assignTagsModal.style.display = 'none';
            });
        }
    }

    // Close modals on outside click
    window.addEventListener('click', function(event) {
        if (event.target === sendEmailModal) {
            sendEmailModal.style.display = 'none';
        }
        if (event.target === sendSmsModal) {
            sendSmsModal.style.display = 'none';
        }
        if (event.target === changeStatusModal) {
            changeStatusModal.style.display = 'none';
        }
        if (event.target === assignTagsModal) {
            assignTagsModal.style.display = 'none';
        }
    });

    // ==========================================
    // ALERT ACTIONS
    // ==========================================

    const alertActions = document.querySelectorAll('.alert-action');
    alertActions.forEach(btn => {
        btn.addEventListener('click', function() {
            const alertText = this.parentElement.textContent;
            if (alertText.includes('expiring')) {
                // Filter to show expiring packages
                if (expirySelect) {
                    expirySelect.value = 'expiring-7';
                }
                alert('Filter applied: Showing clients with packages expiring within 7 days');
            } else if (alertText.includes("haven't visited")) {
                alert('Showing clients who haven\'t visited in 30+ days');
            }
        });
    });

    // ==========================================
    // SEARCH FUNCTIONALITY
    // ==========================================

    const searchInput = document.querySelector('.admin-search input');
    const clientTableRows = document.querySelectorAll('.client-table tbody tr');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            clientTableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // ==========================================
    // FILTER FUNCTIONALITY
    // ==========================================

    const filterBtn = document.querySelector('.filter-btn');
    const statusSelect = document.getElementById('status-select');
    const membershipSelect = document.getElementById('membership-select');
    const packageSelect = document.getElementById('package-select');
    const expirySelect = document.getElementById('expiry-select');

    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            const statusValue = statusSelect ? statusSelect.value : 'all';
            const membershipValue = membershipSelect ? membershipSelect.value : 'all';
            const packageValue = packageSelect ? packageSelect.value : 'all';
            const expiryValue = expirySelect ? expirySelect.value : 'all';

            // In a real app, this would filter the data
            console.log('Filtering by:', {
                status: statusValue,
                membership: membershipValue,
                package: packageValue,
                expiry: expiryValue
            });

            alert('Filters applied! (In a real app, this would filter the client list)');
        });
    }

    // ==========================================
    // PACKAGE SELECTION AUTO-FILL
    // ==========================================

    const newPackageSelect = document.getElementById('new-package-select');
    const newSessionsInput = document.getElementById('new-sessions');
    const newPriceInput = document.getElementById('new-price');
    const newExpiryInput = document.getElementById('new-expiry');

    if (newPackageSelect) {
        newPackageSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];

            // Auto-fill sessions based on package
            const packageSessions = {
                'personal-training': 4,
                'group-20x': 20,
                'yoga': 10,
                'unlimited': 'Unlimited'
            };

            if (newSessionsInput) {
                newSessionsInput.value = packageSessions[this.value] || '';
            }

            // Auto-fill price
            if (newPriceInput) {
                newPriceInput.value = selectedOption.getAttribute('data-price') || '';
            }

            // Auto-set expiry to 90 days from now
            if (newExpiryInput) {
                const expiryDate = new Date();
                expiryDate.setDate(expiryDate.getDate() + 90);
                newExpiryInput.value = expiryDate.toISOString().split('T')[0];
            }
        });
    }

    // ==========================================
    // FORM VALIDATION
    // ==========================================

    const addClientForm = document.getElementById('add-client-form');

    if (addClientForm) {
        addClientForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('client-name');
            const emailInput = document.getElementById('client-email');
            const phoneInput = document.getElementById('client-phone');
            const emergencyName = document.getElementById('emergency-name');
            const emergencyPhone = document.getElementById('emergency-phone');
            const emergencyRelation = document.getElementById('emergency-relation');

            let isValid = true;

            // Validate required fields
            if (emergencyName && !emergencyName.value.trim()) {
                markInvalid(emergencyName, 'Emergency contact name is required');
                isValid = false;
            } else if (emergencyName) {
                markValid(emergencyName);
            }

            if (emergencyPhone && !emergencyPhone.value.trim()) {
                markInvalid(emergencyPhone, 'Emergency contact phone is required');
                isValid = false;
            } else if (emergencyPhone) {
                markValid(emergencyPhone);
            }

            if (emergencyRelation && !emergencyRelation.value) {
                markInvalid(emergencyRelation, 'Please select a relationship');
                isValid = false;
            } else if (emergencyRelation) {
                markValid(emergencyRelation);
            }

            if (isValid) {
                alert('Client saved successfully!');
                clientModal.style.display = 'none';
                addClientForm.reset();
            }
        });
    }

    function markInvalid(input, message) {
        input.classList.add('invalid');
        input.style.borderColor = '#e74c3c';

        let errorElement = input.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.color = '#e74c3c';
            errorElement.style.fontSize = '12px';
            errorElement.style.marginTop = '5px';
            input.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    function markValid(input) {
        input.classList.remove('invalid');
        input.style.borderColor = '';

        const errorElement = input.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    // ==========================================
    // SAVE BUTTON HANDLERS
    // ==========================================

    // Save Client Button
    const saveClientBtn = clientModal.querySelector('.modal-btn.confirm');
    if (saveClientBtn) {
        saveClientBtn.addEventListener('click', function() {
            // In a real app, this would save the client data
            alert('Client saved successfully!');
            clientModal.style.display = 'none';
        });
    }

    // Save Package Button
    const savePackageBtn = managePackageModal.querySelector('.modal-btn.confirm');
    if (savePackageBtn) {
        savePackageBtn.addEventListener('click', function() {
            // In a real app, this would save the package changes
            alert('Package updated successfully!');
            managePackageModal.style.display = 'none';
        });
    }

    // Confirm Booking Button
    const confirmBookingBtn = bookClassModal.querySelector('.modal-btn.confirm');
    if (confirmBookingBtn) {
        confirmBookingBtn.addEventListener('click', function() {
            // In a real app, this would create the booking
            alert('Booking confirmed!');
            bookClassModal.style.display = 'none';
        });
    }
});
