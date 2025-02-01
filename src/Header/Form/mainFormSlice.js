// src/features/exampleSlice.js
import { createSlice } from "@reduxjs/toolkit";

let formState = {
  curSelectInput: "",
  search: false,
  currentMonth: new Date(),
  selectedStartDate: null,
  startDurationDate: new Date(),
  selectedEndDate: null,
  region: "all",
  dateOption: "dates",
  adultCount: 0,
  curDot: 3,
  hoverInput: null,
  isSearch: false,
  childCount: 0,
  minimizeFormBtn: "",
  displaySearch: null,
  combinedString: [],
  infantCount: 0,
  petsCount: 0,
  startDateToShow: null,
  EndDateToShow: null,
  openName: "",
  stayDuration: "week",
  isCalendarModalOpen: false,
  guestPlural: "",
  petPlural: "",
  destinationInputVal: "",
  displaySearchWeek: "",
  extraGuest: "",
  textForInputDuration: "",
  textForGuestInput: "",
  displayGuestInput: "",
  durationDate: "",

};

const formSlice = createSlice({
  name: "mainForm",
  initialState: formState,
  reducers: {
    setActiveInput: (state, action) => {
      state.curSelectInput = action.payload;
    },
    setOpenName: (state, action) => {
      state.openName = action.payload;
    },
    setCombinedString: (state, action) => {
      state.combinedString = action.payload;
    },
    setIsSearch: (state, action) => {
      state.isSearch = action.payload;
    },
    setDurationDate: (state, action) => {
      state.durationDate = action.payload;
    },

    setSearchEl: (state, action) => {
      state.search = action.payload;
    },
    setCurrentMonth: (state, action) => {
      state.currentMonth = action.payload;
    },
    setSelectedStartDate(state, action) {
      state.selectedStartDate = action.payload;
    },
    setSelectedEndDate(state, action) {
      state.selectedEndDate = action.payload;
    },
    setRegion(state, action) {
      state.region = action.payload;
    },
    setDateOption(state, action) {
      state.dateOption = action.payload;
    },
    setAdultCount(state, action) {
      state.adultCount = action.payload;
    },
    setChildCount(state, action) {
      state.childCount = action.payload;
    },
    setInfantCount(state, action) {
      state.infantCount = action.payload;
    },
    setPetsCount(state, action) {
      state.petsCount = action.payload;
    },
    setCalendarModalOpen(state, action) {
      state.isCalendarModalOpen = action.payload;
    },
    setStartDurationDate(state, action) {
      state.startDurationDate = action.payload;
    },
    setGuestPlural(state, action) {
      state.guestPlural = action.payload;
    },
    setPetPlural(state, action) {
      state.petPlural = action.payload;
    },
    setExtraGuest(state, action) {
      state.extraGuest = action.payload;
    },
    setStayDuration(state, action) {
      state.stayDuration = action.payload;
    },

    setDisplaySearch(state, action) {
      state.displaySearch = action.payload;
    },

    setDestinationInputVal(state, action) {
      state.destinationInputVal = action.payload;
    },
    setStartDateToShow(state, action) {
      state.startDateToShow = action.payload;
    },
    setEndDateToShow(state, action) {
      state.EndDateToShow = action.payload;
    },
    setDisplaySearchWeek(state, action) {
      state.displaySearchWeek = action.payload;
    },
    setTextForInputDuration(state, action) {
      state.textForInputDuration = action.payload;
    },
    setTextForGuestInput(state, action) {
      state.textForGuestInput = action.payload;
    },
    setDisplayGuestInput(state, action) {
      state.displayGuestInput = action.payload;
    },
    setHoverInput(state, action) {
      state.hoverInput = action.payload;
    },
    setMinimizeFormBtn(state, action) {
      state.minimizeFormBtn = action.payload;
    },
  },
});

export const {
  setActiveInput,
  setSearchEl,
  setDurationDate,
  setCurrentMonth,
  setSelectedEndDate,
  setMinimizeFormBtn,
  setStartDateToShow,
  setExtraGuest,
  setPetPlural,
  setGuestPlural,
  setCombinedString,
  setTextForInputDuration,
  setEndDateToShow,
  setDisplaySearch,
  setSelectedStartDate,
  setDisplaySearchWeek,
  setTextForGuestInput,
  setRegion,
  setDateOption,
  setAdultCount,
  setChildCount,
  setInfantCount,
  setHoverInput,
  setPetsCount,
  setOpenName,
  setIsSearch,
  setCalendarModalOpen,
  setStartDurationDate,
  setDestinationInputVal,
  setStayDuration,
  setDisplayGuestInput,
} = formSlice.actions;
export default formSlice.reducer;
