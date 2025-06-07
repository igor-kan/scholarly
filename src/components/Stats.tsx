
const Stats = () => {
  const stats = [
    { number: "10x", label: "Faster Publishing", description: "From months to days" },
    { number: "95%", label: "Review Accuracy", description: "AI peer review precision" },
    { number: "50+", label: "Journal Formats", description: "Auto-formatting support" },
    { number: "1M+", label: "Citations Indexed", description: "Cross-platform database" }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-blue-100 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
