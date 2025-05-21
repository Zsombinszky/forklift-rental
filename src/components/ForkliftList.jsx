import ForkliftCard from "./ForkliftCard";

const ForkliftList = ({ forklifts, onRent }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Available Forklifts
      </h2>
      <div className="flex justify-center gap-6">
        {forklifts.map((forklift) => (
          <ForkliftCard key={forklift.id} forklift={forklift} onRent={onRent} />
        ))}
      </div>
    </section>
  );
};

export default ForkliftList;
