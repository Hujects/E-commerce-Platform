export default function Description() {
  return (
    <div className="w-full">
      {/* Description Heading */}
      <h2 className="text-[length:var(--fs-3)] text-[var(--eerie-black)] font-[var(--weight-700)] mb-4">
        Product Description
      </h2>

      {/* Description Paragraphs */}
      <div className="max-w-[950px] space-y-4">
        <p className="text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-[1.8]">
          Experience premium sound quality with advanced noise cancellation,
          crystal-clear audio and all-day comfort. Designed for music, calls and
          gaming, this wireless headphone delivers powerful performance with
          long-lasting battery life.
        </p>

        <p className="text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-[1.8]">
          The lightweight design makes it comfortable to wear for extended
          periods, while the soft ear cushions provide a comfortable fit.
          Whether you are listening to music, attending online meetings or
          enjoying your favorite games, this headphone is designed to provide an
          immersive audio experience.
        </p>

        <p className="text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-[1.8]">
          With reliable wireless connectivity and a powerful built-in battery,
          you can enjoy your favorite content without constantly worrying about
          charging. The built-in microphone also provides clear voice
          communication for calls and online meetings.
        </p>
      </div>
    </div>
  );
}
