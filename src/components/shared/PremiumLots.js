import Image from "next/image";
import { Section, SectionHeading } from "@/components/shared";
import { formatPrice } from "@/lib/formatters";
import { premiumLots } from "@/config/premium-lots";
import premiumsImage from "@/assets/site-plans/premiums.png";

export function PremiumLots({ className, showDescription = false, ...props }) {
  return (
    <Section background="white" className={className} {...props}>
      <SectionHeading
        title="Premium Lot Pricing"
        subtitle="Select lots are available with premium features and locations"
      />

      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout: Image and Table side by side */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden border border-dun-200 bg-white">
            <Image
              src={premiumsImage}
              alt="Premium lot site plan"
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-dun-200">
            <table className="w-full">
              <thead>
                <tr className="bg-dun text-ebony">
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                    Color
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                    Premiums
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-wide">
                    Pricing
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-dun-200">
                {premiumLots.map((lot) => (
                  <tr key={lot.id} className="hover:bg-bone/50 transition-colors">
                    <td className="px-6 py-4">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: lot.color }}
                        aria-label={`${lot.name} color indicator`}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-ebony">{lot.name}</span>
                      {showDescription && (
                        <p className="text-sm text-ebony/60 mt-1">
                          {lot.description}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-ebony">
                      {lot.quantity}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-reseda text-lg">
                      {formatPrice(lot.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {premiumLots.map((lot) => (
            <div
              key={lot.id}
              className="bg-white rounded-lg border-2 border-dun-200 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex-shrink-0"
                    style={{ backgroundColor: lot.color }}
                  />
                  <div>
                    <h3 className="font-semibold text-ebony">{lot.name}</h3>
                    <p className="text-sm text-ebony/60">{lot.quantity} lots</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-reseda">
                    {formatPrice(lot.price)}
                  </p>
                </div>
              </div>
              {showDescription && (
                <p className="text-sm text-ebony/60 mt-2 pt-2 border-t border-dun-200">
                  {lot.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Note - Always shown */}
        <div className="mt-8 bg-dun/30 rounded-lg p-4 text-center">
          <p className="text-sm text-ebony/70">
            <strong className="text-ebony">Note:</strong> Premium lot pricing is in addition to the base home price. 
            Availability subject to change. Contact our sales team for current lot availability and site map.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default PremiumLots;