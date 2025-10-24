import style from "./competitors.module.scss"
// import competitorsData from "../../assets/competitorsData.json"
import Competitor from "../Competitor/Competitor"
import { useSelector } from "react-redux"

const Competitors = () => {
  const { competitors } = useSelector((store) => store.competitor);

  return (
    <div className={style.competitors_container}>
        <div className={style.competitors_header}>
            <span>MSS-SOMALI</span>
            <p>Built with React.js — the template is a well-structured, thoughtfully					
componentized Next.js project, giving you a codebase that’s productive					
and enjoyable to work in.		</p>
        </div>
        <div className={style.competitors}>
        {/* {competitorsData.map((competitor, index) => ( */}
        {competitors.map((competitor, index) => (
          <Competitor key={index} competitor={competitor} />
        ))}
      </div>
    </div>
  )
}

export default Competitors;