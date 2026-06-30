export const formulas = [
  {
    "id": "dipole-moment",
    "title": "Magnetic Dipole Moment",
    "formula": "M = m(2l)",
    "display": "M = m(2l)",
    "symbols": [
      [
        "M",
        "dipole moment",
        "A m^2"
      ],
      [
        "m",
        "pole strength",
        "A m"
      ],
      [
        "2l",
        "magnetic length",
        "m"
      ]
    ],
    "meaning": "Strength of a bar magnet as a dipole.",
    "dimension": "A m x m = A m^2",
    "graph": "M grows with pole strength and length.",
    "trap": "Poles cannot be isolated.",
    "easyExample": "Easy example: identify symbols and substitute in M = m(2l) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Strength of a bar magnet as a dipole.",
    "jeeExample": "JEE Main pattern: combine M = m(2l) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Poles cannot be isolated."
  },
  {
    "id": "axial-field",
    "title": "Axial Dipole Field",
    "formula": "B = mu0 2M/(4 pi r^3)",
    "display": "B = mu0 2M/(4 pi r^3)",
    "symbols": [
      [
        "B",
        "magnetic field",
        "T"
      ],
      [
        "M",
        "dipole moment",
        "A m^2"
      ],
      [
        "r",
        "distance",
        "m"
      ]
    ],
    "meaning": "Field on axial line of short magnet.",
    "dimension": "T",
    "graph": "B-r graph follows inverse cube.",
    "trap": "Valid for short magnet/far point.",
    "easyExample": "Easy example: identify symbols and substitute in B = mu0 2M/(4 pi r^3) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Field on axial line of short magnet.",
    "jeeExample": "JEE Main pattern: combine B = mu0 2M/(4 pi r^3) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Valid for short magnet/far point."
  },
  {
    "id": "equatorial-field",
    "title": "Equatorial Dipole Field",
    "formula": "B = mu0 M/(4 pi r^3)",
    "display": "B = mu0 M/(4 pi r^3)",
    "symbols": [
      [
        "B",
        "field",
        "T"
      ]
    ],
    "meaning": "Field on equatorial line of short magnet.",
    "dimension": "T",
    "graph": "Half axial magnitude at same r.",
    "trap": "Direction differs from axial.",
    "easyExample": "Easy example: identify symbols and substitute in B = mu0 M/(4 pi r^3) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Field on equatorial line of short magnet.",
    "jeeExample": "JEE Main pattern: combine B = mu0 M/(4 pi r^3) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Direction differs from axial."
  },
  {
    "id": "dipole-torque",
    "title": "Torque on Magnetic Dipole",
    "formula": "tau = M B sin theta",
    "display": "tau = M B sin theta",
    "symbols": [
      [
        "tau",
        "torque",
        "N m"
      ],
      [
        "theta",
        "angle",
        "degree/radian"
      ]
    ],
    "meaning": "Dipole tends to align with field.",
    "dimension": "A m^2 T = N m",
    "graph": "tau-theta sine graph.",
    "trap": "Zero at 0 and 180 degrees.",
    "easyExample": "Easy example: identify symbols and substitute in tau = M B sin theta after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Dipole tends to align with field.",
    "jeeExample": "JEE Main pattern: combine tau = M B sin theta with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Zero at 0 and 180 degrees."
  },
  {
    "id": "dipole-energy",
    "title": "Dipole Potential Energy",
    "formula": "U = -M B cos theta",
    "display": "U = -M B cos theta",
    "symbols": [
      [
        "U",
        "energy",
        "J"
      ]
    ],
    "meaning": "Energy is minimum when dipole aligns with field.",
    "dimension": "A m^2 T = J",
    "graph": "U-theta negative cosine.",
    "trap": "Stable and unstable equilibrium differ.",
    "easyExample": "Easy example: identify symbols and substitute in U = -M B cos theta after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Energy is minimum when dipole aligns with field.",
    "jeeExample": "JEE Main pattern: combine U = -M B cos theta with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Stable and unstable equilibrium differ."
  },
  {
    "id": "gauss-magnetism",
    "title": "Gauss Law for Magnetism",
    "formula": "integral B dA = 0",
    "display": "integral B dA = 0",
    "symbols": [
      [
        "B dA",
        "magnetic flux",
        "Wb"
      ]
    ],
    "meaning": "Net magnetic flux through closed surface is zero.",
    "dimension": "Wb",
    "graph": "Closed surface flux is zero.",
    "trap": "No monopoles in NCERT.",
    "easyExample": "Easy example: identify symbols and substitute in integral B dA = 0 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Net magnetic flux through closed surface is zero.",
    "jeeExample": "JEE Main pattern: combine integral B dA = 0 with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: No monopoles in NCERT."
  },
  {
    "id": "earth-dip",
    "title": "Dip Angle Relation",
    "formula": "tan I = BV/BH",
    "display": "tan I = BV/BH",
    "symbols": [
      [
        "I",
        "inclination/dip",
        "degree"
      ],
      [
        "BV",
        "vertical component",
        "T"
      ],
      [
        "BH",
        "horizontal component",
        "T"
      ]
    ],
    "meaning": "Earth field components define dip angle.",
    "dimension": "dimensionless",
    "graph": "tan graph connects components.",
    "trap": "Do not use declination here.",
    "easyExample": "Easy example: identify symbols and substitute in tan I = BV/BH after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Earth field components define dip angle.",
    "jeeExample": "JEE Main pattern: combine tan I = BV/BH with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Do not use declination here."
  },
  {
    "id": "horizontal",
    "title": "Horizontal Component",
    "formula": "BH = B cos I",
    "display": "BH = B cos I",
    "symbols": [
      [
        "B",
        "Earth magnetic field",
        "T"
      ]
    ],
    "meaning": "Horizontal component used by compass.",
    "dimension": "T",
    "graph": "BH decreases as dip increases.",
    "trap": "I is dip angle.",
    "easyExample": "Easy example: identify symbols and substitute in BH = B cos I after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Horizontal component used by compass.",
    "jeeExample": "JEE Main pattern: combine BH = B cos I with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: I is dip angle."
  },
  {
    "id": "vertical",
    "title": "Vertical Component",
    "formula": "BV = B sin I",
    "display": "BV = B sin I",
    "symbols": [
      [
        "BV",
        "vertical component",
        "T"
      ]
    ],
    "meaning": "Vertical component of Earth field.",
    "dimension": "T",
    "graph": "BV grows with dip.",
    "trap": "At equator it is small.",
    "easyExample": "Easy example: identify symbols and substitute in BV = B sin I after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Vertical component of Earth field.",
    "jeeExample": "JEE Main pattern: combine BV = B sin I with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: At equator it is small."
  },
  {
    "id": "magnetization",
    "title": "Magnetization",
    "formula": "M = m_net/V",
    "display": "M = m_net/V",
    "symbols": [
      [
        "M",
        "magnetization",
        "A m^-1"
      ],
      [
        "m_net",
        "net magnetic moment",
        "A m^2"
      ],
      [
        "V",
        "volume",
        "m^3"
      ]
    ],
    "meaning": "Magnetic moment per volume.",
    "dimension": "A m^2/m^3=A/m",
    "graph": "M measures material response.",
    "trap": "Context decides symbol M.",
    "easyExample": "Easy example: identify symbols and substitute in M = m_net/V after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Magnetic moment per volume.",
    "jeeExample": "JEE Main pattern: combine M = m_net/V with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Context decides symbol M."
  },
  {
    "id": "b-h-m",
    "title": "B H M Relation",
    "formula": "B = mu0(H + M)",
    "display": "B = mu0(H + M)",
    "symbols": [
      [
        "H",
        "magnetic intensity",
        "A m^-1"
      ]
    ],
    "meaning": "Total B comes from applied H and material M.",
    "dimension": "T",
    "graph": "B increases with material response.",
    "trap": "H and B units differ.",
    "easyExample": "Easy example: identify symbols and substitute in B = mu0(H + M) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Total B comes from applied H and material M.",
    "jeeExample": "JEE Main pattern: combine B = mu0(H + M) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: H and B units differ."
  },
  {
    "id": "susceptibility",
    "title": "Susceptibility",
    "formula": "M = chi H",
    "display": "M = chi H",
    "symbols": [
      [
        "chi",
        "magnetic susceptibility",
        "unitless"
      ]
    ],
    "meaning": "Material magnetization response.",
    "dimension": "dimensionless chi",
    "graph": "M-H graph slope is chi.",
    "trap": "Chi can be negative.",
    "easyExample": "Easy example: identify symbols and substitute in M = chi H after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Material magnetization response.",
    "jeeExample": "JEE Main pattern: combine M = chi H with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Chi can be negative."
  },
  {
    "id": "permeability",
    "title": "Relative Permeability",
    "formula": "mu_r = 1 + chi",
    "display": "mu_r = 1 + chi",
    "symbols": [
      [
        "mu_r",
        "relative permeability",
        "unitless"
      ]
    ],
    "meaning": "Medium permeability relative to vacuum.",
    "dimension": "dimensionless",
    "graph": "Linear material relation.",
    "trap": "Only simple for linear media.",
    "easyExample": "Easy example: identify symbols and substitute in mu_r = 1 + chi after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Medium permeability relative to vacuum.",
    "jeeExample": "JEE Main pattern: combine mu_r = 1 + chi with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Only simple for linear media."
  },
  {
    "id": "curie",
    "title": "Curie Law",
    "formula": "chi = C/T",
    "display": "chi = C/T",
    "symbols": [
      [
        "C",
        "Curie constant",
        "K"
      ],
      [
        "T",
        "temperature",
        "K"
      ]
    ],
    "meaning": "Paramagnetic susceptibility decreases with temperature.",
    "dimension": "dimensionless",
    "graph": "chi-T inverse graph.",
    "trap": "Not ferromagnetic below Curie point.",
    "easyExample": "Easy example: identify symbols and substitute in chi = C/T after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Paramagnetic susceptibility decreases with temperature.",
    "jeeExample": "JEE Main pattern: combine chi = C/T with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Not ferromagnetic below Curie point."
  },
  {
    "id": "hysteresis",
    "title": "Hysteresis Loss",
    "formula": "loss per volume per cycle = loop area",
    "display": "loss per volume per cycle = loop area",
    "symbols": [
      [
        "area",
        "B-H loop area",
        "J m^-3"
      ]
    ],
    "meaning": "Energy loss in cyclic magnetization.",
    "dimension": "J/m^3",
    "graph": "B-H loop area indicates loss.",
    "trap": "Wide loop means more loss.",
    "easyExample": "Easy example: identify symbols and substitute in loss per volume per cycle = loop area after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Energy loss in cyclic magnetization.",
    "jeeExample": "JEE Main pattern: combine loss per volume per cycle = loop area with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Wide loop means more loss."
  }
]

export const formulaGroups = [
  {
    "title": "Bar magnets",
    "formulas": [
      "dipole-moment",
      "axial-field",
      "equatorial-field",
      "dipole-torque",
      "dipole-energy"
    ]
  },
  {
    "title": "Earth field",
    "formulas": [
      "gauss-magnetism",
      "earth-dip",
      "horizontal",
      "vertical",
      "magnetization"
    ]
  },
  {
    "title": "Materials",
    "formulas": [
      "b-h-m",
      "susceptibility",
      "permeability",
      "curie",
      "hysteresis"
    ]
  },
  {
    "title": "Hysteresis",
    "formulas": []
  }
]

