import { TaskHeader } from "../../components";

export const TaskThree = () => {
  return (
    <div>
      <TaskHeader text={"Recruitment Task 3"} />
      <p>
        Write a React program that handles the API available at
        https://gorest.co.in/ . The application should include a user list view
        (fetched from the API) and allow searching for and editing existing user
        entries.
      </p>
    </div>
  );
};
