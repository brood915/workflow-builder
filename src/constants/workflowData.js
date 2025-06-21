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
  FaKeyboard,
  FaNewspaper,
  FaCircleCheck,
  FaHardDrive,
  FaWindowMaximize,
  FaCircle,
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
  FaRegKeyboard,
  FaRegCircleUser,
  FaRegFlag,
  FaRegCircleCheck,
  FaRegEnvelope,
  FaRegShareFromSquare,
  FaRegNewspaper,
  FaRegCircle,
  FaRegHardDrive,
  FaRegWindowMaximize,
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
  { id: "group",       name: "Group",       icon: reg(FaCircleUser, FaRegCircleUser),             iconActive: FaCircleUser },
  { id: "integration", name: "Integration", icon: reg(FaHandshake, FaRegHandshake),              iconActive: FaHandshake },
];

/* ========== STEP 1b · record-type checklist ========== */
export const recordTypes = [
  { id: "password",   name: "Password",           icon: reg(FaKeyboard, FaRegKeyboard),                      iconActive: FaKeyboard },
  { id: "company-kb", name: "Company KB article", icon: reg(FaNewspaper, FaRegNewspaper),                 iconActive: FaNewspaper },
  { id: "central-kb", name: "Central KB article", icon: reg(FaFileLines, FaRegFileLines),iconActive: FaFileLines },
  { id: "process",    name: "Process",            icon: reg(FaCircleCheck, FaRegCircleCheck),           iconActive: FaCircleCheck },
  { id: "website",    name: "Website",            icon: reg(FaFileWord, FaRegFileWord),                    iconActive: FaFileWord },
  { id: "rack",       name: "Rack",               icon: reg(FaHardDrive, FaRegHardDrive),                   iconActive: FaHardDrive, FaRegHardDrive },
  { id: "network",    name: "Network",            icon: reg(FaWindowMaximize, FaRegWindowMaximize),               iconActive: FaWindowMaximize },
  { id: "asset",      name: "Asset",              icon: reg(FaCircle, FaRegCircle),                 iconActive: FaCircle },
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
