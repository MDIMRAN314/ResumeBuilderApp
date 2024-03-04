import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App/Store";
import { updateSummary } from "./SummarySlice";

const SummaryForm: React.FC = () => {
  const dispatch = useDispatch();
  const summary = useSelector((state: RootState) => state.summary);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    dispatch(updateSummary({ [name]:  value}))
  }

  return (
    <div>
      <Box>
        <form>
          <TextField id="summary" name='summary' label='Career Objective' variant="outlined" value={summary.summary} multiline rows={4} fullWidth onChange={handleChange}/>
        </form>
      </Box>
    </div>
  )
}

export default SummaryForm;