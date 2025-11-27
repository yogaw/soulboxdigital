// WORKING TRAINER MENU SYSTEM - SIMPLE AND RELIABLE
class WorkingTrainerSystem {
    constructor() {
        this.workouts = [];
        this.currentWorkout = null;
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        console.log('🚀 Working Trainer System initialized');
    }

    setupEventListeners() {
        // Coach name change
        const coachSelect = document.getElementById('coach-name');
        if (coachSelect) {
            coachSelect.addEventListener('change', this.handleCoachChange.bind(this));
        }

        // Auto update preview
        document.addEventListener('input', this.debounce(() => {
            this.updatePreview();
        }, 300));
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

        const section = this.createSectionElement();
        container.appendChild(section);
        this.addExerciseToSection(section);
        this.updatePreview();
    }

    createSectionElement() {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'workout-section';
        sectionDiv.innerHTML = `
            <div class="section-controls">
                <div class="section-info">
                    <input type="text" class="section-name-input" placeholder="Section name (e.g., Warm-up, Main Workout)" onchange="workingTrainerSystem.updatePreview()">
                    <button class="remove-section-btn" onclick="workingTrainerSystem.removeSection(this)">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="section-content">
                <div class="exercises-container">
                    <div class="exercises-header">
                        <span>Exercises</span>
                        <button class="add-exercise-btn" onclick="workingTrainerSystem.addExerciseToSection(this.closest('.workout-section'))">
                            <i class="fas fa-plus"></i>
                            Add Exercise
                        </button>
                    </div>
                    <div class="exercises-list">
                        <!-- Exercises will be added here -->
                    </div>
                </div>
            </div>
        `;
        return sectionDiv;
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

    // Exercise Management
    addExerciseToSection(section) {
        const exercisesList = section.querySelector('.exercises-list');
        const exercise = this.createExerciseElement();
        exercisesList.appendChild(exercise);
        this.updatePreview();
    }

    createExerciseElement() {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        exerciseDiv.innerHTML = `
            <div class="exercise-main">
                <div class="exercise-row">
                    <div class="exercise-name-group">
                        <input type="text" class="exercise-name" placeholder="Exercise name" onchange="workingTrainerSystem.updatePreview()">
                        <button class="remove-exercise-btn" onclick="workingTrainerSystem.removeExercise(this)">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="exercise-details">
                    <input type="text" class="exercise-sets" placeholder="Sets (e.g., 3, 5 rounds, 10 min EMOM)" onchange="workingTrainerSystem.updatePreview()">
                    <input type="text" class="exercise-reps" placeholder="Reps/Duration (e.g., 12, 45 sec, 1 min)" onchange="workingTrainerSystem.updatePreview()">
                    <input type="text" class="exercise-weight" placeholder="Weight (optional)" onchange="workingTrainerSystem.updatePreview()">
                </div>
            </div>
        `;
        return exerciseDiv;
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

        document.querySelectorAll('.workout-section').forEach((section) => {
            const sectionName = section.querySelector('.section-name-input')?.value || 'Untitled Section';
            const sectionData = {
                name: sectionName,
                exercises: []
            };

            section.querySelectorAll('.exercise-item').forEach((exercise) => {
                const exerciseData = {
                    name: exercise.querySelector('.exercise-name')?.value || '',
                    sets: exercise.querySelector('.exercise-sets')?.value || '',
                    reps: exercise.querySelector('.exercise-reps')?.value || '',
                    weight: exercise.querySelector('.exercise-weight')?.value || ''
                };

                if (exerciseData.name.trim()) {
                    sectionData.exercises.push(exerciseData);
                }
            });

            if (sectionData.exercises.length > 0 || sectionName !== 'Untitled Section') {
                data.sections.push(sectionData);
            }
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
                    <div class="preview-exercises">
            `;

            section.exercises.forEach(exercise => {
                const details = [];
                if (exercise.sets) details.push(exercise.sets);
                if (exercise.reps) details.push(exercise.reps);
                if (exercise.weight) details.push(exercise.weight);

                html += `
                    <div class="preview-exercise">
                        <div class="exercise-name">${exercise.name}</div>
                        <div class="exercise-details">${details.join(' • ')}</div>
                    </div>
                `;
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

    // Save Workout
    saveWorkout() {
        const workoutData = this.collectWorkoutData();

        if (!workoutData.className) {
            this.showNotification('Please enter a class name', 'error');
            return;
        }

        if (workoutData.sections.length === 0) {
            this.showNotification('Please add at least one section with exercises', 'error');
            return;
        }

        const workout = {
            id: Date.now().toString(),
            ...workoutData,
            createdAt: new Date().toISOString()
        };

        this.workouts.push(workout);
        this.saveToStorage();

        this.showNotification(`"${workoutData.className}" saved successfully!`, 'success');

        setTimeout(() => {
            if (confirm(`Workout saved! Would you like to view it now?`)) {
                window.location.href = 'trainer-menu-display.html';
            }
        }, 1000);

        this.clearForm();
    }

    clearForm() {
        document.getElementById('class-name').value = '';
        document.getElementById('coach-name').value = '';
        document.getElementById('custom-coach-name').value = '';
        document.getElementById('custom-coach-group').style.display = 'none';

        const container = document.getElementById('sections-container');
        container.innerHTML = '';
        document.getElementById('empty-sections').style.display = 'block';

        this.addSection();
        this.updatePreview();
    }

    // Storage Management
    saveToStorage() {
        try {
            sessionStorage.setItem('workingTrainerWorkouts', JSON.stringify(this.workouts));
            console.log('✅ Workouts saved to storage:', this.workouts.length);
        } catch (e) {
            console.error('❌ Error saving to storage:', e);
            this.showNotification('Error saving workout', 'error');
        }
    }

    loadFromStorage() {
        try {
            const stored = sessionStorage.getItem('workingTrainerWorkouts');
            if (stored) {
                this.workouts = JSON.parse(stored);
                console.log('✅ Workouts loaded from storage:', this.workouts.length);
            } else {
                console.log('ℹ️ No workouts found in storage');
                this.workouts = [];
            }
        } catch (e) {
            console.error('❌ Error loading from storage:', e);
            this.workouts = [];
        }
    }

    // Display Page Functions
    loadWorkoutMenu() {
        const select = document.getElementById('menu-select');
        if (!select) return;

        console.log('🔄 Loading workout menu...');

        select.innerHTML = '<option value="">Choose a workout menu...</option>';

        if (this.workouts.length === 0) {
            console.log('⚠️ No workouts found');
            const option = document.createElement('option');
            option.value = "";
            option.textContent = "No saved workouts yet";
            option.disabled = true;
            select.appendChild(option);
            return;
        }

        const sortedWorkouts = [...this.workouts].sort((a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );

        sortedWorkouts.forEach((workout) => {
            const option = document.createElement('option');
            option.value = workout.id;
            option.textContent = `${workout.className} - ${workout.coachName}`;
            select.appendChild(option);
            console.log(`✅ Added workout: ${workout.className}`);
        });

        console.log(`✅ Loaded ${this.workouts.length} workouts`);
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
        this.renderWorkout(workout);
    }

    showEmptyState() {
        document.getElementById('empty-state').style.display = 'block';
        document.getElementById('workout-display').style.display = 'none';
        this.currentWorkout = null;
    }

    renderWorkout(workout) {
        document.getElementById('empty-state').style.display = 'none';
        document.getElementById('workout-display').style.display = 'block';

        document.getElementById('display-class-name').textContent = workout.className;
        document.getElementById('display-coach-name').textContent = workout.coachName;
        document.getElementById('display-sections-count').textContent = `${workout.sections.length} sections`;

        const totalDuration = this.calculateTotalDuration(workout);
        document.getElementById('display-duration').textContent = totalDuration;

        const container = document.getElementById('workout-sections');
        container.innerHTML = '';

        workout.sections.forEach((section, index) => {
            const sectionHTML = `
                <div class="workout-section-display">
                    <div class="section-header-display">
                        <h2 class="section-title-display">${section.name}</h2>
                        <div class="section-stats">
                            <span class="stat-item">
                                <i class="fas fa-dumbbell"></i>
                                <span class="workout-count">${section.exercises.length}</span> workouts
                            </span>
                        </div>
                    </div>
                    <div class="section-workouts">
                        ${section.exercises.map(exercise => `
                            <div class="exercise-display">
                                <div class="exercise-name">${exercise.name}</div>
                                <div class="exercise-details">
                                    ${[exercise.sets, exercise.reps, exercise.weight].filter(Boolean).join(' • ')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            container.innerHTML += sectionHTML;
        });
    }

    calculateTotalDuration(workout) {
        let totalMinutes = 0;
        workout.sections.forEach(section => {
            section.exercises.forEach(exercise => {
                if (exercise.sets) {
                    const match = exercise.sets.match(/(\d+)\s*min/);
                    if (match) {
                        totalMinutes += parseInt(match[1]);
                    } else {
                        totalMinutes += 2;
                    }
                }
            });
        });
        return totalMinutes > 0 ? `${totalMinutes} min` : 'Various durations';
    }

    deleteCurrentWorkout() {
        if (!this.currentWorkout) {
            this.showNotification('No workout selected', 'error');
            return;
        }

        if (confirm(`Are you sure you want to delete "${this.currentWorkout.className}"?`)) {
            this.workouts = this.workouts.filter(w => w.id !== this.currentWorkout.id);
            this.saveToStorage();
            this.loadWorkoutMenu();
            this.showEmptyState();
            this.showNotification('Workout deleted', 'success');
        }
    }

    // Utility Functions
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = message.replace(/\n/g, '<br>');

        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgba(33, 33, 33, 0.9)',
            border: '1px solid #444',
            borderRadius: '8px',
            padding: '16px 20px',
            color: '#FFFFFF',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: '2000',
            maxWidth: '400px',
            lineHeight: '1.4',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease'
        });

        if (type === 'success') {
            notification.style.borderLeft = '4px solid #4caf50';
        } else if (type === 'error') {
            notification.style.borderLeft = '4px solid #f44336';
        } else {
            notification.style.borderLeft = '4px solid #2196f3';
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
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

// Global instance
let workingTrainerSystem;

// Global functions for HTML onclick handlers
function addSection() {
    workingTrainerSystem.addSection();
}

function removeSection(button) {
    workingTrainerSystem.removeSection(button);
}

function updatePreview() {
    workingTrainerSystem.updatePreview();
}

function saveWorkout() {
    workingTrainerSystem.saveWorkout();
}

function displayWorkout() {
    workingTrainerSystem.displayWorkout();
}

function refreshWorkoutMenu() {
    workingTrainerSystem.loadFromStorage();
    workingTrainerSystem.loadWorkoutMenu();
    workingTrainerSystem.showNotification('Workout list refreshed', 'success');
}

function deleteCurrentWorkout() {
    workingTrainerSystem.deleteCurrentWorkout();
}

function clearAllData() {
    if (confirm('Are you sure you want to clear all data? This will delete all saved workouts.')) {
        workingTrainerSystem.workouts = [];
        workingTrainerSystem.saveToStorage();
        workingTrainerSystem.showNotification('All data cleared', 'info');
        workingTrainerSystem.loadWorkoutMenu();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Working Trainer System...');
    workingTrainerSystem = new WorkingTrainerSystem();

    // Check if we're on display page
    if (document.getElementById('menu-select')) {
        console.log('📋 Display page detected');
        workingTrainerSystem.loadWorkoutMenu();

        // Check if user just saved a workout
        const justSaved = sessionStorage.getItem('justSavedWorkout');
        if (justSaved === 'true') {
            setTimeout(() => {
                workingTrainerSystem.showNotification('Great! Your workout has been saved and should appear in the dropdown above.', 'success');
            }, 1000);
            sessionStorage.removeItem('justSavedWorkout');
        }
    } else {
        console.log('📝 Input page detected');
        // Add initial section if none exists
        if (document.querySelectorAll('.workout-section').length === 0) {
            workingTrainerSystem.addSection();
        }
    }
});