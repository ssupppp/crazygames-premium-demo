export function ComparisonTable() {
  const features = [
    { name: 'Advertisements', free: 'Yes', premium: 'No' },
    { name: 'Coin Earnings', free: '1x', premium: '2x' },
    { name: 'Exclusive Games', free: 'No', premium: 'Yes' },
    { name: 'Premium Badge', free: 'No', premium: 'Yes' },
    { name: 'Exclusive Shop Items', free: 'Basic Only', premium: 'All Items' },
    { name: 'Priority Support', free: 'No', premium: 'Yes' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-bg-tertiary">
            <th className="text-left py-4 px-4 text-text-primary font-semibold">
              Feature
            </th>
            <th className="text-center py-4 px-4 text-text-secondary font-semibold">
              Free
            </th>
            <th className="text-center py-4 px-4 text-premium font-semibold">
              Premium
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className="border-b border-bg-tertiary hover:bg-bg-tertiary transition-colors"
            >
              <td className="py-4 px-4 text-text-primary">{feature.name}</td>
              <td className="py-4 px-4 text-center text-text-secondary">
                {feature.free}
              </td>
              <td className="py-4 px-4 text-center text-premium font-semibold">
                {feature.premium}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
