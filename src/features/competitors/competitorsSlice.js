// import { createSlice,  } from "@reduxjs/toolkit";
// import competitorsData from "../../assets/competitorsData.json"
 
// const initialState ={
//     competitors: competitorsData,
//     currentCompetitor : null,
//     voteCount: 0,
// }
// const competitorSlice = createSlice({
//     name: 'competitor',
//     initialState,
//     reducers: {
        
//          setCurrentCompetitor: (state, action) => {
//             state.currentCompetitor = action.payload;
//         },
//         inCreaseVote: (state,action)=>{
//             state.voteCount = state.voteCount+1;
//         },
//          decreaseVote : (state,action)=>{
//             if (state.voteCount > 0){
//                 state.voteCount = state.voteCount-1;
//             }  
//         }
//         }, addVoteToCompetitor:(state,action)=>{
//             let complex = state.competitors.findIndex(comp => comp.Id ===action.payload);
//             state.competitors[complex].NumberofVotes = Number(state.competitors[complex].NumberofVotes)+Number(state.voteCount)
//         },
       
//         resetState:(state)=>{
//             state.currentCompetitor= null;
//             state.voteCount =0;
//         }
//     }
// )
// export default competitorSlice.reducer;
// export const {setCurrentCompetitor, inCreaseVote, decreaseVote, addVoteToCompetitor, resetState }=competitorSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import competitorsData from "../../assets/competitorsData.json";

const initialState = {
  competitors: JSON.parse(window.localStorage.getItem('compertitors')) || competitorsData,
  currentCompetitor: null,
  voteCount: 0,
};

const competitorSlice = createSlice({
  name: "competitor",
  initialState,
  reducers: {
    setCurrentCompetitor: (state, action) => {
      state.currentCompetitor = action.payload;
    },
    inCreaseVote: (state) => {
      state.voteCount = state.voteCount + 1;
    },
    decreaseVote: (state) => {
      if (state.voteCount > 0) {
        state.voteCount = state.voteCount - 1;
      }
    },
    addVoteToCompetitor: (state, action) => {
      const index = state.competitors.findIndex(
        (comp) => comp.Id === action.payload
      );
      if (index !== -1) {
        state.competitors[index].NumberofVotes =
          Number(state.competitors[index].NumberofVotes) +
          Number(state.voteCount);
          window.localStorage.setItem('compertitors',JSON.stringify(state.competitors));
      }
    },
    resetState: (state) => {
      state.currentCompetitor = null;
      state.voteCount = 0;
    },
  },
});

export default competitorSlice.reducer;
export const {
  setCurrentCompetitor,
  inCreaseVote,
  decreaseVote,
  addVoteToCompetitor,
  resetState,
} = competitorSlice.actions;
