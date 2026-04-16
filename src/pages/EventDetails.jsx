import { useParams } from "react-router-dom";
import { events } from "../data/event";
import GridAnimation from "../components/GridAnimation";
import { Download } from "lucide-react";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return <div className="pt-24 text-center">Event not found</div>;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-black/90 via-black/85 to-background/90 pb-10">
      <div className="hidden md:block pointer-events-none">
        <GridAnimation />
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6">
        <h1 className="mb-4 bg-linear-to-r from-primary to-highlight bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
          {event.title}
        </h1>

        <p className="mb-6 text-muted-foreground">
          {event.date} • {event.venue}
        </p>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <img
            src={event.image || "/images/websprint1.png"}
            alt={event.title}
            className="h-auto w-full rounded-xl object-cover md:w-1/2"
          />

          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h2 className="mb-2 text-lg font-semibold">Description:</h2>
            <p className="mb-6 text-base text-muted-foreground sm:text-lg">
              WebSprint 2026 is a one-day web development hackathon designed to
              challenge your creativity and technical skills. Participants will
              work in teams to build innovative web-based solutions within a
              limited time frame. This event is a great opportunity to
              collaborate, learn, and showcase your development skills.
            </p>

            <h2 className="mb-2 text-lg font-semibold">Important Details:</h2>
            <ul className="mb-6 ml-5 list-disc space-y-1 text-muted-foreground">
              <li><strong>Event Date:</strong> 18 April 2026</li>
              <li><strong>Time:</strong> 10:00 AM onwards</li>
              <li><strong>Venue:</strong> Central Computer Lab (IET)</li>
              <li><strong>Registration Deadline:</strong> 17 April 2026</li>
              <li><strong>Team Size:</strong> 3–4 members</li>
              <li><strong>Mode:</strong> Offline</li>
            </ul>

            <h2 className="mb-2 text-lg font-semibold">Contacts:</h2>
            <ul className="mb-6 ml-5 list-disc space-y-1 text-muted-foreground">
              <li><strong>Phone:</strong> 9559155959</li>
              <li><strong>Email:</strong> connect.csermlau@gmail.com</li>
            </ul>
             <div>
              <h2>Important Documents:</h2>
              <div className="flex gap-2">
                <p className="text-muted-foreground"> Problem Statements:</p>
                <a href="/docs/WebsprintPS.pdf" className="text-blue-400 hover:underline">
                 <Download size={20} className="hover:scale-115"/>
                </a>
              </div>
              <div className="flex gap-2">
                <p className="text-muted-foreground"> RuleBook:</p>
                <a href="/docs/WebSprint-2026_Final-Rulebook.pdf" className="text-blue-400 hover:underline">
                 <Download size={20} className="hover:scale-115" />
                 </a>
              </div>
            </div>

            <a
              href="https://forms.gle/vbPLPBiuhjAqGGTo7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full rounded-full border border-primary bg-primary px-6 py-3 text-center text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 sm:w-auto animate-bounce hover:animate-none"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;