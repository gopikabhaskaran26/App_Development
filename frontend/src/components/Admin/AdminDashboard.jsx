// src/components/AdminDashboard/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; // Ensure you have this CSS file

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    // Simulated fetch requests
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);
    setCourses([
      { id: 1, title: 'React Basics', description: 'Introduction to React' },
      { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript' }
    ]);
    setActivityLog([
      { id: 1, activity: 'John Doe enrolled in React Basics', timestamp: '2024-07-28 10:00' },
      { id: 2, activity: 'Jane Smith completed Advanced JavaScript', timestamp: '2024-07-28 11:30' }
    ]);
  }, []);

  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    // For example, localStorage.removeItem('authToken');
    navigate('/login'); // Redirect to login page
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setActivityLog([...activityLog, { id: activityLog.length + 1, activity: `${newUser.name} was added`, timestamp: new Date().toLocaleString() }]);
      setNewUser({ name: '', email: '' });
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    setActivityLog([...activityLog, { id: activityLog.length + 1, activity: `User with ID ${id} was deleted`, timestamp: new Date().toLocaleString() }]);
  };

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.description) {
      setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
      setActivityLog([...activityLog, { id: activityLog.length + 1, activity: `Course ${newCourse.title} was added`, timestamp: new Date().toLocaleString() }]);
      setNewCourse({ title: '', description: '' });
    }
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
    setActivityLog([...activityLog, { id: activityLog.length + 1, activity: `Course with ID ${id} was deleted`, timestamp: new Date().toLocaleString() }]);
  };

  return (
    <div className="adminDashboard">
      <nav className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><Link to="overview" className="navLink">Overview</Link></li>
          <li><Link to="users" className="navLink">User Management</Link></li>
          <li><Link to="courses" className="navLink">Course Management</Link></li>
          <li><Link to="activity" className="navLink">User Activity</Link></li>
        </ul>
        <button className="logoutButton" onClick={handleLogout}>Logout</button>
      </nav>
      <div className="content">
        <Routes>
          <Route
            path="overview"
            element={
              <div className="dashboardOverview">
                <h2>Dashboard Overview</h2>
                <div className="cards">
                  <div className="card">
                    <h3>Total Users</h3>
                    <p>{users.length}</p>
                  </div>
                  <div className="card">
                    <h3>Total Courses</h3>
                    <p>{courses.length}</p>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="users"
            element={
              <div className="userManagement">
                <h2>User Management</h2>
                <input
                  type="text"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="inputField"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="inputField"
                />
                <button onClick={handleAddUser} className="actionButton">Add User</button>
                <input type="text" placeholder="Search users" className="searchInput" />
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="actionButton deleteButton"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
          <Route
            path="courses"
            element={
              <div className="courseManagement">
                <h2>Course Management</h2>
                <input
                  type="text"
                  placeholder="Course Title"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                  className="inputField"
                />
                <textarea
                  placeholder="Course Description"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                  className="inputField"
                />
                <button onClick={handleAddCourse} className="actionButton">Add Course</button>
                <input type="text" placeholder="Search courses" className="searchInput" />
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map(course => (
                      <tr key={course.id}>
                        <td>{course.id}</td>
                        <td>{course.title}</td>
                        <td>{course.description}</td>
                        <td>
                          <button
                            onClick={() => handleDeleteCourse(course.id)}
                            className="actionButton deleteButton"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
          <Route
            path="activity"
            element={
              <div className="userActivity">
                <h2>User Activity</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Activity</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityLog.map(activity => (
                      <tr key={activity.id}>
                        <td>{activity.id}</td>
                        <td>{activity.activity}</td>
                        <td>{activity.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
