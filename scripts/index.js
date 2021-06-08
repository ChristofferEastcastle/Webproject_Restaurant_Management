import ValidationModule from './modules/ValidationModule.js';


document.getElementById('forgotPassword').addEventListener('click', () => {

    ValidationModule.showStatus('warning','Dette er bare en eksamen så passordet kan du velge selv')

});