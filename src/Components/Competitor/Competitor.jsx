import style from "./competitor.module.scss"
import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleModal } from "../../features/modal/modalSlice";
// import {setCurrentCompetitor} from "./"
import { setCurrentCompetitor } from "../../features/competitor/competitorsSlice";
 
const Competitor = ({ competitor }) => {

    const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${competitor.Photo})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
const dispatch = useDispatch();
  const voteNow =()=>{
    dispatch(setCurrentCompetitor(competitor));
    dispatch(handleModal());
  }
  

  return (
 
    <div className={style.Competitor} style={backgroundStyle}>
  {/* Info Section (logo + text) */}
  <div className={style.info}>
    <img className={style.logo} src={competitor.stateLogo} alt={competitor.RepresentingState} />

    <div className={style.details}>
      <span className={style.name}>
        {competitor.FirstName + " " + competitor.LastName}
      </span>
      <span className={style.state}>{competitor.RepresentingState}</span>
      <span className={style.vote_count}>
        Total Votes : {competitor.NumberofVotes}
      </span>
    </div>
  </div>

  {/* Vote Button */}
  <div className={style.vote}
  onClick={voteNow}
  >
    <MdOutlineHowToVote className={style.vote_icon} />
  </div>
</div>

  )
}

export default Competitor