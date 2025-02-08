import React from 'react';
import { useState } from 'react';
import './App.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    role: '',
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle user registration logic here
    console.log('User data:', user);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="text-center mb-4">EHR DashBoard</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-center mb-3">User Registration</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      name="age"
                      value={user.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bloodGroup">Blood Group:</label>
                    <select
                      className="form-control"
                      id="bloodGroup"
                      name="bloodGroup"
                      value={user.bloodGroup}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                      className="form-control"
                      id="role"
                      name="role"
                      value={user.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="doctor">Doctor</option>
                      <option value="hospital">Hospital</option>
                      <option value="organization">Organization</option>
                      <option value="normalUser">Normal User</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mt-2">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-center mb-3">User Login</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mt-2">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;