import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goal/goalSlice";
import GoalItem from "../components/GoalItem";


const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // TODO: create a protected component with the same realization
    if (!user) {
      navigate('/login')
    }

    if (user) {
      dispatch(getGoals());

    }


    // reset goals state, when user leave a dashboard
    return () => {
      dispatch(reset());
    }
  }, [user, navigate, isError, dispatch, message]);

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <>
      <section className="heading">
        Welcome {user && user.name}
        <p>Goals dashboard</p>
      </section>
      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>
            You have not set any goals
          </h3>
        )}
      </section>
    </>
  )
}

export default Dashboard;