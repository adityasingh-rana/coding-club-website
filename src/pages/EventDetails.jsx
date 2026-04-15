import { useParams } from "react-router-dom";
import { events } from "../data/event";
import GridAnimation from "../components/GridAnimation";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="bg-linear-to-b from-black/90 via-black/85 to-background/90 min-w-screen">
      <section className="pt-24 pb-24 px-6 max-w-5xl mx-auto ">

      <GridAnimation />
      <h1 className="text-4xl font-bold mb-4 z-10 bg-linear-to-r from-primary to-highlight text-transparent bg-clip-text">
        {event.title}
      </h1>

      <p className="text-muted-foreground mb-6 z-10">
        {event.date} • {event.venue}
      </p>
      <div className="flex justify-between gap-10 ">

        <img
          src="/images/websprint1.png"
          alt={event.title}
          className="w-100 h-100 rounded-xl mb-6 z-10"
        />

        <div>
          <h1 className="text-xl font-semibold mb-2">Description:</h1>
          <p className="text-lg text-muted-foreground mb-8">
            WebSprint 2026 is a one-day web development hackathon designed to challenge your creativity and technical skills.
            Participants will work in teams to build innovative web-based solutions within a limited time frame.
            This event is a great opportunity to collaborate, learn, and showcase your development skills.
          </p>

          <h2 className="text-lg font-semibold mb-2">Important Details:</h2>
          <ul className="list-disc ml-5 text-muted-foreground mb-6 space-y-1">
            <li><strong>Event Date:</strong> 18 April 2026</li>
            <li><strong>Time:</strong> 10:00 AM onwards</li>
            <li><strong>Venue:</strong> Central Computer Lab (IET)</li>
            <li><strong>Registration Deadline:</strong> 17 April 2026</li>
            <li><strong>Team Size:</strong> 3–4 members</li>
            <li><strong>Mode:</strong> Offline</li>
          </ul>

          <h2 className="text-lg font-semibold mb-2">Contacts:</h2>
          <ul className="list-disc ml-5 text-muted-foreground mb-6 space-y-1">
            <li><strong>Phone:</strong> 9559155959</li>
            <li><strong>Email:</strong> connect.csermlau@gmail.com</li>
          </ul>

          <a href="https://forms.gle/vbPLPBiuhjAqGGTo7">
            <button className=" px-6 py-3 rounded-full text-white hover:bg-primary border border-primary transition z-10 cursor-pointer fixed bottom-15 right-5 animate-bounce">
              Register Now
            </button>
          </a>


        </div>
      </div>
    </section>
    </div>
  );
}

export default EventDetails;