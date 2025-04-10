import Typewriter from "typewriter-effect";

const Typing = () => {
  return (
    <div
      className="mb-5 -mt-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
      data-oid="svjn3_c"
    >
      <Typewriter
        options={{
          strings: [
            "denial management.",
            "finding lost revenue.",
            "appeals.",
            "calling insurance.",
            "everything else.",
          ],

          autoStart: true,
          loop: true,
          delay: 20,
          deleteSpeed: 10,
        }}
        data-oid="fik1_ao"
      />
    </div>
  );
};

export default Typing;
