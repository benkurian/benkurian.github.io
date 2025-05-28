                function generateTranscript() {
            // Get current GPA values
            const weightedGPA = document.getElementById('gpa-result').textContent;
            const unweightedGPA = document.getElementById('unweighted-gpa-result').textContent;
            const currentDate = new Date().toLocaleDateString();

            // Create transcript header
            let transcriptHTML = `
                <div class="transcript-container container mt-4">
                <div class="text-center mb-4">
                    <h2>GPA Report</h2>
                    <p>Generated on ${currentDate} by Olentangy GPA Calculator</p>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6">
                    <h4>Weighted GPA: <span class="badge bg-primary">${weightedGPA}</span></h4>
                    </div>
                    <div class="col-md-6">
                    <h4>Unweighted GPA: <span class="badge bg-secondary">${unweightedGPA}</span></h4>
                    </div>
                </div>`;

            // Process each year
            document.querySelectorAll('.year-divider').forEach(yearDiv => {
                const year = yearDiv.getAttribute('data-year');
                const included = yearDiv.querySelector('.form-check-input').checked;
            
            transcriptHTML += `
            <div class="year-section mb-4 course-list">
                <h3 class="p-2 bg-light">${year} ${included ? '' : '<span class="badge bg-warning text-dark">Excluded</span>'}</h3>
                <table class="table table-bordered">
                <thead>
                    <tr>
                    <th>Course</th>
                    <th>Grade</th>
                    <th>Weight</th>
                    <th>Credits</th>
                    </tr>
                </thead>
                <tbody>`;

            // Process each course
            yearDiv.querySelectorAll('.course-card').forEach(course => {
            const id = course.id.split('-')[1];
            const courseIncluded = course.querySelector('.form-check-input').checked;
            const courseName = document.getElementById(`course-name-${id}`).value;
            const grade = document.getElementById(`grade-${id}`).options[document.getElementById(`grade-${id}`).selectedIndex].text.split(' ')[0];
            const weight = document.getElementById(`weight-${id}`).value === '1.25' ? 'AP/CCP' : 'Regular';
            const credits = document.getElementById(`credits-${id}`).value;

            transcriptHTML += `
                    <tr class="${courseIncluded ? '' : 'text-muted'}">
                    <td>${courseName} ${courseIncluded ? '' : '<span class="badge bg-secondary">Excluded</span>'}</td>
                    <td>${grade}</td>
                    <td>${weight}</td>
                    <td>${credits}</td>
                    </tr>`;
            });

            transcriptHTML += `
                </tbody>
                </table>
            </div>`;
            });

            // Close container
            transcriptHTML += `
                <div class="footer mt-4 text-muted text-center">
                    <p>Created by Ben Kurian &copy; 2025</p>
                </div>
                </div>`;

            // Open print window
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>GPA Report</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                    <style>
                    .transcript-container { max-width: 800px; margin: 0 auto; }
                    table { width: 100%; margin-bottom: 1rem; border-collapse: collapse; }
                    th { background-color: #f8f9fa; text-align: left; padding: 8px; border: 1px solid #ddd; }
                    td { padding: 8px; border: 1px solid #ddd; }
                    .year-section { margin-bottom: 2rem; }
                    @page { size: auto; margin: 15mm; }
                    .text-muted { color: #6c757d !important; }
                    </style>
                </head>
                <body>
                    ${transcriptHTML}
                    <script>
                    setTimeout(() => {
                        window.print();
                        window.close();
                    }, 300);
                    </script>
                </body>
                </html>
            `);
            printWindow.document.close();
        }

        let courseCount = 0;
        let draggedItem = null;
        let tooltipInstances = [];
        let undoStack = [];
        let redoStack = [];
        let currentYearToRemove = null;
        
        // State management for undo/redo
        function saveState() {
            const courseContainer = document.getElementById('course-container');
            const courses = courseContainer.querySelectorAll('.course-card');
            const years = [...new Set(Array.from(courses).map(course => course.getAttribute('data-year')))];
            
            const state = {
                years: years.map(year => {
                    return {
                        year: year,
                        included: document.getElementById(`toggle-year-${year}`).checked,
                        courses: Array.from(document.querySelectorAll(`[data-year="${year}"].course-card`)).map(course => {
                            const id = course.id.split('-')[1];
                            return {
                                name: document.getElementById(`course-name-${id}`).value,
                                grade: document.getElementById(`grade-${id}`).value,
                                weight: document.getElementById(`weight-${id}`).value,
                                credits: document.getElementById(`credits-${id}`).value,
                                included: document.getElementById(`include-${id}`).checked,
                                id: id
                            };
                        })
                    };
                }),
                courseCount: courseCount
            };
            
            undoStack.push(JSON.stringify(state));
            redoStack = []; // Clear redo stack when new action is performed
            updateUndoRedoButtons();
        }
        
        function restoreState(state) {
            const data = JSON.parse(state);
            courseCount = data.courseCount || 0;
            
            // Clear existing courses first
            document.getElementById('course-container').innerHTML = '';
            
            // Add imported courses
            data.years.forEach(yearData => {
                if (!yearData.year || !yearData.courses || !Array.isArray(yearData.courses)) return;
                
                // Create the year divider
                const yearDivider = createYearDivider(yearData.year);
                document.getElementById('course-container').appendChild(yearDivider);
                
                // Set the include state for the year
                document.getElementById(`toggle-year-${yearData.year}`).checked = yearData.included !== false;
                
                // Add courses
                yearData.courses.forEach(courseData => {
                    const courseDiv = document.createElement('div');
                    courseDiv.className = 'card mb-3 course-card';
                    courseDiv.id = `course-${courseData.id}`;
                    courseDiv.setAttribute('draggable', 'true');
                    courseDiv.setAttribute('data-year', yearData.year);

                    courseDiv.innerHTML = `
                        <div class="card-body">
                            <div class="row g-3 align-items-center">
                                <div class="col-md-1">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="include-${courseData.id}" ${courseData.included !== false ? 'checked' : ''}
                                               onchange="calculateGPA(); saveState()">
                                        <label class="form-check-label" for="include-${courseData.id}"></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label">Course Name:</label>
                                    <input type="text" class="form-control course-name" id="course-name-${courseData.id}" 
                                           placeholder="e.g., AP Biology" value="${courseData.name || ''}" 
                                           oninput="checkForCourse(this, ${courseData.id}); saveState()">
                                </div>
                                <div class="col-md-2">
                                    <label class="form-label">Grade:</label>
                                    <select class="form-select" id="grade-${courseData.id}" onchange="calculateGPA(); saveState()">
                                        <option value="4.000" ${courseData.grade === "4.000" ? 'selected' : ''}>A (93-100)</option>
                                        <option value="3.670" ${courseData.grade === "3.670" ? 'selected' : ''}>A- (90-92)</option>
                                        <option value="3.330" ${courseData.grade === "3.330" ? 'selected' : ''}>B+ (87-89)</option>
                                        <option value="3.000" ${courseData.grade === "3.000" ? 'selected' : ''}>B (83-86)</option>
                                        <option value="2.670" ${courseData.grade === "2.670" ? 'selected' : ''}>B- (80-82)</option>
                                        <option value="2.330" ${courseData.grade === "2.330" ? 'selected' : ''}>C+ (77-79)</option>
                                        <option value="2.000" ${courseData.grade === "2.000" ? 'selected' : ''}>C (73-76)</option>
                                        <option value="1.670" ${courseData.grade === "1.670" ? 'selected' : ''}>C- (70-72)</option>
                                        <option value="1.330" ${courseData.grade === "1.330" ? 'selected' : ''}>D+ (67-69)</option>
                                        <option value="1.000" ${courseData.grade === "1.000" ? 'selected' : ''}>D (63-66)</option>
                                        <option value="0.670" ${courseData.grade === "0.670" ? 'selected' : ''}>D- (60-62)</option>
                                        <option value="0.000" ${courseData.grade === "0.000" ? 'selected' : ''}>F (59-Below)</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label class="form-label">Weighting:</label>
                                    <select class="form-select" id="weight-${courseData.id}" onchange="calculateGPA(); saveState()">
                                        <option value="1.0" ${courseData.weight === "1.0" ? 'selected' : ''}>Regular/Honors (4.0 scale)</option>
                                        <option value="1.25" ${courseData.weight === "1.25" ? 'selected' : ''}>AP/CCP (5.0 scale)</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label class="form-label">Credits:</label>
                                    <select class="form-select" id="credits-${courseData.id}" onchange="calculateGPA(); saveState()">
                                        <option value="1.0" ${courseData.credits === "1.0" ? 'selected' : ''}>Year-long (1.0 credit)</option>
                                        <option value="0.5" ${courseData.credits === "0.5" ? 'selected' : ''}>Semester (0.5 credit)</option>
                                        <option value="0.25" ${courseData.credits === "0.25" ? 'selected' : ''}>PE (0.25 credit)</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <div class="course-actions">
                                        <button class="btn btn-outline-danger btn-sm mt-3" onclick="removeCourse(${courseData.id})">
                                            <i class="bi bi-trash"></i> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    // Add drag events
                    courseDiv.addEventListener('dragstart', handleDragStart);
                    courseDiv.addEventListener('dragend', handleDragEnd);

                    // Find the year's course container and append the course
                    const yearCoursesContainer = document.querySelector(`#year-${yearData.year} .year-courses`);
                    yearCoursesContainer.appendChild(courseDiv);
                });
            });
            
            sortYearDividers();
            calculateGPA();
            initializeTooltips();
        }
        
        function undoAction() {
            if (undoStack.length > 0) {
                const currentState = undoStack.pop();
                redoStack.push(currentState);
                if (undoStack.length > 0) {
                    restoreState(undoStack[undoStack.length - 1]);
                } else {
                    // If we've undone everything, show empty state
                    document.getElementById('course-container').innerHTML = '';
                    courseCount = 0;
                    document.getElementById('gpa-result').textContent = '0.000';
                    document.getElementById('unweighted-gpa-result').textContent = '0.000';
                    const emptyState = document.querySelector('.empty-state');
                    if (emptyState) {
                        emptyState.style.display = 'block';
                    }
                }
                updateUndoRedoButtons();
            }
        }
        
        function redoAction() {
            if (redoStack.length > 0) {
                const state = redoStack.pop();
                undoStack.push(state);
                restoreState(state);
                updateUndoRedoButtons();
            }
        }
        
        function updateUndoRedoButtons() {
            document.getElementById('undoBtn').disabled = undoStack.length <= 1;
            document.getElementById('redoBtn').disabled = redoStack.length === 0;
        }

        // Initialize the year dropdown with past and future years
        function initializeYearDropdown() {
            const yearSelect = document.getElementById('year-select');
            const currentYear = new Date().getFullYear();
            
            // Clear existing options
            yearSelect.innerHTML = '';
            
            // Add default academic years
            for (let i = -2; i <= 2; i++) { // Reduced range to just nearby years
                const year = currentYear + i;
                const option = document.createElement('option');
                option.value = `${year}-${year + 1}`;
                option.textContent = `${year}-${year + 1}`;
                if (i === 0) option.selected = true;
                yearSelect.appendChild(option);
            }
            
            // Add a custom option placeholder
            const customOption = document.createElement('option');
            customOption.disabled = true;
            customOption.textContent = '── Or add custom ──';
            yearSelect.appendChild(customOption);
        }

        // Show Bootstrap alert toast
        function showAlert(message, type = 'danger', duration = 5000) {
            const toastContainer = document.getElementById('alertToast');
            const alertId = 'alert-' + Date.now();
            
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
            alertDiv.role = 'alert';
            alertDiv.id = alertId;
            alertDiv.innerHTML = `
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
            
            toastContainer.appendChild(alertDiv);
            
            // Auto-dismiss after duration
            if (duration > 0) {
                setTimeout(() => {
                    const alert = document.getElementById(alertId);
                    if (alert) {
                        const bsAlert = new bootstrap.Alert(alert);
                        bsAlert.close();
                    }
                }, duration);
            }
            
            return alertId;
        }

        function getCurrentYear() {
            return document.getElementById('year-select').value;
        }

        function addCourse(courseData = null, year = null) {
            // Hide empty state if it exists
            const emptyState = document.querySelector('.empty-state');
            if (emptyState) {
                emptyState.style.display = 'none';
            }

            courseCount++;
            const courseContainer = document.getElementById('course-container');
            const targetYear = year || getCurrentYear();

            // Find or create year divider
            let yearDivider = document.getElementById(`year-${targetYear}`);
            if (!yearDivider) {
                yearDivider = createYearDivider(targetYear);
                courseContainer.appendChild(yearDivider);
                sortYearDividers();
            } else {
                // If year exists but is collapsed, uncollapse it
                const coursesContainer = document.querySelector(`#year-courses-${targetYear}`);
                if (!coursesContainer.classList.contains('show')) {
                    toggleYearCollapse(targetYear);
                }
            }

            const courseDiv = document.createElement('div');
            courseDiv.className = 'card mb-3 course-card';
            courseDiv.id = `course-${courseCount}`;
            courseDiv.setAttribute('draggable', 'true');
            courseDiv.setAttribute('data-year', targetYear);

            courseDiv.innerHTML = `
                <div class="card-body">
                    <div class="row g-3 align-items-center">
                        <div class="col-md-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="include-${courseCount}" checked
                                       onchange="calculateGPA(); saveState()">
                                <label class="form-check-label" for="include-${courseCount}"></label>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Course Name:</label>
                            <input type="text" class="form-control course-name" id="course-name-${courseCount}" 
                                   placeholder="e.g., AP Biology" value="${courseData?.name || ''}" 
                                   oninput="checkForCourse(this, ${courseCount}); saveState()">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">Grade:</label>
                            <select class="form-select" id="grade-${courseCount}" onchange="calculateGPA(); saveState()">
                                <option value="4.000" ${courseData?.grade === "4.000" ? 'selected' : ''}>A (93-100)</option>
                                <option value="3.670" ${courseData?.grade === "3.670" ? 'selected' : ''}>A- (90-92)</option>
                                <option value="3.330" ${courseData?.grade === "3.330" ? 'selected' : ''}>B+ (87-89)</option>
                                <option value="3.000" ${courseData?.grade === "3.000" ? 'selected' : ''}>B (83-86)</option>
                                <option value="2.670" ${courseData?.grade === "2.670" ? 'selected' : ''}>B- (80-82)</option>
                                <option value="2.330" ${courseData?.grade === "2.330" ? 'selected' : ''}>C+ (77-79)</option>
                                <option value="2.000" ${courseData?.grade === "2.000" ? 'selected' : ''}>C (73-76)</option>
                                <option value="1.670" ${courseData?.grade === "1.670" ? 'selected' : ''}>C- (70-72)</option>
                                <option value="1.330" ${courseData?.grade === "1.330" ? 'selected' : ''}>D+ (67-69)</option>
                                <option value="1.000" ${courseData?.grade === "1.000" ? 'selected' : ''}>D (63-66)</option>
                                <option value="0.670" ${courseData?.grade === "0.670" ? 'selected' : ''}>D- (60-62)</option>
                                <option value="0.000" ${courseData?.grade === "0.000" ? 'selected' : ''}>F (59-Below)</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">Weighting:</label>
                            <select class="form-select" id="weight-${courseCount}" onchange="calculateGPA(); saveState()">
                                <option value="1.0" ${courseData?.weight === "1.0" ? 'selected' : ''}>Regular/Honors (4.0 scale)</option>
                                <option value="1.25" ${courseData?.weight === "1.25" ? 'selected' : ''}>AP/CCP (5.0 scale)</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">Credits:</label>
                            <select class="form-select" id="credits-${courseCount}" onchange="calculateGPA(); saveState()">
                                <option value="1.0" ${courseData?.credits === "1.0" ? 'selected' : ''}>Year-long (1.0 credit)</option>
                                <option value="0.5" ${courseData?.credits === "0.5" ? 'selected' : ''}>Semester (0.5 credit)</option>
                                <option value="0.25" ${courseData?.credits === "0.25" ? 'selected' : ''}>PE (0.25 credit)</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <div class="course-actions">
                                <button class="btn btn-outline-danger btn-sm mt-3" onclick="removeCourse(${courseCount})">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Add drag events
            courseDiv.addEventListener('dragstart', handleDragStart);
            courseDiv.addEventListener('dragend', handleDragEnd);

            // Find the year's course container and append the course
            const yearCoursesContainer = document.querySelector(`#year-${targetYear} .year-courses`);
            yearCoursesContainer.appendChild(courseDiv);
            
            // Set initial state if provided
            if (courseData?.included !== undefined) {
                document.getElementById(`include-${courseCount}`).checked = courseData.included;
            }
            
            // Initialize tooltips for this course
            initializeTooltips();
            
            // Calculate GPA immediately
            calculateGPA();
            
            // Save state for undo/redo
            saveState();
        }

        function createYearDivider(year) {
            const divider = document.createElement('div');
            divider.className = 'year-divider';
            divider.id = `year-${year}`;
            divider.setAttribute('data-year', year);
            
            divider.innerHTML = `
                <div class="year-header d-flex justify-content-between align-items-center" onclick="toggleYearCollapse('${year}')">
                    <h3 class="mb-0">${year}</h3>
                    <div>
                        <div class="form-check form-switch d-inline-block me-3">
                            <input class="form-check-input" type="checkbox" id="toggle-year-${year}" checked 
                                   onchange="toggleYear('${year}', this.checked); saveState()" onclick="event.stopPropagation()">
                            <label class="form-check-label" for="toggle-year-${year}">Include</label>
                        </div>
                        <button class="btn btn-sm btn-outline-primary me-2" onclick="event.stopPropagation(); addCourse(null, '${year}')">
                            <i class="bi bi-plus-circle"></i> Course
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="event.stopPropagation(); showRemoveYearModal('${year}')">
                            <i class="bi bi-trash"></i> Remove
                        </button>
                        <button class="btn btn-sm btn-outline-secondary ms-2" onclick="event.stopPropagation(); toggleYearCollapse('${year}')">
                            <i class="bi bi-chevron-down collapse-icon"></i>
                        </button>
                    </div>
                </div>
                <div class="year-courses collapse show" id="year-courses-${year}">
                    <!-- Courses will be added here -->
                </div>
            `;
            
            return divider;
        }

        function toggleYearCollapse(year) {
            const yearDivider = document.getElementById(`year-${year}`);
            const coursesContainer = document.querySelector(`#year-courses-${year}`);
            const collapseIcon = document.querySelector(`#year-${year} .collapse-icon`);
            
            if (coursesContainer.classList.contains('show')) {
                coursesContainer.classList.remove('show');
                yearDivider.classList.add('collapsed');
                collapseIcon.classList.remove('bi-chevron-down');
                collapseIcon.classList.add('bi-chevron-up');
            } else {
                coursesContainer.classList.add('show');
                yearDivider.classList.remove('collapsed');
                collapseIcon.classList.remove('bi-chevron-up');
                collapseIcon.classList.add('bi-chevron-down');
            }
        }

        function sortYearDividers() {
            const container = document.getElementById('course-container');
            const dividers = Array.from(container.querySelectorAll('.year-divider'));
            
            if (dividers.length === 0) {
                // Show empty state if no years exist
                const emptyState = document.querySelector('.empty-state');
                if (emptyState) {
                    emptyState.style.display = 'block';
                }
                return;
            }
            
            dividers.sort((a, b) => {
                const yearA = a.getAttribute('data-year').split('-')[0];
                const yearB = b.getAttribute('data-year').split('-')[0];
                return parseInt(yearB) - parseInt(yearA); // Sort newest to oldest
            });
            
            // Remove all dividers and re-add in sorted order
            dividers.forEach(divider => divider.remove());
            dividers.forEach(divider => container.appendChild(divider));
        }

        function addYearDivider() {
            const year = getCurrentYear();
            if (!document.getElementById(`year-${year}`)) {
                const yearDivider = createYearDivider(year);
                document.getElementById('course-container').appendChild(yearDivider);
                sortYearDividers();
                addCourse(null, year); // Add a default course when creating a new year
            } else {
                showAlert(`The ${year} term already exists`, 'info');
            }
        }

        function showRemoveYearModal(year) {
            currentYearToRemove = year;
            document.getElementById('removeYearModalTitle').textContent = `Remove ${year}?`;
            document.getElementById('removeYearModalBody').innerHTML = 
                `<p>Are you sure you want to remove the ${year} term and all its courses?</p>`;
            
            const modal = new bootstrap.Modal(document.getElementById('removeYearModal'));
            modal.show();
        }

        function performRemoveYear() {
            if (currentYearToRemove) {
                document.getElementById(`year-${currentYearToRemove}`).remove();
                sortYearDividers();
                calculateGPA();
                saveState();
                
                const modal = bootstrap.Modal.getInstance(document.getElementById('removeYearModal'));
                modal.hide();
                currentYearToRemove = null;
            }
        }

        function toggleYear(year, include) {
            const courses = document.querySelectorAll(`[data-year="${year}"].course-card`);
            courses.forEach(course => {
                const id = course.id.split('-')[1];
                document.getElementById(`include-${id}`).checked = include;
            });
            calculateGPA();
        }

        function checkForCourse(input, courseId) {
            if (input.value.toUpperCase().startsWith("AP ")) {
                document.getElementById(`weight-${courseId}`).value = "1.25";
                calculateGPA();
            } else if (input.value.toUpperCase().startsWith("PE")) {
                document.getElementById(`weight-${courseId}`).value = "1.0";
                document.getElementById(`credits-${courseId}`).value = "0.25";
                calculateGPA();
            }
        }

        function removeCourse(id) {
            const courseDiv = document.getElementById(`course-${id}`);
            if (!courseDiv) return;
            
            const year = courseDiv.getAttribute('data-year');
            courseDiv.remove();
            
            // Check if this was the last course in the year
            const yearCourses = document.querySelectorAll(`[data-year="${year}"].course-card`);
            if (yearCourses.length === 0) {
                document.getElementById(`year-${year}`).remove();
                sortYearDividers();
            }
            
            calculateGPA();
            saveState();
        }

        function showClearAllModal() {
            const modal = new bootstrap.Modal(document.getElementById('clearAllModal'));
            modal.show();
        }

        function performClearAll() {
            document.getElementById('course-container').innerHTML = '';
            courseCount = 0;
            document.getElementById('gpa-result').textContent = '0.000';
            document.getElementById('unweighted-gpa-result').textContent = '0.000';
            const emptyState = document.querySelector('.empty-state');
            if (emptyState) {
                emptyState.style.display = 'block';
            }
            saveState();
            
            const modal = bootstrap.Modal.getInstance(document.getElementById('clearAllModal'));
            modal.hide();
        }

        function calculateGPA() {
            const courseContainer = document.getElementById('course-container');
            const courses = courseContainer.querySelectorAll('.course-card');
            
            let totalQualityPoints = 0;
            let totalUnweightedPoints = 0;
            let totalCredits = 0;

            for (let course of courses) {
                const isIncluded = course.querySelector('.form-check-input').checked;
                if (!isIncluded) continue;
                
                const year = course.getAttribute('data-year');
                const yearIncluded = document.getElementById(`toggle-year-${year}`)?.checked ?? true;
                if (!yearIncluded) continue;
                
                const id = course.id.split('-')[1];
                const grade = parseFloat(document.getElementById(`grade-${id}`).value);
                const weight = parseFloat(document.getElementById(`weight-${id}`).value);
                const credits = parseFloat(document.getElementById(`credits-${id}`).value);

                const qualityPoints = grade * weight * credits;
                const unweightedPoints = grade * credits;
                
                totalQualityPoints += qualityPoints;
                totalUnweightedPoints += unweightedPoints;
                totalCredits += credits;
            }

            const weightedGPA = totalCredits > 0 ? (totalQualityPoints / totalCredits).toFixed(3) : '0.000';
            const unweightedGPA = totalCredits > 0 ? (totalUnweightedPoints / totalCredits).toFixed(3) : '0.000';
            
            document.getElementById('gpa-result').textContent = weightedGPA;
            document.getElementById('unweighted-gpa-result').textContent = unweightedGPA;
        }

        // Drag and Drop functionality
        function handleDragStart(e) {
            draggedItem = this;
            this.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            
            // Hide all tooltips during drag
            hideAllTooltips();
        }

        function handleDragEnd() {
            this.classList.remove('dragging');
            draggedItem = null;
            calculateGPA();
            saveState();
            
            // Reset all year divider highlights
            document.querySelectorAll('.year-divider').forEach(div => {
                div.style.borderLeft = '4px solid var(--bs-primary)';
            });
        }

        function hideAllTooltips() {
            tooltipInstances.forEach(instance => instance.hide());
        }

        function findParentYearDivider(element) {
            while (element && !element.classList.contains('year-divider')) {
                element = element.parentElement;
                if (!element) return null;
            }
            return element;
        }

        document.getElementById('course-container').addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            const afterElement = getDragAfterElement(this, e.clientY);
            const yearDivider = findParentYearDivider(afterElement);
            
            // Reset all year divider highlights
            document.querySelectorAll('.year-divider').forEach(div => {
                div.style.borderLeft = '4px solid var(--bs-primary)';
            });
            
            if (yearDivider) {
                const targetYear = yearDivider.getAttribute('data-year');
                const targetCoursesContainer = yearDivider.querySelector('.year-courses');
                
                // Highlight the year divider when dragging over it
                yearDivider.style.borderLeft = '4px solid #0d6efd';
                
                if (targetCoursesContainer) {
                    // Move to the target year's courses container
                    targetCoursesContainer.appendChild(draggedItem);
                    draggedItem.setAttribute('data-year', targetYear);
                }
            } else if (afterElement) {
                this.insertBefore(draggedItem, afterElement);
            } else {
                this.appendChild(draggedItem);
            }
        });

        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('.year-divider, .course-card')];
            
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }

        // Export functions
        function showExportModal() {
            const modal = new bootstrap.Modal(document.getElementById('exportModal'));
            modal.show();
        }

        function performExport() {
            const fileName = document.getElementById('exportFileName').value || 'My GPA';
            
            const courseContainer = document.getElementById('course-container');
            const courses = courseContainer.querySelectorAll('.course-card');
            const years = [...new Set(Array.from(courses).map(course => course.getAttribute('data-year')))];
            
            const data = {
                years: years.map(year => {
                    return {
                        year: year,
                        included: document.getElementById(`toggle-year-${year}`).checked,
                        courses: Array.from(document.querySelectorAll(`[data-year="${year}"].course-card`)).map(course => {
                            const id = course.id.split('-')[1];
                            return {
                                name: document.getElementById(`course-name-${id}`).value,
                                grade: document.getElementById(`grade-${id}`).value,
                                weight: document.getElementById(`weight-${id}`).value,
                                credits: document.getElementById(`credits-${id}`).value,
                                included: document.getElementById(`include-${id}`).checked
                            };
                        })
                    };
                })
            };

            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fileName}.json`;
            a.click();
            URL.revokeObjectURL(url);
            
            const modal = bootstrap.Modal.getInstance(document.getElementById('exportModal'));
            modal.hide();
        }

        function importFromJSON(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    if (!data.years || !Array.isArray(data.years)) {
                        throw new Error("Invalid file format: Expected years array");
                    }
                    
                    // Clear existing courses first
                    document.getElementById('course-container').innerHTML = '';
                    courseCount = 0;
                    
                    // Add imported courses
                    data.years.forEach(yearData => {
                        if (!yearData.year || !yearData.courses || !Array.isArray(yearData.courses)) {
                            throw new Error("Invalid year format");
                        }
                        
                        yearData.courses.forEach(courseData => {
                            addCourse(courseData, yearData.year);
                        });
                    });
                    
                    showAlert("Courses imported successfully!", "success");
                    calculateGPA();
                    saveState();
                } catch (error) {
                    showAlert(`Import failed: ${error.message}`, "danger");
                }
            };
            
            reader.onerror = function() {
                showAlert("Error reading file", "danger");
            };
            
            reader.readAsText(file);
            event.target.value = ''; // Reset file input
        }

        function initializeTooltips() {
            // Destroy existing tooltips
            tooltipInstances.forEach(instance => instance.dispose());
            tooltipInstances = [];
            
            // Initialize new tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.forEach(tooltipTriggerEl => {
                const tooltip = new bootstrap.Tooltip(tooltipTriggerEl, {
                    trigger: 'hover'
                });
                tooltipInstances.push(tooltip);
            });
        }

        // Initialize the application
        window.onload = function() {
            initializeYearDropdown();
            initializeTooltips();
            saveState(); // Save initial empty state
        };

        function showCustomTermModal() {
    document.getElementById('customTermName').value = '';
    const modal = new bootstrap.Modal(document.getElementById('customTermModal'));
    modal.show();
}

function addCustomTerm() {
    const termName = document.getElementById('customTermName').value.trim();
    if (!termName) {
        showAlert('Please enter a term name', 'warning');
        return;
    }

    // Check if term already exists
    const yearSelect = document.getElementById('year-select');
    const existingTerms = Array.from(yearSelect.options).map(opt => opt.value);
    if (existingTerms.includes(termName)) {
        showAlert('This term already exists', 'warning');
        return;
    }

    // Add to dropdown and select it
    const option = document.createElement('option');
    option.value = termName;
    option.textContent = termName;
    yearSelect.appendChild(option);
    yearSelect.value = termName;

    // Add the term divider
    addYearDivider();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('customTermModal'));
    modal.hide();
    
    showAlert(`"${termName}" term added`, 'success');
}

function filterCourses(query) {
  document.querySelectorAll('.course-card').forEach(card => {
    const name = card.querySelector('.course-name').value.toLowerCase();
    card.style.display = name.includes(query.toLowerCase()) ? '' : 'none';
  });
}