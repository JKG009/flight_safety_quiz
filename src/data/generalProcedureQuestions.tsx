// 36
const generalProcedureQuestions = [
  {
    title: "Alert Phase",
    question:
      "The alert phase is initiated by the word 'ATTENTION' followed by commands over the PA by the flight deck. What should your actions be if you hear, 'Attention, ISM to the Flight Deck/Interphone' in-flight?",
    resources: "Communication - Alert Phase - 3.5",
    answers: [
      {
        id: 1,
        text: "Immediately discontinue any on-going service activities, return carts or trolleys to the galley, wake up any flight crew and cabin crew who are taking inflight rest and await briefing.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Continue on-going service activities but remain alert, wake up any flight crew and cabin crew who are taking inflight rest, move over to the interphone when it rings and await briefing.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Immediately discontinue any on-going service activities, return carts or trolleys to the galley, wake up any flight crew and cabin crew who are taking inflight rest and secure yourself in your seat and conduct a silent review.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Immediately discontinue any on-going service activities, return carts or trolleys to the galley, wake up any flight crew and cabin crew who are taking inflight rest, move towards the flight deck for a briefing from the ISM or Captain.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Depressurisation - Aircraft Indication",
    question:
      "What are the 4 automatic aircraft indications during depressurisation?",
    resources: "Non Normal Procedures - Depressurisation - 6.4.3",
    answers: [
      {
        id: 1,
        text: "P/A broadcasted, deployment of oxygen masks, 'No Smoking' and 'Seatbelt' sign illuminate together and chimes, cabin lights come on bright.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "P/A broadcasted, Aircraft will decrease in altitude, deployment of oxygen masks, cabin lights come on bright",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "P/A and PTV will broadcast pre-recorded announcement, aircraft will decrease in altitude, deployment of oxygen masks, 'No Smoking' and 'Seatbelt' sign illuminate together and chimes.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "P/A and PTV will broadcast pre-recorded announcement, deployment of oxygen masks, 'No Smoking' and 'Seatbelt' sign illuminate together and chimes, cabin lights come on bright.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Evacuation - Emergency Equipment",
    question:
      "What equipment should you take (if circumstances permits) during an evacuation AWAY from an airport?",
    resources: "Non Normal Procedures - Emergency Evacuation - 6.10.3.1",
    answers: [
      {
        id: 1,
        text: "Torch, Megaphone, First aid kit, ELT, Additional survival pack",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Torch, Megaphone, First aid kit, ELT, Portable Gaseous O2, BCF",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Torch, Megaphone, First aid kit, ELT, Additional survival pack, Portable gaseous O2",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Torch, Megaphone, First aid kit, BCF, Additional survival pack",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Torch",
    question: "What is the pre-flight check for the torch?",
    resources:
      "Safety and Emergency Equipment - Evacuation & Ditching Equipment - 4.1.1",
    answers: [
      {
        id: 1,
        text: "Secure. Red indicator light flashing",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure. White seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Remove from bracket. Check functional",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - ELT",
    question: "What is the pre-flight check for any of the ELT?",
    resources:
      "Safety and Emergency Equipment - Evacuation & Ditching Equipment - 4.1.2",
    answers: [
      {
        id: 1,
        text: "Secure",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure. Red seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Switch to 'ARM' position",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Spare Life Jacket",
    question:
      "Floatation equipment bags store the spare life jackets (Adult/Child/Infant). What is the pre-flight check for the floatation equipment bag?",
    resources:
      "Safety and Emergency Equipment - Evacuation & Ditching Equipment - 4.1.3",
    answers: [
      {
        id: 1,
        text: "Blue seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Count number of spare life jackets",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Megaphone",
    question: "What is the pre-flight check for the megaphone?",
    resources:
      "Safety and Emergency Equipment - Evacuation & Ditching Equipment - 4.1.6",
    answers: [
      {
        id: 1,
        text: "Secure",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Red seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Check functional",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Additional Survival Pack",
    question: "What is the pre-flight check for the additional survival pack?",
    resources:
      "Safety and Emergency Equipment - Evacuation & Ditching Equipment - 4.1.7",
    answers: [
      {
        id: 1,
        text: "Blue seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Secure",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - BCF",
    question: "What is the pre-flight check for the BCF?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.1",
    answers: [
      {
        id: 1,
        text: "Secure. Red disc intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Unit upright",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Red disc intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Secure",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "BCF/HAFEX Precaution",
    question: "What are the precautions for BCF/HAFEX usage?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.1",
    answers: [
      {
        id: 1,
        text: "Stand 6 to 8 FT away from the fire on initial discharge, then move closer. Use the PBE if necessary.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Hair should be tied up to prevent hair from catching on fire",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Keep the BCF away from heat/fire",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Hands should be free of oil/grease/fatty substances",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - HAFEX",
    question: "What is the pre-flight check for the HAFEX?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.2",
    answers: [
      {
        id: 1,
        text: "Secure. Pointer within the green range. Safety pin and seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure. Pointer within the red range. Safety pin and seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure. Red disc intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Secure. Safety pin and seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Water Extinguisher",
    question: "What is the pre-flight check for the water extinguisher?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.3",
    answers: [
      {
        id: 1,
        text: "Secure. Wire seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure. Pointer within the green range. Safety pin and seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure. Red disc intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Secure. Safety pin and seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - PBE",
    question: "What is the pre-flight check for the PBE?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.4",
    answers: [
      {
        id: 1,
        text: "Seal intact and indicator green",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Blue seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Safety pin and seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "PBE Duration",
    question: "What is the duration of PBE usage (<25,000 cabin altitude)?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.4",
    answers: [
      {
        id: 1,
        text: "15 Minutes",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "5 Minutes",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "1 Hour",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "30 Minutes",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Protective Gloves",
    question: "What is the pre-flight check for the protective gloves?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.5",
    answers: [
      {
        id: 1,
        text: "In position",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Blue seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Crow Bar",
    question: "What is the pre-flight check for the crow bar?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.6",
    answers: [
      {
        id: 1,
        text: "In position",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Black seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - FireSock Kit",
    question: "What is the pre-flight check for the FireSock kit?",
    resources:
      "Safety and Emergency Equipment - Fire and Smoke Equipment - 4.2.8",
    answers: [
      {
        id: 1,
        text: "In position",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Black seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Portable Gaseous Oxygen Bottle",
    question:
      "What is the pre-flight check for the portable gaseous oxygen bottle?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.1",
    answers: [
      {
        id: 1,
        text: "The bottle is secure with a minimum pressure of 1,800 PSI. Tamper-proof cap and seal intact. Dispensing tube and yellow cup mask are pre-connected to the constant flow outlet",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure. The bottle is secure with a minimum pressure of 1,800 PSI",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure. Tamper-proof cap and seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Secure. The bottle is secure with a minimum pressure of 1,800 PSI. Dispensing tube and yellow cup mask are pre-connected to the constant flow outlet",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Portable Gaseous Oxygen Bottle Duration",
    question: "What is the duration of a portable gaseous oxygen bottle?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.1",
    answers: [
      {
        id: 1,
        text: "“HI” flow outlet (4 L/MIN) - a fully charged bottle will last 60 MIN. “LO” flow outlet (2 L/MIN) - a fully charged bottle will last 120 MIN.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "“HI” flow outlet (4 L/MIN) - a fully charged bottle will last 30 MIN. “LO” flow outlet (2 L/MIN) - a fully charged bottle will last 60 MIN.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "“HI” flow outlet (4 L/MIN) - a fully charged bottle will last 120 MIN. “LO” flow outlet (2 L/MIN) - a fully charged bottle will last 240 MIN.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "“HI” flow outlet (4 L/MIN) - a fully charged bottle will last 15 MIN. “LO” flow outlet (2 L/MIN) - a fully charged bottle will last 30 MIN.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Portable Gaseous Oxygen Bottle Functional",
    question:
      "What can you check to ensure there is a flow of oxygen when you turn the oxygen bottle on?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.1",
    answers: [
      {
        id: 1,
        text: "Check the flow indicator on the dispensing tube to ensure a flow of oxygen. It should turn from red/colourless to green",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Don the mask and breath to check for the flow of oxygen or feel if there is oxygen coming out of the mask",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Check the pointer on the pressure content gauge of oxygen bottle is moving",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "There is no need to check if oxygen flow is present if the pressure content gauge is not in the red range on the left hand side or below 100 PSI",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Spare Oxygen Mask",
    question:
      "What is the pre-flight check for the spare oxygen mask (A330/A350/777)?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.2",
    answers: [
      {
        id: 1,
        text: "Blue seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Check quantity",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - First Aid Kit",
    question: "What is the pre-flight check for the first aid kit?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.3",
    answers: [
      {
        id: 1,
        text: "Blue seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Black seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - AED (FR2)",
    question:
      "Apart from breaking the seals of the compartment where the AED is stored. What is the pre-flight check for the AED (FR2)?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.7",
    answers: [
      {
        id: 1,
        text: "Black seal intact. Flashing hourglass",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Black seal intact. Flashing or solid red “X”",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure. Black seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Purple seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - AED (FR3)",
    question:
      "Apart from breaking the seals of the compartment where the AED is stored. What is the pre-flight check for the AED (FR3)?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.7",
    answers: [
      {
        id: 1,
        text: "Black seal intact. Green ready light is visible (flashing or steady on)",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Black seal intact. Flashing or solid red “X”",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Black seal intact. Flashing hourglass",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Purple seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "AED After Use Procedure",
    question: "What colored seals should you use to seal the AED after use?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.7",
    answers: [
      {
        id: 1,
        text: "Purple seals",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Black seals",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Red seals",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Green seals",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Inflight Medical Kit",
    question: "What is the pre-flight check for the inflight medical kit?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.8",
    answers: [
      {
        id: 1,
        text: "Padlock is serviceable. Black seals intact. Black/green seals intact on Velcro pouch",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Black seal intact. Flashing or solid red “X”",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure. Black seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Padlock is serviceable. Purple seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Splint Pack",
    question: "What is the pre-flight check for the splint pack?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.9",
    answers: [
      {
        id: 1,
        text: "In position",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Blue seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Black seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Pocket Mask and Gloves Kit",
    question:
      "What is the pre-flight check for the pocket mask and gloves kit?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.10",
    answers: [
      {
        id: 1,
        text: "Blue seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Black seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - UPK",
    question: "What is the pre-flight check for the universal precaution kit?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.12",
    answers: [
      {
        id: 1,
        text: "Black seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Purple seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Blue seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Body Bag",
    question: "What is the pre-flight check for the body bag?",
    resources: "Safety and Emergency Equipment - First Aid Equipment - 4.3.12",
    answers: [
      {
        id: 1,
        text: "Black seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Purple seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Blue seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - CRD",
    question:
      "What is the pre-flight check for the child restraint device/extension seatbelt?",
    resources:
      "Safety and Emergency Equipment - Miscellaneous Equipment - 4.4.1",
    answers: [
      {
        id: 1,
        text: "Check quantity",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Blue seal intact",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Demo Kit",
    question: "What is the pre-flight check for the demonstration kit?",
    resources:
      "Safety and Emergency Equipment - Miscellaneous Equipment - 4.4.2",
    answers: [
      {
        id: 1,
        text: "Check content",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Check quantity",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - MRT",
    question:
      "The manual release tool can be used to manually open the passenger service unit to gain access to oxygen masks on the Airbus. What is the pre-flight check for the MRT?",
    resources:
      "Safety and Emergency Equipment - Miscellaneous Equipment - 4.4.3",
    answers: [
      {
        id: 1,
        text: "In position",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Secure",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Check functional",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Arctic Survival Kit",
    question: "What is the pre-flight check for the arctic survival kit?",
    resources:
      "Safety and Emergency Equipment - Miscellaneous Equipment - 4.4.4",
    answers: [
      {
        id: 1,
        text: "Blue seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Check content",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Thermal Protection Kit",
    question: "What is the pre-flight check for the thermal protection kit?",
    resources:
      "Safety and Emergency Equipment - Miscellaneous Equipment - 4.4.5",
    answers: [
      {
        id: 1,
        text: "Blue seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Green seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Check content",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Pre-flight Check - Restraint Kit",
    question: "What is the pre-flight check for the restraint kit?",
    resources:
      "Safety and Emergency Equipment - Miscellaneous Equipment - 4.4.6",
    answers: [
      {
        id: 1,
        text: "Blue seal intact",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "In position",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Black seal intact",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Check content",
        isCorrectAnswer: false,
      },
    ],
  },
];

export default generalProcedureQuestions;
