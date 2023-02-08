// 13
const dangerousGoodsQuestions = [
  {
    title: "Number of DG Classes",
    question: "How many classes of dangerous goods are there?",
    resources: "Dangerous Goods - Labeling and Marking - 8.3",
    answers: [
      {
        id: 1,
        text: "9",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "7",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "8",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "10",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Shape of Hazard Labels",
    question:
      "Hazard labels are used to identify dangerous goods. What is the typical shape of a hazard label?",
    resources: "Dangerous Goods - Labeling and Marking - 8.3",
    answers: [
      {
        id: 1,
        text: "Diamond",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Triangle",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Square",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Oval",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Alcoholic Beverages",
    question:
      "How much alcohol (24% - 70%) is a single passenger permitted to carry onboard?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "Any amount <5Litres",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Any amount <2Litres",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Any amount <2.5Litres",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Any amount <5.5Litres",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Baggage with Lithium Batteries",
    question:
      "What is the procedure regarding baggage with lithium batteries as a carry-on?",
    resources:
      "Dangerous Goods - Limitations - 8.4, Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "Baggage with removable batteries are permitted onboard as long as the batteries are <0.3g lithium metal or 2.7Wh. Batteries must remain installed inside the bag.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Baggage with removable batteries are permitted onboard as long as the batteries are <0.3g lithium metal or 2.7Wh. Batteries must removed and carried by the passenger.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Such baggages are not permitted as a carry-on baggage.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Such baggages are not permitted as a carry-on baggage and must be checked into the cargo.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Spare/Loose Batteries",
    question: "What is the procedure regarding spare/loose batteries?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "Batteries can only be carry-on and must be individually protected. Each person is limited to a maximum of 20 batteries.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Batteries can only be carry-on and must be individually protected. Each person is limited to a maximum of 10 batteries.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Batteries cannot be carried onboard and must be checked in. They must be individually protected. Each person is limited to a maximum of 20 batteries.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Batteries cannot be carried onboard and must be checked in. They must be individually protected. Each person is limited to a maximum of 10 batteries.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Dry Ice",
    question: "How much dry ice is permitted for use per person?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "Any amount <2.5kg",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Any amount <5kg",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Any amount <2kg",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Any amount <5.5kg",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "E-cigarettes",
    question: "What is the procedure regarding e-cigarettes?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "E-cigarettes are permitted onboard provided they are individually protected.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "E-cigarettes are not permitted onboard as smoking is not permitted onboard.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "E-cigarettes are not permitted onboard and must be checked in.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "E-cigarettes are permitted onboard provided they are used onboard.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Life Jacket",
    question:
      "A passenger has bought their own personal self inflating life jacket onboard, what is the procedure regarding this?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "It is permitted. The passenger may have up to 2 life jackets, each with a maximum of 2 gas cartridges per jacket (fitted) and a maximum of 2 spare cartridges per jacket. Gas cartridges must contain carbon dioxide or another suitable division 2.2 gas.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "It is not permitted. If spotted on ground, inform the ground staff and have it removed from the aircraft. If spotted inflight, move the life jacket to a secure location to prevent its use.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "It is not permitted as a carry-on. If spotted on ground, inform the ground staff to have it checked into the cargo. If spotted inflight, move the life jacket to a secure location to prevent its use.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "It is permitted. The passenger may have 1 life jacket, with only 1 gas cartridge (fitted) and 1 spare cartridge. Gas cartridge must contain carbon dioxide or another suitable division 2.2 gas.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Matches/Lighter",
    question:
      "What is the procedure regarding safety matches/cigarette lighters and lighter refills",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "One small packet of safety matches or one cigarette lighter is permitted only as a carry-on provided it is kept on the passenger's person. However, lighter refills are forbidden as carry-on and checked in luggage.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "One small packet of safety matches or one cigarette lighter is permitted only as a carry-on provided it is kept on the passenger's person. Lighter refills are forbidden as checked in luggage and must be taken as a carry-on.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "One small packet of safety matches or one cigarette lighter is permitted as both carry-on and checked in luggage. Lighter refills are forbidden as carry-on and must be checked in.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Both items are not permitted as carry-on or checked in luggage.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Mobility Aids",
    question:
      "What is the procedure regarding mobility aids powered by non-spillage wet batteries, nickel-metal hydride batteries, dry batteries, spillable batteries, lithium ion batteries?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "These mobility aids must all be checked into the cargo. However, devices with lithium ion batteries that are designed to be removed must have its batteries removed and carried in the cabin.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "These mobility aids must all be checked into the cargo with no exception.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "These mobility aids are permitted in both the cargo and as carry-on provided there is sufficient space to store them securely onboard.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "These mobility aids must all taken as carry-on with no exception.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Medicinal/Toiletry Articles",
    question:
      "What is the procedure regarding non-radioactive medicinal and toiletry articles such as hairspray, perfume and medicine with alcohol and non-flammable, non-toxic aerosols?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "The total net quantity must not exceed 2kg or 2Litre. The net total of each individual item must not exceed 0.5kg or 0.5Litre. They can be both be carry-on and checked in luggage. Release valves on aerosols must be protected by suitable means to prevent accidental release.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "The total net quantity must not exceed 5kg or 5Litre. The net total of each individual item must not exceed 0.5kg or 0.5Litre. They can be both be carry-on and checked in luggage. Release valves on aerosols must be protected by suitable means to prevent accidental release.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "The total net quantity must not exceed 2kg or 2Litre. The net total of each individual item must not exceed 0.5kg or 0.5Litre. They are only permitted as carry-on luggage. Aerosols are not permitted.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "The total net quantity must not exceed 5kg or 5Litre. The net total of each individual item must not exceed 0.5kg or 0.5Litre. They are only permitted as checked in luggage. Release valves on aerosols must be protected by suitable means to prevent accidental release.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Oxygen/Air Cylinders",
    question:
      "What is the procedure regarding medicinal gaseous oxygen or air cylinders?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "Permitted onboard as carry-on and checked in luggage. The approval of the operator is needed and the pilot in command must be notified of its location. Cylinders must not exceed 5kg gross weight.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Permitted onboard as carry-on luggage only. The approval of the operator is needed and the pilot in command must be notified of its location. Cylinders must not exceed 5kg gross weight.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Permitted onboard as carry-on luggage only. The approval of the operator is needed and the pilot in command must be notified of its location. Cylinders must not exceed 2kg gross weight.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Permitted as checked-in luggage only. The approval of the operator is needed and the pilot in command must be notified of its location. Cylinders must not exceed 5kg gross weight.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Thermometer",
    question:
      "What is the procedure regarding mercury filled medicinal/clinical thermometers?",
    resources: "Dangerous Goods - DGR Table 2.3.A - 8.5",
    answers: [
      {
        id: 1,
        text: "One per passenger. Must be in a protective case and taken as checked luggage.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "No limit per passenger but each must be in a protective case and taken as checked luggage.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "One per passenger. Must be in a protective case and carried as a carry-on luggage.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "One per passenger. Must be in a protective case and carried on the person.",
        isCorrectAnswer: false,
      },
    ],
  },
];

export default dangerousGoodsQuestions;
