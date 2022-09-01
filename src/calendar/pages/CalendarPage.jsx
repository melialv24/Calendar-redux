import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent, Navbar } from "../components";
import { addHours } from "date-fns";
import { localizer, getMessagesES } from "../../helpers";

// El evento lo único que pide como obligatorio es el titulo, fecha de inicio y fecha fin
const events = [
  {
    title: "Cumple de melissa",
    notes: "HAY QUE COMPRAR ALGO",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafa",
    user: {
      _id: "123",
      name: "Melissa",
    },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#fafa",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return { style };
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
      />
    </>
  );
};
