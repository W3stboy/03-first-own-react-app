import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="user-form">
      <form>
          <label>Username</label>
          <input type="text" />
          <label>Age (Years)</label>
          <input type="number" />
          <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
