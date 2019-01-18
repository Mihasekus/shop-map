export const OrderLCCAMaintenances = [
  {value: 'periodical maintenance', id: 'periodical maintenance'},
  {value: 'repair', id: 'repair'},
  {value: 'partial replacement', id: 'partial replacement'},
  {value: 'full replacement', id: 'full replacement'},
  {value: 'new addition', id: 'new addition'},
  {value: 'n.a.', id: 'n.a.'}
];

export const OrderLCCAApparentConditions = [
  {value: 'according to age', id: 'according to age'},
  {value: 'needs attention', id: 'needs attention'},
  {value: 'non-functional', id: 'non-functional'},
  {value: 'not inspected', id: 'not inspected'}
];

export const OrderLCCAItemCategories = [
  {value: '(Administrative Fund)', id: '(Administrative Fund)'},
  {value: 'Wiring', id: 'Wiring'},
  {value: 'Lighting', id: 'Lighting'},
  {value: 'Electrical Systems', id: 'Electrical Systems'},
  {value: 'Plumbing', id: 'Plumbing'},
  {value: 'Drainage', id: 'Drainage'},
  {value: 'Storm-Water Systems', id: 'Storm-Water Systems'},
  {value: 'Heating System', id: 'Heating System'},
  {value: 'Cooling System', id: 'Cooling System'},
  {value: 'Lifts', id: 'Lifts'},
  {value: 'Carpeting & Furnishings', id: 'Carpeting & Furnishings'},
  {value: 'Roofing', id: 'Roofing'},
  {value: 'Interior Painting', id: 'Interior Painting'},
  {value: 'Exterior Painting', id: 'Exterior Painting'},
  {value: 'Waterproofing', id: 'Waterproofing'},
  {value: 'Communication', id: 'Communication'},
  {value: 'Service Supply Systems', id: 'Service Supply Systems'},
  {value: 'Parking Facilities', id: 'Parking Facilities'},
  {value: 'Roadways', id: 'Roadways'},
  {value: 'Paved Areas', id: 'Paved Areas'},
  {
    value: 'Security Systems & Facilities',
    id: 'Security Systems & Facilities'
  },
  {value: 'Community Facilities', id: 'Community Facilities'},
  {value: 'Recreational Facilities', id: 'Recreational Facilities'}
];

export const queryReportSegmentItems = [
  {value: 'Description of Property', id: 'Description of Property'},
  {value: 'Description of Buildings', id: 'Description of Buildings'},
  {value: 'Risk & Maintenance Observations', id: 'Risk & Maintenance Observations'},
  {value: 'Replacement Cost Calculation', id: 'Replacement Cost Calculation'},
  {value: 'Schedule of Replacement Values', id: 'Schedule of Replacement Values'},
  {value: 'Unit Upgrades', id: 'Unit Upgrades'},
  {value: 'Photographs', id: 'Photographs'},
  {value: 'Photographs (Retaining Walls)', id: 'Photographs (Retaining Walls)'},
  {value: 'Photographs (Maintenance Observations)', id: 'Photographs (Maintenance Observations)'},
  {value: 'Supporting Documents', id: 'Supporting Documents'},
];


export const OrdersTableDropDownDataStatuses = [
  { value: 'all', id: 'all' },
  { value: 'new', id: 'new' },
  { value: 'payment pending', id: 'payment pending' },
  { value: 'payment overdue', id: 'payment overdue' },
  { value: 'payment received', id: 'payment received' },
  { value: 'financial  data pending', id: 'financial data pending' },
  { value: 'appointment pending', id: 'appointment pending' },
  { value: 'appointment confirmed', id: 'appointment confirmed' },
  { value: 'survey today', id: 'survey today' },
  { value: 'capturing report', id: 'capturing report' },
  { value: 'completed', id: 'completed' },
  { value: 'cancelled', id: 'cancelled' },
  { value: 'on hold', id: 'on hold' },
];

export const QuotationsTableStatusDropDown = [
  { value: 'all', id: null },
  { value: 'new', id: 'new' },
  { value: 'pending', id: 'pending' },
  { value: 'accepted', id: 'accepted' },
  { value: 'cancelled', id: 'cancelled' },
];

export const CustomersGeneralCategoryData = [
  { id: '1', value: 'Insurer' },
  { id: '2', value: 'Managing Agent' },
  { id: '3', value: 'Insurance Broker' },
  { id: '4', value: 'Underwriter' },
  { id: '5', value: 'Attorney' },
  { id: '6', value: 'Auditor' },
  { id: '7', value: 'Accountant' },
  { id: '8', value: 'Other' }
];

export const CustomersPermissionsData = [
  'of this user only', 'of all users'
];


export const EstimatedPrice = [
  { value: "Less than R1 million", id: "EstimatedPriceR0" },
  { value:  "R1 - 2 million", id: "EstimatedPriceR1" },
  { value: "R3 - 4 million", id: "EstimatedPriceR2" },
  { value: "R4 - 5 million", id: "EstimatedPriceR3" },
  { value: "R5 - 10 million", id: "EstimatedPriceR4" },
  { value: "EstimatedPriceR5", id: "EstimatedPriceR5" },
  { value: "R10 - 20 million", id: "EstimatedPriceR10" },
  { value:  "R20 - 30 million", id: "EstimatedPriceR20" },
  { value: "More than R30 million", id: "EstimatedPriceR30" },
];
