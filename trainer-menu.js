// Trainer Menu System JavaScript
class TrainerMenuSystem {
    constructor() {
        this.workouts = [];
        this.currentWorkout = null;
        this.sectionIdCounter = 0;
        this.workoutIdCounter = 0;
        this.exerciseIdCounter = 0;
        this.timer = null;
        this.timerSeconds = 0;
        this.isPaused = false;
        this.init();
    }

    init() {
        this.loadFromSessionStorage();
        this.setupEventListeners();
        this.addInitialSection();
        this.updatePreview();
    }

    setupEventListeners() {
        // Coach name change handler
        const coachSelect = document.getElementById('coach-name');
        if (coachSelect) {
            coachSelect.addEventListener('change', this.handleCoachChange.bind(this));
        }

        // Auto-save on input changes
        document.addEventListener('input', this.debounce(() => {
            this.updatePreview();
        }, 500));
    }

    handleCoachChange(e) {
        const customCoachGroup = document.getElementById('custom-coach-group');
        const customCoachInput = document.getElementById('custom-coach-name');

        if (e.target.value === 'Custom') {
            customCoachGroup.style.display = 'block';
            customCoachInput.focus();
        } else {
            customCoachGroup.style.display = 'none';
            customCoachInput.value = '';
        }
        this.updatePreview();
    }

    // Section Management
    addSection() {
        const container = document.getElementById('sections-container');
        const emptyState = document.getElementById('empty-sections');

        if (emptyState) {
            emptyState.style.display = 'none';
        }

        const template = document.getElementById('section-template');
        const section = template.content.cloneNode(true);

        const sectionId = `section-${this.sectionIdCounter++}`;
        section.querySelector('.workout-section').dataset.sectionId = sectionId;

        container.appendChild(section);
        this.addInitialWorkout(sectionId);
        this.updatePreview();
    }

    removeSection(button) {
        const section = button.closest('.workout-section');
        section.remove();

        const container = document.getElementById('sections-container');
        if (container.children.length === 0) {
            document.getElementById('empty-sections').style.display = 'block';
        }

        this.updatePreview();
    }

    toggleSection(button) {
        const section = button.closest('.workout-section');
        const content = section.querySelector('.section-content');
        const icon = button.querySelector('i');

        if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.className = 'fas fa-chevron-down';
        } else {
            content.style.display = 'none';
            icon.className = 'fas fa-chevron-right';
        }
    }

    // Workout Management
    addWorkout(button) {
        const section = button.closest('.workout-section');
        const sectionId = section.dataset.sectionId;
        const workoutsList = section.querySelector('.workouts-list');

        const template = document.getElementById('workout-template');
        const workout = template.content.cloneNode(true);

        const workoutId = `workout-${this.workoutIdCounter++}`;
        workout.querySelector('.workout-item').dataset.workoutId = workoutId;

        workoutsList.appendChild(workout);
        this.addInitialExercise(workoutId);
        this.updatePreview();
    }

    removeWorkout(button) {
        const workout = button.closest('.workout-item');
        workout.remove();
        this.updatePreview();
    }

    updateWorkoutFields(select) {
        const workoutItem = select.closest('.workout-item');
        const durationField = workoutItem.querySelector('.workout-duration');
        const restField = workoutItem.querySelector('.workout-rest');

        // Set placeholder based on workout type
        switch(select.value) {
            case 'EMOM':
                durationField.placeholder = 'e.g., 10 min';
                restField.placeholder = 'e.g., 0 sec';
                break;
            case 'E2MOM':
                durationField.placeholder = 'e.g., 10 min';
                restField.placeholder = 'e.g., 0 sec';
                break;
            case 'AMRAP':
                durationField.placeholder = 'e.g., 15 min';
                restField.placeholder = 'e.g., 0 sec';
                break;
            case 'ENDURANCE':
                durationField.placeholder = 'e.g., 5 sets';
                restField.placeholder = 'e.g., 1 min';
                break;
            case 'STRENGTH':
                durationField.placeholder = 'e.g., 4 sets';
                restField.placeholder = 'e.g., 2 min';
                break;
            case 'CARDIO':
                durationField.placeholder = 'e.g., 20 min';
                restField.placeholder = 'e.g., 1 min';
                break;
            case 'FLEXIBILITY':
                durationField.placeholder = 'e.g., 10 min';
                restField.placeholder = 'e.g., 30 sec';
                break;
            default:
                durationField.placeholder = 'e.g., 5 min, 10 rounds';
                restField.placeholder = 'e.g., 1 min, 30 sec';
        }
    }

    // Exercise Management
    addExercise(button) {
        const workout = button.closest('.workout-item');
        const workoutId = workout.dataset.workoutId;
        const exercisesList = workout.querySelector('.exercises-list');

        const template = document.getElementById('exercise-template');
        const exercise = template.content.cloneNode(true);

        const exerciseId = `exercise-${this.exerciseIdCounter++}`;
        exercise.querySelector('.exercise-item').dataset.exerciseId = exerciseId;

        exercisesList.appendChild(exercise);
        this.updatePreview();
    }

    removeExercise(button) {
        const exercise = button.closest('.exercise-item');
        exercise.remove();
        this.updatePreview();
    }

    // Preview Management
    updatePreview() {
        const preview = document.getElementById('workout-preview');
        const workoutData = this.collectWorkoutData();

        if (!workoutData.className || workoutData.sections.length === 0) {
            preview.innerHTML = '<p class="preview-empty">Start adding sections to see preview</p>';
            return;
        }

        const previewHTML = this.generatePreviewHTML(workoutData);
        preview.innerHTML = previewHTML;
    }

    collectWorkoutData() {
        const data = {
            className: document.getElementById('class-name')?.value || '',
            coachName: this.getCoachName(),
            sections: []
        };

        document.querySelectorAll('.workout-section').forEach(section => {
            const sectionData = {
                name: section.querySelector('.section-name-input')?.value || 'Untitled Section',
                workouts: []
            };

            section.querySelectorAll('.workout-item').forEach(workout => {
                const workoutData = {
                    type: workout.querySelector('.workout-type-select')?.value || '',
                    duration: workout.querySelector('.workout-duration')?.value || '',
                    rest: workout.querySelector('.workout-rest')?.value || '',
                    exercises: []
                };

                workout.querySelectorAll('.exercise-item').forEach(exercise => {
                    const exerciseData = {
                        name: exercise.querySelector('.exercise-name')?.value || '',
                        sets: exercise.querySelector('.exercise-sets')?.value || '',
                        reps: exercise.querySelector('.exercise-reps')?.value || '',
                        weight: exercise.querySelector('.exercise-weight')?.value || ''
                    };
                    workoutData.exercises.push(exerciseData);
                });

                sectionData.workouts.push(workoutData);
            });

            data.sections.push(sectionData);
        });

        return data;
    }

    getCoachName() {
        const coachSelect = document.getElementById('coach-name');
        const customCoachInput = document.getElementById('custom-coach-name');

        if (coachSelect?.value === 'Custom' && customCoachInput?.value) {
            return customCoachInput.value;
        }
        return coachSelect?.value || '';
    }

    generatePreviewHTML(data) {
        let html = `
            <div class="preview-workout">
                <div class="preview-header">
                    <h3>${data.className}</h3>
                    <p class="preview-coach">Coach: ${data.coachName}</p>
                </div>
                <div class="preview-sections">
        `;

        data.sections.forEach((section, index) => {
            html += `
                <div class="preview-section">
                    <h4>Section ${index + 1}: ${section.name}</h4>
                    <div class="preview-workouts">
            `;

            section.workouts.forEach(workout => {
                if (workout.type) {
                    html += `
                        <div class="preview-workout">
                            <span class="workout-type">${workout.type}</span>
                            <span class="workout-duration">${workout.duration}</span>
                            ${workout.rest ? `<span class="workout-rest">Rest: ${workout.rest}</span>` : ''}
                        </div>
                    `;
                }
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        return html;
    }

    // Data Management
    saveWorkout() {
        const workoutData = this.collectWorkoutData();

        if (!workoutData.className) {
            this.showNotification('Please enter a class name', 'error');
            return;
        }

        if (workoutData.sections.length === 0) {
            this.showNotification('Please add at least one section', 'error');
            return;
        }

        // Check if all sections have names
        const hasUnnamedSections = workoutData.sections.some(section => !section.name.trim());
        if (hasUnnamedSections) {
            this.showNotification('Please name all sections', 'error');
            return;
        }

        const workout = {
            id: Date.now().toString(),
            ...workoutData,
            createdAt: new Date().toISOString()
        };

        this.workouts.push(workout);
        this.saveToSessionStorage();
        this.showNotification('Workout saved successfully!', 'success');

        // Clear form for new workout
        this.clearForm();
    }

    clearForm() {
        document.getElementById('class-name').value = '';
        document.getElementById('coach-name').value = '';
        document.getElementById('custom-coach-name').value = '';
        document.getElementById('custom-coach-group').style.display = 'none';

        // Clear all sections
        const container = document.getElementById('sections-container');
        container.innerHTML = '';

        // Show empty state
        document.getElementById('empty-sections').style.display = 'block';

        // Add one initial section
        this.addInitialSection();
        this.updatePreview();
    }

    clearAllData() {
        if (confirm('Are you sure you want to clear all data? This will delete all saved workouts.')) {
            this.workouts = [];
            this.clearForm();
            this.saveToSessionStorage();
            this.showNotification('All data cleared', 'info');
        }
    }

    addInitialSection() {
        if (document.querySelectorAll('.workout-section').length === 0) {
            this.addSection();
        }
    }

    addInitialWorkout(sectionId) {
        const section = document.querySelector(`[data-section-id="${sectionId}"]`);
        if (section) {
            const addBtn = section.querySelector('.add-workout-btn');
            if (addBtn) {
                this.addWorkout(addBtn);
            }
        }
    }

    addInitialExercise(workoutId) {
        const workout = document.querySelector(`[data-workout-id="${workoutId}"]`);
        if (workout) {
            const addBtn = workout.querySelector('.add-exercise-btn');
            if (addBtn) {
                this.addExercise(addBtn);
            }
        }
    }

    // Session Storage Management
    saveToSessionStorage() {
        sessionStorage.setItem('trainerWorkouts', JSON.stringify(this.workouts));
    }

    loadFromSessionStorage() {
        const stored = sessionStorage.getItem('trainerWorkouts');
        if (stored) {
            try {
                this.workouts = JSON.parse(stored);
            } catch (e) {
                console.error('Error loading workouts from session storage:', e);
                this.workouts = [];
            }
        }
    }

    // Display Page Functions
    loadWorkoutMenu() {
        const select = document.getElementById('menu-select');
        if (!select) return;

        select.innerHTML = '<option value="">Choose a workout menu...</option>';

        this.workouts.forEach(workout => {
            const option = document.createElement('option');
            option.value = workout.id;
            option.textContent = `${workout.className} - ${workout.coachName}`;
            select.appendChild(option);
        });
    }

    displayWorkout() {
        const select = document.getElementById('menu-select');
        if (!select) return;

        const workoutId = select.value;
        if (!workoutId) {
            this.showEmptyState();
            return;
        }

        const workout = this.workouts.find(w => w.id === workoutId);
        if (!workout) {
            this.showEmptyState();
            return;
        }

        this.currentWorkout = workout;
        this.renderWorkoutDisplay(workout);
    }

    showEmptyState() {
        document.getElementById('empty-state').style.display = 'block';
        document.getElementById('workout-display').style.display = 'none';
        this.currentWorkout = null;
    }

    renderWorkoutDisplay(workout) {
        document.getElementById('empty-state').style.display = 'none';
        document.getElementById('workout-display').style.display = 'block';

        // Set header information
        document.getElementById('display-class-name').textContent = workout.className;
        document.getElementById('display-coach-name').textContent = workout.coachName;
        document.getElementById('display-sections-count').textContent = `${workout.sections.length} sections`;

        // Calculate total duration
        const totalDuration = this.calculateTotalDuration(workout);
        document.getElementById('display-duration').textContent = totalDuration;

        // Generate section navigation
        this.generateSectionNavigation(workout.sections);

        // Render sections
        this.renderWorkoutSections(workout.sections);
    }

    calculateTotalDuration(workout) {
        let totalMinutes = 0;

        workout.sections.forEach(section => {
            section.workouts.forEach(workoutItem => {
                if (workoutItem.duration) {
                    // Try to extract minutes from duration string
                    const match = workoutItem.duration.match(/(\d+)\s*min/);
                    if (match) {
                        totalMinutes += parseInt(match[1]);
                    }
                }
            });
        });

        return `${totalMinutes} min`;
    }

    generateSectionNavigation(sections) {
        const navContainer = document.getElementById('section-nav-buttons');
        navContainer.innerHTML = '';

        sections.forEach((section, index) => {
            const button = document.createElement('button');
            button.className = 'nav-btn';
            button.textContent = section.name || `Section ${index + 1}`;
            button.onclick = () => this.scrollToSection(`section-display-${index}`);
            navContainer.appendChild(button);
        });
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    renderWorkoutSections(sections) {
        const container = document.getElementById('workout-sections');
        container.innerHTML = '';

        sections.forEach((section, index) => {
            const template = document.getElementById('section-display-template');
            const sectionElement = template.content.cloneNode(true);

            const sectionDiv = sectionElement.querySelector('.workout-section-display');
            sectionDiv.id = `section-display-${index}`;

            // Set section title
            sectionElement.querySelector('.section-title-display').textContent =
                section.name || `Section ${index + 1}`;

            // Set section stats
            sectionElement.querySelector('.workout-count').textContent = section.workouts.length;

            const sectionDuration = this.calculateSectionDuration(section);
            sectionElement.querySelector('.section-duration').textContent = sectionDuration;

            // Render workouts
            const workoutsContainer = sectionElement.querySelector('.section-workouts');
            section.workouts.forEach(workout => {
                if (workout.type) {
                    workoutsContainer.appendChild(this.createWorkoutDisplay(workout));
                }
            });

            container.appendChild(sectionElement);
        });
    }

    calculateSectionDuration(section) {
        let totalMinutes = 0;

        section.workouts.forEach(workout => {
            if (workout.duration) {
                const match = workout.duration.match(/(\d+)\s*min/);
                if (match) {
                    totalMinutes += parseInt(match[1]);
                }
            }
        });

        return `${totalMinutes} min`;
    }

    createWorkoutDisplay(workout) {
        const template = document.getElementById('workout-display-template');
        const workoutElement = template.content.cloneNode(true);

        // Set workout type
        workoutElement.querySelector('.workout-type').textContent = workout.type;

        // Set duration and rest
        workoutElement.querySelector('.duration').textContent = workout.duration;

        const restElement = workoutElement.querySelector('.rest');
        if (workout.rest && workout.rest.trim()) {
            restElement.style.display = 'inline';
            restElement.querySelector('.rest-time').textContent = workout.rest;
        }

        // Render exercises
        const exercisesGrid = workoutElement.querySelector('.exercises-grid');
        workout.exercises.forEach(exercise => {
            if (exercise.name) {
                exercisesGrid.appendChild(this.createExerciseDisplay(exercise));
            }
        });

        return workoutElement;
    }

    createExerciseDisplay(exercise) {
        const template = document.getElementById('exercise-display-template');
        const exerciseElement = template.content.cloneNode(true);

        exerciseElement.querySelector('.exercise-name').textContent = exercise.name;

        const details = [];
        if (exercise.sets) details.push(exercise.sets);
        if (exercise.reps) details.push(exercise.reps);
        if (exercise.weight) {
            details.push(exercise.weight);
            exerciseElement.querySelector('.weight').style.display = 'inline';
        }

        exerciseElement.querySelector('.exercise-details').innerHTML = details.join(' • ');

        return exerciseElement;
    }

    deleteCurrentWorkout() {
        if (!this.currentWorkout) {
            this.showNotification('No workout selected', 'error');
            return;
        }

        if (confirm(`Are you sure you want to delete "${this.currentWorkout.className}"?`)) {
            this.workouts = this.workouts.filter(w => w.id !== this.currentWorkout.id);
            this.saveToSessionStorage();
            this.loadWorkoutMenu();
            this.showEmptyState();
            this.showNotification('Workout deleted', 'success');
        }
    }

    // Timer Functions
    startTimer() {
        if (!this.currentWorkout) {
            this.showNotification('Please select a workout first', 'error');
            return;
        }

        document.getElementById('timer-modal').style.display = 'flex';
        this.resetTimer();
    }

    closeTimer() {
        document.getElementById('timer-modal').style.display = 'none';
        this.stopTimer();
    }

    startTimerSession() {
        if (this.timer) {
            this.pauseTimer();
            return;
        }

        document.getElementById('timer-start').style.display = 'none';
        document.getElementById('timer-pause').style.display = 'inline-flex';

        this.timer = setInterval(() => {
            this.timerSeconds++;
            this.updateTimerDisplay();
        }, 1000);
    }

    pauseTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

        document.getElementById('timer-start').style.display = 'inline-flex';
        document.getElementById('timer-pause').style.display = 'none';
    }

    stopTimer() {
        this.pauseTimer();
        this.timerSeconds = 0;
        this.updateTimerDisplay();
    }

    resetTimer() {
        this.stopTimer();
        document.getElementById('timer-current').textContent = 'Ready to start';
        document.getElementById('progress-fill').style.width = '0%';
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timerSeconds / 60);
        const seconds = this.timerSeconds % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        document.getElementById('timer-time').textContent = timeString;
        document.getElementById('timer-current').textContent = 'Workout in progress';

        // Update progress bar (example: 30 minute workout)
        const totalSeconds = 30 * 60; // 30 minutes
        const progress = Math.min((this.timerSeconds / totalSeconds) * 100, 100);
        document.getElementById('progress-fill').style.width = `${progress}%`;
    }

    // Utility Functions
    printWorkout() {
        if (!this.currentWorkout) {
            this.showNotification('No workout selected', 'error');
            return;
        }

        window.print();
    }

    shareWorkout() {
        if (!this.currentWorkout) {
            this.showNotification('No workout selected', 'error');
            return;
        }

        const shareText = `Check out this workout: ${this.currentWorkout.className} by ${this.currentWorkout.coachName}`;

        if (navigator.share) {
            navigator.share({
                title: this.currentWorkout.className,
                text: shareText
            });
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('Workout details copied to clipboard', 'success');
            });
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add to page
        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Hide after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Global functions for HTML onclick handlers
let trainerMenuSystem;

function addSection() {
    trainerMenuSystem.addSection();
}

function removeSection(button) {
    trainerMenuSystem.removeSection(button);
}

function toggleSection(button) {
    trainerMenuSystem.toggleSection(button);
}

function addWorkout(button) {
    trainerMenuSystem.addWorkout(button);
}

function removeWorkout(button) {
    trainerMenuSystem.removeWorkout(button);
}

function updateWorkoutFields(select) {
    trainerMenuSystem.updateWorkoutFields(select);
}

function addExercise(button) {
    trainerMenuSystem.addExercise(button);
}

function removeExercise(button) {
    trainerMenuSystem.removeExercise(button);
}

function updatePreview() {
    trainerMenuSystem.updatePreview();
}

function saveWorkout() {
    trainerMenuSystem.saveWorkout();
}

function clearAllData() {
    trainerMenuSystem.clearAllData();
}

function displayWorkout() {
    trainerMenuSystem.displayWorkout();
}

function deleteCurrentWorkout() {
    trainerMenuSystem.deleteCurrentWorkout();
}

function printWorkout() {
    trainerMenuSystem.printWorkout();
}

function shareWorkout() {
    trainerMenuSystem.shareWorkout();
}

function startTimer() {
    trainerMenuSystem.startTimer();
}

function closeTimer() {
    trainerMenuSystem.closeTimer();
}

function startTimerSession() {
    trainerMenuSystem.startTimerSession();
}

function pauseTimer() {
    trainerMenuSystem.pauseTimer();
}

function resetTimer() {
    trainerMenuSystem.resetTimer();
}

// Initialize system when page loads
document.addEventListener('DOMContentLoaded', function() {
    trainerMenuSystem = new TrainerMenuSystem();

    // If on display page, load workout menu
    if (document.getElementById('menu-select')) {
        trainerMenuSystem.loadWorkoutMenu();
    }
});