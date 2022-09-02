import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

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

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvents],
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
      console.log(state.id, "ID ACTUAL", 1);
      console.log(payload.id, "payload ID", 0);
      state.events = state.events.map((event) => {
        if (event._id === payload.id) {
          return payload;
        }
        return event;
      });
    },
  },
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent } =
  calendarSlice.actions;
