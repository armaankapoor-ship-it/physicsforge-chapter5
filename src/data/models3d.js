export const models3d = {
  "repo": "physicsforge-chapter5",
  "chapterNumber": 5,
  "chapterName": "Magnetism and Matter",
  "shortName": "Magnetism",
  "count": 20,
  "models": [
    {
      "id": "model-01",
      "number": 1,
      "title": "Bar Magnet Field Lines",
      "kind": "magnetic",
      "formula": "B outside N to S",
      "concept": "Field lines leave north pole and enter south pole outside the magnet.",
      "exam": "Inside the magnet, lines complete the closed loop.",
      "labels": [
        "north",
        "south",
        "closed B"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-02",
      "number": 2,
      "title": "Magnetic Dipole in Field",
      "kind": "phasor",
      "formula": "tau = mB sin theta",
      "concept": "A magnetic dipole aligns with external field.",
      "exam": "Potential energy is minimum when aligned.",
      "labels": [
        "m vector",
        "B field",
        "torque"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-03",
      "number": 3,
      "title": "Earth Magnetic Components",
      "kind": "default",
      "formula": "BH = B cos I",
      "concept": "Earth field resolves into horizontal and vertical components.",
      "exam": "Angle of dip is measured from horizontal.",
      "labels": [
        "BH",
        "BV",
        "dip angle"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-04",
      "number": 4,
      "title": "Tangent Galvanometer",
      "kind": "coil",
      "formula": "B_coil = BH tan theta",
      "concept": "Coil field and Earth field form a tangent relation.",
      "exam": "Use tangent law, not sine law.",
      "labels": [
        "coil B",
        "Earth BH",
        "needle"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-05",
      "number": 5,
      "title": "Diamagnetic Response",
      "kind": "magnetic",
      "formula": "chi < 0",
      "concept": "Diamagnetic materials weakly oppose applied field.",
      "exam": "They are repelled by strong magnetic field.",
      "labels": [
        "applied B",
        "induced moment",
        "repulsion"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-06",
      "number": 6,
      "title": "Paramagnetic Alignment",
      "kind": "dipole",
      "formula": "chi > 0 small",
      "concept": "Paramagnetic dipoles partially align with external field.",
      "exam": "Alignment weakens with temperature.",
      "labels": [
        "random moments",
        "applied B",
        "partial order"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-07",
      "number": 7,
      "title": "Ferromagnetic Domains",
      "kind": "default",
      "formula": "large positive chi",
      "concept": "Domains align strongly and can retain magnetism.",
      "exam": "Hysteresis appears in ferromagnets.",
      "labels": [
        "domains",
        "alignment",
        "remanence"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-08",
      "number": 8,
      "title": "Hysteresis Loop",
      "kind": "resonance",
      "formula": "B-H loop",
      "concept": "A loop shows retentivity, coercivity and energy loss.",
      "exam": "Soft iron has narrow loop; steel has wider loop.",
      "labels": [
        "retentivity",
        "coercivity",
        "loss area"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-09",
      "number": 9,
      "title": "Curie Temperature Model",
      "kind": "thermal",
      "formula": "ferro to para above Tc",
      "concept": "Heating can destroy ferromagnetic domain order.",
      "exam": "Curie point is material specific.",
      "labels": [
        "ordered",
        "heated",
        "random"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-10",
      "number": 10,
      "title": "Magnetization Vector Field",
      "kind": "phasor",
      "formula": "M = magnetic moment/volume",
      "concept": "Magnetization summarizes many microscopic moments.",
      "exam": "M is not the same as B.",
      "labels": [
        "moments",
        "volume",
        "M vector"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-11",
      "number": 11,
      "title": "Solenoid as Bar Magnet",
      "kind": "coil",
      "formula": "m = NIA",
      "concept": "A current-carrying solenoid behaves like a bar magnet.",
      "exam": "Polarity follows right-hand grip rule.",
      "labels": [
        "current",
        "north end",
        "south end"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-12",
      "number": 12,
      "title": "Magnetic Susceptibility Scale",
      "kind": "energy-level",
      "formula": "chi = M/H",
      "concept": "Material response is compared through susceptibility.",
      "exam": "Sign of chi identifies dia or para.",
      "labels": [
        "dia",
        "para",
        "ferro"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-13",
      "number": 13,
      "title": "Compass Needle Torque",
      "kind": "phasor",
      "formula": "tau = mB sin theta",
      "concept": "A compass rotates until magnetic torque is zero.",
      "exam": "Needle points along local magnetic field.",
      "labels": [
        "needle",
        "field",
        "angle"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-14",
      "number": 14,
      "title": "Magnetic Potential Energy",
      "kind": "energy-level",
      "formula": "U = -m dot B",
      "concept": "Energy is lowest when magnetic moment aligns with field.",
      "exam": "Anti-aligned state has higher energy.",
      "labels": [
        "aligned",
        "anti-aligned",
        "energy gap"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-15",
      "number": 15,
      "title": "Demagnetization by Heating",
      "kind": "thermal",
      "formula": "domain disorder",
      "concept": "Thermal agitation randomizes aligned domains.",
      "exam": "Permanent magnets weaken when overheated.",
      "labels": [
        "heat",
        "domains",
        "randomization"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-16",
      "number": 16,
      "title": "Soft Iron Core",
      "kind": "transformer",
      "formula": "high permeability",
      "concept": "Soft iron concentrates magnetic flux inside a core.",
      "exam": "Used in transformers due to low hysteresis loss.",
      "labels": [
        "core",
        "flux",
        "coil"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-17",
      "number": 17,
      "title": "Hard Steel Magnet",
      "kind": "default",
      "formula": "high retentivity",
      "concept": "Steel retains magnetization strongly.",
      "exam": "Permanent magnets need high coercivity.",
      "labels": [
        "domains locked",
        "remanence",
        "coercivity"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-18",
      "number": 18,
      "title": "Magnetic Shielding",
      "kind": "transformer",
      "formula": "flux prefers high mu path",
      "concept": "High permeability material redirects field lines.",
      "exam": "Shielding reduces field in protected space.",
      "labels": [
        "shield",
        "flux path",
        "protected region"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-19",
      "number": 19,
      "title": "Neutral Points",
      "kind": "magnetic",
      "formula": "B_magnet + B_earth = 0",
      "concept": "At neutral points, magnetic fields cancel.",
      "exam": "Location depends on magnet orientation.",
      "labels": [
        "magnet field",
        "Earth field",
        "zero point"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-20",
      "number": 20,
      "title": "Field Line Crowd Map",
      "kind": "magnetic",
      "formula": "B proportional line density",
      "concept": "Crowded magnetic field lines indicate stronger field.",
      "exam": "Magnetic field lines never start or end.",
      "labels": [
        "dense B",
        "weak B",
        "closed loop"
      ],
      "color": "#7c3aed"
    }
  ]
}
