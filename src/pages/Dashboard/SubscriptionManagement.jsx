import React from "react";
import CustomDropdown from "../../components/CustomDropdown";

const SubscriptionManagement = () => {
  const subscriptionPlans = [
    {
      name: "Bronze",
      parameters: "3 Parameters",
      features: [
        "Lorem Ipsum - 1",
        "Lorem Ipsum - 1",
        "Lorem Ipsum - 2",
        "Lorem Ipsum - 2",
        "Lorem Ipsum - 2",
      ],
      price: 240,
    },
    {
      name: "Gold",
      parameters: "60 Parameters",
      features: [
        "Lorem Ipsum- 1",
        "Lorem Ipsum - 1",
        "Lorem Ipsum - 1",
        "Lorem Ipsum -1",
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      ],
      price: 360,
    },
    {
      name: "Platinum",
      parameters: "80 Parameters",
      features: [
        "Lorem Ipsum - 2",
        "Lorem Ipsum - 2",
        "Lorem Ipsum - 2",
        "Lorem Ipsum - 4",
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      ],
      price: 540,
    },
  ];

  const featureComparison = [
    {
      feature: "Lorem Ipsum Is Simply Dummy Text",
      bronze: "1",
      gold: "1",
      platinum: "2",
    },
    {
      feature: "Lorem Ipsum Is Simply Dummy Text",
      bronze: "1",
      gold: "1",
      platinum: "2",
    },
    {
      feature: "Lorem Ipsum Is Simply Dummy Text",
      bronze: "3",
      gold: "60",
      platinum: "70",
    },
    {
      feature: "Lorem Ipsum Is Simply Dummy Text",
      bronze: "0",
      gold: "1",
      platinum: "2",
    },
    {
      feature: "Lorem Ipsum Is Simply Dummy Text",
      bronze: "0",
      gold: "1",
      platinum: "4",
    },
    {
      feature: "Lorem Ipsum Is Simply Dummy Text",
      bronze: "0",
      gold: "2",
      platinum: "4",
    },
    {
      feature: "Lorem Ipsum Is Simply Dummy Text",
      bronze: "0",
      gold: "2",
      platinum: "4",
    },
    {
      feature: "Lorem Ipsum Is Simply Dummy Text",
      bronze: "0",
      gold: "1",
      platinum: "4",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-white">
            Manage Subscriptions
          </h1>
          <div className="flex items-center gap-4">
            <button className="bg-white hover:bg-white/90 text-black px-4 py-2 rounded-lg flex items-center gap-2">
              Add A New Subscription{" "}
              <span className="rounded flex items-center justify-center text-lg">
                +
              </span>
            </button>
          </div>
        </div>
        <div className="w-[200px]">
          <CustomDropdown
            title="Yearly"
            items={["Yearly", "Monthly", "Hourly"]}
          />
        </div>
      </div>

      <p className="text-white/60 mb-8">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gradient-start to-gradient-end  rounded-2xl p-6 text-white"
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{
                color:
                  plan.name === "Bronze"
                    ? "#CD7F32"
                    : plan.name === "Gold"
                    ? "#FFD700"
                    : "#E5E4E2",
              }}
            >
              {plan.name}
            </h2>
            {plan.features.map((feature, idx) => (
              <p key={idx} className="mb-2 text-white/80">
                {feature}
              </p>
            ))}
            <p className="text-[#00FF00] my-4">{plan.parameters}</p>
            <div className="flex justify-between items-center mt-6">
              <span className="text-3xl font-bold">${plan.price}/yr</span>
              <button className="text-[#00FF00] border border-[#00FF00] px-4 py-2 rounded-full flex items-center gap-2">
                Edit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-blue-linear">
              <th className="py-4 px-6 text-left">FEATURES</th>
              <th className="py-4 px-6 text-center">BRONZE</th>
              <th className="py-4 px-6 text-center">GOLD</th>
              <th className="py-4 px-6 text-center">PLATINUM</th>
            </tr>
          </thead>
          <tbody className="bg-gradient-to-b from-gradient-start to-gradient-end">
            {featureComparison.map((item, index) => (
              <tr key={index} className="border border-[#515c79]">
                <td className="py-4 border border-[#515c79] px-6">
                  {item.feature}
                </td>
                <td className="py-4 border border-[#515c79] px-6 text-center">
                  {item.bronze}
                </td>
                <td className="py-4 border border-[#515c79] px-6 text-center">
                  {item.gold}
                </td>
                <td className="py-4 border border-[#515c79] px-6 text-center">
                  {item.platinum}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionManagement;
