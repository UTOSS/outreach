export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Events</h1>
        <p className="mt-2 text-sm text-[var(--utoss-muted)]">
          Join UTOSS meetups, workshops, and community sessions.
        </p>
      </div>

      <div className="overflow-hidden rounded-[var(--utoss-radius)] border border-[var(--utoss-border)] bg-[rgba(255,255,255,0.02)]">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=utoss.execs%40gmail.com&ctz=America%2FToronto&mode=AGENDA&bgcolor=%230d1117&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="UTOSS Calendar"
        />
      </div>
    </div>
  );
}
