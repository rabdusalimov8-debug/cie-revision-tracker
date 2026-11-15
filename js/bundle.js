/**
 * Cambridge International A-Level Revision Tracker & Smart Guide
 * Standalone Offline Bundle (Works directly with file:// and http://)
 */
(function() {
  'use strict';

  // --- 1. DEFAULT SYLLABI ---
  // Default official Cambridge International A Level syllabi
// Subjects: Further Mathematics (9231), Mathematics (9709), Information Technology (9626)

const DEFAULT_SUBJECTS = [
  {
    id: 'sub_9231',
    code: '9231',
    name: 'Further Mathematics',
    color: '#6366f1', // Indigo
    accentColor: 'indigo',
    examSeries: 'May/June 2027',
    targetGrade: 'A*'
  },
  {
    id: 'sub_9709',
    code: '9709',
    name: 'Mathematics',
    color: '#0ea5e9', // Sky blue
    accentColor: 'sky',
    examSeries: 'May/June 2027',
    targetGrade: 'A*'
  },
  {
    id: 'sub_9626',
    code: '9626',
    name: 'Information Technology',
    color: '#10b981', // Emerald
    accentColor: 'emerald',
    examSeries: 'May/June 2027',
    targetGrade: 'A*'
  }
];

const DEFAULT_PAPERS = [
  // 9231 Further Mathematics Papers
  {
    id: 'paper_9231_p1',
    subjectId: 'sub_9231',
    code: 'Paper 1 (FP1)',
    name: 'Further Pure Mathematics 1',
    maxMarks: 75,
    duration: 120,
    order: 1
  },
  {
    id: 'paper_9231_p2',
    subjectId: 'sub_9231',
    code: 'Paper 2 (FP2)',
    name: 'Further Pure Mathematics 2',
    maxMarks: 75,
    duration: 120,
    order: 2
  },
  {
    id: 'paper_9231_p3',
    subjectId: 'sub_9231',
    code: 'Paper 3 (FM)',
    name: 'Further Mechanics',
    maxMarks: 50,
    duration: 90,
    order: 3
  },
  {
    id: 'paper_9231_p4',
    subjectId: 'sub_9231',
    code: 'Paper 4 (FPS)',
    name: 'Further Probability & Statistics',
    maxMarks: 50,
    duration: 90,
    order: 4
  },

  // 9709 Mathematics Papers
  {
    id: 'paper_9709_p1',
    subjectId: 'sub_9709',
    code: 'Paper 1 (P1)',
    name: 'Pure Mathematics 1',
    maxMarks: 75,
    duration: 110,
    order: 1
  },
  {
    id: 'paper_9709_p3',
    subjectId: 'sub_9709',
    code: 'Paper 3 (P3)',
    name: 'Pure Mathematics 3',
    maxMarks: 75,
    duration: 110,
    order: 2
  },
  {
    id: 'paper_9709_p4',
    subjectId: 'sub_9709',
    code: 'Paper 4 (M1)',
    name: 'Mechanics',
    maxMarks: 50,
    duration: 75,
    order: 3
  },
  {
    id: 'paper_9709_p5',
    subjectId: 'sub_9709',
    code: 'Paper 5 (S1)',
    name: 'Probability & Statistics 1',
    maxMarks: 50,
    duration: 75,
    order: 4
  },
  {
    id: 'paper_9709_p6',
    subjectId: 'sub_9709',
    code: 'Paper 6 (S2)',
    name: 'Probability & Statistics 2',
    maxMarks: 50,
    duration: 75,
    order: 5
  },

  // 9626 Information Technology Papers
  {
    id: 'paper_9626_p1',
    subjectId: 'sub_9626',
    code: 'Paper 1 (Theory)',
    name: 'Theory Fundamentals',
    maxMarks: 90,
    duration: 105,
    order: 1
  },
  {
    id: 'paper_9626_p2',
    subjectId: 'sub_9626',
    code: 'Paper 2 (Practical)',
    name: 'Practical (Spreadsheets, DB, Media)',
    maxMarks: 110,
    duration: 150,
    order: 2
  },
  {
    id: 'paper_9626_p3',
    subjectId: 'sub_9626',
    code: 'Paper 3 (Adv. Theory)',
    name: 'Advanced Theory & Management',
    maxMarks: 90,
    duration: 105,
    order: 3
  },
  {
    id: 'paper_9626_p4',
    subjectId: 'sub_9626',
    code: 'Paper 4 (Adv. Practical)',
    name: 'Advanced Practical (JS & Animation)',
    maxMarks: 110,
    duration: 150,
    order: 4
  }
];

const DEFAULT_TOPICS = [
  // --- 9231 Paper 1 (FP1) ---
  {
    id: 'top_9231_p1_1',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p1',
    name: 'Roots of Polynomial Equations (Coefficients & Substitutions)',
    order: 1,
    status: 'Not Started',
    notes: 'Relationships between roots and coefficients; linear and non-linear polynomial transformations.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p1_2',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p1',
    name: 'Rational Functions and Curve Sketching (Oblique Asymptotes)',
    order: 2,
    status: 'Not Started',
    notes: 'Vertical, horizontal, and oblique asymptotes; points of intersection and stationary values.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p1_3',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p1',
    name: 'Summation of Series (Method of Differences)',
    order: 3,
    status: 'Not Started',
    notes: 'Standard results for sum of r, r^2, r^3; telescoping cancellation via partial fractions.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p1_4',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p1',
    name: 'Matrices & Linear Transformations (2D/3D & Invariant Lines)',
    order: 4,
    status: 'Not Started',
    notes: 'Determinants, non-singular inverses, reflections, rotations, shears, invariant lines through origin.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p1_5',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p1',
    name: 'Polar Coordinates (Curves r = f(θ), Sector Area, Tangents)',
    order: 5,
    status: 'Not Started',
    notes: 'Cardioids, spirals, lemniscates; area enclosed by loops; tangents parallel or perpendicular to initial line.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p1_6',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p1',
    name: 'Vectors (Lines, Planes, Shortest Distances, Intersections)',
    order: 6,
    status: 'Not Started',
    notes: 'Vector and scalar products, Cartesian equations of planes, line-plane angles, shortest distance between skew lines.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p1_7',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p1',
    name: 'Proof by Mathematical Induction',
    order: 7,
    status: 'Not Started',
    notes: 'Summations, divisibility proofs, powers of 2x2 matrices, and sequence inequalities.',
    examWeight: 'Core'
  },

  // --- 9231 Paper 2 (FP2) ---
  {
    id: 'top_9231_p2_1',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p2',
    name: 'Hyperbolic Functions (Definitions, Identities, Calculus)',
    order: 1,
    status: 'Not Started',
    notes: 'sinh, cosh, tanh, sech; inverse logarithmic forms; Osborn rule; standard hyperbolic integration.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p2_2',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p2',
    name: 'Matrices: Eigenvalues, Eigenvectors & Diagonalisation',
    order: 2,
    status: 'Not Started',
    notes: 'Characteristic equation det(A - λI) = 0; distinct and repeated eigenvalues; M = PDP^-1 and computing A^n.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p2_3',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p2',
    name: 'Differentiation (Leibniz Formula & Maclaurin/Taylor Series)',
    order: 3,
    status: 'Not Started',
    notes: 'n-th derivatives using Leibniz theorem; finding series expansions through successive differentiation.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p2_4',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p2',
    name: 'Integration (Arc Length & Surface Area of Revolution)',
    order: 4,
    status: 'Not Started',
    notes: 'Cartesian and parametric integrals for arc length and curved surface area around x and y axes.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p2_5',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p2',
    name: 'Complex Numbers (De Moivre’s Theorem & Roots of Unity)',
    order: 5,
    status: 'Not Started',
    notes: 'Expressing cos(nθ) and sin^n(θ); solving z^n = w; geometric representation on Argand diagrams.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p2_6',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p2',
    name: 'Differential Equations (Integrating Factors & 2nd Order ODEs)',
    order: 6,
    status: 'Not Started',
    notes: 'Complementary functions for real/complex roots; particular integrals; boundary/initial value conditions.',
    examWeight: 'High Frequency'
  },

  // --- 9231 Paper 3 (FM) ---
  {
    id: 'top_9231_p3_1',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p3',
    name: 'Motion of a Projectile (Inclined Planes & Trajectory Equations)',
    order: 1,
    status: 'Not Started',
    notes: 'Cartesian trajectory y = x tan(θ) - gx^2/(2u^2 cos^2(θ)); range and time of flight on inclined planes.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p3_2',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p3',
    name: 'Equilibrium of a Rigid Body (Centres of Mass, Toppling & Sliding)',
    order: 2,
    status: 'Not Started',
    notes: 'Calculus of centres of mass for laminae and solids; conditions for equilibrium vs sliding or toppling.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p3_3',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p3',
    name: 'Circular Motion (Horizontal & Vertical Circles, Tension Loss)',
    order: 3,
    status: 'Not Started',
    notes: 'Radial and transverse accelerations; conical pendulum; vertical motion on strings and smooth spheres.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p3_4',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p3',
    name: 'Hooke’s Law (Elastic Strings, Springs & Energy Principles)',
    order: 4,
    status: 'Not Started',
    notes: 'Tension T = λx/l; elastic potential energy E = λx^2/(2l); conservation of energy and equilibrium.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p3_5',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p3',
    name: 'Linear Motion Under a Variable Force (Kinematic ODEs)',
    order: 5,
    status: 'Not Started',
    notes: 'Using a = v dv/dx or dv/dt; terminal velocities; resistive drag forces proportional to v or v^2.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p3_6',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p3',
    name: 'Momentum and Impulse (Direct & Oblique Collisions)',
    order: 6,
    status: 'Not Started',
    notes: 'Newton experimental law of restitution e; resolving along line of centres; loss in kinetic energy.',
    examWeight: 'High Frequency'
  },

  // --- 9231 Paper 4 (FPS) ---
  {
    id: 'top_9231_p4_1',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p4',
    name: 'Continuous Random Variables (Expectation, Variance, Transformations)',
    order: 1,
    status: 'Not Started',
    notes: 'PDF and CDF integrations; finding medians, percentiles, and distribution of Y = g(X).',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p4_2',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p4',
    name: 'Inference Using Normal and t-Distributions (Confidence Intervals)',
    order: 2,
    status: 'Not Started',
    notes: 't-distribution tests for unknown variance; paired t-tests; two-sample pooled variance tests.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p4_3',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p4',
    name: 'Chi-Squared Tests (Goodness of Fit & Contingency Tables)',
    order: 3,
    status: 'Not Started',
    notes: 'Degrees of freedom calculation; pooling expected frequencies < 5; testing uniform, binomial, Poisson, normal fit.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9231_p4_4',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p4',
    name: 'Non-Parametric Tests (Sign Test, Wilcoxon Signed-Rank & Rank-Sum)',
    order: 4,
    status: 'Not Started',
    notes: 'Single sample sign test; Wilcoxon matched-pairs signed-rank test; Mann-Whitney U / rank-sum test.',
    examWeight: 'Core'
  },
  {
    id: 'top_9231_p4_5',
    subjectId: 'sub_9231',
    paperId: 'paper_9231_p4',
    name: 'Probability Generating Functions (PGFs & Linear Combinations)',
    order: 5,
    status: 'Not Started',
    notes: 'G_X(t) definitions; finding mean and variance via G_X\'(1) and G_X\'\'(1); PGF for sum of independent RVs.',
    examWeight: 'High Frequency'
  },

  // --- 9709 Paper 1 (P1) ---
  {
    id: 'top_9709_p1_1',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p1',
    name: 'Quadratics & Inequalities (Discriminants & Completing Square)',
    order: 1,
    status: 'Not Started',
    notes: 'Nature of roots, completing square for vertex, quadratic inequalities.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p1_2',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p1',
    name: 'Functions (Domains, Ranges, Compositions & Inverses)',
    order: 2,
    status: 'Not Started',
    notes: 'One-one function requirement for inverses; graphical relationships.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p1_3',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p1',
    name: 'Coordinate Geometry & Circles',
    order: 3,
    status: 'Not Started',
    notes: 'Equations of circles (x-a)^2 + (y-b)^2 = r^2; intersection with lines; tangents and normals.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p1_4',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p1',
    name: 'Circular Measure (Radians, Arc Length & Sector Areas)',
    order: 4,
    status: 'Not Started',
    notes: 's = rθ and A = 1/2 r^2 θ; perimeter and area of compound geometric shapes.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p1_5',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p1',
    name: 'Trigonometry (Exact Values, Graphs & Basic Identities)',
    order: 5,
    status: 'Not Started',
    notes: 'sin^2 θ + cos^2 θ = 1, tan θ = sin θ / cos θ; solving equations within specified intervals.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p1_6',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p1',
    name: 'Series (Binomial Expansion, AP and GP)',
    order: 6,
    status: 'Not Started',
    notes: 'General term in binomial theorem; sum to n terms; sum to infinity for |r| < 1.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p1_7',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p1',
    name: 'Differentiation (Chain Rule, Stationary Points & Tangents/Normals)',
    order: 7,
    status: 'Not Started',
    notes: 'First and second derivative tests for nature of turning points; connected rates of change.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p1_8',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p1',
    name: 'Integration (Definite Integrals, Areas & Volumes of Revolution)',
    order: 8,
    status: 'Not Started',
    notes: 'Area between curve and line/axis; volume generated by revolving 360 degrees around x or y axis.',
    examWeight: 'High Frequency'
  },

  // --- 9709 Paper 3 (P3) ---
  {
    id: 'top_9709_p3_1',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Algebra: Modulus Function, Polynomials & Partial Fractions',
    order: 1,
    status: 'Not Started',
    notes: '|ax + b| equations and inequalities; linear, repeated, and quadratic factor partial fractions.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p3_2',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Logarithmic & Exponential Functions (Linear Transformations)',
    order: 2,
    status: 'Not Started',
    notes: 'Natural logs ln x and e^x; reducing power relationships y = a x^b or y = a b^x to linear form.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p3_3',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Trigonometry: Compound & Double Angles, R cos(θ ± α)',
    order: 3,
    status: 'Not Started',
    notes: 'Harmonic form conversions; secant, cosecant, and cotangent; proving identities.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p3_4',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Differentiation: Product, Quotient, Implicit & Parametric Rules',
    order: 4,
    status: 'Not Started',
    notes: 'dy/dx for parametric curves x(t), y(t); implicit equations f(x,y)=0; derivatives of e^x, ln x, sin/cos/tan.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p3_5',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Integration: By Parts, Substitution & Partial Fractions',
    order: 5,
    status: 'Not Started',
    notes: 'Definite and indefinite integration techniques; standard trigonometric substitutions.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p3_6',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Numerical Solutions of Equations (Iteration Formulas)',
    order: 6,
    status: 'Not Started',
    notes: 'Location of roots by sign change; convergence of iteration sequences x_{n+1} = F(x_n).',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p3_7',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Vectors in 3D (Lines, Scalar Products & Intersection)',
    order: 7,
    status: 'Not Started',
    notes: 'r = a + tb; angle between two lines via dot product; intersecting vs skew lines.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p3_8',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Differential Equations (Separation of Variables)',
    order: 8,
    status: 'Not Started',
    notes: 'dy/dx = f(x)g(y); translating word problems into differential rate models.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p3_9',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p3',
    name: 'Complex Numbers (Argand Diagrams, Polar Form, Loci)',
    order: 9,
    status: 'Not Started',
    notes: 'Modulus and argument; circles |z - a| = r; perpendicular bisectors |z - a| = |z - b|; half-lines arg(z-a) = θ.',
    examWeight: 'High Frequency'
  },

  // --- 9709 Paper 4 (M1) ---
  {
    id: 'top_9709_p4_1',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p4',
    name: 'Forces and Equilibrium (Resolving & Friction F = μR)',
    order: 1,
    status: 'Not Started',
    notes: 'Limiting friction, coplanar forces in equilibrium, inclined plane reaction forces.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p4_2',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p4',
    name: 'Kinematics of Motion in a Straight Line',
    order: 2,
    status: 'Not Started',
    notes: 'Constant acceleration equations (SUVAT); calculus with v = ds/dt and a = dv/dt.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p4_3',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p4',
    name: 'Momentum (Conservation in Straight-Line Collisions)',
    order: 3,
    status: 'Not Started',
    notes: 'm1 u1 + m2 u2 = m1 v1 + m2 v2; coalescence and rebound.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p4_4',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p4',
    name: 'Newton’s Laws of Motion & Connected Particles',
    order: 4,
    status: 'Not Started',
    notes: 'Pulleys, tow-bars, elevators; applying F = ma to subsystems and whole systems.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p4_5',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p4',
    name: 'Energy, Work and Power (Work-Energy Principle)',
    order: 5,
    status: 'Not Started',
    notes: 'Work done against resistance, KE and GPE conservation, vehicle power P = Fv and maximum speed.',
    examWeight: 'High Frequency'
  },

  // --- 9709 Paper 5 (S1) ---
  {
    id: 'top_9709_p5_1',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p5',
    name: 'Representation of Data (Histograms, Box Plots, Mean & SD)',
    order: 1,
    status: 'Not Started',
    notes: 'Frequency density, coding for mean and standard deviation, skewness.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p5_2',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p5',
    name: 'Permutations and Combinations',
    order: 2,
    status: 'Not Started',
    notes: 'Arrangements in line with identical items or items together/separated; team selections.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p5_3',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p5',
    name: 'Probability (Conditional, Independence, Tree Diagrams)',
    order: 3,
    status: 'Not Started',
    notes: 'P(A|B) = P(A ∩ B)/P(B); Venn diagrams; independence checks.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p5_4',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p5',
    name: 'Discrete Random Variables (Probability Distributions, E(X), Var(X))',
    order: 4,
    status: 'Not Started',
    notes: 'Probability tables; binomial distribution B(n, p); geometric distribution Geom(p).',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p5_5',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p5',
    name: 'The Normal Distribution (Standardization & Continuity Correction)',
    order: 5,
    status: 'Not Started',
    notes: 'Z = (X - μ)/σ; normal approximation to binomial with continuity correction.',
    examWeight: 'High Frequency'
  },

  // --- 9709 Paper 6 (S2) ---
  {
    id: 'top_9709_p6_1',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p6',
    name: 'The Poisson Distribution (Probabilities & Binomial Approximation)',
    order: 1,
    status: 'Not Started',
    notes: 'Conditions for Poisson; mean = variance = λ; sum of independent Poisson RVs.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p6_2',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p6',
    name: 'Linear Combinations of Random Variables',
    order: 2,
    status: 'Not Started',
    notes: 'E(aX + bY) and Var(aX + bY); distribution of sample mean X̄.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p6_3',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p6',
    name: 'Continuous Random Variables (Syllabus 9709 P6 Scope)',
    order: 3,
    status: 'Not Started',
    notes: 'PDF integration, expected values, median and modal values.',
    examWeight: 'Core'
  },
  {
    id: 'top_9709_p6_4',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p6',
    name: 'Sampling and Estimation (Central Limit Theorem & Unbiased Estimators)',
    order: 4,
    status: 'Not Started',
    notes: 'Sample variance s^2 with n-1 divisor; confidence intervals for population mean.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9709_p6_5',
    subjectId: 'sub_9709',
    paperId: 'paper_9709_p6',
    name: 'Hypothesis Testing (1-tail, 2-tail, Type I & Type II Errors)',
    order: 5,
    status: 'Not Started',
    notes: 'Null vs alternative hypotheses; calculating critical regions; probability of Type I and Type II errors.',
    examWeight: 'High Frequency'
  },

  // --- 9626 Paper 1 (Theory) ---
  {
    id: 'top_9626_p1_1',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p1',
    name: 'Data Processing, Information & Validation/Verification',
    order: 1,
    status: 'Not Started',
    notes: 'Difference between data, information, and knowledge; range/check digit checks; double entry.',
    examWeight: 'Core'
  },
  {
    id: 'top_9626_p1_2',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p1',
    name: 'Hardware, Software & Storage Technologies',
    order: 2,
    status: 'Not Started',
    notes: 'Input/output devices; optical/magnetic/solid-state storage comparisons; OS functions.',
    examWeight: 'Core'
  },
  {
    id: 'top_9626_p1_3',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p1',
    name: 'Monitoring & Control Systems (Sensors & Feedback Loops)',
    order: 3,
    status: 'Not Started',
    notes: 'Temperature/pressure/light sensors; microprocessor control algorithms; safety systems.',
    examWeight: 'Core'
  },
  {
    id: 'top_9626_p1_4',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p1',
    name: 'E-Safety, Data Protection & Ergonomics',
    order: 4,
    status: 'Not Started',
    notes: 'GDPR / data protection principles; phishing, spyware, malware prevention; RSI and screen glare.',
    examWeight: 'Core'
  },
  {
    id: 'top_9626_p1_5',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p1',
    name: 'Networks, Topologies & Network Security',
    order: 5,
    status: 'Not Started',
    notes: 'Star, mesh, bus topologies; protocols (TCP/IP, HTTP, FTP); firewalls and encryption.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9626_p1_6',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p1',
    name: 'Systems Life Cycle (Analysis, Design, Testing & Evaluation)',
    order: 6,
    status: 'Not Started',
    notes: 'Questionnaires, interviews; direct/parallel/phased changeover; test plan development.',
    examWeight: 'High Frequency'
  },

  // --- 9626 Paper 2 (Practical) ---
  {
    id: 'top_9626_p2_1',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p2',
    name: 'Advanced Spreadsheets (Nested IF, XLOOKUP, Index/Match, Macros)',
    order: 1,
    status: 'Not Started',
    notes: 'Dynamic models, error trapping (IFERROR), conditional formatting rules, macro automation.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9626_p2_2',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p2',
    name: 'Relational Database Design (1NF/2NF/3NF & Complex Queries)',
    order: 2,
    status: 'Not Started',
    notes: 'Foreign key relationships; parameter queries, cross-tab queries, subforms, custom calculated fields.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9626_p2_3',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p2',
    name: 'Sound & Video Editing (Audio Mixing, Codecs, Transitions)',
    order: 3,
    status: 'Not Started',
    notes: 'Audio normalization, multi-track timing, keyframes, aspect ratio, frame rate, export settings.',
    examWeight: 'Core'
  },

  // --- 9626 Paper 3 (Adv. Theory) ---
  {
    id: 'top_9626_p3_1',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p3',
    name: 'Emerging Technologies (AI, Cloud, IoT, Quantum Computing)',
    order: 1,
    status: 'Not Started',
    notes: 'Societal and industrial impacts of machine learning, automated decision systems, and ubiquitous computing.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9626_p3_2',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p3',
    name: 'Role of IT in Society & Digital Divide',
    order: 2,
    status: 'Not Started',
    notes: 'Economic impact of automation; intellectual property rights; accessibility and global connectivity.',
    examWeight: 'Core'
  },
  {
    id: 'top_9626_p3_3',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p3',
    name: 'Project Management (Critical Path CPM, PERT, Gantt Charts)',
    order: 3,
    status: 'Not Started',
    notes: 'Earliest start time (EST), latest finish time (LFT), total float, free float, and project crash times.',
    examWeight: 'High Frequency'
  },

  // --- 9626 Paper 4 (Adv. Practical) ---
  {
    id: 'top_9626_p4_1',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p4',
    name: 'Client-Side JavaScript Programming (DOM, Event Listeners, Logic)',
    order: 1,
    status: 'Not Started',
    notes: 'Dynamic forms, canvas drawing scripts, input validation algorithms, timed interval events.',
    examWeight: 'High Frequency'
  },
  {
    id: 'top_9626_p4_2',
    subjectId: 'sub_9626',
    paperId: 'paper_9626_p4',
    name: 'Vector Graphics & Frame Animation',
    order: 2,
    status: 'Not Started',
    notes: 'Vector path manipulation, keyframe timing, onion skinning, shape morphing, interactive hotspots.',
    examWeight: 'High Frequency'
  }
];


  // --- 2. STORAGE ENGINE ---
  // IndexedDB & LocalStorage Hybrid Storage Engine for Cambridge A-Level Revision Tracker


const DB_NAME = 'ALevelRevisionTrackerDB';
const DB_VERSION = 1;

class RevisionStorage {
  constructor() {
    this.db = null;
    this.useFallback = false;
    this.initPromise = null;
  }

  async init() {
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve) => {
      // 300ms safety timeout to prevent hanging in headless webviews or restricted storage environments
      const timeoutId = setTimeout(() => {
        console.warn('IndexedDB open timed out, falling back to localStorage.');
        this.useFallback = true;
        this.ensureSeedDataFallback();
        resolve(null);
      }, 300);

      // Check if IndexedDB is available
      if (typeof window === 'undefined' || !window.indexedDB) {
        clearTimeout(timeoutId);
        console.warn('IndexedDB unavailable, using localStorage fallback.');
        this.useFallback = true;
        this.ensureSeedDataFallback();
        resolve(null);
        return;
      }

      try {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
          const db = event.target.result;

          if (!db.objectStoreNames.contains('subjects')) {
            db.createObjectStore('subjects', { keyPath: 'id' });
          }
          if (!db.objectStoreNames.contains('papers')) {
            const paperStore = db.createObjectStore('papers', { keyPath: 'id' });
            paperStore.createIndex('subjectId', 'subjectId', { unique: false });
          }
          if (!db.objectStoreNames.contains('topics')) {
            const topicStore = db.createObjectStore('topics', { keyPath: 'id' });
            topicStore.createIndex('paperId', 'paperId', { unique: false });
            topicStore.createIndex('subjectId', 'subjectId', { unique: false });
            topicStore.createIndex('order', 'order', { unique: false });
          }
          if (!db.objectStoreNames.contains('pastPapers')) {
            const paperLogStore = db.createObjectStore('pastPapers', { keyPath: 'id' });
            paperLogStore.createIndex('subjectId', 'subjectId', { unique: false });
            paperLogStore.createIndex('paperId', 'paperId', { unique: false });
            paperLogStore.createIndex('year', 'year', { unique: false });
          }
          if (!db.objectStoreNames.contains('studySessions')) {
            const sessionStore = db.createObjectStore('studySessions', { keyPath: 'id' });
            sessionStore.createIndex('subjectId', 'subjectId', { unique: false });
            sessionStore.createIndex('timestamp', 'timestamp', { unique: false });
          }
          if (!db.objectStoreNames.contains('settings')) {
            db.createObjectStore('settings', { keyPath: 'key' });
          }
        };

        request.onsuccess = (event) => {
          clearTimeout(timeoutId);
          this.db = event.target.result;

          try {
            const tx = this.db.transaction(['subjects'], 'readwrite');
            const st = tx.objectStore('subjects');
            const countReq = st.count();
            countReq.onsuccess = () => {
              if (countReq.result === 0) {
                DEFAULT_SUBJECTS.forEach((sub) => st.put(sub));
                const pTx = this.db.transaction(['papers'], 'readwrite');
                DEFAULT_PAPERS.forEach((p) => pTx.objectStore('papers').put(p));
                const tTx = this.db.transaction(['topics'], 'readwrite');
                DEFAULT_TOPICS.forEach((t) => tTx.objectStore('topics').put(t));
              }
              resolve(this.db);
            };
            countReq.onerror = () => resolve(this.db);
          } catch (e) {
            resolve(this.db);
          }
        };

        request.onerror = (event) => {
          clearTimeout(timeoutId);
          console.warn('IndexedDB open failed, switching to localStorage fallback:', event.target.error);
          this.useFallback = true;
          this.ensureSeedDataFallback();
          resolve(null);
        };
      } catch (err) {
        clearTimeout(timeoutId);
        console.warn('IndexedDB exception, switching to localStorage fallback:', err);
        this.useFallback = true;
        this.ensureSeedDataFallback();
        resolve(null);
      }
    });

    return this.initPromise;
  }

  // --- SEEDING ---
  async ensureSeedData() {
    if (this.useFallback) {
      this.ensureSeedDataFallback();
      return;
    }
    const subjects = await this.getAll('subjects');
    if (!subjects || subjects.length === 0) {
      await this.resetToDefaults();
    }
  }

  ensureSeedDataFallback() {
    if (!localStorage.getItem('alr_subjects')) {
      this.resetToDefaultsFallback();
    }
  }

  resetToDefaultsFallback() {
    localStorage.setItem('alr_subjects', JSON.stringify(DEFAULT_SUBJECTS));
    localStorage.setItem('alr_papers', JSON.stringify(DEFAULT_PAPERS));
    localStorage.setItem('alr_topics', JSON.stringify(DEFAULT_TOPICS));
    localStorage.setItem('alr_pastPapers', JSON.stringify([]));
    localStorage.setItem('alr_studySessions', JSON.stringify([]));
    localStorage.setItem(
      'alr_settings',
      JSON.stringify({
        targetExamDate: '2027-05-01T09:00:00',
        pomodoroWorkMinutes: 25,
        pomodoroShortBreakMinutes: 5,
        pomodoroLongBreakMinutes: 15,
        theme: 'dark'
      })
    );
  }

  // --- GENERIC DATA ACCESS ---
  async getAll(storeName) {
    if (this.useFallback) {
      const data = localStorage.getItem('alr_' + storeName);
      return data ? JSON.parse(data) : [];
    }

    await this.init();
    if (this.useFallback || !this.db) {
      const data = localStorage.getItem('alr_' + storeName);
      return data ? JSON.parse(data) : [];
    }

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction([storeName], 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      } catch (e) {
        resolve([]);
      }
    });
  }

  async getById(storeName, id) {
    if (this.useFallback) {
      const list = await this.getAll(storeName);
      return list.find((item) => item.id === id || item.key === id);
    }

    await this.init();
    if (this.useFallback || !this.db) {
      const list = await this.getAll(storeName);
      return list.find((item) => item.id === id || item.key === id);
    }

    return new Promise((resolve) => {
      try {
        const tx = this.db.transaction([storeName], 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  }

  async put(storeName, item) {
    if (this.useFallback) {
      const list = await this.getAll(storeName);
      const keyProp = storeName === 'settings' ? 'key' : 'id';
      const index = list.findIndex((i) => i[keyProp] === item[keyProp]);
      if (index >= 0) list[index] = item;
      else list.push(item);
      localStorage.setItem('alr_' + storeName, JSON.stringify(list));
      return item;
    }

    await this.init();
    if (this.useFallback || !this.db) {
      return this.put(storeName, item);
    }

    return new Promise((resolve, reject) => {
      try {
        const tx = this.db.transaction([storeName], 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.put(item);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      } catch (e) {
        reject(e);
      }
    });
  }

  async putBulk(storeName, items) {
    if (this.useFallback) {
      localStorage.setItem('alr_' + storeName, JSON.stringify(items));
      return true;
    }

    await this.init();
    if (this.useFallback || !this.db) {
      localStorage.setItem('alr_' + storeName, JSON.stringify(items));
      return true;
    }

    return new Promise((resolve, reject) => {
      try {
        const tx = this.db.transaction([storeName], 'readwrite');
        const store = tx.objectStore(storeName);
        items.forEach((item) => store.put(item));
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => reject(tx.error);
      } catch (e) {
        reject(e);
      }
    });
  }

  async delete(storeName, id) {
    if (this.useFallback) {
      let list = await this.getAll(storeName);
      const keyProp = storeName === 'settings' ? 'key' : 'id';
      list = list.filter((item) => item[keyProp] !== id);
      localStorage.setItem('alr_' + storeName, JSON.stringify(list));
      return true;
    }

    await this.init();
    if (this.useFallback || !this.db) {
      return this.delete(storeName, id);
    }

    return new Promise((resolve, reject) => {
      try {
        const tx = this.db.transaction([storeName], 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.delete(id);
        req.onsuccess = () => resolve(true);
        req.onerror = () => reject(req.error);
      } catch (e) {
        reject(e);
      }
    });
  }

  async clearStore(storeName) {
    if (this.useFallback) {
      localStorage.removeItem('alr_' + storeName);
      return true;
    }

    await this.init();
    if (this.useFallback || !this.db) {
      localStorage.removeItem('alr_' + storeName);
      return true;
    }

    return new Promise((resolve, reject) => {
      try {
        const tx = this.db.transaction([storeName], 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.clear();
        req.onsuccess = () => resolve(true);
        req.onerror = () => reject(req.error);
      } catch (e) {
        resolve(true);
      }
    });
  }

  // --- SUBJECTS ---
  async getSubjects() {
    const list = await this.getAll('subjects');
    return list && list.length > 0 ? list : DEFAULT_SUBJECTS;
  }

  async updateSubject(subject) {
    return this.put('subjects', subject);
  }

  // --- PAPERS ---
  async getPapers(subjectId = null) {
    const all = await this.getAll('papers');
    const list = all && all.length > 0 ? all : DEFAULT_PAPERS;
    if (subjectId) {
      return list.filter((p) => p.subjectId === subjectId).sort((a, b) => a.order - b.order);
    }
    return list.sort((a, b) => a.order - b.order);
  }

  async updatePaper(paper) {
    return this.put('papers', paper);
  }

  async addPaper(paper) {
    if (!paper.id) paper.id = 'paper_' + Date.now();
    return this.put('papers', paper);
  }

  async deletePaper(paperId) {
    const topics = await this.getTopics(paperId);
    for (const t of topics) {
      await this.deleteTopic(t.id);
    }
    return this.delete('papers', paperId);
  }

  // --- TOPICS ---
  async getTopics(paperId = null) {
    const all = await this.getAll('topics');
    const list = all && all.length > 0 ? all : DEFAULT_TOPICS;
    let filtered = list;
    if (paperId) {
      filtered = list.filter((t) => t.paperId === paperId);
    }
    return filtered.sort((a, b) => a.order - b.order);
  }

  async getTopicsBySubject(subjectId) {
    const all = await this.getAll('topics');
    const list = all && all.length > 0 ? all : DEFAULT_TOPICS;
    return list.filter((t) => t.subjectId === subjectId).sort((a, b) => a.order - b.order);
  }

  async getTopic(id) {
    return this.getById('topics', id);
  }

  async updateTopic(topic) {
    return this.put('topics', topic);
  }

  async addTopic(topic) {
    if (!topic.id) topic.id = 'top_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
    if (!topic.order) {
      const existing = await this.getTopics(topic.paperId);
      topic.order = existing.length + 1;
    }
    if (!topic.status) topic.status = 'Not Started';
    return this.put('topics', topic);
  }

  async deleteTopic(id) {
    return this.delete('topics', id);
  }

  async reorderTopics(paperId, orderedTopicIds) {
    const topics = await this.getTopics(paperId);
    const map = new Map(topics.map((t) => [t.id, t]));
    const updated = [];
    orderedTopicIds.forEach((id, index) => {
      const t = map.get(id);
      if (t) {
        t.order = index + 1;
        updated.push(t);
      }
    });

    for (const t of updated) {
      await this.put('topics', t);
    }
    return true;
  }

  // --- PAST PAPERS ---
  async getPastPapers(subjectId = null) {
    const papers = await this.getAll('pastPapers');
    let filtered = papers;
    if (subjectId) {
      filtered = papers.filter((p) => p.subjectId === subjectId);
    }
    return filtered.sort((a, b) => new Date(b.dateCompleted || 0) - new Date(a.dateCompleted || 0));
  }

  async addPastPaper(log) {
    if (!log.id) log.id = 'log_' + Date.now();
    log.percentage = Math.round((log.rawMarks / log.maxMarks) * 100);
    return this.put('pastPapers', log);
  }

  async updatePastPaper(log) {
    log.percentage = Math.round((log.rawMarks / log.maxMarks) * 100);
    return this.put('pastPapers', log);
  }

  async deletePastPaper(id) {
    return this.delete('pastPapers', id);
  }

  // --- STUDY SESSIONS ---
  async getStudySessions(subjectId = null) {
    const sessions = await this.getAll('studySessions');
    let filtered = sessions;
    if (subjectId) {
      filtered = sessions.filter((s) => s.subjectId === subjectId);
    }
    return filtered.sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
  }

  async addStudySession(session) {
    if (!session.id) session.id = 'sess_' + Date.now();
    if (!session.timestamp) session.timestamp = new Date().toISOString();
    return this.put('studySessions', session);
  }

  async deleteStudySession(id) {
    return this.delete('studySessions', id);
  }

  // --- SETTINGS ---
  async getSettings() {
    const defaults = {
      targetExamDate: '2027-05-01T09:00:00',
      pomodoroWorkMinutes: 25,
      pomodoroShortBreakMinutes: 5,
      pomodoroLongBreakMinutes: 15,
      theme: 'dark'
    };

    if (this.useFallback) {
      const saved = localStorage.getItem('alr_settings');
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    }

    const settingsList = await this.getAll('settings');
    const map = {};
    if (Array.isArray(settingsList)) {
      settingsList.forEach((s) => (map[s.key] = s.value));
    }
    return { ...defaults, ...map };
  }

  async saveSetting(key, value) {
    if (this.useFallback) {
      const current = await this.getSettings();
      current[key] = value;
      localStorage.setItem('alr_settings', JSON.stringify(current));
      return { key, value };
    }
    return this.put('settings', { key, value });
  }

  // --- RESET, EXPORT & SAMPLE DATA ---
  async resetToDefaults() {
    if (this.useFallback) {
      this.resetToDefaultsFallback();
      return true;
    }

    await this.clearStore('subjects');
    await this.clearStore('papers');
    await this.clearStore('topics');
    await this.clearStore('pastPapers');
    await this.clearStore('studySessions');
    await this.clearStore('settings');

    await this.putBulk('subjects', DEFAULT_SUBJECTS);
    await this.putBulk('papers', DEFAULT_PAPERS);
    await this.putBulk('topics', DEFAULT_TOPICS);

    await this.saveSetting('targetExamDate', '2027-05-01T09:00:00');
    await this.saveSetting('pomodoroWorkMinutes', 25);
    await this.saveSetting('pomodoroShortBreakMinutes', 5);
    await this.saveSetting('pomodoroLongBreakMinutes', 15);
    await this.saveSetting('theme', 'dark');

    return true;
  }

  async exportAllData() {
    const subjects = await this.getAll('subjects');
    const papers = await this.getAll('papers');
    const topics = await this.getAll('topics');
    const pastPapers = await this.getAll('pastPapers');
    const studySessions = await this.getAll('studySessions');
    const settings = await this.getSettings();

    return {
      version: 1,
      appName: 'Cambridge A-Level Revision Tracker',
      exportDate: new Date().toISOString(),
      data: {
        subjects,
        papers,
        topics,
        pastPapers,
        studySessions,
        settings
      }
    };
  }

  async importAllData(importedJson) {
    if (!importedJson || !importedJson.data) {
      throw new Error('Invalid backup file format.');
    }
    const { subjects, papers, topics, pastPapers, studySessions, settings } = importedJson.data;

    await this.clearStore('subjects');
    await this.clearStore('papers');
    await this.clearStore('topics');
    await this.clearStore('pastPapers');
    await this.clearStore('studySessions');
    await this.clearStore('settings');

    if (subjects && subjects.length) await this.putBulk('subjects', subjects);
    if (papers && papers.length) await this.putBulk('papers', papers);
    if (topics && topics.length) await this.putBulk('topics', topics);
    if (pastPapers && pastPapers.length) await this.putBulk('pastPapers', pastPapers);
    if (studySessions && studySessions.length) await this.putBulk('studySessions', studySessions);

    if (settings) {
      for (const [key, value] of Object.entries(settings)) {
        await this.saveSetting(key, value);
      }
    }
    return true;
  }

  async loadSampleData() {
    const topics = await this.getAll('topics');
    const now = new Date();

    const getPastDate = (daysAgo) => {
      const d = new Date(now);
      d.setDate(d.getDate() - daysAgo);
      return d.toISOString();
    };

    const tMap = {
      top_9231_p1_1: { status: 'Confident', lastRevisedAt: getPastDate(3) },
      top_9231_p1_2: { status: 'Revising', lastRevisedAt: getPastDate(14) },
      top_9231_p1_3: { status: 'Mastered', lastRevisedAt: getPastDate(1) },
      top_9231_p1_5: { status: 'Revising', lastRevisedAt: getPastDate(28) },
      top_9231_p2_1: { status: 'Revising', lastRevisedAt: getPastDate(18) },
      top_9231_p2_2: { status: 'Confident', lastRevisedAt: getPastDate(5) },
      top_9231_p3_1: { status: 'Confident', lastRevisedAt: getPastDate(8) },
      top_9231_p3_3: { status: 'Revising', lastRevisedAt: getPastDate(21) },
      top_9231_p4_1: { status: 'Confident', lastRevisedAt: getPastDate(4) },
      top_9709_p1_1: { status: 'Mastered', lastRevisedAt: getPastDate(12) },
      top_9709_p3_3: { status: 'Revising', lastRevisedAt: getPastDate(25) },
      top_9626_p2_1: { status: 'Confident', lastRevisedAt: getPastDate(6) }
    };

    for (const t of topics) {
      if (tMap[t.id]) {
        t.status = tMap[t.id].status;
        t.lastRevisedAt = tMap[t.id].lastRevisedAt;
        await this.updateTopic(t);
      }
    }

    const samplePastPapers = [
      {
        id: 'sample_pp_1',
        subjectId: 'sub_9231',
        paperId: 'paper_9231_p1',
        year: 2023,
        series: 'm/j',
        variant: 12,
        dateCompleted: getPastDate(15).split('T')[0],
        rawMarks: 58,
        maxMarks: 75,
        percentage: 77,
        gradeEstimate: 'A',
        timeSpentMinutes: 115,
        mistakeNotes: 'Lost 8 marks on Polar Coordinates area integral and 6 marks on Rational Functions sketch asymptotes.',
        flaggedTopicIds: ['top_9231_p1_5', 'top_9231_p1_2']
      },
      {
        id: 'sample_pp_2',
        subjectId: 'sub_9231',
        paperId: 'paper_9231_p1',
        year: 2024,
        series: 'm/j',
        variant: 11,
        dateCompleted: getPastDate(5).split('T')[0],
        rawMarks: 67,
        maxMarks: 75,
        percentage: 89,
        gradeEstimate: 'A*',
        timeSpentMinutes: 110,
        mistakeNotes: 'Minor arithmetic slip on 3D Vectors intersection; Proof by induction was solid.',
        flaggedTopicIds: ['top_9231_p1_6']
      },
      {
        id: 'sample_pp_3',
        subjectId: 'sub_9231',
        paperId: 'paper_9231_p3',
        year: 2023,
        series: 'o/n',
        variant: 32,
        dateCompleted: getPastDate(20).split('T')[0],
        rawMarks: 39,
        maxMarks: 50,
        percentage: 78,
        gradeEstimate: 'A',
        timeSpentMinutes: 85,
        mistakeNotes: 'Circular motion vertical circle tension equation mistake.',
        flaggedTopicIds: ['top_9231_p3_3']
      },
      {
        id: 'sample_pp_4',
        subjectId: 'sub_9709',
        paperId: 'paper_9709_p3',
        year: 2024,
        series: 'm/j',
        variant: 32,
        dateCompleted: getPastDate(7).split('T')[0],
        rawMarks: 66,
        maxMarks: 75,
        percentage: 88,
        gradeEstimate: 'A*',
        timeSpentMinutes: 105,
        mistakeNotes: 'Complex numbers locus sketch boundary was dotted instead of solid.',
        flaggedTopicIds: ['top_9709_p3_3', 'top_9709_p3_9']
      },
      {
        id: 'sample_pp_5',
        subjectId: 'sub_9626',
        paperId: 'paper_9626_p2',
        year: 2023,
        series: 'm/j',
        variant: 2,
        dateCompleted: getPastDate(10).split('T')[0],
        rawMarks: 94,
        maxMarks: 110,
        percentage: 85,
        gradeEstimate: 'A*',
        timeSpentMinutes: 140,
        mistakeNotes: 'Spreadsheet dynamic array formula missed nested condition.',
        flaggedTopicIds: ['top_9626_p2_1', 'top_9626_p2_3']
      }
    ];

    await this.clearStore('pastPapers');
    await this.putBulk('pastPapers', samplePastPapers);

    const sampleSessions = [
      {
        id: 'sample_sess_1',
        subjectId: 'sub_9231',
        paperId: 'paper_9231_p1',
        topicId: 'top_9231_p1_5',
        durationMinutes: 50,
        timestamp: getPastDate(2),
        type: 'Pomodoro',
        notes: 'Cardioids and tangents perpendicular to initial line practice questions.'
      },
      {
        id: 'sample_sess_2',
        subjectId: 'sub_9231',
        paperId: 'paper_9231_p2',
        topicId: 'top_9231_p2_2',
        durationMinutes: 45,
        timestamp: getPastDate(3),
        type: 'Deep Work',
        notes: 'Diagonalisation M = PDP^-1 step-by-step proofs and power calculations.'
      },
      {
        id: 'sample_sess_3',
        subjectId: 'sub_9709',
        paperId: 'paper_9709_p3',
        topicId: 'top_9709_p3_5',
        durationMinutes: 60,
        timestamp: getPastDate(4),
        type: 'Deep Work',
        notes: 'Integration by parts recurrent integrals.'
      },
      {
        id: 'sample_sess_4',
        subjectId: 'sub_9626',
        paperId: 'paper_9626_p2',
        topicId: 'top_9626_p2_1',
        durationMinutes: 40,
        timestamp: getPastDate(5),
        type: 'Pomodoro',
        notes: 'Complex nested IF and XLOOKUP practice.'
      }
    ];

    await this.clearStore('studySessions');
    await this.putBulk('studySessions', sampleSessions);

    return true;
  }
}

const storage = new RevisionStorage();


  // --- 3. RECOMMENDATIONS ENGINE ---
  // Smart Revision Guide - "What to Study Next" Recommendation Engine
// Prioritizes topics with low confidence, time decay since last review, and past paper mistake tags.

function calculateTopicRecommendations({ topics, papers, pastPapers, studySessions, subjectId = null }) {
  const now = new Date();

  // Create lookup maps
  const paperMap = new Map(papers.map((p) => [p.id, p]));

  // Count past paper mistakes per topic
  const mistakeCountMap = new Map();
  pastPapers.forEach((pp) => {
    if (pp.flaggedTopicIds && Array.isArray(pp.flaggedTopicIds)) {
      pp.flaggedTopicIds.forEach((tId) => {
        mistakeCountMap.set(tId, (mistakeCountMap.get(tId) || 0) + 1);
      });
    }
  });

  // Check last revision from either topic.lastRevisedAt or studySessions
  const lastSessionMap = new Map();
  studySessions.forEach((s) => {
    if (s.topicId) {
      const sTime = new Date(s.timestamp).getTime();
      const existing = lastSessionMap.get(s.topicId) || 0;
      if (sTime > existing) {
        lastSessionMap.set(s.topicId, sTime);
      }
    }
  });

  let candidateTopics = topics;
  if (subjectId) {
    candidateTopics = candidateTopics.filter((t) => t.subjectId === subjectId);
  }

  const scoredTopics = candidateTopics.map((topic) => {
    let score = 0;
    const reasons = [];

    // 1. Status Factor
    switch (topic.status) {
      case 'Not Started':
        score += 100;
        reasons.push({ text: 'Not Started', type: 'danger' });
        break;
      case 'Revising':
        score += 80;
        reasons.push({ text: 'In Progress / Needs Review', type: 'warning' });
        break;
      case 'Confident':
        score += 35;
        reasons.push({ text: 'Confident (Maintenance)', type: 'info' });
        break;
      case 'Mastered':
        score += 10;
        reasons.push({ text: 'Mastered', type: 'success' });
        break;
      default:
        score += 50;
    }

    // 2. Exam Frequency Weighting
    if (topic.examWeight === 'High Frequency') {
      score += 20;
      reasons.push({ text: 'High Exam Weight', type: 'accent' });
    } else if (topic.examWeight === 'Core') {
      score += 10;
    }

    // 3. Past Paper Errors
    const mistakes = mistakeCountMap.get(topic.id) || 0;
    if (mistakes > 0) {
      const mistakePoints = mistakes * 35;
      score += mistakePoints;
      reasons.unshift({
        text: `Flagged in ${mistakes} past paper error${mistakes > 1 ? 's' : ''}`,
        type: 'error-highlight'
      });
    }

    // 4. Time Decay Factor (Days since last revision)
    let lastRevisionTime = 0;
    if (topic.lastRevisedAt) {
      lastRevisionTime = Math.max(lastRevisionTime, new Date(topic.lastRevisedAt).getTime());
    }
    const sessionTime = lastSessionMap.get(topic.id);
    if (sessionTime) {
      lastRevisionTime = Math.max(lastRevisionTime, sessionTime);
    }

    if (lastRevisionTime === 0) {
      score += 25;
      if (topic.status !== 'Not Started') {
        reasons.push({ text: 'No recorded revision date', type: 'warning' });
      }
    } else {
      const daysSince = Math.floor((now.getTime() - lastRevisionTime) / (1000 * 60 * 60 * 24));
      if (daysSince >= 28) {
        score += 45;
        reasons.push({ text: `Last studied ${daysSince}d ago (Stale)`, type: 'danger' });
      } else if (daysSince >= 14) {
        score += 30;
        reasons.push({ text: `Last studied ${daysSince}d ago`, type: 'warning' });
      } else if (daysSince >= 7) {
        score += 15;
        reasons.push({ text: `Last studied ${daysSince}d ago`, type: 'info' });
      } else if (daysSince <= 1) {
        // Studied very recently: damp score slightly to prevent repetition
        score -= 25;
        reasons.push({ text: 'Studied recently', type: 'neutral' });
      }
    }

    // Urgency categorization
    let urgency = 'Low';
    let urgencyBadgeClass = 'badge-low';
    if (score >= 130) {
      urgency = 'Critical Priority';
      urgencyBadgeClass = 'badge-critical';
    } else if (score >= 95) {
      urgency = 'High Priority';
      urgencyBadgeClass = 'badge-high';
    } else if (score >= 60) {
      urgency = 'Medium Priority';
      urgencyBadgeClass = 'badge-medium';
    }

    const paper = paperMap.get(topic.paperId) || { code: 'Paper', name: 'Paper' };

    return {
      topic,
      paper,
      score: Math.round(score),
      urgency,
      urgencyBadgeClass,
      reasons,
      mistakesCount: mistakes
    };
  });

  // Sort descending by score
  scoredTopics.sort((a, b) => b.score - a.score);

  // Assign ranks
  return scoredTopics.map((item, index) => ({
    ...item,
    rank: index + 1
  }));
}


  // --- 4. TIMER & COUNTDOWN ENGINE ---
  // Exam Countdown and Pomodoro/Deep Work Timer Engine with Web Audio Chime


class RevisionTimer {
  constructor(onTickCallback, onCompleteCallback) {
    this.onTick = onTickCallback || (() => {});
    this.onComplete = onCompleteCallback || (() => {});

    this.timerInterval = null;
    this.mode = 'work'; // 'work' | 'shortBreak' | 'longBreak' | 'stopwatch'
    this.isRunning = false;

    this.workMinutes = 25;
    this.shortBreakMinutes = 5;
    this.longBreakMinutes = 15;

    this.durationSeconds = this.workMinutes * 60;
    this.remainingSeconds = this.durationSeconds;
    this.stopwatchSeconds = 0;

    this.selectedSubjectId = null;
    this.selectedPaperId = null;
    this.selectedTopicId = null;

    this.completedCycles = 0;
    this.sessionStartTime = null;

    this.audioContext = null;
  }

  init(settings) {
    if (settings) {
      this.workMinutes = settings.pomodoroWorkMinutes || 25;
      this.shortBreakMinutes = settings.pomodoroShortBreakMinutes || 5;
      this.longBreakMinutes = settings.pomodoroLongBreakMinutes || 15;
    }
    this.setMode(this.mode);
  }

  setMode(mode) {
    this.pause();
    this.mode = mode;
    if (mode === 'work') {
      this.durationSeconds = this.workMinutes * 60;
      this.remainingSeconds = this.durationSeconds;
    } else if (mode === 'shortBreak') {
      this.durationSeconds = this.shortBreakMinutes * 60;
      this.remainingSeconds = this.durationSeconds;
    } else if (mode === 'longBreak') {
      this.durationSeconds = this.longBreakMinutes * 60;
      this.remainingSeconds = this.durationSeconds;
    } else if (mode === 'stopwatch') {
      this.stopwatchSeconds = 0;
    }
    this.emitTick();
  }

  setCustomWorkMinutes(mins) {
    this.workMinutes = Math.max(1, parseInt(mins) || 25);
    if (this.mode === 'work' && !this.isRunning) {
      this.durationSeconds = this.workMinutes * 60;
      this.remainingSeconds = this.durationSeconds;
      this.emitTick();
    }
  }

  setContext(subjectId, paperId = null, topicId = null) {
    this.selectedSubjectId = subjectId;
    this.selectedPaperId = paperId;
    this.selectedTopicId = topicId;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.sessionStartTime = new Date();

    // Ask notification permission if supported
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }

    this.timerInterval = setInterval(() => {
      if (this.mode === 'stopwatch') {
        this.stopwatchSeconds++;
        this.emitTick();
      } else {
        if (this.remainingSeconds > 0) {
          this.remainingSeconds--;
          this.emitTick();
        } else {
          this.handleTimerEnd();
        }
      }
    }, 1000);

    this.emitTick();
  }

  pause() {
    this.isRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.emitTick();
  }

  reset() {
    this.pause();
    if (this.mode === 'stopwatch') {
      this.stopwatchSeconds = 0;
    } else {
      this.remainingSeconds = this.durationSeconds;
    }
    this.emitTick();
  }

  async handleTimerEnd() {
    this.pause();
    this.playChime();
    this.showBrowserNotification();

    if (this.mode === 'work') {
      this.completedCycles++;
      // Auto-log session
      const loggedMinutes = Math.round(this.durationSeconds / 60);
      if (this.selectedSubjectId && loggedMinutes > 0) {
        await storage.addStudySession({
          subjectId: this.selectedSubjectId,
          paperId: this.selectedPaperId,
          topicId: this.selectedTopicId,
          durationMinutes: loggedMinutes,
          type: 'Pomodoro',
          notes: 'Completed standard Pomodoro work block'
        });

        // Also update topic's lastRevisedAt
        if (this.selectedTopicId) {
          const topic = await storage.getTopic(this.selectedTopicId);
          if (topic) {
            topic.lastRevisedAt = new Date().toISOString();
            if (topic.status === 'Not Started') topic.status = 'Revising';
            await storage.updateTopic(topic);
          }
        }
      }

      // Suggest break
      const nextMode = this.completedCycles % 4 === 0 ? 'longBreak' : 'shortBreak';
      this.onComplete({
        mode: this.mode,
        completedCycles: this.completedCycles,
        nextMode,
        loggedMinutes
      });
    } else {
      // Break ended
      this.onComplete({
        mode: this.mode,
        completedCycles: this.completedCycles,
        nextMode: 'work'
      });
    }
  }

  async stopAndSaveStopwatch() {
    if (this.mode !== 'stopwatch') return;
    this.pause();
    const durationMinutes = Math.round(this.stopwatchSeconds / 60);

    if (this.selectedSubjectId && durationMinutes >= 1) {
      await storage.addStudySession({
        subjectId: this.selectedSubjectId,
        paperId: this.selectedPaperId,
        topicId: this.selectedTopicId,
        durationMinutes,
        type: 'Deep Work',
        notes: 'Open Deep Work study session'
      });

      if (this.selectedTopicId) {
        const topic = await storage.getTopic(this.selectedTopicId);
        if (topic) {
          topic.lastRevisedAt = new Date().toISOString();
          if (topic.status === 'Not Started') topic.status = 'Revising';
          await storage.updateTopic(topic);
        }
      }
    }

    this.stopwatchSeconds = 0;
    this.emitTick();
    return durationMinutes;
  }

  emitTick() {
    let currentSeconds = this.remainingSeconds;
    let totalSecs = this.durationSeconds;
    let percentage = 0;

    if (this.mode === 'stopwatch') {
      currentSeconds = this.stopwatchSeconds;
      percentage = 100;
    } else {
      percentage = totalSecs > 0 ? ((totalSecs - currentSeconds) / totalSecs) * 100 : 0;
    }

    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    this.onTick({
      formatted,
      minutes,
      seconds,
      currentSeconds,
      durationSeconds: this.durationSeconds,
      percentage: Math.min(100, Math.max(0, percentage)),
      isRunning: this.isRunning,
      mode: this.mode,
      completedCycles: this.completedCycles,
      subjectId: this.selectedSubjectId,
      topicId: this.selectedTopicId
    });
  }

  // Synthesizes pleasant harmonic completion sound using Web Audio API (100% offline)
  playChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioContext) {
        this.audioContext = new AudioCtx();
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Major chord arpeggio)
      const now = this.audioContext.currentTime;

      notes.forEach((freq, i) => {
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.12);

        gain.gain.setValueAtTime(0, now + i * 0.12);
        gain.gain.linearRampToValueAtTime(0.25, now + i * 0.12 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 0.6);

        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.65);
      });
    } catch (e) {
      console.warn('Audio chime playback failed:', e);
    }
  }

  showBrowserNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
      const title = this.mode === 'work' ? '🎉 Study Interval Complete!' : '🔔 Break Over!';
      const body =
        this.mode === 'work'
          ? 'Great work! Take a well-deserved break to keep your mind sharp.'
          : 'Break finished! Ready to dive into the next revision block?';
      new Notification(title, { body, icon: 'favicon.ico' });
    }
  }
}

// May 2027 Exam Countdown Helper
function getExamCountdown(targetDateStr = '2027-05-01T09:00:00') {
  const target = new Date(targetDateStr).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    return {
      passed: true,
      text: 'Exams in progress or completed!',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));

  const months = Math.floor(daysTotal / 30.4375);
  const daysRemaining = Math.floor(daysTotal % 30.4375);

  return {
    passed: false,
    daysTotal,
    months,
    days: daysRemaining,
    hours,
    minutes,
    seconds,
    summaryShort: `${months}m ${daysRemaining}d ${hours}h`,
    summaryLong: `${months} Months, ${daysRemaining} Days, ${hours} Hours`
  };
}


  // --- 5. APPLICATION CONTROLLER ---
  // Main Application Controller for Cambridge A-Level Revision Tracker




class AppController {
  constructor() {
    this.currentView = 'dashboard';
    this.activeSubjectId = 'sub_9231'; // Default: Further Maths 9231
    this.timer = null;
    this.subjects = typeof DEFAULT_SUBJECTS !== 'undefined' ? [...DEFAULT_SUBJECTS] : [];
    this.papers = typeof DEFAULT_PAPERS !== 'undefined' ? [...DEFAULT_PAPERS] : [];
    this.topics = typeof DEFAULT_TOPICS !== 'undefined' ? [...DEFAULT_TOPICS] : [];
    this.pastPapers = [];
    this.studySessions = [];
    this.settings = {
      targetExamDate: '2027-05-01T09:00:00',
      pomodoroWorkMinutes: 25,
      pomodoroShortBreakMinutes: 5,
      pomodoroLongBreakMinutes: 15,
      theme: 'dark'
    };

    this.init();
  }

  async init() {
    // 1. Setup Theme immediately
    this.initTheme();

    // 2. Attach Event Listeners immediately so all tabs & buttons respond instantly
    this.attachEventListeners();

    // 3. Start live countdown ticker immediately
    this.startCountdownTicker();

    // 4. Setup Timer
    this.timer = new RevisionTimer(
      (tick) => this.onTimerTick(tick),
      (event) => this.onTimerComplete(event)
    );
    this.timer.init(this.settings);

    // 5. Render immediately with default syllabi
    this.render();

    try {
      await storage.init();
      await this.refreshData();
    } catch (err) {
      console.warn('Storage sync notice:', err);
    }

    if (this.timer) {
      this.timer.init(this.settings);
    }

    // 6. Re-render with loaded data
    this.render();
  }

  async refreshData() {
    this.subjects = await storage.getSubjects();
    this.papers = await storage.getPapers();
    this.topics = await storage.getTopics();
    this.pastPapers = await storage.getPastPapers();
    this.studySessions = await storage.getStudySessions();
    this.settings = await storage.getSettings();
  }

  // --- THEME ---
  initTheme() {
    const theme = this.settings.theme || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeIcons(theme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    storage.saveSetting('theme', next);
    this.settings.theme = next;
    this.updateThemeIcons(next);
  }

  updateThemeIcons(theme) {
    const sun = document.getElementById('theme-icon-sun');
    const moon = document.getElementById('theme-icon-moon');
    if (theme === 'light') {
      sun.style.display = 'none';
      moon.style.display = 'block';
    } else {
      sun.style.display = 'block';
      moon.style.display = 'none';
    }
  }

  // --- COUNTDOWN TICKER ---
  startCountdownTicker() {
    const update = () => {
      const cd = getExamCountdown(this.settings.targetExamDate || '2027-05-01T09:00:00');
      const miniEl = document.getElementById('mini-countdown-text');
      if (miniEl) miniEl.textContent = `${cd.months}m ${cd.days}d ${cd.hours}h`;

      const mEl = document.getElementById('hero-countdown-months');
      const dEl = document.getElementById('hero-countdown-days');
      const hEl = document.getElementById('hero-countdown-hours');
      if (mEl && dEl && hEl) {
        mEl.textContent = cd.months;
        dEl.textContent = cd.days;
        hEl.textContent = cd.hours;
      }
    };
    update();
    setInterval(update, 60000); // Update every minute
  }

  // --- TIMER CALLBACKS ---
  onTimerTick(tick) {
    // Header mini timer
    const headerTime = document.getElementById('header-timer-time');
    const headerDot = document.getElementById('header-timer-dot');
    if (headerTime) headerTime.textContent = tick.formatted;
    if (headerDot) {
      if (tick.isRunning) headerDot.classList.add('running');
      else headerDot.classList.remove('running');
    }

    // Main timer display
    const timerDisplayTime = document.getElementById('timer-display-time');
    const timerDisplayMode = document.getElementById('timer-display-mode');
    const timerBtnText = document.getElementById('timer-btn-text');
    const playIcon = document.getElementById('timer-play-icon');
    const pauseIcon = document.getElementById('timer-pause-icon');
    const circle = document.getElementById('timer-circle-progress');

    if (timerDisplayTime) timerDisplayTime.textContent = tick.formatted;
    if (timerDisplayMode) {
      if (tick.mode === 'work') timerDisplayMode.textContent = 'FOCUS SESSION';
      else if (tick.mode === 'shortBreak') timerDisplayMode.textContent = 'SHORT BREAK';
      else if (tick.mode === 'longBreak') timerDisplayMode.textContent = 'LONG BREAK';
      else if (tick.mode === 'stopwatch') timerDisplayMode.textContent = 'DEEP WORK STOPWATCH';
    }

    if (timerBtnText) {
      timerBtnText.textContent = tick.isRunning ? 'Pause' : 'Start Focus';
    }
    if (playIcon && pauseIcon) {
      playIcon.style.display = tick.isRunning ? 'none' : 'inline-block';
      pauseIcon.style.display = tick.isRunning ? 'inline-block' : 'none';
    }

    // Circular progress stroke calculation
    if (circle) {
      const circumference = 2 * Math.PI * 44; // 276.46
      const offset = circumference - (tick.percentage / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  }

  async onTimerComplete(event) {
    await this.refreshData();
    const cycleCount = document.getElementById('timer-completed-cycles');
    if (cycleCount) cycleCount.textContent = event.completedCycles;

    alert(
      event.mode === 'work'
        ? `🎉 Great work! Completed ${event.loggedMinutes} minutes of revision! Time for a break.`
        : `🔔 Break finished! Ready to begin your next revision block?`
    );

    this.timer.setMode(event.nextMode);
    this.render();
  }

  // --- NAVIGATION ---
  switchView(viewName) {
    this.currentView = viewName;
    document.querySelectorAll('.nav-item').forEach((item) => {
      item.classList.toggle('active', item.getAttribute('data-view') === viewName);
    });

    document.querySelectorAll('.view-panel').forEach((panel) => {
      panel.style.display = panel.id === `view-${viewName}` ? 'block' : 'none';
    });

    const headings = {
      dashboard: 'Dashboard',
      syllabus: 'Syllabus & Topic Tracker',
      'past-papers': 'Past Paper Logger & Mistake Journal',
      'study-next': 'Smart Revision Guide (What to Study Next)',
      timer: 'Exam Countdown & Study Session Timer',
      analytics: 'Analytics, Study Hours & Streaks',
      settings: 'Backup, Export & Preferences'
    };
    const titleEl = document.getElementById('page-heading');
    if (titleEl) titleEl.textContent = headings[viewName] || 'Dashboard';

    this.render();
  }

  // --- RENDER DISPATCHER ---
  render() {
    this.updateRecommendationBadge();
    if (this.currentView === 'dashboard') this.renderDashboard();
    else if (this.currentView === 'syllabus') this.renderSyllabus();
    else if (this.currentView === 'past-papers') this.renderPastPapers();
    else if (this.currentView === 'study-next') this.renderStudyNext();
    else if (this.currentView === 'timer') this.renderTimer();
    else if (this.currentView === 'analytics') this.renderAnalytics();
    else if (this.currentView === 'settings') this.renderSettings();
  }

  updateRecommendationBadge() {
    const recs = calculateTopicRecommendations({
      topics: this.topics,
      papers: this.papers,
      pastPapers: this.pastPapers,
      studySessions: this.studySessions
    });
    const criticalOrHigh = recs.filter((r) => r.score >= 95).length;
    const badge = document.getElementById('rec-count-badge');
    if (badge) badge.textContent = criticalOrHigh > 0 ? criticalOrHigh : recs.length;
  }

  // --- 1. DASHBOARD VIEW ---
  renderDashboard() {
    // 1. Stats calculation
    const totalTopics = this.topics.length;
    const masteredTopics = this.topics.filter((t) => t.status === 'Mastered').length;
    const masteredPercent = totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0;

    const elMastered = document.getElementById('dash-stat-mastered');
    const elMasteredSub = document.getElementById('dash-stat-mastered-sub');
    if (elMastered) elMastered.textContent = `${masteredPercent}%`;
    if (elMasteredSub) elMasteredSub.textContent = `${masteredTopics} of ${totalTopics} topics`;

    const ppCount = this.pastPapers.length;
    const elPpCount = document.getElementById('dash-stat-papers-count');
    const elPpAvg = document.getElementById('dash-stat-avg-score');
    if (elPpCount) elPpCount.textContent = ppCount;
    if (elPpAvg) {
      if (ppCount > 0) {
        const avg = Math.round(this.pastPapers.reduce((sum, p) => sum + p.percentage, 0) / ppCount);
        elPpAvg.textContent = `Avg Score: ${avg}%`;
      } else {
        elPpAvg.textContent = 'No past papers logged yet';
      }
    }

    const totalMinutes = this.studySessions.reduce((sum, s) => sum + (s.durationMinutes || 0), 0);
    const totalHours = (totalMinutes / 60).toFixed(1);
    const elHours = document.getElementById('dash-stat-study-hours');
    const elSessionsCount = document.getElementById('dash-stat-sessions-count');
    if (elHours) elHours.textContent = `${totalHours}h`;
    if (elSessionsCount) elSessionsCount.textContent = `${this.studySessions.length} logged sessions`;

    // Recommendations preview (Top 3)
    const recs = calculateTopicRecommendations({
      topics: this.topics,
      papers: this.papers,
      pastPapers: this.pastPapers,
      studySessions: this.studySessions
    });
    const topRecs = recs.slice(0, 3);
    const criticalCount = recs.filter((r) => r.score >= 120).length;
    const elCrit = document.getElementById('dash-stat-critical-count');
    if (elCrit) elCrit.textContent = criticalCount;

    const recsContainer = document.getElementById('dash-top-recs-container');
    if (recsContainer) {
      if (topRecs.length === 0) {
        recsContainer.innerHTML = `<div style="color: var(--text-muted); padding: 12px;">No recommendations yet.</div>`;
      } else {
        recsContainer.innerHTML = topRecs
          .map((item) => {
            const subject = this.subjects.find((s) => s.id === item.topic.subjectId);
            return `
              <div class="rec-card">
                <div class="rec-rank">#${item.rank}</div>
                <div class="rec-info">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <span style="font-size: 0.75rem; font-weight: 700; color: ${subject?.color || '#fff'};">
                      ${subject?.name || ''} • ${item.paper.code}
                    </span>
                    <span class="status-badge ${item.urgencyBadgeClass}">${item.urgency}</span>
                  </div>
                  <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary);">${item.topic.name}</div>
                  <div class="rec-badges">
                    ${item.reasons.map((r) => `<span class="reason-tag ${r.type}">${r.text}</span>`).join('')}
                  </div>
                </div>
                <div>
                  <button class="btn btn-primary btn-sm btn-quick-study" data-sub="${item.topic.subjectId}" data-paper="${item.topic.paperId}" data-topic="${item.topic.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Study Now
                  </button>
                </div>
              </div>
            `;
          })
          .join('');
      }
    }

    // Subject breakdown cards
    const subContainer = document.getElementById('dash-subject-cards-container');
    if (subContainer) {
      subContainer.innerHTML = this.subjects
        .map((sub) => {
          const subTopics = this.topics.filter((t) => t.subjectId === sub.id);
          const total = subTopics.length;
          const mastered = subTopics.filter((t) => t.status === 'Mastered').length;
          const confident = subTopics.filter((t) => t.status === 'Confident').length;
          const revising = subTopics.filter((t) => t.status === 'Revising').length;

          const mPct = total > 0 ? (mastered / total) * 100 : 0;
          const cPct = total > 0 ? (confident / total) * 100 : 0;
          const rPct = total > 0 ? (revising / total) * 100 : 0;

          const subPPs = this.pastPapers.filter((p) => p.subjectId === sub.id);
          const subAvg = subPPs.length > 0 ? Math.round(subPPs.reduce((a, b) => a + b.percentage, 0) / subPPs.length) : null;

          return `
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="subject-pill-dot" style="background-color: ${sub.color};"></span>
                  <strong style="font-size: 1.05rem;">${sub.name} (${sub.code})</strong>
                  <span style="font-size: 0.75rem; color: var(--text-muted);">Target: ${sub.targetGrade || 'A*'}</span>
                </div>
                <div style="font-size: 0.85rem; color: var(--text-secondary);">
                  ${subAvg !== null ? `Past Paper Avg: <strong style="color: var(--accent-sky);">${subAvg}%</strong> • ` : ''}
                  <strong>${mastered}</strong>/${total} Mastered (${Math.round(mPct)}%)
                </div>
              </div>
              <div class="progress-bar-container" style="height: 10px; margin-bottom: 8px;">
                <div class="progress-segment mastered" style="width: ${mPct}%;" title="Mastered: ${Math.round(mPct)}%"></div>
                <div class="progress-segment confident" style="width: ${cPct}%;" title="Confident: ${Math.round(cPct)}%"></div>
                <div class="progress-segment revising" style="width: ${rPct}%;" title="Revising: ${Math.round(rPct)}%"></div>
              </div>
              <div style="display: flex; gap: 14px; font-size: 0.75rem; color: var(--text-muted);">
                <span><span style="color: var(--accent-emerald);">●</span> Mastered: ${mastered}</span>
                <span><span style="color: var(--accent-sky);">●</span> Confident: ${confident}</span>
                <span><span style="color: var(--accent-amber);">●</span> Revising: ${revising}</span>
                <span><span style="color: var(--text-muted);">●</span> Not Started: ${total - mastered - confident - revising}</span>
              </div>
            </div>
          `;
        })
        .join('');
    }
  }

  // --- 2. SYLLABUS TRACKER VIEW ---
  renderSyllabus() {
    // Subject tabs
    const tabsContainer = document.getElementById('syllabus-subject-tabs');
    if (tabsContainer) {
      tabsContainer.innerHTML = this.subjects
        .map(
          (sub) => `
            <button class="subject-tab-btn ${sub.id === this.activeSubjectId ? 'active' : ''}" data-subject-id="${sub.id}">
              <span class="subject-pill-dot" style="background-color: ${sub.color};"></span>
              ${sub.name} (${sub.code})
            </button>
          `
        )
        .join('');
    }

    const searchQuery = (document.getElementById('syllabus-search-input')?.value || '').toLowerCase().trim();
    const statusFilter = document.getElementById('syllabus-filter-status')?.value || 'ALL';

    const papersContainer = document.getElementById('syllabus-papers-container');
    if (!papersContainer) return;

    const subjectPapers = this.papers.filter((p) => p.subjectId === this.activeSubjectId);

    if (subjectPapers.length === 0) {
      papersContainer.innerHTML = `<div style="color: var(--text-muted); padding: 20px;">No papers found for this subject.</div>`;
      return;
    }

    papersContainer.innerHTML = subjectPapers
      .map((paper) => {
        let paperTopics = this.topics.filter((t) => t.paperId === paper.id).sort((a, b) => a.order - b.order);

        // Apply filters
        if (statusFilter !== 'ALL') {
          paperTopics = paperTopics.filter((t) => t.status === statusFilter);
        }
        if (searchQuery) {
          paperTopics = paperTopics.filter(
            (t) => t.name.toLowerCase().includes(searchQuery) || (t.notes && t.notes.toLowerCase().includes(searchQuery))
          );
        }

        const totalInPaper = this.topics.filter((t) => t.paperId === paper.id).length;
        const masteredInPaper = this.topics.filter((t) => t.paperId === paper.id && t.status === 'Mastered').length;
        const pctMastered = totalInPaper > 0 ? Math.round((masteredInPaper / totalInPaper) * 100) : 0;

        return `
          <div class="paper-accordion">
            <div class="paper-accordion-header">
              <div class="paper-title-group">
                <span style="font-weight: 800; font-size: 1.05rem; color: var(--accent-sky);">${paper.code}:</span>
                <span style="font-weight: 700; font-size: 1.05rem;">${paper.name}</span>
                <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 8px;">(${paper.maxMarks} Marks • ${paper.duration} mins)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">${masteredInPaper}/${totalInPaper} Mastered (${pctMastered}%)</span>
                <div class="progress-bar-container" style="width: 100px; height: 6px;">
                  <div class="progress-segment mastered" style="width: ${pctMastered}%;"></div>
                </div>
              </div>
            </div>

            <div class="topic-list">
              ${
                paperTopics.length === 0
                  ? `<div style="color: var(--text-muted); padding: 12px; font-size: 0.85rem;">No topics matching search/filter.</div>`
                  : paperTopics
                      .map((topic, index) => {
                        const statusClass = 'status-' + topic.status.toLowerCase().replace(/\s+/g, '-');
                        const isFirst = index === 0;
                        const isLast = index === paperTopics.length - 1;

                        return `
                          <div class="topic-row" data-topic-id="${topic.id}">
                            <div class="topic-left">
                              <!-- Reordering Controls -->
                              <div class="topic-reorder-controls" title="Change topic order">
                                <button class="reorder-btn btn-reorder-up" data-topic-id="${topic.id}" data-paper-id="${paper.id}" ${isFirst ? 'disabled style="opacity:0.3;"' : ''}>▲</button>
                                <button class="reorder-btn btn-reorder-down" data-topic-id="${topic.id}" data-paper-id="${paper.id}" ${isLast ? 'disabled style="opacity:0.3;"' : ''}>▼</button>
                              </div>

                              <div>
                                <div class="topic-name">${topic.name}</div>
                                <div class="topic-subtext">
                                  ${topic.examWeight ? `<span style="color: var(--accent-indigo); font-weight: 600;">[${topic.examWeight}]</span>` : ''}
                                  <span>${topic.notes ? topic.notes : 'No syllabus notes'}</span>
                                  ${topic.lastRevisedAt ? `<span style="color: var(--accent-sky);">• Last revised ${new Date(topic.lastRevisedAt).toLocaleDateString()}</span>` : ''}
                                </div>
                              </div>
                            </div>

                            <div class="topic-actions">
                              <!-- Clickable Status Badge -->
                              <button class="status-badge ${statusClass} btn-toggle-status" data-topic-id="${topic.id}" title="Click to cycle status (Not Started -> Revising -> Confident -> Mastered)">
                                ${topic.status}
                              </button>

                              <!-- Quick Study button -->
                              <button class="btn btn-secondary btn-sm btn-quick-study" data-sub="${topic.subjectId}" data-paper="${topic.paperId}" data-topic="${topic.id}" title="Launch revision timer for this topic">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                Study
                              </button>

                              <!-- Delete topic button -->
                              <button class="btn-icon btn-delete-topic" data-topic-id="${topic.id}" title="Delete topic" style="width: 28px; height: 28px; font-size: 0.8rem;">
                                &times;
                              </button>
                            </div>
                          </div>
                        `;
                      })
                      .join('')
              }
            </div>
          </div>
        `;
      })
      .join('');
  }

  // --- 3. PAST PAPERS VIEW ---
  renderPastPapers() {
    // Subject filter dropdown
    const filterSub = document.getElementById('filter-pp-subject');
    if (filterSub && filterSub.options.length <= 1) {
      filterSub.innerHTML =
        `<option value="ALL">All Cambridge Subjects</option>` +
        this.subjects.map((s) => `<option value="${s.id}">${s.name} (${s.code})</option>`).join('');
    }

    const subFilter = filterSub?.value || 'ALL';
    const yearFilter = document.getElementById('filter-pp-year')?.value || 'ALL';

    let filtered = this.pastPapers;
    if (subFilter !== 'ALL') filtered = filtered.filter((p) => p.subjectId === subFilter);
    if (yearFilter !== 'ALL') filtered = filtered.filter((p) => String(p.year) === yearFilter);

    // Summary stats
    const total = filtered.length;
    const avg = total > 0 ? Math.round(filtered.reduce((a, b) => a + b.percentage, 0) / total) : 0;
    const highest = total > 0 ? Math.max(...filtered.map((p) => p.percentage)) : 0;
    const allFlagged = new Set();
    filtered.forEach((p) => (p.flaggedTopicIds || []).forEach((id) => allFlagged.add(id)));

    document.getElementById('pp-stat-total').textContent = total;
    document.getElementById('pp-stat-avg').textContent = `${avg}%`;
    document.getElementById('pp-stat-highest').textContent = `${highest}%`;
    document.getElementById('pp-stat-mistakes-count').textContent = allFlagged.size;

    const tbody = document.getElementById('pp-table-body');
    if (!tbody) return;

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 24px; color: var(--text-muted);">No past papers recorded yet. Click "+ Log Past Paper Attempt" to start!</td></tr>`;
      return;
    }

    const topicMap = new Map(this.topics.map((t) => [t.id, t]));
    const paperMap = new Map(this.papers.map((p) => [p.id, p]));
    const subMap = new Map(this.subjects.map((s) => [s.id, s]));

    tbody.innerHTML = filtered
      .map((pp) => {
        const sub = subMap.get(pp.subjectId);
        const paper = paperMap.get(pp.paperId);
        const gradeClass = 'grade-' + (pp.gradeEstimate || 'A').replace('*', '-star');

        // Tagged topics badges
        const taggedBadges = (pp.flaggedTopicIds || [])
          .map((id) => {
            const t = topicMap.get(id);
            return t ? `<span class="reason-tag error-highlight" style="display:inline-block; margin: 2px;">⚠ ${t.name}</span>` : '';
          })
          .join('');

        return `
          <tr>
            <td style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono); white-space: nowrap;">
              ${pp.dateCompleted || 'N/A'}
            </td>
            <td>
              <div style="font-weight: 700; color: ${sub?.color || '#fff'};">${sub?.name || ''}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${paper?.code || 'Paper'} - ${paper?.name || ''}</div>
            </td>
            <td>
              <span style="font-weight: 700; font-family: var(--font-mono);">${pp.year}</span>
              <span style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">(${pp.series} v${pp.variant})</span>
            </td>
            <td style="font-family: var(--font-mono); font-weight: 600;">
              ${pp.rawMarks} / ${pp.maxMarks}
            </td>
            <td style="font-family: var(--font-mono); font-weight: 800; font-size: 1rem; color: ${pp.percentage >= 80 ? 'var(--accent-emerald)' : pp.percentage >= 60 ? 'var(--accent-sky)' : 'var(--accent-rose)'};">
              ${pp.percentage}%
            </td>
            <td>
              <span class="grade-badge ${gradeClass}">${pp.gradeEstimate || 'Pass'}</span>
            </td>
            <td style="max-width: 300px;">
              <div style="font-size: 0.85rem; color: var(--text-primary); margin-bottom: 4px;">${pp.mistakeNotes || 'No notes added'}</div>
              <div>${taggedBadges}</div>
            </td>
            <td style="text-align: right; white-space: nowrap;">
              <button class="btn-icon btn-delete-pp" data-id="${pp.id}" title="Delete entry" style="width: 28px; height: 28px; font-size: 0.85rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </td>
          </tr>
        `;
      })
      .join('');
  }

  // --- 4. WHAT TO STUDY NEXT VIEW ---
  renderStudyNext() {
    const filterSub = document.getElementById('recs-filter-subject');
    if (filterSub && filterSub.options.length <= 1) {
      filterSub.innerHTML =
        `<option value="ALL">All Subjects</option>` +
        this.subjects.map((s) => `<option value="${s.id}">${s.name} (${s.code})</option>`).join('');
    }

    const selectedSub = filterSub?.value === 'ALL' ? null : filterSub?.value;

    const recs = calculateTopicRecommendations({
      topics: this.topics,
      papers: this.papers,
      pastPapers: this.pastPapers,
      studySessions: this.studySessions,
      subjectId: selectedSub
    });

    const container = document.getElementById('full-recs-container');
    if (!container) return;

    if (recs.length === 0) {
      container.innerHTML = `<div style="color: var(--text-muted); padding: 20px;">No topics found.</div>`;
      return;
    }

    const subMap = new Map(this.subjects.map((s) => [s.id, s]));

    container.innerHTML = recs
      .map((item) => {
        const sub = subMap.get(item.topic.subjectId);
        const statusClass = 'status-' + item.topic.status.toLowerCase().replace(/\s+/g, '-');

        return `
          <div class="rec-card">
            <div class="rec-rank">#${item.rank}</div>
            <div class="rec-info">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
                <span style="font-size: 0.8rem; font-weight: 700; color: ${sub?.color || '#fff'};">
                  ${sub?.name || ''} • ${item.paper.code}
                </span>
                <span class="status-badge ${item.urgencyBadgeClass}">${item.urgency} (Score: ${item.score})</span>
                <button class="status-badge ${statusClass} btn-toggle-status" data-topic-id="${item.topic.id}" title="Click to update status">
                  ${item.topic.status}
                </button>
              </div>

              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">
                ${item.topic.name}
              </div>

              <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 6px;">
                ${item.topic.notes ? item.topic.notes : ''}
              </div>

              <div class="rec-badges">
                ${item.reasons.map((r) => `<span class="reason-tag ${r.type}">${r.text}</span>`).join('')}
              </div>
            </div>

            <div style="margin-left: 16px;">
              <button class="btn btn-primary btn-quick-study" data-sub="${item.topic.subjectId}" data-paper="${item.topic.paperId}" data-topic="${item.topic.id}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Study Now
              </button>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // --- 5. TIMER VIEW ---
  renderTimer() {
    const selSub = document.getElementById('timer-select-subject');
    const selTopic = document.getElementById('timer-select-topic');

    if (selSub && selSub.options.length === 0) {
      selSub.innerHTML = this.subjects.map((s) => `<option value="${s.id}">${s.name} (${s.code})</option>`).join('');
      selSub.value = this.activeSubjectId;
    }

    const currentSubId = selSub ? selSub.value : this.activeSubjectId;
    if (selTopic) {
      const subTopics = this.topics.filter((t) => t.subjectId === currentSubId);
      selTopic.innerHTML =
        `<option value="">-- General / Past Paper Session --</option>` +
        subTopics.map((t) => `<option value="${t.id}">${t.name} (${t.status})</option>`).join('');
    }

    this.updateTimerContextDisplay();
  }

  updateTimerContextDisplay() {
    const selSub = document.getElementById('timer-select-subject');
    const selTopic = document.getElementById('timer-select-topic');
    const displayContext = document.getElementById('timer-display-context');

    if (selSub && selTopic && displayContext) {
      const sub = this.subjects.find((s) => s.id === selSub.value);
      const topic = this.topics.find((t) => t.id === selTopic.value);
      this.timer.setContext(selSub.value, topic ? topic.paperId : null, topic ? topic.id : null);

      if (topic) {
        displayContext.textContent = `${sub?.name || ''} • ${topic.name}`;
      } else if (sub) {
        displayContext.textContent = `${sub.name} Focus Session`;
      } else {
        displayContext.textContent = 'General Revision';
      }
    }
  }

  // --- 6. ANALYTICS VIEW ---
  renderAnalytics() {
    const totalMins = this.studySessions.reduce((a, b) => a + (b.durationMinutes || 0), 0);
    document.getElementById('analytics-total-hours').textContent = `${(totalMins / 60).toFixed(1)}h`;

    const getSubHours = (subId) => {
      const m = this.studySessions.filter((s) => s.subjectId === subId).reduce((a, b) => a + (b.durationMinutes || 0), 0);
      return (m / 60).toFixed(1);
    };

    document.getElementById('analytics-hours-9231').textContent = `${getSubHours('sub_9231')}h`;
    document.getElementById('analytics-hours-9709').textContent = `${getSubHours('sub_9709')}h`;
    document.getElementById('analytics-hours-9626').textContent = `${getSubHours('sub_9626')}h`;

    const tbody = document.getElementById('analytics-sessions-tbody');
    if (!tbody) return;

    if (this.studySessions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 20px; color: var(--text-muted);">No study sessions recorded yet. Start a session in the Study Timer to track hours!</td></tr>`;
      return;
    }

    const subMap = new Map(this.subjects.map((s) => [s.id, s]));
    const topicMap = new Map(this.topics.map((t) => [t.id, t]));

    tbody.innerHTML = this.studySessions
      .map((s) => {
        const sub = subMap.get(s.subjectId);
        const topic = topicMap.get(s.topicId);
        return `
          <tr>
            <td style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); white-space: nowrap;">
              ${new Date(s.timestamp).toLocaleString()}
            </td>
            <td>
              <span style="font-weight: 700; color: ${sub?.color || '#fff'};">${sub?.name || 'A-Level'}</span>
            </td>
            <td style="font-weight: 600;">
              ${topic ? topic.name : 'General Practice'}
            </td>
            <td>
              <span class="reason-tag accent">${s.type}</span>
            </td>
            <td style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-emerald);">
              ${s.durationMinutes} mins
            </td>
            <td style="font-size: 0.85rem; color: var(--text-secondary); max-width: 250px;">
              ${s.notes || '-'}
            </td>
            <td style="text-align: right;">
              <button class="btn-icon btn-delete-session" data-id="${s.id}" title="Delete session" style="width: 26px; height: 26px;">
                &times;
              </button>
            </td>
          </tr>
        `;
      })
      .join('');
  }

  // --- 7. SETTINGS VIEW ---
  renderSettings() {
    const inputDate = document.getElementById('settings-target-date');
    const inputWork = document.getElementById('settings-work-mins');
    const inputShort = document.getElementById('settings-short-mins');
    const inputLong = document.getElementById('settings-long-mins');

    if (inputDate && this.settings.targetExamDate) {
      inputDate.value = this.settings.targetExamDate.substring(0, 16);
    }
    if (inputWork) inputWork.value = this.settings.pomodoroWorkMinutes || 25;
    if (inputShort) inputShort.value = this.settings.pomodoroShortBreakMinutes || 5;
    if (inputLong) inputLong.value = this.settings.pomodoroLongBreakMinutes || 15;
  }

  // --- ACTIONS & MODALS ---
  async cycleTopicStatus(topicId) {
    const topic = await storage.getTopic(topicId);
    if (!topic) return;

    const cycle = ['Not Started', 'Revising', 'Confident', 'Mastered'];
    const nextIndex = (cycle.indexOf(topic.status) + 1) % cycle.length;
    topic.status = cycle[nextIndex];
    topic.lastRevisedAt = new Date().toISOString();

    await storage.updateTopic(topic);
    await this.refreshData();
    this.render();
  }

  async reorderTopic(topicId, paperId, direction) {
    const paperTopics = this.topics.filter((t) => t.paperId === paperId).sort((a, b) => a.order - b.order);
    const index = paperTopics.findIndex((t) => t.id === topicId);
    if (index === -1) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= paperTopics.length) return;

    // Swap positions
    const temp = paperTopics[index];
    paperTopics[index] = paperTopics[targetIndex];
    paperTopics[targetIndex] = temp;

    const orderedIds = paperTopics.map((t) => t.id);
    await storage.reorderTopics(paperId, orderedIds);
    await this.refreshData();
    this.render();
  }

  openAddPastPaperModal(preselectedTopicId = null) {
    const modal = document.getElementById('modal-past-paper');
    const selSub = document.getElementById('pp-form-subject');
    const selPaper = document.getElementById('pp-form-paper');
    const dateInput = document.getElementById('pp-form-date');
    const rawInput = document.getElementById('pp-form-raw');
    const maxInput = document.getElementById('pp-form-max');
    const percentPreview = document.getElementById('pp-form-percent-preview');

    document.getElementById('form-past-paper').reset();
    document.getElementById('pp-form-id').value = '';
    dateInput.value = new Date().toISOString().split('T')[0];

    // Populate subjects
    selSub.innerHTML = this.subjects.map((s) => `<option value="${s.id}">${s.name} (${s.code})</option>`).join('');
    selSub.value = this.activeSubjectId;

    // Populate papers for active subject
    const updatePapers = () => {
      const subjectPapers = this.papers.filter((p) => p.subjectId === selSub.value);
      selPaper.innerHTML = subjectPapers
        .map((p) => `<option value="${p.id}" data-max="${p.maxMarks}">${p.code} - ${p.name}</option>`)
        .join('');
      updateMaxMarks();
      updateTopicCheckboxes();
    };

    const updateMaxMarks = () => {
      const opt = selPaper.selectedOptions[0];
      if (opt && opt.dataset.max) {
        maxInput.value = opt.dataset.max;
      }
      calcScore();
    };

    const updateTopicCheckboxes = () => {
      const boxContainer = document.getElementById('pp-form-topics-checkboxes');
      const paperTopics = this.topics.filter((t) => t.paperId === selPaper.value);
      if (paperTopics.length === 0) {
        boxContainer.innerHTML = `<span style="color:var(--text-muted); font-size:0.8rem;">No topics in this paper.</span>`;
        return;
      }
      boxContainer.innerHTML = paperTopics
        .map(
          (t) => `
            <label style="display:flex; align-items:center; gap:8px; font-size:0.82rem; margin-bottom:4px; cursor:pointer;">
              <input type="checkbox" name="pp-flagged-topics" value="${t.id}" ${t.id === preselectedTopicId ? 'checked' : ''}>
              <span>${t.name}</span>
            </label>
          `
        )
        .join('');
    };

    const calcScore = () => {
      const r = parseFloat(rawInput.value) || 0;
      const m = parseFloat(maxInput.value) || 1;
      const pct = Math.round((r / m) * 100);
      percentPreview.value = `${pct}%`;
    };

    selSub.onchange = updatePapers;
    selPaper.onchange = () => {
      updateMaxMarks();
      updateTopicCheckboxes();
    };
    rawInput.oninput = calcScore;
    maxInput.oninput = calcScore;

    updatePapers();
    modal.classList.add('active');
  }

  openAddTopicModal() {
    const modal = document.getElementById('modal-topic');
    const selPaper = document.getElementById('topic-form-paper');
    document.getElementById('form-topic').reset();
    document.getElementById('topic-form-id').value = '';

    const subjectPapers = this.papers.filter((p) => p.subjectId === this.activeSubjectId);
    selPaper.innerHTML = subjectPapers.map((p) => `<option value="${p.id}">${p.code} - ${p.name}</option>`).join('');

    modal.classList.add('active');
  }

  // --- EVENT LISTENERS ---
  attachEventListeners() {
    // Navigation clicks
    document.querySelectorAll('.nav-item').forEach((item) => {
      item.addEventListener('click', () => {
        const view = item.getAttribute('data-view');
        this.switchView(view);
      });
    });

    // Theme toggle
    document.getElementById('theme-toggle-btn').addEventListener('click', () => this.toggleTheme());

    // Header Mini timer click
    document.getElementById('header-mini-timer').addEventListener('click', () => this.switchView('timer'));

    // Quick log past paper button in topbar
    document.getElementById('btn-quick-log-paper').addEventListener('click', () => this.openAddPastPaperModal());

    // Dashboard "View all recs" button
    document.getElementById('btn-view-all-recs')?.addEventListener('click', () => this.switchView('study-next'));

    // Syllabus subject tab clicks (delegation)
    document.getElementById('syllabus-subject-tabs')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.subject-tab-btn');
      if (btn) {
        this.activeSubjectId = btn.getAttribute('data-subject-id');
        this.renderSyllabus();
      }
    });

    // Syllabus search and filter
    document.getElementById('syllabus-search-input')?.addEventListener('input', () => this.renderSyllabus());
    document.getElementById('syllabus-filter-status')?.addEventListener('change', () => this.renderSyllabus());

    // Syllabus add custom topic button
    document.getElementById('btn-add-custom-topic')?.addEventListener('click', () => this.openAddTopicModal());

    // Syllabus topic reordering & status toggling (delegation)
    document.getElementById('syllabus-papers-container')?.addEventListener('click', async (e) => {
      const upBtn = e.target.closest('.btn-reorder-up');
      if (upBtn) {
        await this.reorderTopic(upBtn.dataset.topicId, upBtn.dataset.paperId, 'up');
        return;
      }
      const downBtn = e.target.closest('.btn-reorder-down');
      if (downBtn) {
        await this.reorderTopic(downBtn.dataset.topicId, downBtn.dataset.paperId, 'down');
        return;
      }
      const statusBtn = e.target.closest('.btn-toggle-status');
      if (statusBtn) {
        await this.cycleTopicStatus(statusBtn.dataset.topicId);
        return;
      }
      const delBtn = e.target.closest('.btn-delete-topic');
      if (delBtn) {
        if (confirm('Delete this topic from the syllabus?')) {
          await storage.deleteTopic(delBtn.dataset.topicId);
          await this.refreshData();
          this.render();
        }
        return;
      }
    });

    // Delegated "Study Now" buttons across Dashboard, Syllabus, and Recommendations
    document.addEventListener('click', (e) => {
      const studyBtn = e.target.closest('.btn-quick-study');
      if (studyBtn) {
        const subId = studyBtn.dataset.sub;
        const topicId = studyBtn.dataset.topic;

        this.switchView('timer');
        const selSub = document.getElementById('timer-select-subject');
        if (selSub && subId) {
          selSub.value = subId;
        }
        this.renderTimer();
        const selTopic = document.getElementById('timer-select-topic');
        if (selTopic && topicId) {
          selTopic.value = topicId;
        }
        this.updateTimerContextDisplay();
      }
    });

    // Past Paper filters
    document.getElementById('filter-pp-subject')?.addEventListener('change', () => this.renderPastPapers());
    document.getElementById('filter-pp-year')?.addEventListener('change', () => this.renderPastPapers());
    document.getElementById('btn-open-add-pp-modal')?.addEventListener('click', () => this.openAddPastPaperModal());

    // Past paper delete button (delegation)
    document.getElementById('pp-table-body')?.addEventListener('click', async (e) => {
      const delBtn = e.target.closest('.btn-delete-pp');
      if (delBtn) {
        if (confirm('Delete this past paper log?')) {
          await storage.deletePastPaper(delBtn.dataset.id);
          await this.refreshData();
          this.render();
        }
      }
    });

    // Recommendations filter & status toggle
    document.getElementById('recs-filter-subject')?.addEventListener('change', () => this.renderStudyNext());
    document.getElementById('full-recs-container')?.addEventListener('click', async (e) => {
      const statusBtn = e.target.closest('.btn-toggle-status');
      if (statusBtn) {
        await this.cycleTopicStatus(statusBtn.dataset.topicId);
      }
    });

    // Timer Controls
    document.getElementById('btn-timer-toggle')?.addEventListener('click', () => {
      if (this.timer.isRunning) this.timer.pause();
      else this.timer.start();
    });

    document.getElementById('btn-timer-reset')?.addEventListener('click', () => this.timer.reset());

    document.getElementById('btn-timer-skip')?.addEventListener('click', async () => {
      if (this.timer.mode === 'stopwatch') {
        const mins = await this.timer.stopAndSaveStopwatch();
        if (mins > 0) alert(`Saved deep work session: ${mins} minutes logged.`);
      } else {
        await this.timer.handleTimerEnd();
      }
      await this.refreshData();
      this.render();
    });

    // Timer mode buttons
    const modeBtns = {
      'timer-mode-work': 'work',
      'timer-mode-shortbreak': 'shortBreak',
      'timer-mode-longbreak': 'longBreak',
      'timer-mode-stopwatch': 'stopwatch'
    };
    Object.entries(modeBtns).forEach(([btnId, mode]) => {
      document.getElementById(btnId)?.addEventListener('click', () => {
        Object.keys(modeBtns).forEach((id) => document.getElementById(id)?.classList.remove('active'));
        document.getElementById(btnId)?.classList.add('active');
        this.timer.setMode(mode);
      });
    });

    // Timer subject / topic dropdown changes
    document.getElementById('timer-select-subject')?.addEventListener('change', () => {
      this.renderTimer();
    });
    document.getElementById('timer-select-topic')?.addEventListener('change', () => {
      this.updateTimerContextDisplay();
    });

    // Analytics delete session (delegation)
    document.getElementById('analytics-sessions-tbody')?.addEventListener('click', async (e) => {
      const delBtn = e.target.closest('.btn-delete-session');
      if (delBtn) {
        if (confirm('Delete this study session?')) {
          await storage.deleteStudySession(delBtn.dataset.id);
          await this.refreshData();
          this.render();
        }
      }
    });

    // Settings save
    document.getElementById('btn-save-settings')?.addEventListener('click', async () => {
      const targetDate = document.getElementById('settings-target-date').value;
      const workMins = parseInt(document.getElementById('settings-work-mins').value) || 25;
      const shortMins = parseInt(document.getElementById('settings-short-mins').value) || 5;
      const longMins = parseInt(document.getElementById('settings-long-mins').value) || 15;

      if (targetDate) await storage.saveSetting('targetExamDate', targetDate + ':00');
      await storage.saveSetting('pomodoroWorkMinutes', workMins);
      await storage.saveSetting('pomodoroShortBreakMinutes', shortMins);
      await storage.saveSetting('pomodoroLongBreakMinutes', longMins);

      await this.refreshData();
      this.timer.init(this.settings);
      alert('Preferences saved successfully!');
    });

    // Export Backup JSON
    document.getElementById('btn-export-backup')?.addEventListener('click', async () => {
      const backup = await storage.exportAllData();
      const jsonStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backup, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', jsonStr);
      downloadAnchor.setAttribute('download', `a_level_revision_backup_${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });

    // Import Backup JSON
    document.getElementById('input-import-backup')?.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (confirm('Restoring this backup will replace current progress. Continue?')) {
            await storage.importAllData(parsed);
            await this.refreshData();
            this.render();
            alert('Backup restored successfully!');
          }
        } catch (err) {
          alert('Failed to import backup: ' + err.message);
        }
      };
      reader.readAsText(file);
    });

    // Load Sample Data
    document.getElementById('btn-load-sample-data')?.addEventListener('click', async () => {
      if (confirm('Load realistic Cambridge sample past papers and study sessions to preview the recommendations?')) {
        await storage.loadSampleData();
        await this.refreshData();
        this.render();
        alert('Sample past paper logs and revision records loaded!');
      }
    });

    // Reset Defaults
    document.getElementById('btn-reset-defaults')?.addEventListener('click', async () => {
      if (confirm('Warning: This will reset all subjects and topics to the default Cambridge syllabi. Proceed?')) {
        await storage.resetToDefaults();
        await this.refreshData();
        this.render();
        alert('Reset to Cambridge default syllabi complete.');
      }
    });

    // Past Paper Form Submit
    document.getElementById('form-past-paper')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const subjectId = document.getElementById('pp-form-subject').value;
      const paperId = document.getElementById('pp-form-paper').value;
      const year = parseInt(document.getElementById('pp-form-year').value);
      const series = document.getElementById('pp-form-series').value;
      const variant = parseInt(document.getElementById('pp-form-variant').value);
      const rawMarks = parseFloat(document.getElementById('pp-form-raw').value);
      const maxMarks = parseFloat(document.getElementById('pp-form-max').value);
      const dateCompleted = document.getElementById('pp-form-date').value;
      const timeSpentMinutes = parseInt(document.getElementById('pp-form-time').value) || null;
      const mistakeNotes = document.getElementById('pp-form-mistakes').value;

      // Collect flagged topic checkboxes
      const flaggedTopicIds = [];
      document.querySelectorAll('input[name="pp-flagged-topics"]:checked').forEach((cb) => {
        flaggedTopicIds.push(cb.value);
      });

      const percentage = Math.round((rawMarks / maxMarks) * 100);
      let gradeEstimate = 'U';
      if (percentage >= 85) gradeEstimate = 'A*';
      else if (percentage >= 72) gradeEstimate = 'A';
      else if (percentage >= 60) gradeEstimate = 'B';
      else if (percentage >= 50) gradeEstimate = 'C';
      else if (percentage >= 40) gradeEstimate = 'D';
      else if (percentage >= 30) gradeEstimate = 'E';

      await storage.addPastPaper({
        subjectId,
        paperId,
        year,
        series,
        variant,
        rawMarks,
        maxMarks,
        percentage,
        gradeEstimate,
        dateCompleted,
        timeSpentMinutes,
        mistakeNotes,
        flaggedTopicIds
      });

      document.getElementById('modal-past-paper').classList.remove('active');
      await this.refreshData();
      this.render();
    });

    // Topic Form Submit
    document.getElementById('form-topic')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const paperId = document.getElementById('topic-form-paper').value;
      const paper = this.papers.find((p) => p.id === paperId);
      const name = document.getElementById('topic-form-name').value;
      const status = document.getElementById('topic-form-status').value;
      const examWeight = document.getElementById('topic-form-weight').value;
      const notes = document.getElementById('topic-form-notes').value;

      await storage.addTopic({
        subjectId: paper ? paper.subjectId : this.activeSubjectId,
        paperId,
        name,
        status,
        examWeight,
        notes
      });

      document.getElementById('modal-topic').classList.remove('active');
      await this.refreshData();
      this.render();
    });

    // Close Modals
    document.querySelectorAll('.modal-close').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach((m) => m.classList.remove('active'));
      });
    });

    // Close modal on click outside
    document.querySelectorAll('.modal-overlay').forEach((modal) => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    });
  }
}

// Instantiate safely across all document readyStates
function startApp() {
  if (!(window.app instanceof AppController)) {
    window.app = new AppController();
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

})();
