import { useRef, useState } from 'react';
import Modal from 'react-modal';
import styles from './vote.module.scss'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { handleModal } from "../../features/modal/modalSlice";
import { store } from '../../store';
import { addVoteToCompetitor, decreaseVote, inCreaseVote, resetState } from '../../features/competitors/competitorsSlice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


const VoteModal = () => {

  const dispatch = useDispatch()
    let subtitle;
    
    const { isOpen } = useSelector((store) => store.modal);
	const { currentCompetitor, voteCount } = useSelector(
		(store) => store.competitor
	);
 
  // console.log(currentCompetitor)
 

  function closeModal() {
   dispatch(handleModal())
  }
  
  const backgroundStyle = {
		width: "100%",
		// height: "500px",
		background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url('${currentCompetitor?.Photo}')`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
  
if (!currentCompetitor) {
  return null; 
}

const handleSubmit =(event)=>{
event.preventDefault();
// dispatch(addVoteToCompetitor(currentCompetitor.id));
dispatch(addVoteToCompetitor(currentCompetitor.Id));
dispatch(resetState());
closeModal();
};

  return (
    <>
      <div>

      <Modal
        isOpen={isOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
		overlayClassName={styles.overlay}>
      
    
    <div className={styles.modal_container}>
       <div className={styles.competitor_info}>
         <div style={backgroundStyle}></div>
        
         <div className={styles.bio}>

            <div className={styles.divider}>
            <label>Name</label>
            <span>
              {currentCompetitor?.FirstName} {currentCompetitor?.MiddleName} {currentCompetitor?.LastName}
              </span>
            </div>

            <div className={styles.divider}>
            <label>State</label>
            <span>{currentCompetitor.RepresentingState
}</span>
           </div>

           <div className={styles.divider}>
          <label>Backround</label>
          <span>{currentCompetitor.PersonalBackground}</span>
          </div>


          <div className={styles.divider}>
         <label>Employmentor School</label>
         <span>{currentCompetitor.EmploymentorSchool}</span>
           </div> 
           
        
         </div>
         .   
       </div>
 <div className={styles.vote_container}>
							<div className={styles.vote_count}>
								<span>Purchase Votes</span>
								<div className={styles.vote_controls}>
									<button 
                  onClick={() => dispatch(decreaseVote())}
                  >
										<AiOutlineMinus className={styles.icon} />
									</button>

									<span>{voteCount}</span>
									<button 
                  onClick={() => dispatch(inCreaseVote())}
                  //  disabled={voteCount === 0}
                  >
										<AiOutlinePlus className={styles.icon} />
									</button>
								</div>
							</div>

							<form 
              onSubmit={handleSubmit}
              >
								<span>Pay with Evc , Sahal or Zaad</span>
								<input
									placeholder="enter your phone number start with"
									type="number"
									className={styles.form_control}
									onChange={(e) => setPhone(e.target.value)}
									// value={phone}
								/>
								<button type="submit">Vote Now</button>
							</form>
						</div>
    </div>
    
    </Modal>
     </div>
    </>
  )
}
    


export default VoteModal