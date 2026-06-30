export const derivations = [
  {
    "id": "derive-magnetic-field-on-axial-line",
    "title": "Derivation: Magnetic field on axial line",
    "startsFrom": "Start from the definition and a labelled diagram.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Magnetic field on axial line.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: M = m(2l).",
        "Strength of a bar magnet as a dipole."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: M = m(2l).",
        "Check A m x m = A m^2, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "M = m(2l)",
    "shortcut": "Remember the condition attached to M = m(2l); it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Poles cannot be isolated."
  },
  {
    "id": "derive-magnetic-field-on-equatorial-line",
    "title": "Derivation: Magnetic field on equatorial line",
    "startsFrom": "Start from the governing law and ideal geometry.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Magnetic field on equatorial line.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: B = mu0 2M/(4 pi r^3).",
        "Field on axial line of short magnet."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: B = mu0 2M/(4 pi r^3).",
        "Check T, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "B = mu0 2M/(4 pi r^3)",
    "shortcut": "Remember the condition attached to B = mu0 2M/(4 pi r^3); it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Valid for short magnet/far point."
  },
  {
    "id": "derive-torque-on-magnetic-dipole",
    "title": "Derivation: Torque on magnetic dipole",
    "startsFrom": "Start from conservation/energy or force balance.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Torque on magnetic dipole.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: B = mu0 M/(4 pi r^3).",
        "Field on equatorial line of short magnet."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: B = mu0 M/(4 pi r^3).",
        "Check T, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "B = mu0 M/(4 pi r^3)",
    "shortcut": "Remember the condition attached to B = mu0 M/(4 pi r^3); it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Direction differs from axial."
  },
  {
    "id": "derive-potential-energy-of-magnetic-dipole",
    "title": "Derivation: Potential energy of magnetic dipole",
    "startsFrom": "Start from graph/variation and convert to equation.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Potential energy of magnetic dipole.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: tau = M B sin theta.",
        "Dipole tends to align with field."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: tau = M B sin theta.",
        "Check A m^2 T = N m, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "tau = M B sin theta",
    "shortcut": "Remember the condition attached to tau = M B sin theta; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Zero at 0 and 180 degrees."
  },
  {
    "id": "derive-gauss-law-for-magnetism",
    "title": "Derivation: Gauss law for magnetism",
    "startsFrom": "Start from the definition and a labelled diagram.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Gauss law for magnetism.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: U = -M B cos theta.",
        "Energy is minimum when dipole aligns with field."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: U = -M B cos theta.",
        "Check A m^2 T = J, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "U = -M B cos theta",
    "shortcut": "Remember the condition attached to U = -M B cos theta; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Stable and unstable equilibrium differ."
  },
  {
    "id": "derive-earth-field-components",
    "title": "Derivation: Earth field components",
    "startsFrom": "Start from the governing law and ideal geometry.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Earth field components.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: integral B dA = 0.",
        "Net magnetic flux through closed surface is zero."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: integral B dA = 0.",
        "Check Wb, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "integral B dA = 0",
    "shortcut": "Remember the condition attached to integral B dA = 0; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "No monopoles in NCERT."
  },
  {
    "id": "derive-magnetization-relation",
    "title": "Derivation: Magnetization relation",
    "startsFrom": "Start from conservation/energy or force balance.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Magnetization relation.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: tan I = BV/BH.",
        "Earth field components define dip angle."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: tan I = BV/BH.",
        "Check dimensionless, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "tan I = BV/BH",
    "shortcut": "Remember the condition attached to tan I = BV/BH; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Do not use declination here."
  },
  {
    "id": "derive-susceptibility-and-permeability",
    "title": "Derivation: Susceptibility and permeability",
    "startsFrom": "Start from graph/variation and convert to equation.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Susceptibility and permeability.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: BH = B cos I.",
        "Horizontal component used by compass."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: BH = B cos I.",
        "Check T, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "BH = B cos I",
    "shortcut": "Remember the condition attached to BH = B cos I; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "I is dip angle."
  },
  {
    "id": "derive-curie-law",
    "title": "Derivation: Curie law",
    "startsFrom": "Start from the definition and a labelled diagram.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Curie law.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: BV = B sin I.",
        "Vertical component of Earth field."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: BV = B sin I.",
        "Check T, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "BV = B sin I",
    "shortcut": "Remember the condition attached to BV = B sin I; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "At equator it is small."
  },
  {
    "id": "derive-hysteresis-loss",
    "title": "Derivation: Hysteresis loss",
    "startsFrom": "Start from the governing law and ideal geometry.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Hysteresis loss.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: M = m_net/V.",
        "Magnetic moment per volume."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: M = m_net/V.",
        "Check A m^2/m^3=A/m, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "M = m_net/V",
    "shortcut": "Remember the condition attached to M = m_net/V; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Context decides symbol M."
  },
  {
    "id": "derive-magnetic-shielding",
    "title": "Derivation: Magnetic shielding",
    "startsFrom": "Start from conservation/energy or force balance.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Magnetic shielding.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: B = mu0(H + M).",
        "Total B comes from applied H and material M."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: B = mu0(H + M).",
        "Check T, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "B = mu0(H + M)",
    "shortcut": "Remember the condition attached to B = mu0(H + M); it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "H and B units differ."
  },
  {
    "id": "derive-soft-versus-hard-magnetic-materials",
    "title": "Derivation: Soft versus hard magnetic materials",
    "startsFrom": "Start from graph/variation and convert to equation.",
    "steps": [
      [
        "Physical model",
        "State the ideal condition for Soft versus hard magnetic materials.",
        "This prevents applying a formula to the wrong geometry or circuit."
      ],
      [
        "Basic law",
        "Use the governing relation: M = chi H.",
        "Material magnetization response."
      ],
      [
        "Mathematics",
        "Simplify algebra while keeping signs, angles and constants visible.",
        "Direction, sign and phase information often carries the concept."
      ],
      [
        "Interpretation",
        "Final expression: M = chi H.",
        "Check dimensionless chi, then test the limiting case and graph behavior."
      ]
    ],
    "finalFormula": "M = chi H",
    "shortcut": "Remember the condition attached to M = chi H; it is faster than memorizing isolated symbols.",
    "boardStyle": "Write definition/law, neat labelled diagram when needed, mathematical steps, final boxed formula and one-line physical meaning.",
    "mistake": "Chi can be negative."
  }
]
