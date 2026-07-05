import { feeStructure } from "../../data/admissionsData";

const FeeStructure = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-blue-900 font-semibold uppercase tracking-widest">
            Fee Structure
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Academic Session 2026–27
          </h2>

          <p className="text-gray-600 mt-4">
            The following fee structure is for reference. Please contact the
            school office for the latest updates.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full border-collapse">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Class</th>
                <th className="px-6 py-4 text-left">Admission Fee</th>
                <th className="px-6 py-4 text-left">Monthly Fee</th>
              </tr>
            </thead>

            <tbody>
              {feeStructure.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4 font-semibold">
                    {item.class}
                  </td>

                  <td className="px-6 py-4">
                    {item.admissionFee}
                  </td>

                  <td className="px-6 py-4">
                    {item.monthlyFee}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default FeeStructure;