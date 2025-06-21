// src/constants/workflowData.js
import {
  /* ─── SOLID (filled) ─── */
  FaBuilding,
  FaFileLines,
  FaFileWord,
  FaCalendar,
  FaUser,
  FaCircleUser,
  FaHandshake,
  FaKey,
  FaBookOpen,
  FaDiagramProject,
  FaServer,
  FaLayerGroup,
  FaDatabase,
  FaCirclePlus,
  FaPenToSquare,
  FaFlag,
  FaEnvelope,
  FaShareFromSquare,

  /* ─── REGULAR (outline) ─── */
  FaRegBuilding,
  FaRegFileLines,
  FaRegFileWord,
  FaRegCalendar,
  FaRegUser,
  FaRegHandshake,
  FaRegCircleUser,
  FaRegFlag,
  FaRegEnvelope,
  FaRegShareFromSquare,
} from "react-icons/fa6";

/* helper: use outline if available, else solid */
const reg = (solid, outline) => outline ?? solid;

/* ========== STEP 1a · base entities ========== */
export const baseOptions = [
  { id: "company",     name: "Company",     icon: reg(FaBuilding, FaRegBuilding),          iconActive: FaBuilding },
  { id: "record",      name: "Record",      icon: reg(FaFileLines, FaRegFileLines), iconActive: FaFileLines },
  { id: "website",     name: "Website",     icon: reg(FaFileWord, FaRegFileWord),             iconActive: FaFileWord },
  { id: "expiration",  name: "Expiration",  icon: reg(FaCalendar, FaRegCalendar), iconActive: FaCalendar },
  { id: "user",        name: "User",        icon: reg(FaUser, FaRegUser),   iconActive: FaUser },
  { id: "group",       name: "Group",       icon: reg(FaCircleUser, FaRegCircleUser),             iconActive: FaCircleUser },   // regular ones are not available in free version
  { id: "integration", name: "Integration", icon: reg(FaHandshake, FaRegHandshake),              iconActive: FaHandshake },
];

/* ========== STEP 1b · record-type checklist ========== */
export const recordTypes = [
  { id: "password",   name: "Password",           icon: reg(FaKey),                      iconActive: FaKey },
  { id: "company-kb", name: "Company KB article", icon: reg(FaBookOpen),                 iconActive: FaBookOpen },
  { id: "central-kb", name: "Central KB article", icon: reg(FaFileLines, FaRegFileLines),iconActive: FaFileLines },
  { id: "process",    name: "Process",            icon: reg(FaDiagramProject),           iconActive: FaDiagramProject },
  { id: "website",    name: "Website",            icon: reg(FaFileWord, FaRegFileWord),                    iconActive: FaFileWord },
  { id: "rack",       name: "Rack",               icon: reg(FaServer),                   iconActive: FaServer },
  { id: "network",    name: "Network",            icon: reg(FaLayerGroup),               iconActive: FaLayerGroup },
  { id: "asset",      name: "Asset",              icon: reg(FaDatabase),                 iconActive: FaDatabase },
];

/* ========== STEP 2 · triggers ========== */
export const triggers = [
  { id: "record-created", name: "Record created", description: "When a new record is created",
    icon: reg(FaCirclePlus),  iconActive: FaCirclePlus },   // outline not free
  { id: "record-updated", name: "Record updated", description: "When a record is modified",
    icon: reg(FaPenToSquare), iconActive: FaPenToSquare },  // outline not free
];

/* ========== STEP 3 · actions ========== */
export const actions = [
  { id: "add-flag",     name: "Add flag",    description: "",
    icon: reg(FaFlag, FaRegFlag),               iconActive: FaFlag },
  { id: "send-email",   name: "Send email",  description: "",
    icon: reg(FaEnvelope, FaRegEnvelope),       iconActive: FaEnvelope },
  { id: "send-webhook", name: "Send webhook", description: "",
    icon: reg(FaShareFromSquare, FaRegShareFromSquare), iconActive: FaShareFromSquare },
];

/* ========== Wizard steps ========== */
export const steps = [
  { id: 1, name: "Criteria" },
  { id: 2, name: "Trigger"  },
  { id: 3, name: "Action"   },
  { id: 4, name: "Review"   },
];
