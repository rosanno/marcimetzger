function Affiliations() {
  const items = [
    "The Ridge Realty Group",
    "Equal Housing Opportunity",
    "REALTOR®",
    "Pahrump Valley Chamber of Commerce",
  ];

  return (
    <div className="bg-sand-dark border-y border-charcoal/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-wrap justify-center gap-x-10 gap-y-3">
        {items.map((t, i) => (
          <span
            key={t}
            className={
              "text-xs sm:text-sm tracking-wide text-charcoal/60 " +
              (i > 0 ? "sm:border-l sm:border-charcoal/20 sm:pl-10" : "")
            }
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Affiliations;
