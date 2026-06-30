export const summaryTables = [
  {
    "title": "Core Formula Table",
    "columns": [
      "Concept",
      "Formula",
      "Unit",
      "Trap"
    ],
    "rows": [
      [
        "Bar Magnet as Dipole",
        "M = m(2l)",
        "A m^2",
        "Magnetic poles always appear in pairs."
      ],
      [
        "Magnetic Dipole Moment",
        "M = m x 2l",
        "A m^2",
        "Direction is from south pole to north pole inside magnet."
      ],
      [
        "Magnetic Field Lines",
        "div B = 0",
        "idea",
        "They do not start or end at isolated poles."
      ],
      [
        "Axial Field of Short Magnet",
        "B = mu0 2M/(4 pi r^3)",
        "T",
        "Formula assumes r is much larger than magnet length."
      ],
      [
        "Equatorial Field of Short Magnet",
        "B = mu0 M/(4 pi r^3)",
        "T",
        "Direction differs from axial case."
      ],
      [
        "Torque on Magnetic Dipole",
        "tau = M B sin theta",
        "N m",
        "Torque is zero at parallel and antiparallel positions."
      ],
      [
        "Potential Energy of Dipole",
        "U = -M B cos theta",
        "J",
        "Stable position has minimum energy."
      ],
      [
        "Gauss Law for Magnetism",
        "integral B dA = 0",
        "Wb",
        "No magnetic monopoles in NCERT treatment."
      ],
      [
        "Earth Magnetic Field",
        "B_E resolved into BH and BV",
        "T",
        "Geographic and magnetic axes are not identical."
      ],
      [
        "Magnetic Declination",
        "D = angle between meridians",
        "degree",
        "Do not confuse declination with dip."
      ]
    ]
  },
  {
    "title": "Graph and Direction Patterns",
    "columns": [
      "Topic",
      "Pattern",
      "Exam use"
    ],
    "rows": [
      [
        "Magnetic Inclination or Dip",
        "tan I = BV/BH",
        "At magnetic equator dip is nearly zero."
      ],
      [
        "Horizontal Component",
        "BH = B cos I",
        "Use dip angle, not declination."
      ],
      [
        "Vertical Component",
        "BV = B sin I",
        "B is not always equal to BH."
      ],
      [
        "Magnetization",
        "M = m_net/V",
        "Symbol M can mean dipole moment or magnetization by context."
      ],
      [
        "Magnetic Intensity",
        "B = mu0(H + M)",
        "H and B have different units."
      ],
      [
        "Magnetic Susceptibility",
        "M = chi H",
        "Chi may be negative for diamagnetic substances."
      ],
      [
        "Relative Permeability",
        "mu_r = 1 + chi",
        "Only exact for linear isotropic materials."
      ],
      [
        "Diamagnetic Materials",
        "chi < 0",
        "They have no permanent dipole alignment in field-free state."
      ],
      [
        "Paramagnetic Materials",
        "chi > 0 small",
        "Thermal agitation weakens alignment."
      ],
      [
        "Ferromagnetic Materials",
        "chi very large",
        "They show hysteresis and saturation."
      ]
    ]
  },
  {
    "title": "NEET vs JEE Question Patterns",
    "columns": [
      "Cluster",
      "NEET asks",
      "JEE asks"
    ],
    "rows": [
      [
        "Bar magnets",
        "Formula and NCERT statement from Magnetic dipole moment, field lines and dipole field.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Earth field",
        "Formula and NCERT statement from Declination, inclination and horizontal/vertical components.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Materials",
        "Formula and NCERT statement from Magnetization, susceptibility and permeability.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Hysteresis",
        "Formula and NCERT statement from Domains, soft/hard magnets and energy loss.",
        "Numerical, graph, direction and limiting-case combinations"
      ]
    ]
  }
]

export const memoryHooks = [
  "Bar magnet = magnetic dipole.",
  "Axial field is twice equatorial magnitude at same far point.",
  "BH = B cos I and BV = B sin I.",
  "Diamagnetic chi negative, paramagnetic chi positive small.",
  "Soft iron has narrow hysteresis loop."
]

export const topFormulas = [
  "M = m(2l)",
  "B = mu0 2M/(4 pi r^3)",
  "B = mu0 M/(4 pi r^3)",
  "tau = M B sin theta",
  "U = -M B cos theta",
  "integral B dA = 0",
  "tan I = BV/BH",
  "BH = B cos I",
  "BV = B sin I",
  "M = m_net/V",
  "B = mu0(H + M)",
  "M = chi H",
  "mu_r = 1 + chi",
  "chi = C/T",
  "loss per volume per cycle = loop area"
]

export const topConcepts = [
  "Bar Magnet as Dipole: A bar magnet behaves like a magnetic dipole with north and south poles.",
  "Magnetic Dipole Moment: Dipole moment measures pole strength times magnetic length.",
  "Magnetic Field Lines: Magnetic field lines form continuous closed loops.",
  "Axial Field of Short Magnet: On axial line, dipole field falls as inverse cube of distance.",
  "Equatorial Field of Short Magnet: On equatorial line, field has half axial magnitude and opposite direction.",
  "Torque on Magnetic Dipole: A magnetic dipole in uniform field experiences torque.",
  "Potential Energy of Dipole: Dipole energy depends on orientation in magnetic field.",
  "Gauss Law for Magnetism: Net magnetic flux through a closed surface is zero.",
  "Earth Magnetic Field: Earth acts approximately like a giant magnet.",
  "Magnetic Declination: Declination is angle between geographic meridian and magnetic meridian.",
  "Magnetic Inclination or Dip: Inclination is angle made by Earth field with horizontal.",
  "Horizontal Component: Horizontal component of Earth field is used in compass problems.",
  "Vertical Component: Vertical component completes Earth field resolution.",
  "Magnetization: Magnetization is magnetic dipole moment per unit volume.",
  "Magnetic Intensity: Magnetic intensity H describes magnetizing field.",
  "Magnetic Susceptibility: Susceptibility measures how strongly material magnetizes.",
  "Relative Permeability: Relative permeability compares medium permeability with vacuum.",
  "Diamagnetic Materials: Diamagnetic materials are weakly repelled by magnetic field.",
  "Paramagnetic Materials: Paramagnetic materials are weakly attracted by magnetic field.",
  "Ferromagnetic Materials: Ferromagnetic materials show strong attraction and domain alignment."
]

export const topTraps = [
  "Magnetic poles always appear in pairs.",
  "Direction is from south pole to north pole inside magnet.",
  "They do not start or end at isolated poles.",
  "Formula assumes r is much larger than magnet length.",
  "Direction differs from axial case.",
  "Torque is zero at parallel and antiparallel positions.",
  "Stable position has minimum energy.",
  "No magnetic monopoles in NCERT treatment.",
  "Geographic and magnetic axes are not identical.",
  "Do not confuse declination with dip.",
  "At magnetic equator dip is nearly zero.",
  "Use dip angle, not declination.",
  "B is not always equal to BH.",
  "Symbol M can mean dipole moment or magnetization by context.",
  "H and B have different units."
]

export const topDiagrams = [
  "Bar Magnet as Dipole Visual",
  "Magnetic Dipole Moment Visual",
  "Magnetic Field Lines Visual",
  "Axial Field of Short Magnet Visual",
  "Equatorial Field of Short Magnet Visual",
  "Torque on Magnetic Dipole Visual",
  "Potential Energy of Dipole Visual",
  "Gauss Law for Magnetism Visual",
  "Earth Magnetic Field Visual",
  "Magnetic Declination Visual"
]

export const graphPatterns = [
  "Bar Magnet as Dipole: graph/variation follows M = m(2l).",
  "Magnetic Dipole Moment: graph/variation follows M = m x 2l.",
  "Magnetic Field Lines: graph/variation follows div B = 0.",
  "Axial Field of Short Magnet: graph/variation follows B = mu0 2M/(4 pi r^3).",
  "Equatorial Field of Short Magnet: graph/variation follows B = mu0 M/(4 pi r^3).",
  "Torque on Magnetic Dipole: graph/variation follows tau = M B sin theta.",
  "Potential Energy of Dipole: graph/variation follows U = -M B cos theta.",
  "Gauss Law for Magnetism: graph/variation follows integral B dA = 0.",
  "Earth Magnetic Field: graph/variation follows B_E resolved into BH and BV.",
  "Magnetic Declination: graph/variation follows D = angle between meridians."
]

export const questionTypes = [
  "Direct formula MCQ",
  "Direction/phase conceptual",
  "Graph interpretation",
  "Ratio numerical",
  "Statement correction",
  "Assertion-reason",
  "Integer answer",
  "Diagram labelling",
  "Case-based reasoning",
  "Limiting-case analysis"
]

export const revisionPlans = {
  "thirtyMinute": [
    "0-5 min: read formula sheet and units.",
    "5-10 min: redraw top diagrams.",
    "10-17 min: solve five direct MCQs and five numericals.",
    "17-24 min: revise traps and graph patterns.",
    "24-30 min: attempt mixed assertion/integer questions."
  ],
  "lastDay": [
    "Revise NCERT line alerts.",
    "Write derivation final formulas once.",
    "Review graph and direction rules.",
    "Solve one mixed practice set.",
    "Stop heavy new learning."
  ],
  "examHall": [
    "Draw a quick diagram.",
    "Write knowns in SI units.",
    "Choose the law with its condition.",
    "Keep signs/angles visible.",
    "Check dimensions and limiting case."
  ]
}

export const finalChecklist = [
  "I can explain, draw and solve Bar Magnet as Dipole.",
  "I can explain, draw and solve Magnetic Dipole Moment.",
  "I can explain, draw and solve Magnetic Field Lines.",
  "I can explain, draw and solve Axial Field of Short Magnet.",
  "I can explain, draw and solve Equatorial Field of Short Magnet.",
  "I can explain, draw and solve Torque on Magnetic Dipole.",
  "I can explain, draw and solve Potential Energy of Dipole.",
  "I can explain, draw and solve Gauss Law for Magnetism.",
  "I can explain, draw and solve Earth Magnetic Field.",
  "I can explain, draw and solve Magnetic Declination.",
  "I can explain, draw and solve Magnetic Inclination or Dip.",
  "I can explain, draw and solve Horizontal Component."
]
