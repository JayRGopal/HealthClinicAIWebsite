import Typewriter from "typewriter-effect";

const Typing = () => {
  return (
    <div
      className="mb-5 -mt-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
      data-oid="mkmtya-"
    >
      <Typewriter
        options={{
          strings: [
            "denials management.",
            "claims management.",
            "prior authorization.",
            "everything else.",
          ],

          autoStart: true,
          loop: true,
          delay: 20,
          deleteSpeed: 10,
        }}
        data-oid="0w2ar4l"
      />
    </div>
  );
};

export default Typing;
