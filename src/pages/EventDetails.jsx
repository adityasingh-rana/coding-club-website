import { useParams } from "react-router-dom";
import { events } from "../data/event";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen pt-24 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-4">
        {event.title}
      </h1>

      <p className="text-muted-foreground mb-6">
        {event.date} • {event.venue}
      </p>

      <img
        src="/images/websprint1.png"
        alt={event.title}
        className="w-full rounded-xl mb-6"
      />

      <p className="text-lg text-muted-foreground mb-8">
        {event.description}
      </p>

      <button className="bg-primary px-6 py-3 rounded-full text-white hover:bg-highlight transition">
        Register Now
      </button>

    </div>
  );
}

export default EventDetails;