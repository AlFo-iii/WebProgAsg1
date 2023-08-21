document.addEventListener('DOMContentLoaded', function () {
    const reasonDropdown = document.getElementById('reason');
    const adviceArea = document.getElementById('advice-area');
    
    reasonDropdown.addEventListener('change', function () {
        const selectedValue = reasonDropdown.value;
        let advice = '';
        
        switch (selectedValue) {
            case 'childhood':
                advice = 'A disclaimer that multiple vaccines are normally administered in combination and may cause the child to be sluggish or feverous for 24 – 48 hours afterwards.';
                break;
            case 'influenza':
                advice = 'The best time to get vaccinated is in April and May each year for optimal protection over the winter months.';
                break;
            case 'covid':
                advice = 'Advice that everyone should arrange to have their third shot as soon as possible and adults over the age of 30 should have their fourth shot to protect against new variant strains.';
                break;
            case 'blood':
                advice = 'Some tests require fasting ahead of time and a staff member will advise you on this prior to the appointment.';
                break;
            default:
                advice = '';
        }
        
        adviceArea.textContent = advice;
    });
});
