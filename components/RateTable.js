import { BedDouble, Car, Info, UtensilsCrossed } from "lucide-react";
import { RATE_CHART } from "@/lib/site";

const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const rupee = (n) => `₹${inr.format(n)}`;

/**
 * Per-person price table, laid out like the business rate sheet.
 * `compact` is used inside the package-details dialog.
 */
export default function RateTable({ compact = false }) {
  const { categories, rows, extras } = RATE_CHART;
  const cell = compact ? "px-3 py-2.5" : "px-4 py-3 sm:px-5";

  return (
    <div>
      <div className="no-scrollbar -mx-1 overflow-x-auto px-1">
        <table className="w-full min-w-[560px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-line bg-white text-left">
          <caption className="sr-only">Kashmir tour package price per person on sharing basis</caption>
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className={`${cell} text-[12px] font-semibold tracking-wide uppercase`}>
                Per person rate
              </th>
              {categories.map((c) => (
                <th key={c.key} scope="col" className={`${cell} text-center`}>
                  <span className="block text-[14px] font-semibold">{c.label}</span>
                  <span className="block text-[11.5px] font-normal text-white/70">{c.stars}</span>
                </th>
              ))}
              <th scope="col" className={`${cell} text-[12px] font-semibold tracking-wide uppercase`}>
                Vehicle
              </th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {rows.map((r, i) => (
              <tr key={r.pax} className={i % 2 ? "bg-mist/60" : "bg-white"}>
                <th scope="row" className={`${cell} border-t border-line font-semibold text-navy`}>
                  {r.pax}
                </th>
                {categories.map((c) => {
                  const best = r[c.key] === RATE_CHART.startingFrom;
                  return (
                    <td key={c.key} className={`${cell} border-t border-line text-center`}>
                      <span className={`font-semibold ${best ? "text-brand" : "text-ink"}`}>{rupee(r[c.key])}</span>
                      {best ? (
                        <span className="ml-1.5 rounded-md bg-gold/20 px-1.5 py-0.5 text-[10.5px] font-bold text-navy uppercase">
                          Lowest
                        </span>
                      ) : null}
                    </td>
                  );
                })}
                <td className={`${cell} border-t border-line text-[13px] text-ink/70`}>{r.vehicle}</td>
              </tr>
            ))}
            {extras.map((x) => (
              <tr key={x.label} className="bg-ivory">
                <th scope="row" className={`${cell} border-t border-line text-[13px] font-semibold text-navy`}>
                  {x.label}
                </th>
                {categories.map((c) => (
                  <td key={c.key} className={`${cell} border-t border-line text-center font-medium text-ink/80`}>
                    {rupee(x[c.key])}
                  </td>
                ))}
                <td className={`${cell} border-t border-line text-[13px] text-ink/50`}>—</td>
              </tr>
            ))}
            <tr className="bg-white">
              <th scope="row" className={`${cell} border-t border-line text-[13px] font-semibold text-navy`}>
                Houseboat
              </th>
              {categories.map((c) => (
                <td key={c.key} className={`${cell} border-t border-line text-center text-[12.5px] text-ink/70`}>
                  {c.houseboat}
                </td>
              ))}
              <td className={`${cell} border-t border-line`} />
            </tr>
          </tbody>
        </table>
      </div>

      <ul className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-ink/70 ${compact ? "" : "sm:text-[13.5px]"}`}>
        <li className="flex items-center gap-1.5">
          <UtensilsCrossed className="size-3.5 text-brand" aria-hidden="true" />
          {RATE_CHART.mealPlan}
        </li>
        <li className="flex items-center gap-1.5">
          <BedDouble className="size-3.5 text-brand" aria-hidden="true" />
          {RATE_CHART.route}
        </li>
        <li className="flex items-center gap-1.5">
          <Car className="size-3.5 text-brand" aria-hidden="true" />
          {RATE_CHART.pickup} · {RATE_CHART.excursions}
        </li>
      </ul>
      <p className="mt-2 flex items-start gap-1.5 text-[12.5px] text-ink/55">
        <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        Rates are per person on sharing basis. Final price depends on your package, travel dates and hotel availability.
      </p>
    </div>
  );
}
