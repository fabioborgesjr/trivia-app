import axios from "axios";
import constants from "../../utils/constants"

const fetchQuiz = () => axios.get(constants.API_URL)

export default { fetchQuiz }