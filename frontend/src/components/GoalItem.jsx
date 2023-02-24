import { useDispatch, useSelector } from 'react-redux';
import { deleteGoal } from "../features/goal/goalSlice";

import { TfiClose } from 'react-icons/tfi'
import { toast } from 'react-toastify';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  const { _id, createdAt, text } = goal;

  const { isSuccess } = useSelector((state) => state.goals);


  const onDelete = (id) => {
    dispatch(deleteGoal(id));
    if (isSuccess) {
      toast.success('Goal deleted successfully.')
    }
  }

  return (
    <div className="goal">
      <div>
        {new Date(createdAt).toLocaleString('en-EN')}
      </div>
      <h2>{text}</h2>
      <button
        className="close"
        onClick={() => onDelete(_id)}
      >
        <TfiClose />
      </button>
    </div>
  )
}

export default GoalItem;