import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

// Customized the useInput function to save user input on the login/signup page
const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const CreateProject = (props) => {
  const [projectName, projectNameOnChange] = useInput('');
  const [projectDescription, projectDescriptionOnChange] = useInput('');
  const [members, membersOnChange] = useInput('');

  const [message, setMessage] = useState('');

  const { username } = useContext(GlobalContext);

  const handleCreateProject = () => {
    // console.log('Do we have the user input we need?')
    //store all the project info into an object
    const projectInfo = {
      projectName,
      projectDescription,
      members: members.split(',').map((el) => el.trim()),
    };

    // console.log(projectInfo);

    //make sure users put in the required infomation
    //members are not required because there will be at lease one member(the creator) for each project
    //!!!need to push the creator(the logged in user) into the members array at the backend
    if (projectName === '' || projectDescription === '') {
      setMessage('Project name and description are required');
      return;
    } else {
      //send projectInfo to the backend route /create/project
      const url = 'http://localhost:3000/project';
      const userUrl = 'http://localhost:3000/userinfo';
      fetch(userUrl, { method: 'GET', credentials: 'include' })
        .then((res) => res.json())
        .then((name) => {
          console.log(name);
          projectInfo.creator = name;
          const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projectInfo),
          };
          fetch(url, requestOption)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.log(err));
        });
    }
  };

  return (
    <div className="create-project-form">
      <form className="form-component">
        <h2 className="form-description">Create A Project</h2>
        <p style={{ color: 'red' }}>{message}</p>
        <div className="input-component">
          <label htmlFor="projectName">Name:&nbsp;</label>
          <input
            name="projectName"
            placeholder="Project Name"
            value={projectName}
            onChange={projectNameOnChange}
          />
        </div>
        <div className="input-component">
          <label htmlFor="projectDescription">Description:&nbsp;</label>
          <input
            name="projectDescription"
            placeholder="Project Description"
            value={projectDescription}
            onChange={projectDescriptionOnChange}
          />
        </div>
        <div className="input-component">
          <label htmlFor="members">Members:&nbsp;</label>
          <input
            name="members"
            placeholder="Separate members by comma"
            value={members}
            onChange={membersOnChange}
          />
        </div>

        <button className="createBtns" onClick={handleCreateProject}>
          Create a new project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
