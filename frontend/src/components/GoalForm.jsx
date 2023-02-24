import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createGoal } from './../features/goal/goalSlice';

const GoalForm = () => {
  const [text, setText] = useState('')

  const { isSuccess } = useSelector((state) => state.goals);

  const dispatch = useDispatch()

  const onChange = (evt) => {
    setText(evt.target.value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createGoal({ text }));
    setText('')
    if (isSuccess) {
      toast.success('Goal added successfully.')
    }
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input type="text" name="text" id="text" value={text} onChange={onChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Add Goal</button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm;