// 31
const firstAidQuestions = [
  {
    title: "Adult Breathing Rate",
    question: "What is the normal breathing rate of an adult?",
    resources: "First Aid/Illnesses/Injuries - First Aid - 9.2.1.5",
    answers: [
      {
        id: 1,
        text: "12 - 16 per minute",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "10 - 14 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "16 - 20 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "20 - 30 per minute",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Child/Infant Breathing Rate",
    question: "What is the normal breathing rate of a child/infant?",
    resources: "First Aid/Illnesses/Injuries - First Aid - 9.2.1.5",
    answers: [
      {
        id: 1,
        text: "20 - 30 per minute",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "10 - 20 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "15 - 25 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "25 - 35 per minute",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Adult Pulse Rate",
    question: "What is the normal pulse rate of an adult?",
    resources: "First Aid/Illnesses/Injuries - First Aid - 9.2.1.5",
    answers: [
      {
        id: 1,
        text: "60 - 80 per minute",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "40 - 60 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "80 - 100 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "100 - 120 per minute",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Child Pulse Rate",
    question: "What is the normal pulse rate of a child?",
    resources: "First Aid/Illnesses/Injuries - First Aid - 9.2.1.5",
    answers: [
      {
        id: 1,
        text: "80 - 100 per minute",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "60 - 80 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "40 - 60 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "100 - 120 per minute",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Infant Pulse Rate",
    question: "What is the normal pulse rate of an infant?",
    resources: "First Aid/Illnesses/Injuries - First Aid - 9.2.1.5",
    answers: [
      {
        id: 1,
        text: "100 - 120 per minute",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "60 - 80 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "40 - 60 per minute",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "80 - 100 per minute",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Body Temperature",
    question: "What is the normal body temperature of a person?",
    resources: "First Aid/Illnesses/Injuries - First Aid - 9.2.1.5",
    answers: [
      {
        id: 1,
        text: "37°C",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "30°C",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "40°C",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "27°C",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Contacting MedLink (Wide-body/Primary)",
    question:
      "What is the primary way of contacting MedLink on a wide-body aircraft using a wall mounted telephone?",
    resources: "First Aid/Illnesses/Injuries - First Aid - 9.3.2.2",
    answers: [
      {
        id: 1,
        text: "*11",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "**",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "*12",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "##",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Contacting MedLink (Wide-body/Secondary)",
    question:
      "What is the secondary way of contacting MedLink on a wide-body aircraft using a wall mounted telephone if the primary way did not work?",
    resources: "First Aid/Illnesses/Injuries - First Aid - 9.3.2.2",
    answers: [
      {
        id: 1,
        text: "*12",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "**",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "*11",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "##",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Allergic Reactions (S&S)",
    question:
      "What are some of the signs and symptoms you might see in a person during an allergic reaction?",
    resources: "First Aid/Illnesses/Injuries - 9.6.2",
    answers: [
      {
        id: 1,
        text: "Red blotchy skin. Swelling around of the face/neck/eyes. Impaired breathing/wheezing. Anaphylactic shock.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Dizziness. Cold/clammy skin. Nausea/vomiting.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Tenderness in the neck/body. Impaired breathing/wheezing. Loss of sensation.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Talkative. Fainting. Restlessness. Thirstiness.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Allergic Reactions (T)",
    question: "What are some treatments of an allergic reaction?",
    resources: "First Aid/Illnesses/Injuries - 9.6.2",
    answers: [
      {
        id: 1,
        text: "Ask casualty if they have any known conditions. Monitor casualty, check breathing/pulse/consciousness. Treat any symptoms. Remove the trigger. Ask casualty if they have any medication. Contact MedLink.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Offer cool, damp washcloth. Reseat the casualty in the middle of the aircraft. Tell the casualty to keep their head still and focus on distant objects. Offer the casualty clear liquids to drink. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Reassure and calm the casualty. Loosen tight clothing. Ask casualty to breathe slowly and deeply. Use inhaler if available. If unconscious with breathing, put in the recovery position. CPR and AED are needed if there is no breathing. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Give oxygen. Loosen tight clothing. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Asthma (S&S)",
    question:
      "What are some of the signs and symptoms you might see in a person suffering from an asthma attack?",
    resources: "First Aid/Illnesses/Injuries - 9.6.4",
    answers: [
      {
        id: 1,
        text: "Distress and anxiety. Difficulty in breathing/speaking. Grey blue skin. Unconsciousness may develop. Breathing and heart may stop.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Red blotchy skin. Swelling around of the face/neck/eyes. Impaired breathing/wheezing. Anaphylactic shock.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Difficulty in breathing/speaking. Grasping the neck or pointing to the throat. Lips turn blue eventually. Possible unconsciousness.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet. No apparent change in skin colour.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Asthma (T)",
    question: "What are some of the treatments for an asthma attack?",
    resources: "First Aid/Illnesses/Injuries - 9.6.4",
    answers: [
      {
        id: 1,
        text: "Reassure and calm the casualty. Loosen tight clothing. Ask casualty to breathe slowly and deeply. Use inhaler if available. If unconscious with breathing, put in the recovery position. CPR and AED are needed if there is no breathing. Contact MedLink.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Encourage the casualty to cough. Remove any obvious obstructions from the mouth. Give oxygen. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Reassure the casualty. Instruct the casualty to breathe into a paper bag. If unconscious with breathing, put in the recovery position. CPR and AED are needed if there is no breathing. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Give oxygen. Loosen tight clothing. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "External Bleeding (S&S)",
    question:
      "What are some of the signs and symptoms you might see on a person who is bleeding externally?",
    resources: "First Aid/Illnesses/Injuries - 9.6.7",
    answers: [
      {
        id: 1,
        text: "Feels faint/giddy. Pale. Skin feels cold/clammy. Rapid weak pulse. Thirstiness. Restless and talkative. Breathing becomes shallower, sometimes accompanied by yawning and air hunger. Shock may develop. Possible unconsciousness.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Distress and anxiety. Difficulty in breathing/speaking. Grey blue skin. Unconsciousness may develop. Breathing and heart may stop.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Possible pain or tenderness. Numbness or weakness in legs and/or arms, and difficulty moving limbs. Loss of sensation in the area.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet. Pain. Swelling and skin discoloration.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Choking (S&S)",
    question:
      "What are some of the signs and symptoms you might see when a person is choking?",
    resources: "First Aid/Illnesses/Injuries - 9.6.12",
    answers: [
      {
        id: 1,
        text: "Difficulty in breathing/speaking. Grasping the neck or pointing to the throat. Lips turn blue eventually. Possible unconsciousness.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Red blotchy skin. Swelling around of the face/neck/eyes. Impaired breathing/wheezing. Anaphylactic shock.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Distress and anxiety. Difficulty in breathing/speaking. Grey blue skin. Unconsciousness may develop. Breathing and heart may stop.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet. No apparent change in skin colour.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Deep Vein Thrombosis (S&S)",
    question:
      "Deep vein thrombosis is a condition where blood clots form in the veins of the leg. Although only half of the casualties with DVT developes symptoms, what are some of those signs and symptoms?",
    resources: "First Aid/Illnesses/Injuries - 9.6.13",
    answers: [
      {
        id: 1,
        text: "Swelling of the calf. Pain or tenderness in the leg. Redness of the affected leg.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Signs of internal bleeding of the affected leg. Swelling of the calf.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Swelling of the calf. Pain or tenderness in the leg. Unconsciousness may develop. Breathing and heart may stop.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Unconsciousness. Anaphylactic shock. Heart and breathing might stop.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Hypoglycaemia (S&S)",
    question:
      "Hypoglycaemia is a lack of sugar or too much insulin in the bloodstream. What are some of the signs and symptoms of hypoglycaemia?",
    resources: "First Aid/Illnesses/Injuries - 9.6.14.1",
    answers: [
      {
        id: 1,
        text: "Feels weak and faint. Muscle tremors. May appear confused. Sweating. Looks pale. Skin feels cold and clammy. A stronger than normal pulse. Possible unconsciousness may develop.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Dry skin. Rapid pulse. Deep breathing. Breath smells faintly of nail varnish remover or fruity sweet breath. Excessive thirst.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Areas around joints begins to swell. Difficulty in breathing and speaking. Lips and skin discoloration.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Unconsciousness. Anaphylactic shock. Heart and breathing might stop.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Hyperglycaemia (S&S)",
    question:
      "Hyperglycaemia is when there is too much sugar or a lack insulin in the bloodstream. What are some of the signs and symptoms of hyperglycaemia?",
    resources: "First Aid/Illnesses/Injuries - 9.6.14.2",
    answers: [
      {
        id: 1,
        text: "Dry skin. Rapid pulse. Deep breathing. Breath smells faintly of nail varnish remover or fruity sweet breath. Excessive thirst.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Feels weak and faint. Muscle tremors. May appear confused. Sweating. Looks pale. Skin feels cold and clammy. A stronger than normal pulse. Possible unconsciousness may develop.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Areas around joints begins to swell. Difficulty in breathing and speaking. Lips and skin discoloration.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Unconsciousness. Anaphylactic shock. Heart and breathing might stop.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Hypoglycaemia (T)",
    question: "What treatments could you give for hypoglycaemia?",
    resources: "First Aid/Illnesses/Injuries - 9.6.14.1",
    answers: [
      {
        id: 1,
        text: "Give them sweetened food/drink and let them rest until fully recovered. If the condition does not improve, contact MedLink. Monitor breathing and pulse.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Reassure passenger and let them rest. Give them clear liquids such as water. Monitor pulse and breathing. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Loosen tight clothing. Give oxygen. Monitor pulse and breathing. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Place cold compress on passenger's head. Instruct passenger to take deep breaths. Remove excess clothing to cool passenger.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Fainting (T)",
    question: "What are some treatments for someone who has just fainted?",
    resources: "First Aid/Illnesses/Injuries - 9.6.18",
    answers: [
      {
        id: 1,
        text: "If the casualty is conscious, sit them down. Ask them to lean forward and place their head between their knees. Take deep breaths. If they become unconscious, lay them down. Raise their legs and monitor breathing and pulse. Contact MedLink if the passenger does not recover in a few minutes.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Do not move them unless they are in danger. Padding surrounding area around the casualty. Do not touch the casualty if possible. Place them in the recovery position. Stay with them until they are completely recovered. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Loosen tight clothing. Give oxygen. Monitor pulse and breathing. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Place cold compress on passenger's head. Instruct passenger to take deep breaths. Ask passenger if they have any medication. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Angina Pectoris (S&S)",
    question:
      "Angina Pectoris is caused by temporary inadequate blood supply to the heart muscle. What are the signs and symptoms of this condition?",
    resources: "First Aid/Illnesses/Injuries - 9.6.23.1",
    answers: [
      {
        id: 1,
        text: "Vice-like chest pain which may spread to the jaw and down one or both arms. Pain eases with rest. Shortness of breath. Sudden tiredness. Feeling of anxiety.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Vice-like chest pain which may spread to the jaw and down one or both arms. The pain does not ease with rest. Pale grey skin. Lips turn blue. Sweating. Shock. Unconsciousness. Breathing and heart may stop.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Headache and dizziness. Rapid, distressed breathing and gasping. Difficulty speaking. Anxiety and restlessness. Fatigue, excessive sleepiness and loss of coordination.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Angina Pectoris (T)",
    question:
      "Angina Pectoris is caused by temporary inadequate blood supply to the heart muscle. What are some of the treatments for this condition?",
    resources: "First Aid/Illnesses/Injuries - 9.6.23.1",
    answers: [
      {
        id: 1,
        text: "Sit casualty comfortably and encourage rest. Assist casualty in taking their medicine if available. Give oxygen. Contact MedLink.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Make the casualty comfortable in a half sitting position. Assist casualty in taking their medicine if available. Give oxygen. Use AED. Treat shock. If unconscious with breathing, put casualty in the recovery position. If not breathing normally, start CPR. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Massage affected limbs or raise them above the heart. Give oxygen. Assist in taking medication. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Give paracetamol and plenty of fluids. Monitor breathing and pulse. Loosen tight clothing. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Heart Attack (S&S)",
    question:
      "A heart attack occurs when a blood clot blocks a coronary artery. The area of heart muscle beyond the clot is deprived of oxygen and is damaged. What are some of the signs and symptoms of a heart attack?",
    resources: "First Aid/Illnesses/Injuries - 9.6.23.2",
    answers: [
      {
        id: 1,
        text: "Vice-like chest pain which may spread to the jaw and down one or both arms. The pain does not ease with rest. Pale grey skin. Lips turn blue. Sweating. Shock. Unconsciousness. Breathing and heart may stop.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Vice-like chest pain which may spread to the jaw and down one or both arms. Pain eases with rest. Shortness of breath. Sudden tiredness. Feeling of anxiety.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Headache and dizziness. Rapid, distressed breathing and gasping. Difficulty speaking. Anxiety and restlessness. Fatigue, excessive sleepiness and loss of coordination.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Heart Attack (T)",
    question:
      "A heart attack occurs when a blood clot blocks a coronary artery. The area of heart muscle beyond the clot is deprived of oxygen and is damaged. What are some of the treatments for this condition?",
    resources: "First Aid/Illnesses/Injuries - 9.6.23.2",
    answers: [
      {
        id: 1,
        text: "Make the casualty comfortable in a half sitting position. Assist casualty in taking their medicine if available. Give oxygen. Use AED. Treat shock. If unconscious with breathing, put casualty in the recovery position. If not breathing normally, start CPR. Contact MedLink.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Sit casualty comfortably and encourage rest. Assist casualty in taking their medicine if available. Give oxygen. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Massage affected limbs or raise them above the heart. Give oxygen. Assist in taking medication. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Give paracetamol and plenty of fluids. Monitor breathing and pulse. Loosen tight clothing. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Hyperventilation (S&S)",
    question:
      "Hyperventilation causes an excessive loss of carbon dioxide from the body. What are some of the signs and symptoms of a person who is hyperventilating?",
    resources: "First Aid/Illnesses/Injuries - 9.6.24",
    answers: [
      {
        id: 1,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet. No apparent change in skin colour.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Headache and dizziness. Rapid, distressed breathing and gasping. Difficulty speaking. Anxiety and restlessness. Fatigue, excessive sleepiness and loss of coordination. Bluish discolouration of the skin.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Chest pain. Pale grey skin. Lips turn blue. Sweating. Shock. Unconsciousness. Breathing and heart may stop.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Difficulty in breathing. Thirst. Drooping of one side of the face. Possible vomiting.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Hyperventilation (T)",
    question:
      "Hyperventilation causes an excessive loss of carbon dioxide from the body. What are some of the treatments for hyperventilation?",
    resources: "First Aid/Illnesses/Injuries - 9.6.24",
    answers: [
      {
        id: 1,
        text: "Reassure the casualty. Instruct the casualty to breathe slowly. Contact MedLink.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Give oxygen. Loosen tight clothing. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Assist in taking medication. If symptoms persists, use AED. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Calm casualty. Treat for shock. Keep sample of vomit for emergency services. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Hypoxia (S&S)",
    question:
      "Hypoxia occurs when the casualty is not obtaining enough oxygen. What are some of the signs and symptoms of a person who is hyperventilating?",
    resources: "First Aid/Illnesses/Injuries - 9.6.24",
    answers: [
      {
        id: 1,
        text: "Headache and dizziness. Rapid, distressed breathing and gasping. Difficulty speaking. Anxiety and restlessness. Fatigue, excessive sleepiness and loss of coordination. Bluish discolouration of the skin.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet. No apparent change in skin colour.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Chest pain. Pale grey skin. Lips turn blue. Sweating. Shock. Unconsciousness. Breathing and heart may stop.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Difficulty in breathing. Thirst. Drooping of one side of the face. Possible vomiting.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Hypoxia (T)",
    question:
      "Hypoxia occurs when the casualty is not obtaining enough oxygen. What are some of the treatments for hypoxia?",
    resources: "First Aid/Illnesses/Injuries - 9.6.25",
    answers: [
      {
        id: 1,
        text: "Give oxygen. Loosen tight clothing. Contact MedLink.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Reassure the casualty. Instruct the casualty to breathe slowly. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Assist in taking medication. If symptoms persists, use AED. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Calm casualty. Treat for shock. Keep sample of vomit for emergency services. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Shock (S&S)",
    question:
      "When the circulatory system fails and becomes unable to distribute sufficient oxygen and nutrients to different parts of the body, a condition known as “shock” will develop. What are some of the signs and symptoms of shock?",
    resources: "First Aid/Illnesses/Injuries - 9.6.31",
    answers: [
      {
        id: 1,
        text: "Rapid and shallow breathing. Weak/irregular pulse rate. Pale grey skin. Lips turn blue. Weakness and dizziness. Nausea/vomiting. Sweating, cold and clammy skin. Thirsty. Heart may stop.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet. No apparent change in skin colour.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Chest pain. Pale grey skin. Lips turn blue. Sweating. Shock. Unconsciousness. Breathing and heart may stop.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Difficulty in breathing. Thirst. Drooping of one side of the face. Possible vomiting.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Shock (T)",
    question:
      "When the circulatory system fails and becomes unable to distribute sufficient oxygen and nutrients to different parts of the body, a condition known as “shock” will develop. What are some of the treatments for shock?",
    resources: "First Aid/Illnesses/Injuries - 9.6.31",
    answers: [
      {
        id: 1,
        text: "Keep the head low, raise and support the legs. Loosen tight clothing. Keep the casualty warm. Do not give anything to eat or drink. If unconscious with breathing, place them in the recovery position. CPR and AED are needed if there is no breathing. Contact MedLink.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Assist casualty with taking medication. Give oxygen and plenty of fluids. Monitor breathing and pulse. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Make the casualty comfortable in a half sitting position and encourage rest.  Loosen tight clothing. If unconscious with breathing, place them in the recovery position. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Remove extra blankets and clothing so heat can leave the body and help lower the body temperature.Perform CPR. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Stroke (S&S)",
    question:
      "A stroke occurs when the blood supply to part of the brain is suddenly impaired by a blood clot or a ruptured artery. What are some of the signs and symptoms of stroke?",
    resources: "First Aid/Illnesses/Injuries - 9.6.34",
    answers: [
      {
        id: 1,
        text: "Headache, dizziness, ringing in ears, spots before eyes. Severe headache with no apparent cause. Sudden confusion. Paralysis on one side or both sides of the body. Dribbling from the mouth. Slurred speech. Loss of bladder or bowel control. Loss of consciousness. Breathing and heart beat may stop.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Distress and anxiety. Difficulty in breathing. Grey blue skin. Lips turn blue. Breathing and heart may stop.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Chest pain which may spread to one or both arms. Pale grey skin. Lips turn blue. Sweating. Shock. Unconsciousness.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Unnaturally fast or deep breathing. Dizziness and blurring of vision. Numbness and tingling sensation of hands and feet. No apparent change in skin colour.",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    title: "Stroke (T)",
    question:
      "A stroke occurs when the blood supply to part of the brain is suddenly impaired by a blood clot or a ruptured artery. What are some of the treatment for stroke?",
    resources: "First Aid/Illnesses/Injuries - 9.6.34",
    answers: [
      {
        id: 1,
        text: "Lay casualty down with their head and shoulder slightly raised. Loosen tight clothing. Do not give anything to eat or drink. Monitor breathing and pulse. If unconscious with breathing, put casualty in the recovery position. Apply CPR and AED if there is no breathing. Contact MedLink.",
        isCorrectAnswer: true,
      },
      {
        id: 2,
        text: "Sit casualty comfortably and encourage rest. Assist casualty in taking their medicine if available. Give oxygen. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 3,
        text: "Reassure the casualty. Keep casualty warm. Instruct the casualty to breathe slowly. Contact MedLink.",
        isCorrectAnswer: false,
      },
      {
        id: 4,
        text: "Keep the head low, raise and support the legs. Loosen tight clothing. Keep the casualty warm. Give plenty of fluids. If unconscious with breathing, place them in the recovery position. CPR and AED are needed if there is no breathing. Contact MedLink.",
        isCorrectAnswer: false,
      },
    ],
  },
];

export default firstAidQuestions;
