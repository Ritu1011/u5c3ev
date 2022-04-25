import "../components/Admin.css"

export const Admin = () => {

  return (
    <form className="createEmployee">
      <input type="text" placeholder="Employee Name" name="employee_name" />  <br />
      <input type="text" placeholder="Employee id" name="employee_id" /> <br />
      <select name="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select> <br />
      <input type="number" placeholder="Salary" name="salary" /> <br />
      <input type="text" placeholder="Image" name="image" /> <br />
      <input type="text" placeholder="User Name" name="username" /> <br />
      <input type="password" placeholder="Password" name="password" /> <br />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
      /><br />
      <select name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>  <br />
      <select name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select> <br />
      <input className="createUser" type="submit" value={"submit"} /> <br />
    </form>
  );
};
