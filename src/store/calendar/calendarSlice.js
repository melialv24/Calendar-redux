import { createSlice } from "@reduxjs/toolkit";
/*import { addHours } from "date-fns";


const tempEvents = {
  _id: new Date().getTime(),
  title: "Cumple de melissa",
  notes: "HAY QUE COMPRAR ALGO",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafa",
  user: {
    _id: "123123",
    name: "Melissa",
  },
};
*/
export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoadingEvents: true,
    events: [
      //tempEvents
    ],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.events = payload;
      state.isLoadingEvents = false;
      payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onLoadEvents,
  onUpdateEvent,
  onDeleteEvent,
} = calendarSlice.actions;
