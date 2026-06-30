export const visualPlans = [
  {
    "id": "bar-magnet-1",
    "title": "Bar Magnet as Dipole Visual",
    "category": "Diagram",
    "diagramType": "bar-magnet",
    "shows": "A self-made SVG visual for Bar Magnet as Dipole showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "M",
      "m",
      "2l"
    ],
    "concept": "A bar magnet behaves like a magnetic dipole with north and south poles.",
    "removesConfusion": "Magnetic poles always appear in pairs.",
    "manual": "Draw the main object, add direction arrows, label variables, then write M = m(2l) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"bar-magnet\" draws this with free SVG primitives inside React."
  },
  {
    "id": "dipole-field-2",
    "title": "Magnetic Dipole Moment Visual",
    "category": "Diagram",
    "diagramType": "dipole-field",
    "shows": "A self-made SVG visual for Magnetic Dipole Moment showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "M",
      "m",
      "x",
      "2l"
    ],
    "concept": "Dipole moment measures pole strength times magnetic length.",
    "removesConfusion": "Direction is from south pole to north pole inside magnet.",
    "manual": "Draw the main object, add direction arrows, label variables, then write M = m x 2l below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dipole-field\" draws this with free SVG primitives inside React."
  },
  {
    "id": "dipole-torque-3",
    "title": "Magnetic Field Lines Visual",
    "category": "Diagram",
    "diagramType": "dipole-torque",
    "shows": "A self-made SVG visual for Magnetic Field Lines showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "div",
      "B",
      "0"
    ],
    "concept": "Magnetic field lines form continuous closed loops.",
    "removesConfusion": "They do not start or end at isolated poles.",
    "manual": "Draw the main object, add direction arrows, label variables, then write div B = 0 below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dipole-torque\" draws this with free SVG primitives inside React."
  },
  {
    "id": "earth-magnetism-4",
    "title": "Axial Field of Short Magnet Visual",
    "category": "Diagram",
    "diagramType": "earth-magnetism",
    "shows": "A self-made SVG visual for Axial Field of Short Magnet showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "mu0",
      "2M",
      "4",
      "pi",
      "r"
    ],
    "concept": "On axial line, dipole field falls as inverse cube of distance.",
    "removesConfusion": "Formula assumes r is much larger than magnet length.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = mu0 2M/(4 pi r^3) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"earth-magnetism\" draws this with free SVG primitives inside React."
  },
  {
    "id": "inclination-graph-5",
    "title": "Equatorial Field of Short Magnet Visual",
    "category": "Graph",
    "diagramType": "inclination-graph",
    "shows": "A self-made SVG visual for Equatorial Field of Short Magnet showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "mu0",
      "M",
      "4",
      "pi",
      "r"
    ],
    "concept": "On equatorial line, field has half axial magnitude and opposite direction.",
    "removesConfusion": "Direction differs from axial case.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = mu0 M/(4 pi r^3) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"inclination-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "magnetic-material-6",
    "title": "Torque on Magnetic Dipole Visual",
    "category": "Infographic",
    "diagramType": "magnetic-material",
    "shows": "A self-made SVG visual for Torque on Magnetic Dipole showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "tau",
      "M",
      "B",
      "sin",
      "theta"
    ],
    "concept": "A magnetic dipole in uniform field experiences torque.",
    "removesConfusion": "Torque is zero at parallel and antiparallel positions.",
    "manual": "Draw the main object, add direction arrows, label variables, then write tau = M B sin theta below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"magnetic-material\" draws this with free SVG primitives inside React."
  },
  {
    "id": "susceptibility-graph-7",
    "title": "Potential Energy of Dipole Visual",
    "category": "Graph",
    "diagramType": "susceptibility-graph",
    "shows": "A self-made SVG visual for Potential Energy of Dipole showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "U",
      "M",
      "B",
      "cos",
      "theta"
    ],
    "concept": "Dipole energy depends on orientation in magnetic field.",
    "removesConfusion": "Stable position has minimum energy.",
    "manual": "Draw the main object, add direction arrows, label variables, then write U = -M B cos theta below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"susceptibility-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "curie-graph-8",
    "title": "Gauss Law for Magnetism Visual",
    "category": "Graph",
    "diagramType": "curie-graph",
    "shows": "A self-made SVG visual for Gauss Law for Magnetism showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "integral",
      "B",
      "dA",
      "0"
    ],
    "concept": "Net magnetic flux through a closed surface is zero.",
    "removesConfusion": "No magnetic monopoles in NCERT treatment.",
    "manual": "Draw the main object, add direction arrows, label variables, then write integral B dA = 0 below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"curie-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "hysteresis-loop-9",
    "title": "Earth Magnetic Field Visual",
    "category": "Diagram",
    "diagramType": "hysteresis-loop",
    "shows": "A self-made SVG visual for Earth Magnetic Field showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B_E",
      "resolved",
      "into",
      "BH",
      "and",
      "BV"
    ],
    "concept": "Earth acts approximately like a giant magnet.",
    "removesConfusion": "Geographic and magnetic axes are not identical.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B_E resolved into BH and BV below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"hysteresis-loop\" draws this with free SVG primitives inside React."
  },
  {
    "id": "domain-visual-10",
    "title": "Magnetic Declination Visual",
    "category": "Diagram",
    "diagramType": "domain-visual",
    "shows": "A self-made SVG visual for Magnetic Declination showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "D",
      "angle",
      "between",
      "meridians"
    ],
    "concept": "Declination is angle between geographic meridian and magnetic meridian.",
    "removesConfusion": "Do not confuse declination with dip.",
    "manual": "Draw the main object, add direction arrows, label variables, then write D = angle between meridians below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"domain-visual\" draws this with free SVG primitives inside React."
  },
  {
    "id": "material-compare-11",
    "title": "Magnetic Inclination or Dip Visual",
    "category": "Infographic",
    "diagramType": "material-compare",
    "shows": "A self-made SVG visual for Magnetic Inclination or Dip showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "tan",
      "I",
      "BV",
      "BH"
    ],
    "concept": "Inclination is angle made by Earth field with horizontal.",
    "removesConfusion": "At magnetic equator dip is nearly zero.",
    "manual": "Draw the main object, add direction arrows, label variables, then write tan I = BV/BH below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"material-compare\" draws this with free SVG primitives inside React."
  },
  {
    "id": "trap-map-12",
    "title": "Horizontal Component Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Horizontal Component showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "BH",
      "B",
      "cos",
      "I"
    ],
    "concept": "Horizontal component of Earth field is used in compass problems.",
    "removesConfusion": "Use dip angle, not declination.",
    "manual": "Draw the main object, add direction arrows, label variables, then write BH = B cos I below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG primitives inside React."
  },
  {
    "id": "bar-magnet-13",
    "title": "Vertical Component Visual",
    "category": "Diagram",
    "diagramType": "bar-magnet",
    "shows": "A self-made SVG visual for Vertical Component showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "BV",
      "B",
      "sin",
      "I"
    ],
    "concept": "Vertical component completes Earth field resolution.",
    "removesConfusion": "B is not always equal to BH.",
    "manual": "Draw the main object, add direction arrows, label variables, then write BV = B sin I below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"bar-magnet\" draws this with free SVG primitives inside React."
  },
  {
    "id": "dipole-field-14",
    "title": "Magnetization Visual",
    "category": "Diagram",
    "diagramType": "dipole-field",
    "shows": "A self-made SVG visual for Magnetization showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "M",
      "m_net",
      "V"
    ],
    "concept": "Magnetization is magnetic dipole moment per unit volume.",
    "removesConfusion": "Symbol M can mean dipole moment or magnetization by context.",
    "manual": "Draw the main object, add direction arrows, label variables, then write M = m_net/V below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dipole-field\" draws this with free SVG primitives inside React."
  },
  {
    "id": "dipole-torque-15",
    "title": "Magnetic Intensity Visual",
    "category": "Diagram",
    "diagramType": "dipole-torque",
    "shows": "A self-made SVG visual for Magnetic Intensity showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "mu0",
      "H",
      "M"
    ],
    "concept": "Magnetic intensity H describes magnetizing field.",
    "removesConfusion": "H and B have different units.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = mu0(H + M) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dipole-torque\" draws this with free SVG primitives inside React."
  },
  {
    "id": "earth-magnetism-16",
    "title": "Magnetic Susceptibility Visual",
    "category": "Diagram",
    "diagramType": "earth-magnetism",
    "shows": "A self-made SVG visual for Magnetic Susceptibility showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "M",
      "chi",
      "H"
    ],
    "concept": "Susceptibility measures how strongly material magnetizes.",
    "removesConfusion": "Chi may be negative for diamagnetic substances.",
    "manual": "Draw the main object, add direction arrows, label variables, then write M = chi H below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"earth-magnetism\" draws this with free SVG primitives inside React."
  },
  {
    "id": "inclination-graph-17",
    "title": "Relative Permeability Visual",
    "category": "Graph",
    "diagramType": "inclination-graph",
    "shows": "A self-made SVG visual for Relative Permeability showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "mu_r",
      "1",
      "chi"
    ],
    "concept": "Relative permeability compares medium permeability with vacuum.",
    "removesConfusion": "Only exact for linear isotropic materials.",
    "manual": "Draw the main object, add direction arrows, label variables, then write mu_r = 1 + chi below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"inclination-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "magnetic-material-18",
    "title": "Diamagnetic Materials Visual",
    "category": "Infographic",
    "diagramType": "magnetic-material",
    "shows": "A self-made SVG visual for Diamagnetic Materials showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "chi",
      "<",
      "0"
    ],
    "concept": "Diamagnetic materials are weakly repelled by magnetic field.",
    "removesConfusion": "They have no permanent dipole alignment in field-free state.",
    "manual": "Draw the main object, add direction arrows, label variables, then write chi < 0 below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"magnetic-material\" draws this with free SVG primitives inside React."
  },
  {
    "id": "susceptibility-graph-19",
    "title": "Paramagnetic Materials Visual",
    "category": "Graph",
    "diagramType": "susceptibility-graph",
    "shows": "A self-made SVG visual for Paramagnetic Materials showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "chi",
      ">",
      "0",
      "small"
    ],
    "concept": "Paramagnetic materials are weakly attracted by magnetic field.",
    "removesConfusion": "Thermal agitation weakens alignment.",
    "manual": "Draw the main object, add direction arrows, label variables, then write chi > 0 small below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"susceptibility-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "curie-graph-20",
    "title": "Ferromagnetic Materials Visual",
    "category": "Graph",
    "diagramType": "curie-graph",
    "shows": "A self-made SVG visual for Ferromagnetic Materials showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "chi",
      "very",
      "large"
    ],
    "concept": "Ferromagnetic materials show strong attraction and domain alignment.",
    "removesConfusion": "They show hysteresis and saturation.",
    "manual": "Draw the main object, add direction arrows, label variables, then write chi very large below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"curie-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "hysteresis-loop-21",
    "title": "Curie Law Visual",
    "category": "Diagram",
    "diagramType": "hysteresis-loop",
    "shows": "A self-made SVG visual for Curie Law showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "chi",
      "C",
      "T"
    ],
    "concept": "Paramagnetic susceptibility varies inversely with temperature.",
    "removesConfusion": "Not for all materials at all temperatures.",
    "manual": "Draw the main object, add direction arrows, label variables, then write chi = C/T below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"hysteresis-loop\" draws this with free SVG primitives inside React."
  },
  {
    "id": "domain-visual-22",
    "title": "Magnetic Domains Visual",
    "category": "Diagram",
    "diagramType": "domain-visual",
    "shows": "A self-made SVG visual for Magnetic Domains showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "net",
      "M",
      "from",
      "aligned",
      "domains"
    ],
    "concept": "Ferromagnetism is explained by domain alignment.",
    "removesConfusion": "Unmagnetized does not mean domains are absent.",
    "manual": "Draw the main object, add direction arrows, label variables, then write net M from aligned domains below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"domain-visual\" draws this with free SVG primitives inside React."
  },
  {
    "id": "material-compare-23",
    "title": "Hysteresis Visual",
    "category": "Infographic",
    "diagramType": "material-compare",
    "shows": "A self-made SVG visual for Hysteresis showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "loop",
      "area",
      "energy",
      "loss",
      "volume"
    ],
    "concept": "Ferromagnets show lag of B behind H during magnetization cycle.",
    "removesConfusion": "Loop area is not decorative; it means loss.",
    "manual": "Draw the main object, add direction arrows, label variables, then write loop area = energy loss/volume below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"material-compare\" draws this with free SVG primitives inside React."
  },
  {
    "id": "trap-map-24",
    "title": "Retentivity and Coercivity Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Retentivity and Coercivity showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B_r",
      "and",
      "H_c"
    ],
    "concept": "Retentivity is residual magnetism; coercivity is reverse field needed to demagnetize.",
    "removesConfusion": "Hard magnets have high coercivity.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B_r and H_c below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG primitives inside React."
  },
  {
    "id": "bar-magnet-25",
    "title": "Soft Iron Visual",
    "category": "Diagram",
    "diagramType": "bar-magnet",
    "shows": "A self-made SVG visual for Soft Iron showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "small",
      "hysteresis",
      "loop"
    ],
    "concept": "Soft iron magnetizes and demagnetizes easily.",
    "removesConfusion": "Used for transformer/electromagnet cores.",
    "manual": "Draw the main object, add direction arrows, label variables, then write small hysteresis loop below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"bar-magnet\" draws this with free SVG primitives inside React."
  },
  {
    "id": "dipole-field-26",
    "title": "Steel and Hard Magnets Visual",
    "category": "Diagram",
    "diagramType": "dipole-field",
    "shows": "A self-made SVG visual for Steel and Hard Magnets showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "large",
      "coercivity"
    ],
    "concept": "Hard magnetic materials retain magnetism.",
    "removesConfusion": "Used for permanent magnets.",
    "manual": "Draw the main object, add direction arrows, label variables, then write large coercivity below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dipole-field\" draws this with free SVG primitives inside React."
  },
  {
    "id": "dipole-torque-27",
    "title": "Magnetic Shielding Visual",
    "category": "Diagram",
    "diagramType": "dipole-torque",
    "shows": "A self-made SVG visual for Magnetic Shielding showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "prefers",
      "high",
      "mu",
      "path"
    ],
    "concept": "High permeability materials guide magnetic field lines.",
    "removesConfusion": "Shielding reduces field inside protected space.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B prefers high mu path below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dipole-torque\" draws this with free SVG primitives inside React."
  },
  {
    "id": "earth-magnetism-28",
    "title": "Material Graphs Visual",
    "category": "Diagram",
    "diagramType": "earth-magnetism",
    "shows": "A self-made SVG visual for Material Graphs showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "slope",
      "relates",
      "permeability"
    ],
    "concept": "Graphs include B-H loop, chi-T and magnetization curves.",
    "removesConfusion": "Axes decide the physical meaning.",
    "manual": "Draw the main object, add direction arrows, label variables, then write slope relates permeability below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"earth-magnetism\" draws this with free SVG primitives inside React."
  },
  {
    "id": "inclination-graph-29",
    "title": "Common Conceptual Traps Visual",
    "category": "Graph",
    "diagramType": "inclination-graph",
    "shows": "A self-made SVG visual for Common Conceptual Traps showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "check",
      "direction",
      "sign",
      "unit"
    ],
    "concept": "Traps involve axial/equatorial directions, Earth components and material signs.",
    "removesConfusion": "Diamagnetic chi is negative.",
    "manual": "Draw the main object, add direction arrows, label variables, then write check direction, sign, unit below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"inclination-graph\" draws this with free SVG primitives inside React."
  },
  {
    "id": "magnetic-material-30",
    "title": "Final Revision Section Visual",
    "category": "Infographic",
    "diagramType": "magnetic-material",
    "shows": "A self-made SVG visual for Final Revision Section showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "top",
      "formulas",
      "traps"
    ],
    "concept": "Final revision compresses dipoles, Earth magnetism, materials and hysteresis.",
    "removesConfusion": "Learn definitions with diagrams.",
    "manual": "Draw the main object, add direction arrows, label variables, then write top formulas + traps below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"magnetic-material\" draws this with free SVG primitives inside React."
  }
]
