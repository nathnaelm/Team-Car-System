import profile from '../assets/profile.png';
export default function Profile() {
    return <div className="p-4">
    <div className="driver-profile">
      <img src={profile} className="profile-logo" alt="logo" />
      <h3> Nathnael Mecuria </h3>
      <p> Trips: 5</p>
      <p> Strikes: 1</p>
      </div>
    </div>;
  }