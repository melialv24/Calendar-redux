import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
  Navbar,
} from "../components";
import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUiStore, useCalendarStore } from "../../hooks";
import { useEffect } from "react";

// El evento lo único que pide como obligatorio es el titulo, fecha de inicio y fecha fin

export const CalendarPage = () => {
  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const { events, setActiveEvent, hasEventSelected, startLoadingEvents } =
    useCalendarStore();

  useEffect(() => {
    startLoadingEvents();
  }, []);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#fafa",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return { style };
  };

  const onDoubleClick = (event) => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <FabAddNew />

      <FabDelete />
      <CalendarModal />
    </>
  );
};
