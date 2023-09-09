// // Event listener to run the code after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the element for displaying the day of the week
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    
    // Get the element for displaying the UTC time
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    // Array of days for easy retrieval
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Function to update the date and time
    function updateDateTime() {
        // Create a new Date object for current date and time
        const currentDate = new Date();
        
        // Set the content of dayOfWeekElement to the current day of the week
        dayOfWeekElement.textContent = days[currentDate.getUTCDay()];
        
        // Extract hours, minutes, and seconds from the current UTC time
        let hours = currentDate.getUTCHours();
        const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');
        
        // Determine AM/PM and adjust the 24-hour format to 12-hour format
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // Convert hour '0' to '12'
        
        // Set the content of utcTimeElement to the current UTC time in AM/PM format
        utcTimeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    
    // Call the updateDateTime function initially
    updateDateTime();
    
    // Update the UTC time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);
});
