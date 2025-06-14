export default function Trips() {
    return <div className="p-4">
      <h2 className="title"> Booking Form </h2>
      <h4 className="subtitle"> Fill out the form linked below to send a booking request </h4>
      <p className="body">The form will ask for: Full Name, Booking Date/Time, Reason for Booking,
         Destination, and Number and Names of Passengers (if any). By filling out this form, you 
         understand you are liable for the state and passengers of the car and are responsible for 
         using it in a timely, valid manner which respects the team.</p>
<p className="instructions"> After filling out this form, your request will be accepted or rejected, 
  depending on if there are scheduling clashes with booked times, an invalid reason for use of the car, etc.  </p>
<a className="link" href="https://www.microsoft.com/en-us/microsoft-365/online-surveys-polls-quizzes"> Link to Booking Form </a>
    </div>;
  }